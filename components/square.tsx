import React from "react";

export type SquareValue = "X" | "O" | null;

export interface SquareProps {
    value: SquareValue;
    onSquareClick: () => void;
}

export function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button
            className="w-20 h-20 hover:bg-gray-200 bg-gray-100 border border-gray-300 text-2xl font-bold flex items-center justify-center transition-colors"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
