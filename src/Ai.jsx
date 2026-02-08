import { useState } from "react";

const images = [
  "https://picsum.photos/id/1011/1400/800",
  "https://picsum.photos/id/1015/1400/800",
  "https://picsum.photos/id/1016/1400/800",
  "https://picsum.photos/id/1018/1400/800",
];

export default function ImageGallery() {
  const [gallery, setGallery] = useState(images);

  const handleClick = (index) => {
    // clicked image ကို front ပြောင်း
    const newArr = [...gallery];
    const selected = newArr.splice(index, 1)[0];
    newArr.unshift(selected);

    setGallery(newArr);
  };

  return (
    <section
      className="h-screen w-full bg-cover bg-center relative transition-all duration-500"
      style={{ backgroundImage: `url(${gallery[0]})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content */}
      <div className="relative z-10 p-10 text-white text-4xl font-bold">
        Welcome to the Model Level App!
      </div>

      {/* thumbnails */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        {gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => handleClick(index)}
            className={`w-28 h-20 object-cover rounded-lg cursor-pointer border-2 
            hover:scale-105 transition 
            ${index === 0 ? "border-yellow-400" : "border-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
