import { useState } from 'react';
import { RefreshCw, Monitor, Smartphone, Code2 } from 'lucide-react';

export function PreviewMode() {
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('mobile');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasContent] = useState(true); // Toggle this to see empty state

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-[#121214] border border-[#27272A] rounded-xl overflow-hidden shadow-sm">
      {/* Workspace Toolbar */}
      <div className="h-12 border-b border-[#27272A] flex items-center justify-between px-4 shrink-0 bg-[#18181B]">
        <div className="flex items-center gap-2">
          <div className="flex bg-[#121214] p-1 rounded-lg border border-[#27272A]">
            <button 
              onClick={() => setViewport('desktop')}
              className={`p-1.5 rounded-md transition-all ${viewport === 'desktop' ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#71717A] hover:text-[#A1A1AA]'}`}
            >
              <Monitor size={14} />
            </button>
            <button 
              onClick={() => setViewport('mobile')}
              className={`p-1.5 rounded-md transition-all ${viewport === 'mobile' ? 'bg-[#27272A] text-white shadow-sm' : 'text-[#71717A] hover:text-[#A1A1AA]'}`}
            >
              <Smartphone size={14} />
            </button>
          </div>
          <span className="text-[#71717A] text-[11px] ml-2 select-none">Preview</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handleRefresh}
            className="h-8 w-8 rounded-full border border-[#27272A] bg-[#121214] hover:bg-[#27272A] flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
          >
            <RefreshCw size={12} className={isRefreshing ? "animate-spin text-[#3B82F6]" : ""} />
          </button>
        </div>
      </div>

      {/* Viewport Area */}
      <div className={`flex-1 overflow-hidden relative bg-[#09090B] p-4 ${viewport === 'mobile' ? 'flex items-center justify-center' : ''}`}>
        {!hasContent ? (
          <div className="flex flex-col items-center justify-center text-center max-w-sm px-6">
            <div className="w-16 h-16 rounded-2xl bg-[#27272A] border border-[#3F3F46] flex items-center justify-center mb-6 shadow-xl">
              <Code2 size={24} className="text-[#A1A1AA]" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Your creation will appear here</h3>
            <p className="text-[#71717A] text-sm leading-relaxed">Send a prompt in the chat panel to start generating your project.</p>
          </div>
        ) : (
          <div className={`transition-all duration-300 ease-in-out border border-[#3F3F46] overflow-hidden bg-white 
            ${viewport === 'mobile' 
              ? 'relative w-[340px] h-[720px] max-h-full rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[14px] border-[#27272A] flex-shrink-0' 
              : 'relative w-full h-full rounded-xl flex-shrink-0'}`}
          >
            <iframe 
               srcDoc={`
                 <html>
                   <head>
                     <style>
                       body { 
                         margin: 0; padding: 0; 
                         font-family: -apple-system, system-ui, sans-serif;
                         background: #ffffff; color: #171717;
                         width: 100%; height: 100vh;
                         overflow-y: auto; overflow-x: hidden;
                       }
                       * { box-sizing: border-box; }
                     </style>
                   </head>
                   <body>
                     <div style="padding: 40px 24px;">
                        <div style="max-w: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 32px;">
                          <!-- Header Area -->
                          <div style="text-align: center; margin-bottom: 24px;">
                            <h1 style="font-size: 32px; font-weight: 800; margin: 0 0 16px 0; letter-spacing: -1px;">Remix of 大鱼吃小鱼</h1>
                            <p style="font-size: 16px; color: #52525b; margin: 0;">A generated interactive prototype canvas demonstrating current UI output.</p>
                          </div>
                          
                          <!-- Content Area -->
                          <div style="width: 100%; height: 320px; background: #f4f4f5; border-radius: 20px; border: 1px solid #e4e4e7; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
                            <span style="color: #a1a1aa; font-weight: 500;">Interactive Canvas Region</span>
                          </div>
                          
                          <!-- Cards Area -->
                          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
                            <div style="background: white; padding: 20px; border-radius: 16px; border: 1px solid #e4e4e7; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);">
                               <h3 style="margin: 0 0 8px 0; font-size: 16px;">Player Stats</h3>
                               <p style="margin: 0; font-size: 14px; color: #71717a;">View high scores and recent progress.</p>
                            </div>
                            <div style="background: white; padding: 20px; border-radius: 16px; border: 1px solid #e4e4e7; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);">
                               <h3 style="margin: 0 0 8px 0; font-size: 16px;">Leaderboard</h3>
                               <p style="margin: 0; font-size: 14px; color: #71717a;">Compete with others globally.</p>
                            </div>
                          </div>
                        </div>
                     </div>
                   </body>
                 </html>
               `}
               className="w-full h-full border-none"
               title="Preview Document"
            />
          </div>
        )}
      </div>
    </div>
  );
}
