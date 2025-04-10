"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className={styles.page}>
      <button
        style={{ padding: "10px 30px" }}
        onClick={() => setIsVisible(!isVisible)}
      >
        click me
      </button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0 }}
            animate={{ rotate: "1800deg", scale: 1 }}
            exit={{ rotate: "0deg", scale: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
            style={{ width: 200, height: 200, backgroundColor: "red" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
