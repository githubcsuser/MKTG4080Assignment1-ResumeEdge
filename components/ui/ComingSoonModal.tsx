"use client";

import { useCallback, useEffect, useState } from "react";

const DEFAULT_MESSAGE = "To be implemented soon.";

type ComingSoonModalProps = {
  open: boolean;
  onClose: () => void;
  message?: string;
  titleId?: string;
};

export function useComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return { isOpen, open, close };
}

export default function ComingSoonModal({
  open,
  onClose,
  message = DEFAULT_MESSAGE,
  titleId = "coming-soon-modal-title",
}: ComingSoonModalProps) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="lead-form-notice"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="lead-form-notice__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <p id={titleId} className="lead-form-notice__message">
          {message}
        </p>
        <button
          type="button"
          className="lead-form-notice__close"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}
