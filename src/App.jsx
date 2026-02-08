import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import ImageGallery from "./Ai";
import AiClone from "./AiClone";
import Ch1Card from "./Ch1Card";
import GameCardSVG from "./GameCard";

export default function App() {

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [number, setNumber]= useState(1);
  const [move, setMove]= useState(0);
  const [message, setMessage]= useState("");

  useEffect(async () => {
    const res= await fetch("https://pg-sql-test.onrender.com/");
    const data= await res.json();

    setMessage(data);
  }, [])

  useEffect(() => {
    const height = headerRef.current ? headerRef.current.offsetHeight : 0;
    setHeaderHeight(height);
  }, []);

  const moveto= (num) => {
    console.log(num);
    console.log(move);
    if (num <= 7) {
      setNumber(num);
      setMove(m => m + 161);
    } else {
        setNumber(1);
        setMove(m => m - (m * 2));
    }
  }
  return (
    <div className="overflowY-hidden">
      <header ref={headerRef} className="w-full bg-[#222] px-20 py-4 text-white text-lg font-semibold sticky top-0 z-10 flex justify-between items-center shadow-md">
        <h3>Model level header!</h3>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
      
      <main className="flex justify-center gap-6">
        <aside className="w-1/4 bg-[#333]" style={{ height: `calc(100vh - ${headerHeight}px)`}}>

        </aside>
        <article className="w-3/4 p-6" style={{ height: `calc(100vh - ${headerHeight}px)`, overflowY: 'auto' }}>
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to the Model Level App! & ${message}
          </h1>

          <section className="w-full px-2 py-10 md:py-20 rounded-md flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-500">
            <div>
              <h2 className="text-5xl font-bold text-gray-200 mb-4">Hello, My name is Kyaw Zin Win!</h2>
            <p className="text-xl mb-3">Aspiring Senior Frontend Developer | 3D & Creative Web</p>
            <button className="px-6 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white">Views my Project!</button>
            </div>
          </section>
          <GameCardSVG />
          <ImageGallery />

          <AiClone />
          
          <Ch1Card />
        </article>
      </main>
      <footer className="w-full bg-[#222] m-0 px-20 py-3 text-white text-center">
        <p>Model level footer!</p>
      </footer>
    </div>
  );
}