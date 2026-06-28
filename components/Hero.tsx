"use client";

import { useState, useEffect, useRef } from "react";
import { site } from "@/content/site";
import { FloatingPathsBackground } from "@/components/ui/background-paths";

type Message = {
  from: "user" | "bot";
  text: string;
  delay?: number;
};

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-white rounded-2xl rounded-tl-sm shadow-sm w-fit">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[var(--muted)]"
          style={{
            animation: "typing-dot 1.2s ease infinite",
            animationDelay: `${i * 0.2}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ChatDemo({ conversation }: { conversation: typeof site.hero.demo.conversations[0] }) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setVisibleMessages([]);
    setCurrentIndex(0);
    setIsTyping(false);
    setIsRunning(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversation.id]);

  useEffect(() => {
    if (!isRunning) return;
    const messages = conversation.messages;
    if (currentIndex >= messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const msg = messages[currentIndex];
    const startDelay = currentIndex === 0 ? 600 : msg.delay ?? 400;

    if (msg.from === "bot") {
      const typingTimer = setTimeout(() => setIsTyping(true), startDelay);
      const msgTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, msg as Message]);
        setCurrentIndex((i) => i + 1);
      }, startDelay + (msg.delay ?? 800));
      return () => { clearTimeout(typingTimer); clearTimeout(msgTimer); };
    } else {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg as Message]);
        setCurrentIndex((i) => i + 1);
      }, startDelay);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isRunning, conversation]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleMessages, isTyping]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-2 p-4 overflow-y-auto"
      style={{ minHeight: "200px", maxHeight: "280px" }}
      aria-live="polite"
      aria-label={`Demo de conversación: ${conversation.tab}`}
    >
      {visibleMessages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"} animate-slide-right`}
        >
          {msg.from === "bot" && (
            <div
              className="w-6 h-6 rounded-full bg-[var(--teal)] flex items-center justify-center mr-2 mt-1 flex-shrink-0"
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="4" r="2" fill="white" />
                <path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          )}
          <div
            className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
              msg.from === "user"
                ? "bg-[var(--ink)] text-white rounded-tr-sm"
                : "bg-white text-[var(--ink)] rounded-tl-sm"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="flex justify-start animate-fade-in ml-8">
          <TypingIndicator />
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const demos = site.hero.demo.conversations;

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[var(--paper)]">
      {/* Animated background paths */}
      <FloatingPathsBackground />

      {/* Radial colour washes */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 40%, rgba(14,61,58,0.06) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(226,154,44,0.05) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Copy */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-eyebrow block mb-4">{site.hero.eyebrow}</span>
            <h1
              className="text-display text-5xl sm:text-6xl lg:text-7xl text-[var(--ink)] mb-6"
              style={{ whiteSpace: "pre-line" }}
            >
              {site.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-lg">
              {site.hero.subheadline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={site.hero.cta.href}
              className="inline-flex items-center justify-center gap-2 bg-[var(--honey)] text-[var(--ink)] font-semibold px-7 py-4 rounded-full text-base hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              {site.hero.cta.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={site.hero.ctaSecondary.href}
              className="inline-flex items-center justify-center gap-2 border border-[var(--line)] text-[var(--ink)] font-medium px-7 py-4 rounded-full text-base hover:border-[var(--muted)] hover:bg-[var(--line)]/40 transition-all"
            >
              {site.hero.ctaSecondary.label}
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8L8 1z" fill="var(--honey)" />
              </svg>
              Sin contratos anuales
            </span>
            <span className="text-[var(--line)]">·</span>
            <span>Diagnóstico gratuito</span>
            <span className="text-[var(--line)]">·</span>
            <span>Primer resultado en &lt; 2 semanas</span>
          </div>
        </div>

        {/* Right: Chat demo */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-full max-w-sm bg-[var(--paper)] rounded-2xl shadow-2xl border border-[var(--line)] overflow-hidden"
            style={{ boxShadow: "0 20px 60px -10px rgba(21,33,28,0.15), 0 0 0 1px rgba(227,223,214,0.6)" }}
          >
            {/* Demo header */}
            <div className="bg-[var(--teal)] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--honey)] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 2a3 3 0 110 6 3 3 0 010-6zM3 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">{site.hero.demo.title}</p>
                  <p className="text-white/60 text-xs mt-0.5">{site.hero.demo.subtitle}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                En línea
              </span>
            </div>

            {/* Tab selector */}
            <div className="flex border-b border-[var(--line)] bg-white/50">
              {demos.map((demo, i) => (
                <button
                  key={demo.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 py-2.5 text-xs font-medium transition-colors ${
                    activeTab === i
                      ? "text-[var(--ink)] border-b-2 border-[var(--honey)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                  aria-pressed={activeTab === i}
                >
                  {demo.tab}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="bg-[var(--paper)]/60">
              <ChatDemo conversation={demos[activeTab]} />
            </div>

            {/* Input placeholder */}
            <div className="px-4 py-3 bg-white border-t border-[var(--line)] flex items-center gap-3">
              <div className="flex-1 bg-[var(--paper)] rounded-full px-4 py-2 text-sm text-[var(--muted)] border border-[var(--line)]">
                Escribe tu pregunta...
              </div>
              <button
                disabled
                className="w-8 h-8 rounded-full bg-[var(--honey)] flex items-center justify-center opacity-50"
                aria-label="Enviar (demo)"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
