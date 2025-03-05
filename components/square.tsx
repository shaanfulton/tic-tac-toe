import React from "react";
import { motion } from "framer-motion";
export type SquareValue = "X" | "O" | null;

export interface SquareProps {
    value: SquareValue;
    onSquareClick: () => void;
}

export function Square({ value, onSquareClick }: SquareProps) {
    return (
        <motion.button
            className="text-white h-16 w-16 sm:w-20 sm:h-20 rounded-md 
                     bg-[#1a1a1a] border-[1px] border-[#333333]
                     
                     text-2xl font-bold flex items-center justify-center"
            onClick={onSquareClick}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {value}
        </motion.button>
    );
}
