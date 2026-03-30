
import { PreviewMode } from './PreviewMode';
import { CanvasMode } from './CanvasMode';

interface LeftPanelProps {
  isAgentMode: boolean;
  onPushToChat: (file: string) => void;
  onSaveToAsset: (file: string) => void;
}

export function LeftPanel({ 
  isAgentMode, 
  onPushToChat, 
  onSaveToAsset 
}: LeftPanelProps) {
  return isAgentMode ? (
    <PreviewMode />
  ) : (
    <CanvasMode 
       onPushToChat={onPushToChat}
       onSaveToAsset={onSaveToAsset}
    />
  );
}
