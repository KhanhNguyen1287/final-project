import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Component/Header";
import Banner from "../Component/Banner";
import Category from "../Component/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full">
        <Header />
        <Banner/>
        <Category/>
      </div>
    </>
  );
}

export default App;
