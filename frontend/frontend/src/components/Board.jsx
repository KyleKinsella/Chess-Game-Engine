function Board() {
    return (
        // 
        <div className="board">
            {Array.from({ length: 8 }, (_, row) => (
                <div key={row} className="board-row" display="inline-flex">
                    {Array.from({ length: 8 }, (_, col) => (
                        <div key={col + row + ''} className="square" display="inline-flex">
                            <p>some text</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;