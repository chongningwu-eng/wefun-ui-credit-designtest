import { useState } from 'react';
import { UnifiedSettingsModal, SystemToast, MiniUpgradeModal } from './components/CreditSystemUI';
import { FeedbackSheet } from './components/feedback-sheet';
import { AnimatePresence } from 'framer-motion';

import { TopNav } from './components/workspace/TopNav';
import { LeftPanel } from './components/workspace/LeftPanel';
import { RightPanel } from './components/workspace/RightPanel';
import { ProjectAssetLibrary } from './components/workspace/ProjectAssetLibrary';

function App() {
  const [balance, setBalance] = useState(18);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('account');
  const [isWarningVisible, setIsWarningVisible] = useState(true);
  const [isMiniUpgradeOpen, setIsMiniUpgradeOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isTreeExpanded, setIsTreeExpanded] = useState(false);
  const [isProjectAssetLibraryOpen, setIsProjectAssetLibraryOpen] = useState(false);
  const [projectAssets, setProjectAssets] = useState<any[]>([]);

  // Generation Mode State
  const [isAgentMode, setIsAgentMode] = useState(true); // Agent preview mode Default
  const costPerAction = isAgentMode ? 12 : 3;

  // Workspace Data
  const [versions, setVersions] = useState<any[]>([
    { 
      id: 'v1', 
      name: 'Initial Layout',
      prompt: 'Create a simple "big fish eats small fish" game prototype', 
      assets: [],
      cost: 8,
      time: 18,
      model: 'Claude Sonnet 3.5',
      suggestions: [],
      parentId: null
    },
    {
      id: 'v2',
      name: 'Ocean Theme',
      prompt: 'Change the color palette to deep ocean blues and neon accents.',
      assets: [
        { id: '1', name: 'ocean_bg.jpg', type: 'image', size: '2.4 MB', url: 'https://images.unsplash.com/photo-1682687982501-1e5898cb8f4b?auto=format&fit=crop&w=600&q=80' },
        { id: '2', name: 'neon_coral.png', type: 'image', size: '1.1 MB', url: 'https://images.unsplash.com/photo-1546026423-cc46426ba658?auto=format&fit=crop&w=600&q=80' }
      ],
      cost: 12,
      time: 24,
      model: 'Claude Sonnet 3.5',
      suggestions: [],
      parentId: 'v1'
    },
    {
      id: 'v3',
      name: '3D Realistic Rendering',
      prompt: 'Make the fish characters look more 3D and realistic, with watery reflection effects.',
      assets: [
        { id: '3', name: 'water_caustics.jpg', type: 'image', size: '3.5 MB', url: 'https://images.unsplash.com/photo-1605335032542-fc1253d53ee5?auto=format&fit=crop&w=600&q=80' },
        { id: '4', name: '3d_fish_model.png', type: 'image', size: '4.8 MB', url: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80' },
        { id: '5', name: 'ui_elements.png', type: 'image', size: '1.2 MB', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' }
      ],
      cost: 15,
      time: 32,
      model: 'Claude Sonnet 3.5',
      suggestions: ['Add subtle underwater caustics', 'Change the background to a coral reef'],
      parentId: 'v2'
    },
    {
      id: 'v4',
      name: 'Multiplayer Arena',
      prompt: 'Alternative: Make it a multiplayer fast-paced arena game instead.',
      assets: [],
      cost: 10,
      time: 20,
      model: 'Claude Sonnet 3.5',
      suggestions: ['Add a lobby UI'],
      parentId: 'v1'
    },
    {
      id: 'v5',
      name: 'Leaderboard System',
      prompt: 'Add a leaderboard and lobby system to the arena.',
      assets: [],
      cost: 18,
      time: 29,
      model: 'Claude Sonnet 3.5',
      suggestions: [],
      parentId: 'v4'
    },
    {
      id: 'v6',
      name: 'Retro Pixel Art',
      prompt: 'Alternative: Let\'s drop 3D, try a retro pixel-art aesthetic for the fish.',
      assets: [],
      cost: 14,
      time: 25,
      model: 'Claude 3 Haiku',
      suggestions: ['Use an 8-bit chiptune background music file'],
      parentId: 'v2'
    }
  ]);
  const [activeVersionId, setActiveVersionId] = useState('v3');
  const [stagedFiles, setStagedFiles] = useState<any[]>([]);

  // Error/Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hasChatError, setHasChatError] = useState(false);

  const handleNavigateFromPopover = (tab: string) => {
    setSettingsTab(tab);
    setIsSettingsOpen(true);
  };

  const handleSendPrompt = (prompt: string) => {
    // Check balance / mock basic validation
    if (balance === 0) return;
    setBalance(prev => Math.max(0, prev - costPerAction));

    const newVersionId = `v${versions.length + 1}`;
    const newAssets = stagedFiles.filter(f => f.status === 'ready').map(f => ({ ...f, url: 'staged' }));

    const newVersion = {
      id: newVersionId,
      name: `Iteration ${versions.length + 1}`,
      prompt: prompt || 'Processed attached assets',
      assets: newAssets,
      cost: costPerAction,
      time: Math.floor(Math.random() * 20) + 10,
      model: 'Claude Sonnet 3.5',
      suggestions: ['Make the UI darker', 'Add animations to the buttons'],
      parentId: activeVersionId
    };

    setVersions(prev => [...prev, newVersion]);
    setActiveVersionId(newVersionId);
    setStagedFiles([]); 
  };

  const handlePushToChat = (fileName: string) => {
    setStagedFiles(prev => [...prev, { id: Math.random().toString(), name: fileName, status: 'ready' }]);
    setToastMessage(`Pushed ${fileName} to chat input`);
    
    // auto clean toast
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSaveToAsset = (fileName: string) => {
    setProjectAssets(prev => [...prev, { id: Math.random().toString(), name: fileName, size: '1.2 MB', url: '' }]);
    setToastMessage(`Saved ${fileName} to global project assets`);
    
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="dark h-screen w-screen bg-background text-foreground font-sans selection:bg-[#27272A] flex flex-col pt-14 relative overflow-hidden">
      <AnimatePresence>
        {toastMessage && <SystemToast message={toastMessage} type="success" onClose={() => setToastMessage(null)} />}
      </AnimatePresence>

      <TopNav 
        isAgentMode={isAgentMode} 
        setIsAgentMode={setIsAgentMode} 
        balance={balance} 
        onNavigateToTab={handleNavigateFromPopover} 
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        onOpenProjectAssets={() => setIsProjectAssetLibraryOpen(true)}
      />

      <main className="flex-1 flex p-4 gap-4 overflow-hidden h-[calc(100vh-56px)]">
        {/* Preview area — blurred when tree is expanded */}
        <div className={`flex-1 min-w-0 transition-all duration-300 ${isTreeExpanded ? 'opacity-30 blur-sm pointer-events-none scale-[0.98]' : ''}`}>
          <LeftPanel 
            isAgentMode={isAgentMode}
            setBalance={setBalance}
            setIsWarningVisible={setIsWarningVisible}
            setHasChatError={setHasChatError}
            onPushToChat={handlePushToChat}
            onSaveToAsset={handleSaveToAsset}
          />
        </div>
        
        <RightPanel 
          balance={balance}
          hasChatError={hasChatError}
          setHasChatError={setHasChatError}
          isWarningVisible={isWarningVisible}
          setIsWarningVisible={setIsWarningVisible}
          versions={versions}
          activeVersionId={activeVersionId}
          setActiveVersionId={setActiveVersionId}
          stagedFiles={stagedFiles}
          setStagedFiles={setStagedFiles}
          onSendPrompt={handleSendPrompt}
          isTreeExpanded={isTreeExpanded}
          setIsTreeExpanded={setIsTreeExpanded}
        />
      </main>

      {/* GLOBAL MODALS */}
      <ProjectAssetLibrary 
        isOpen={isProjectAssetLibraryOpen} 
        onClose={() => setIsProjectAssetLibraryOpen(false)} 
        assets={projectAssets} 
      />
      <FeedbackSheet open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
      <MiniUpgradeModal
        isOpen={isMiniUpgradeOpen}
        onClose={() => setIsMiniUpgradeOpen(false)}
        onNavigateToPlans={() => handleNavigateFromPopover('plans')}
      />
      <UnifiedSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        initialTab={settingsTab}
      />
    </div>
  );
}

export default App;
