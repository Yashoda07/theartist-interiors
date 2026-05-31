import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasNav?: boolean;
}

const ImageLightbox = ({ src, alt, onClose, onPrev, onNext, hasNav }: ImageLightboxProps) => {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [resetKey, setResetKey] = useState(0);

  // Reset zoom whenever image source changes
  useEffect(() => {
    setResetKey((k) => k + 1);
  }, [src]);

  useEffect(() => {
    if (!src) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose, onPrev, onNext]);

  if (!src) return null;

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current || !hasNav) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) onNext?.();
      else onPrev?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-background/70 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <TransformWrapper
        key={resetKey}
        initialScale={1}
        minScale={1}
        maxScale={6}
        doubleClick={{ mode: "toggle", step: 1 }}
        wheel={{ step: 0.05 }}
        pinch={{ step: 5 }}
        panning={{ velocityDisabled: false }}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform, state }) => (
          <>
            {/* Top-left controls */}
            <div
              className="absolute top-3 left-3 z-10 flex gap-1.5 md:gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => zoomIn(0.2)}
                aria-label="Zoom in"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-foreground text-background hover:bg-accent flex items-center justify-center shadow-lg transition-colors"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => zoomOut(0.2)}
                aria-label="Zoom out"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-foreground text-background hover:bg-accent flex items-center justify-center shadow-lg transition-colors"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => resetTransform()}
                aria-label="Reset zoom"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-foreground text-background hover:bg-accent flex items-center justify-center shadow-lg transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-11 h-11 rounded-full bg-foreground text-background hover:bg-accent flex items-center justify-center shadow-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Desktop nav arrows */}
            {hasNav && onPrev && (
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous image"
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-foreground text-background hover:bg-accent items-center justify-center shadow-lg transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {hasNav && onNext && (
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next image"
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-foreground text-background hover:bg-accent items-center justify-center shadow-lg transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <TransformComponent
              wrapperStyle={{ width: "100vw", height: "100vh" }}
              contentStyle={{ width: "100vw", height: "100vh" }}
            >
              <div
                className="w-screen h-screen flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {/* <img
                  src={src}
                  alt={alt || ""}
                  draggable={false}
                  className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain select-none"
                  style={{ touchAction: "none" }}
                /> */}

                {/* <AnimatePresence mode="wait">
                  <motion.img
                    key={src}
                    src={src ?? ""}
                    alt={alt ?? ""}
                    initial={{
                      opacity: 0,
                      scale: 0.985,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="block max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain"
                  />
                </AnimatePresence> */}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={src}
                    src={src ?? ""}
                    alt={alt ?? ""}
                    initial={{
                      opacity: 0,
                      scale: 0.985,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: "easeInOut",
                    }}
                    style={{
                      transform: `scale(${zoom})`,
                      transformOrigin: "center center",
                    }}
                    className="block max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain select-none cursor-zoom-in"
                    onDoubleClick={() => setZoom((z) => (z >= 2 ? 1 : 2))}
                    onClick={() => setZoom((z) => (z >= 2 ? 1 : z + 0.5))}
                    draggable={false}
                  />
                </AnimatePresence>
              </div>
            </TransformComponent>

            <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-foreground/70 text-[10px] md:text-xs uppercase tracking-widest text-center px-4">
              {hasNav ? "Swipe / arrows to navigate · pinch / scroll to zoom" : "Pinch / scroll to zoom · drag to pan"}
            </p>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageLightbox;
