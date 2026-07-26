import { useEffect, useRef } from "react";

import { about } from "../../data/about";
import type { Language } from "../../types";
import { closeButton, dialogInner, dialogStyles, sectionBody, sectionHeading } from "./AboutModal.css";

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
  language: Language;
}

function AboutModal({ open, onClose, language }: AboutModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const sections = about[language];

  return (
    <dialog ref={dialogRef} className={dialogStyles} onClose={onClose}>
      <div className={dialogInner}>
        <button className={closeButton} onClick={onClose} aria-label="Close">
          ✕
        </button>
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className={sectionHeading}>{section.heading}</h2>
            <p className={sectionBody}>{section.body}</p>
          </section>
        ))}
      </div>
    </dialog>
  );
}

export default AboutModal;
