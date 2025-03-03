import React from "react";

export type SquareValue = "X" | "O" | null;

export interface SquareProps {
    value: SquareValue;
    onSquareClick: () => void;
}

export function Square({ value, onSquareClick }: SquareProps) {
    return (
        <button
            className="text-secondary w-20 h-20 rounded-md hover:bg-gray-800 bg-primary-100 border border-gray-600 text-2xl font-bold flex items-center justify-center transition-colors"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}
