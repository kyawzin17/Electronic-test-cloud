import React from "react";
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import image4 from "./image/image5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Ch1Card() {


    return (
        <section className="w-full h-full relative bg-gradient-to-r from-sky-300 to-blue-600">
            <h2 className="relative z-10 font-bold text-4xl text-white/90 select-none p-2">Welcome, My chapter 1 exam!</h2>
            <div className="absolute w-full md:w-3/4 lg:w-2/3 top-1/2 left-1/2 -translate-1/2 bg-black/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-400">
                <div className="min-w-50 bg-white/70 rounded-md border border-2 border-white/80 shadow-[0px 0px 5px #333] p-2 hover:scale-104 transition-all duration-400">
                    <div className="w-full h-30 bg-cover bg-center shadow-[0px -10px 50px #f1f1f1 insert" style={{backgroundImage: `url(${image2})`}}>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 py-2">
                        This is card 1!
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 mt-1">
                        This is card 1 for my chapter 1 exam! You know about me, I'm a fontend developer!
                    </p>
                    <div className="flex gap-2">
                        <div className="flex gap-1px">
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                        </div>
                        <div className="w-fit bg-sky-500 text-white text-sm p-0.5 rounded-md">
                            Reviews
                        </div>
                    </div>
                    <button className="w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white/90 text-md font-semibold cursor-pointer rounded-md mt-3">
                        Click Me!
                    </button>
                </div>
                <div className="min-w-50 bg-white/70 rounded-md border border-2 border-white/80 shadow-[0px 0px 5px #333] p-2 hover:scale-104 transition-all duration-400">
                    <div className="w-full h-30 bg-cover bg-center shadow-[0px -10px 50px #f1f1f1 insert" style={{backgroundImage: `url(${image3})`}}>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 py-2">
                        This is card 1!
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 mt-1">
                        This is card 1 for my chapter 1 exam! You know about me, I'm a fontend developer!
                    </p>
                    <div className="flex gap-2">
                        <div className="flex gap-1px">
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                        </div>
                        <div className="w-fit bg-sky-500 text-white text-sm p-0.5 rounded-md">
                            Reviews
                        </div>
                    </div>
                    <button className="w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white/90 text-md font-semibold cursor-pointer rounded-md mt-3">
                        Click Me!
                    </button>
                </div>
                <div className="min-w-50 bg-white/70 rounded-md border border-2 border-white/80 shadow-[0px 0px 5px #333] p-2 hover:scale-104 transition-all duration-400">
                    <div className="w-full h-30 bg-cover bg-center shadow-[0px -10px 50px #f1f1f1 insert" style={{backgroundImage: `url(${image4})`}}>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 py-2">
                        This is card 1!
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 mt-1">
                        This is card 1 for my chapter 1 exam! You know about me, I'm a fontend developer!
                    </p>
                    <div className="flex gap-2">
                        <div className="flex gap-1px">
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                            <FontAwesomeIcon icon={faStar} size="md" />
                        </div>
                        <div className="w-fit bg-sky-500 text-white text-sm p-0.5 rounded-md">
                            Reviews
                        </div>
                    </div>
                    <button className="w-full text-center py-2 bg-blue-600 hover:bg-blue-700 text-white/90 text-md font-semibold cursor-pointer rounded-md mt-3">
                        Click Me!
                    </button>
                </div>
                
            </div>
        </section>
    )
}
