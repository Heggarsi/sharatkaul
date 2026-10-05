import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 240);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 w-11 h-11 rounded-full bg-[#0D1117]/90 hover:bg-[#151A22] border border-[#1F2633] hover:border-[#6FA8FF] text-[#A8B0BA] hover:text-[#6FA8FF] shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6FA8FF]"
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
}
