import { useState, useEffect } from "react";
//import "./main.css"

const countDown = (max) => {
    var data = [];
    for (var i = max; i > 0; i--) {
        data.push(i);
        console.log(i);
    }
}

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
            <div key={i} className="board">
                <>
                    <div className="square">
                        <p>{b}</p>
                    </div>
                </>
            </div>
          ))}
        </div>
    )
}

export default App
