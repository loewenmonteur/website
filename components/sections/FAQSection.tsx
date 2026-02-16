"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-bold text-zinc-300 group-hover:text-white transition-colors pr-8">
          {question}
        </span>
        <span className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? "bg-yellow-500 border-yellow-500 text-black" : "border-zinc-700 text-zinc-500 group-hover:border-yellow-500/50"}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-400 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQSectionProps {
  title?: string;
  items: { question: string; answer: string }[];
}

export default function FAQSection({ title = "Häufige Fragen", items }: FAQSectionProps) {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-12 text-center">
          {title}
        </h2>
        <div className="space-y-2">
          {items.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
