
import React, { useState, useRef } from 'react';
import { X, ZoomIn, ZoomOut, Maximize, Minimize, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    title: string;
    description: string;
  };
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  const [zoom, setZoom] = useState(1);
  const [isMaximized, setIsMaximized] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image.src;
    link.download = `${image.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setZoom(1);
    setIsMaximized(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/90" />
      <DialogContent className={`${isMaximized ? 'w-screen h-screen max-w-none max-h-none rounded-none' : 'max-w-6xl w-[90vw] h-[90vh] rounded-xl'} p-0 overflow-hidden transition-all duration-300`} >
        <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm text-white p-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{image.title}</h3>
            <p className="text-sm text-gray-300">{image.description}</p>
          </div>

          <div className="flex items-center space-x-2">
            <button onClick={handleZoomOut} className="p-2 hover:bg-white/20 rounded-full transition-colors" title="Zoom Out">
              <ZoomOut size={20} />
            </button>

            <span className="text-sm px-2">{Math.round(zoom * 100)}%</span>

            <button onClick={handleZoomIn} className="p-2 hover:bg-white/20 rounded-full transition-colors" title="Zoom In">
              <ZoomIn size={20} />
            </button>

            <button onClick={handleMaximize} className="p-2 hover:bg-white/20 rounded-full transition-colors" title={isMaximized ? "Minimize" : "Maximize"}>
              {isMaximized ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>

            <button onClick={handleDownload} className="p-2 hover:bg-white/20 rounded-full transition-colors" title="Download">
              <Download size={20} />
            </button>

            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors" title="Close">
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center bg-black pt-16 overflow-auto" onDoubleClick={handleReset}>
          <img ref={imageRef} src={image.src} alt={image.title} className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out cursor-zoom-in hover:scale-105" style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }} draggable={false} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm text-white p-4 text-center">
          <p className="text-sm text-gray-300">
            Double-click to reset zoom • Use controls to navigate
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
