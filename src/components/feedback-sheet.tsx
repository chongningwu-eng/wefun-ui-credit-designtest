import React, { useState, useRef } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FileImage, Maximize2, Trash2, X, CheckCircle2, Loader2 } from "lucide-react";

interface FeedbackSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FeedbackSheet({ open, onOpenChange }: FeedbackSheetProps) {
  const [problemType, setProblemType] = useState<string>("bug");
  const [images, setImages] = useState<{file: File, url: string}[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const remainingSlots = 3 - images.length;
      const allowedFiles = newFiles.slice(0, remainingSlots); 
      
      const newImages = allowedFiles.map(file => ({
        file,
        url: URL.createObjectURL(file)
      }));
      setImages(prev => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].url);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delay for a polished UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset state after sheet slides out to avoid visual popping
    setTimeout(() => {
      setIsSubmitted(false);
      setImages(prev => {
        prev.forEach(img => URL.revokeObjectURL(img.url));
        return [];
      });
      setProblemType("bug");
    }, 300);
  };

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent 
        className="w-full sm:max-w-[600px] p-0 flex flex-col bg-[#111114] border-l border-[#4d4d5c]"
      >
        <SheetHeader className="px-8 py-6 border-b border-[#4d4d5c] relative flex flex-col items-start space-y-1">
          <SheetTitle className="text-[20px] font-semibold text-white tracking-tight">
            Send Feedback
          </SheetTitle>
          <SheetDescription className="text-[12px] text-[#a9a9b8]">
            Help us refine the Alchemy experience. Let us know about any issues or feature requests.
          </SheetDescription>
          <SheetClose className="absolute right-6 top-6 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none text-[#a9a9b8]">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>

        {isSubmitted ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in-95 duration-300">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Feedback Sent!</h3>
            <p className="text-[13px] text-[#a9a9b8] text-center max-w-[280px]">
              Thank you for helping us improve. We have received your feedback.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-8 py-9 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <form id="feedback-form" onSubmit={handleSubmit} className="flex flex-col gap-7">
              
              {/* Problem Type */}
              <div className="flex flex-col gap-4">
                <Label className="text-[14px] font-semibold text-[#f3f3f5]">
                  Problem type
                </Label>
                <Select value={problemType} onValueChange={setProblemType}>
                  <SelectTrigger className="w-full h-10 bg-white/5 border-[#33333d] hover:bg-white/10 focus:ring-1 focus:ring-ring transition-colors rounded-lg px-4 text-[12px] text-white">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent className="bg-[#18181B] border-[#33333d] text-white rounded-lg">
                    <SelectItem value="bug" className="cursor-pointer">Bug Report</SelectItem>
                    <SelectItem value="feature" className="cursor-pointer">Feature Request</SelectItem>
                    <SelectItem value="general" className="cursor-pointer">General Feedback</SelectItem>
                    <SelectItem value="help" className="cursor-pointer">Need Help</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-[10px] text-[#a9a9b8]">
                  To report content violations, please use the 'Report' function on the detail page.
                </p>
              </div>

              {/* Project Link */}
              <div className="flex flex-col gap-4">
                <Label className="text-[14px] font-semibold text-[#f3f3f5]">
                  Project link (optional)
                </Label>
                <Input 
                  placeholder="https://..." 
                  className="bg-white/5 border-[#33333d] hover:bg-white/10 focus-visible:ring-1 focus-visible:ring-ring transition-colors h-10 rounded-lg px-4 text-[12px] text-white placeholder:text-[#a9a9b8]"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-4">
                <Label className="text-[14px] font-semibold text-[#f3f3f5]">
                  Description
                </Label>
                <Textarea 
                  placeholder="Type your message here." 
                  className="min-h-[162px] resize-none bg-white/5 border-[#33333d] hover:bg-white/10 focus-visible:ring-1 focus-visible:ring-ring transition-colors rounded-lg p-4 text-[12px] text-white placeholder:text-[#a9a9b8]"
                  required
                />
              </div>

              {/* Attachments Section */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center justify-between">
                  <Label className="text-[14px] font-semibold text-[#f3f3f5]">
                    Attachment section
                  </Label>
                  <button type="button" className="text-[12px] text-[#a9a9b8] hover:text-white flex items-center gap-1.5 transition-colors">
                    <Maximize2 size={12} />
                    Capture Current Screen
                  </button>
                </div>

                {/* Standard Dropzone */}
                <label className={`border border-[#4d4d5c] rounded-lg bg-[#1a1a1f] p-6 flex flex-col items-center justify-center gap-2 transition-colors ${images.length >= 3 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#1a1a1f]/80 group'}`}>
                  <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    className="hidden" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    disabled={images.length >= 3}
                  />
                  <div className={`w-10 h-10 rounded-full bg-[#33333d] flex items-center justify-center mb-1 transition-colors ${images.length < 3 && 'group-hover:bg-[#4d4d5c]'}`}>
                    <FileImage className={`w-4 h-4 text-[#a9a9b8] transition-colors ${images.length < 3 && 'group-hover:text-white'}`} />
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-[14px] font-semibold text-white">
                      {images.length >= 3 ? "Maximum images reached" : "Click or drag images to upload"}
                    </p>
                    <p className="text-[10px] text-[#a9a9b8]">Supports 1-3 screenshots, max 5MB each</p>
                  </div>
                </label>
              </div>

              {/* Uploaded Images Preview */}
              <div className="flex flex-col gap-3 mt-4">
                <Label className="text-[12px] text-[#a9a9b8] uppercase">
                  UPLOADED IMAGES ({images.length}/3)
                </Label>
                <div className="flex gap-3">
                  {[0, 1, 2].map((i) => {
                    const img = images[i];
                    return img ? (
                      <div key={i} className="h-[80px] w-[100px] rounded-[6px] bg-[#33333d] border border-[#4d4d5c] flex items-center justify-center overflow-hidden relative group cursor-pointer transition-colors hover:border-[#a9a9b8]">
                        <img src={img.url} alt={`preview ${i}`} className="w-full h-full object-cover" />
                        <div 
                          onClick={(e) => {
                            e.preventDefault();
                            removeImage(i);
                          }}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </div>
                      </div>
                    ) : (
                      <div key={i} className="h-[80px] w-[100px] rounded-[6px] bg-[#1a1a1f]/50 border border-[#4d4d5c] border-dashed flex items-center justify-center">
                           <FileImage className="w-4 h-4 text-[#4d4d5c]/50" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Footer */}
        <div className="px-8 py-6 border-t border-[#4d4d5c] bg-[#111114] flex flex-col gap-3">
          {isSubmitted ? (
            <Button 
              type="button" 
              onClick={handleClose}
              className="w-full h-12 rounded-lg bg-[#fafafa] hover:bg-zinc-200 text-[#111114] text-[14px] font-semibold transition-colors"
            >
              Done
            </Button>
          ) : (
            <>
              <Button 
                type="submit" 
                form="feedback-form"
                disabled={isSubmitting}
                className="w-full h-12 rounded-lg bg-[#fafafa] hover:bg-zinc-200 text-[#111114] text-[14px] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {isSubmitting ? "Sending..." : "Send feedback"}
              </Button>
              <Button 
                type="button" 
                onClick={handleClose}
                disabled={isSubmitting}
                className="w-full h-9 rounded-lg bg-[#33333d] hover:bg-[#3f3f46] text-[12px] font-medium text-[#f3f3f5] transition-colors shadow-none"
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

