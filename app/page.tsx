"use client";

import { useState } from "react";
import { Board, Squares } from "@/components/board";
import { Button } from "@/components/ui/button";

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

    function resetGame() {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return (
        <div className="min-w-[250px] flex flex-col gap-8 justify-center items-center p-4">
            <div className="flex flex-row md:flex-row gap-8 justify-center items-center p-4">
                <div className="flex flex-col items-start gap-4 mt-8">
                    <Board
                        xIsNext={xIsNext}
                        squares={currentSquares}
                        onPlay={handlePlay}
                    />
                </div>
            </div>
            <Button variant="secondary" onClick={resetGame}>
                Reset Game
            </Button>
        </div>
    );
}
