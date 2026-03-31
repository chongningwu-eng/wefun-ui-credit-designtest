import { X, Search, FileImage, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Asset } from '../../App';

export function ProjectAssetLibrary({ isOpen, onClose, assets }: { isOpen: boolean, onClose: () => void, assets: Asset[] }) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-[400px] bg-[#18181B] border-l border-[#27272A] z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#27272A]">
              <div className="flex items-center gap-2">
                <FileImage size={18} className="text-[#3B82F6]" />
                <h2 className="text-white font-semibold">Global Project Assets</h2>
              </div>
              <button 
                onClick={onClose}
                className="text-[#A1A1AA] hover:text-white p-1 rounded-md hover:bg-[#27272A] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Toolbar */}
            <div className="p-4 border-b border-[#27272A] flex items-center gap-2">
              <div className="relative flex-1">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#71717A]" />
                <input 
                  type="text" 
                  placeholder="Search assets..." 
                  className="w-full bg-[#121214] border border-[#27272A] rounded-lg pl-9 pr-3 py-1.5 text-sm text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                />
              </div>
              <div className="flex bg-[#121214] border border-[#27272A] rounded-lg p-0.5">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-[#27272A] text-white' : 'text-[#71717A] hover:text-white'}`}
                >
                  <LayoutGrid size={14} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-[#27272A] text-white' : 'text-[#71717A] hover:text-white'}`}
                >
                  <List size={14} />
                </button>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-auto p-4 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {assets.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <FileImage size={48} className="text-[#3F3F46] mb-4 opacity-50" />
                  <h3 className="text-[#D4D4D8] font-medium mb-1.5 text-sm">No Project Assets Yet</h3>
                  <p className="text-[#71717A] text-xs max-w-[250px] leading-relaxed">
                    Select an item on the Canvas and click "Save to Asset" to add high-value elements to your global library.
                  </p>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? "grid grid-cols-2 gap-3" : "flex flex-col gap-2"}>
                  {assets.map((asset, idx) => (
                    <div 
                      key={asset.id || idx} 
                      className={`group relative bg-[#121214] border border-[#27272A] rounded-lg overflow-hidden flex ${viewMode === 'grid' ? 'flex-col aspect-square' : 'flex-row h-16 items-center p-2 gap-3'} hover:border-[#3F3F46] hover:bg-[#27272A]/50 transition-colors cursor-pointer`}
                    >
                      <div className={`bg-[#27272A] shrink-0 flex items-center justify-center ${viewMode === 'grid' ? 'w-full h-3/4' : 'w-12 h-12 rounded mt-0 overflow-hidden relative'}`}>
                        {asset.url && asset.url !== 'staged' ? (
                          <img src={asset.url} alt={asset.name} className="absolute inset-0 w-full h-full object-cover" />
                        ) : (
                          <FileImage size={18} className="text-[#71717A] opacity-50" />
                        )}
                      </div>
                      <div className={`flex flex-col flex-1 truncate ${viewMode === 'grid' ? 'p-2' : ''}`}>
                        <span className="text-xs font-medium text-[#E4E4E7] truncate">{asset.name}</span>
                        <span className="text-[10px] text-[#71717A]">{asset.size || '1.2 MB'}</span>
                      </div>
                      
                      {/* Hover action overlay for grid */}
                      {viewMode === 'grid' && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                          <button className="text-[11px] font-semibold bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-1.5 rounded-md shadow-sm">
                            Add to Canvas
                          </button>
                        </div>
                      )}
                      
                      {/* List mode action button */}
                      {viewMode === 'list' && (
                        <button className="opacity-0 group-hover:opacity-100 text-[11px] font-semibold bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3 py-1.5 rounded-md shadow-sm transition-opacity shrink-0">
                          Add
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
