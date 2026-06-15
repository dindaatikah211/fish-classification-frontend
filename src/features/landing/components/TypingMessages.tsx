"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const MESSAGES = ["Apa jenis ikan ini?", "Itu Ikan Nila!", "Akurasi 96%"];

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_BEFORE_DELETE = 2000;

export function TypingMessages() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = MESSAGES[messageIndex];

    if (!isDeleting && text === currentMessage) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_BEFORE_DELETE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
      }, 0);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentMessage.slice(0, prev.length - 1)
            : currentMessage.slice(0, prev.length + 1)
        );
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, messageIndex]);

  return (
    <div className="flex w-full justify-start text-left">
      <p className="font-nokia text-[#2A3616] text-[10px] sm:text-[14px] leading-tight break-words min-h-[1.5em]">
        {text}
        <motion.span
          className="inline-block w-1.5 h-3 bg-[#2A3616] ml-1 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </p>
    </div>
  );
}