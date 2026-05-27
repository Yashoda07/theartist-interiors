import { useEffect } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ImageLightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt, onClose }: ImageLightboxProps) => {
  useEffect(() => {
    if (!src) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={6}
        doubleClick={{ mode: "toggle", step: 2 }}
        wheel={{ step: 0.2 }}
        pinch={{ step: 5 }}
        panning={{ velocityDisabled: false }}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div
              className="absolute top-4 left-4 z-10 flex gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => zoomIn()}
                aria-label="Zoom in"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => zoomOut()}
                aria-label="Zoom out"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => resetTransform()}
                aria-label="Reset zoom"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <TransformComponent
              wrapperStyle={{ width: "100vw", height: "100vh" }}
              contentStyle={{ width: "100vw", height: "100vh" }}
            >
              <div
                className="w-screen h-screen flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={src}
                  alt={alt || ""}
                  draggable={false}
                  className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain select-none"
                  style={{ touchAction: "none" }}
                />
              </div>
            </TransformComponent>

            <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-xs uppercase tracking-widest">
              Pinch / scroll to zoom · drag to pan
            </p>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageLightbox;
