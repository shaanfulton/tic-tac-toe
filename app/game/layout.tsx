export default function GameLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="game">
            <div className="game-board">{children}</div>
        </div>
    );
}
