"use client";

import { useState } from "react";
import { Board, Squares } from "../../components/board";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Game() {
    const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: Squares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button
                    className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 mb-1"
                    onClick={() => jumpTo(move)}
                >
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div className="flex flex-col  gap-8 justify-center items-center p-4">
            <div className="flex flex-row md:flex-row gap-8 justify-center items-center p-4">
                <div className="flex flex-col items-center gap-4 mt-8">
                    <Board
                        xIsNext={xIsNext}
                        squares={currentSquares}
                        onPlay={handlePlay}
                    />
                </div>
                <div className="mt-4 md:mt-0">
                    <ol className="list-decimal pl-5 mt-2">{moves}</ol>
                </div>
            </div>
            <Button asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}
