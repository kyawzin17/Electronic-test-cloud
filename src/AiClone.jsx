import React, { useState } from "react";
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import image4 from "./image/image4.jpg";
import image5 from "./image/image5.jpg";
import image6 from "./image/image6.jpg";
import image7 from "./image/image7.jpg";

const images= [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6, 
    image7
];

export default function AiClone() {
    const [newImage, setNewImage] = useState(images);

    const imageChange= (index) => {
        if (index === 0) return;
        const newImg= [...newImage];
        //const img= newImg.splice(index, 1)[0];
        const fontImg= newImg.shift();
        //newImg.unshift(img);
        newImg.push(fontImg);
        setNewImage(newImg);
    }
    return (
        <section className="w-full h-full relative bg-no-repeat bg-center transition-all duration-400" style={{backgroundImage: `url(${newImage[0]})`}}>
            <div className="absolute inset-0 bg-black/10">
                <h2 className="text-3xl font-bold text-white/90 relative p-2 z-10">Welcome, My ai clone page!</h2>
                <div className="w-50 h-auto absolute right-3 bottom-3 flex flex-nowrap gap-6 z-10 overflow-hidden">
                    {newImage.map((img, index) => (
                        <img key={index} src={img}
                                onClick={() => imageChange(index)} className={`w-30 h-auto ${index === 0 ? "border-yellow-600" : "border-black" } rounded-md border cursor-pointer transition-all duration-400`}/>
                    ))}
                </div>
            </div>
        </section>
    )
}