import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="neo-scene">
      {/* Organic drifting blobs - the signature element: an orange "lava"
          gradient field slowly morphing behind frosted glass, evoking
          Apple's Vision Pro / iOS 18 glass material over dark hardware. */}
      <div className="neo-blob-field">
        <div className="neo-blob bg-neo-ember/50 w-[420px] h-[420px] -top-32 -left-32 animate-blob-1" />
        <div className="neo-blob bg-neo-amber/40 w-[380px] h-[380px] top-1/3 -right-24 animate-blob-2" />
        <div className="neo-blob bg-neo-rust/40 w-[340px] h-[340px] -bottom-20 left-1/4 animate-blob-1" style={{ animationDelay: "3s" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="neo-card w-full max-w-md p-8"
      >
        <Link to="/" className="flex items-center gap-2.5 font-neo font-bold text-lg mb-8 w-fit text-neo-paper">
          <span className="neo-mark">S</span>
          SyncDoc
        </Link>
        <h1 className="text-2xl font-bold font-neo mb-1 text-neo-paper">{title}</h1>
        {subtitle && <p className="text-neo-smoke text-sm mb-6">{subtitle}</p>}
        <div className="mt-6">{children}</div>
        {footer && <div className="mt-6 text-center text-sm text-neo-smoke">{footer}</div>}
      </motion.div>
    </div>
  );
}
