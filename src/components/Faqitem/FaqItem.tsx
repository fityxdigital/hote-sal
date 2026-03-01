import { useEffect, useId, useLayoutEffect, useRef } from "react";
import "./FaqItem.css";

type Props = {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ q, a, isOpen, onToggle }: Props) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const uid = useId();
  const buttonId = `faq-btn-${uid}`;
  const panelId = `faq-panel-${uid}`;

  // INITIAL SYNC
  useLayoutEffect(() => {
    const body = bodyRef.current;
    const inner = innerRef.current;
    if (!body || !inner) return;

    if (isOpen) {
      const h = inner.getBoundingClientRect().height;
      body.style.height = `${h}px`;
      requestAnimationFrame(() => {
        body.style.height = "auto";
      });
    } else {
      body.style.height = "0px";
    }
  }, [isOpen]);

  // TOGGLE ANIMATION
  useEffect(() => {
    const body = bodyRef.current;
    const inner = innerRef.current;
    if (!body || !inner) return;

    if (isOpen) {
      if (body.style.height === "" || body.style.height === "0px") {
        body.style.height = "0px";
        void body.offsetHeight;
      }

      const h = inner.getBoundingClientRect().height;
      body.style.height = `${h}px`;

      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "height") return;
        if (isOpen) body.style.height = "auto";
      };

      body.addEventListener("transitionend", onEnd);
      return () => body.removeEventListener("transitionend", onEnd);
    } else {
      const current = inner.getBoundingClientRect().height;
      body.style.height = `${current}px`;
      void body.offsetHeight;
      body.style.height = "0px";
    }
  }, [isOpen]);

  // RESIZE SYNC
  useEffect(() => {
    const body = bodyRef.current;
    const inner = innerRef.current;
    if (!body || !inner) return;

    const ro = new ResizeObserver(() => {
      if (!isOpen) return;
      if (body.style.height === "auto") return;
      const h = inner.getBoundingClientRect().height;
      body.style.height = `${h}px`;
    });

    ro.observe(inner);
    return () => ro.disconnect();
  }, [isOpen]);

  return (
    <div className={`faqItem ${isOpen ? "is-open" : ""}`}>
      <button
        id={buttonId}
        type="button"
        className="faqItem__head"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="faqItem__q">{q}</span>

        <span className="faqItem__icon" aria-hidden="true">
          <span className="faqItem__plus">+</span>
        </span>
      </button>

      <div
        id={panelId}
        className="faqItem__body"
        ref={bodyRef}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
      >
        <div className="faqItem__inner" ref={innerRef}>
          <p className="faqItem__a">{a}</p>
        </div>
      </div>

      <div className="faqItem__line" />
    </div>
  );
}