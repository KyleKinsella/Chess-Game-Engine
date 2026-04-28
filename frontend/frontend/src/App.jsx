import { useState, useEffect } from "react";

function App() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/")
            .then(res => res.json())
            .then(data => {
                setBoard(data);
            })
    }, []);
    
    return (
        <div>
          {board.map((b, i) => (       
            <div key={i}>
                <>
                    <div>
                        <p>{b + ""}</p>
                    </div>
                </>
            </div>
          ))}       
        </div>
    )
}

export default App
