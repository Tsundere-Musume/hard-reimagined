"use client";

import React, { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Router } from "next/router";

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );
  return (
    <div ref={overlay} className="modal" onClick={(e) => handleClick(e)}>

      <div ref={wrapper} className="modal_wrapper">
      <button
        type="button"
        onClick={onDismiss}
        className="absolute right-5 top-5"
      >
        <Image src="/wrong.svg" width={20} height={20} alt="close" />
      </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
