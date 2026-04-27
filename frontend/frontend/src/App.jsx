import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, []);
    
    return (
        <div className="">
             {data}
        </div>
    )
}

export default App
