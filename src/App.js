import './App.css';
import React,{useState,useEffect} from "react";
import Cover from "./Components/CoverComponent";
import WebLayout from "./Components/WebLayout";

function App() {

    const [showCover, setShowCover] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCover(false);
        }, 5000); // 5 seconds

        // Cleanup the timer if the component is unmounted
        return () => clearTimeout(timer);
    }, []);

    return (
    <div className="App">
        {showCover ? <Cover /> : <WebLayout />}
    </div>
  );
}

export default App;
