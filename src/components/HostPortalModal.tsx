import { useState, useEffect } from "react";
import { X, RefreshCw, ShieldCheck, FileImage, Check, AlertTriangle, Settings } from "lucide-react";
import { googleSignIn, logout, initAuth } from "../lib/firebase";
import { User } from "firebase/auth";

interface HostPortalModalProps {
  onClose: () => void;
  onLogoUpdated: () => void;
}

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
}

export default function HostPortalModal({ onClose, onLogoUpdated }: HostPortalModalProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [folderId, setFolderId] = useState("1IEzhOzmACmw51jJa0Nde2lpXltsj0XMm");
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);
  const [syncingFileId, setSyncingFileId] = useState<string | null>(null);

  // Initialize auth state
  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, currentToken) => {
        setUser(currentUser);
        setToken(currentToken);
        setStatusMsg({ type: "success", text: `Authenticated successfully as ${currentUser.email}` });
      },
      () => {
        setUser(null);
        setToken(null);
      }
    );
    return () => unsubscribe();
  }, []);

  // Fetch file list in the Drive folder
  const handleFetchFiles = async (overrideToken?: string) => {
    const activeToken = overrideToken || token;
    if (!activeToken) {
      setStatusMsg({ type: "error", text: "Please sign in with Google first." });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: "info", text: "Connecting to Google Drive Folder..." });
    
    try {
      // Query parameters for files endpoint
      const q = `'${folderId}' in parents and trashed = false`;
      const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name,mimeType,size)&orderBy=name_natural`;
      
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${activeToken}`,
        },
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      const driveFiles: DriveFile[] = data.files || [];
      
      setFiles(driveFiles);
      if (driveFiles.length === 0) {
        setStatusMsg({ type: "info", text: "Folder is connected, but no files were found inside." });
      } else {
        setStatusMsg({ 
          type: "success", 
          text: `Found ${driveFiles.length} file(s) inside folder. Select the logo file to sync!` 
        });
      }
    } catch (err: any) {
      console.error("Failed to load Google Drive folder:", err);
      setStatusMsg({ 
        type: "error", 
        text: `Failed to load Drive folder files: ${err.message}. Please double check your Google permission or folder ID.` 
      });
    } finally {
      setLoading(false);
    }
  };

  // Trigger file list fetch automatically when user state changes
  useEffect(() => {
    if (user && token) {
      handleFetchFiles();
    }
  }, [user, token, folderId]);

  const handleSignIn = async () => {
    setLoading(true);
    setStatusMsg({ type: "info", text: "Connecting to Google Account..." });
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setToken(res.accessToken);
        setStatusMsg({ type: "success", text: `Authenticated successfully as ${res.user.email}` });
        // handleFetchFiles is triggered by useEffect on change
      }
    } catch (err: any) {
      console.error(err);
      setStatusMsg({ type: "error", text: `Login failed: ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await logout();
      setUser(null);
      setToken(null);
      setFiles([]);
      setStatusMsg({ type: "info", text: "Signed out successfully." });
    } catch (err: any) {
      setStatusMsg({ type: "error", text: `Sign out failed: ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  // Sync specific image from Google Drive to local Express assets
  const handleSyncFile = async (driveFile: DriveFile) => {
    if (!token) return;
    
    // Explicit user confirmation before potentially overwriting target application logo file
    const confirmMsg = `Sync "${driveFile.name}" and set it as the primary Guest House Julia Logo? Doing this will write the graphic bytes to the server's public asset storage.`;
    if (!window.confirm(confirmMsg)) {
      return;
    }

    setSyncingFileId(driveFile.id);
    setStatusMsg({ type: "info", text: `Extracting "${driveFile.name}" image bytes from Drive...` });

    try {
      // 1. Fetch binary data using authorized Google Drive API
      const mediaUrl = `https://www.googleapis.com/drive/v3/files/${driveFile.id}?alt=media`;
      const mediaResponse = await fetch(mediaUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!mediaResponse.ok) {
        throw new Error(`Google Drive media fetch failed: ${mediaResponse.statusText}`);
      }

      const fileBlob = await mediaResponse.blob();

      // 2. Read file as Base64 format
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onloadend = async () => {
        try {
          const resultStr = reader.result as string;
          const base64Content = resultStr.split(",")[1];

          if (!base64Content) {
            throw new Error("Could not format image stream correctly.");
          }

          // 3. POST Base64 image payload to our server handler
          const serverRes = await fetch("/api/admin/save-logo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ base64Data: base64Content }),
          });

          if (!serverRes.ok) {
            const errBody = await serverRes.json().catch(() => ({}));
            throw new Error(errBody.error || `HTTP ${serverRes.status}`);
          }

          const serverData = await serverRes.json();
          setStatusMsg({ 
            type: "success", 
            text: `Success! "${driveFile.name}" has been synced to the server. Logo reloaded in real-time!` 
          });
          onLogoUpdated(); // Force cache reload on logo images in client
        } catch (serverErr: any) {
          console.error(serverErr);
          setStatusMsg({ type: "error", text: `Server Sync Failed: ${serverErr.message}` });
        } finally {
          setSyncingFileId(null);
        }
      };
    } catch (err: any) {
      console.error(err);
      setStatusMsg({ type: "error", text: `Failed to extract file: ${err.message}` });
      setSyncingFileId(null);
    }
  };

  const formatBytes = (bytesStr?: string) => {
    if (!bytesStr) return "Unknown size";
    const bytes = parseInt(bytesStr, 10);
    if (isNaN(bytes)) return "Unknown size";
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in" id="host-portal-overlay">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200 flex flex-col max-h-[85vh] animate-slide-in-up"
        id="host-portal-modal"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-stone-800 to-stone-900 flex items-center justify-between text-white border-b border-stone-700">
          <div className="flex items-center gap-2.5">
            <Settings className="h-5 w-5 text-amber-500 animate-spin-slow" />
            <span className="font-display font-bold text-base sm:text-lg uppercase tracking-wide">
              Host Logo Sync Portal
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5.5 w-5.5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed" id="host-portal-info">
            Welcome, Julia! Authenticate with your Google account where your logo asset folder is saved, list your Google Drive folder, and sync images to automatically replace the brand logo across your guest house website in real-time.
          </p>

          {/* Connection Status Panel */}
          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4.5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                Integration State
              </span>
              <h3 className="font-bold text-stone-800 mt-1.5 text-xs sm:text-sm">
                {user ? `Connected: ${user.email}` : "Not Authenticated with Google"}
              </h3>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {user ? "You have valid Google Workspace (Drive) authorization." : "Sign in to grant the app secure readonly access to your files."}
              </p>
            </div>

            {/* Auth Buttons */}
            {user ? (
              <button
                onClick={handleSignOut}
                id="host-google-signout-btn"
                className="px-4 py-2 text-stone-700 hover:text-red-700 bg-white hover:bg-red-50 border border-stone-300 hover:border-red-200 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 shadow-sm"
              >
                Disconnect Account
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                id="host-google-signin-btn"
                className="gsi-material-button transition-all duration-300 hover:scale-[1.02] shrink-0"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #dadce0",
                  borderRadius: "12px",
                  color: "#3c4043",
                  cursor: "pointer",
                  fontFamily: "Roboto, arial, sans-serif",
                  fontSize: "13px",
                  height: "40px",
                  letterSpacing: "0.25px",
                  outline: "none",
                  padding: "0 12px",
                  position: "relative",
                  textAlign: "center",
                  verticalAlign: "middle",
                  whiteSpace: "nowrap",
                  width: "auto"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: "block", width: "16px", height: "16px" }}>
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  </svg>
                  <span style={{ fontWeight: 600 }}>Sign in with Google</span>
                </div>
              </button>
            )}
          </div>

          {/* Folder Target Form (Auto-filled with user's specific folder) */}
          <div className="space-y-2">
            <label htmlFor="folder-input-field" className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
              Google Drive Folder ID
            </label>
            <div className="flex gap-2">
              <input
                id="folder-input-field"
                type="text"
                value={folderId}
                onChange={(e) => setFolderId(e.target.value)}
                className="flex-1 px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-stone-800 text-xs sm:text-sm shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="Enter shared Google Drive folder link or ID..."
                disabled={loading}
              />
              <button
                onClick={() => handleFetchFiles()}
                className="flex items-center gap-1.5 px-4 bg-stone-800 text-white rounded-xl text-xs font-bold hover:bg-stone-700 transition-colors shrink-0 cursor-pointer disabled:opacity-50"
                disabled={loading || !token}
              >
                <RefreshCw className={`h-3 w-3 ${loading ? "animate-spin" : ""}`} />
                Scan Folder
              </button>
            </div>
            <p className="text-[10px] text-stone-550 italic" id="folder-note">
              Initialized folder target uses your manually created folder identifier: <span className="font-mono bg-stone-100 rounded px-1">1IEzhOzmACmw51jJa0Nde2lpXltsj0XMm</span>
            </p>
          </div>

          {/* Feedback/Status Message Banner */}
          {statusMsg && (
            <div 
              id="sync-status-banner"
              className={`flex gap-3 p-4 rounded-xl text-xs sm:text-sm border ${
                statusMsg.type === "success" 
                  ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                  : statusMsg.type === "error" 
                  ? "bg-rose-50 border-rose-200 text-rose-800" 
                  : "bg-blue-50 border-blue-200 text-blue-800"
              }`}
            >
              {statusMsg.type === "success" && <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />}
              {statusMsg.type === "error" && <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />}
              {statusMsg.type === "info" && <RefreshCw className="h-5 w-5 text-blue-600 shrink-0 mt-0.5 animate-spin" />}
              
              <div className="leading-normal">
                {statusMsg.text}
              </div>
            </div>
          )}

          {/* Files List Display Section */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-widest">
              Available Folder Assets
            </h4>
            
            {files.length === 0 ? (
              <div className="border border-stone-200 rounded-xl border-dashed py-8 px-4 text-center text-stone-400 text-xs sm:text-sm">
                No files loaded. Connect with Google and Scan the Folder to sync records.
              </div>
            ) : (
              <div className="border border-stone-200 rounded-xl divide-y divide-stone-150 overflow-hidden bg-white shadow-3xs" id="gdrive-files-list">
                {files.map((file) => {
                  const isImage = file.mimeType.startsWith("image/");
                  const isSyncing = syncingFileId === file.id;
                  
                  return (
                    <div 
                      key={file.id} 
                      className="p-3.5 flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                      id={`file-item-${file.id}`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 rounded-lg shrink-0 ${isImage ? "bg-[#00a295]/10 text-[#00a295]" : "bg-stone-100 text-stone-500"}`}>
                          <FileImage className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-bold text-stone-800 text-xs sm:text-sm truncate" title={file.name}>
                            {file.name}
                          </h5>
                          <p className="text-[10px] text-stone-500 font-mono mt-0.5">
                            {file.mimeType} • {formatBytes(file.size)}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleSyncFile(file)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                          !isImage 
                            ? "bg-stone-100 text-stone-400 cursor-not-allowed" 
                            : "bg-[#00a295] text-white hover:bg-[#009085] cursor-pointer shadow-3xs hover:scale-[1.02]"
                        }`}
                        disabled={!isImage || syncingFileId !== null}
                        id={`sync-btn-${file.id}`}
                      >
                        {isSyncing ? (
                          <>
                            <RefreshCw className="h-3 w-3 animate-spin" />
                            Syncing...
                          </>
                        ) : (
                          <>
                            <Check className="h-3 w-3" />
                            Use as Logo
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-200 text-stone-700 hover:bg-stone-300 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
