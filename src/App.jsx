import React, { useState, useRef } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./components/ui/draggable-card";


import img1 from "./assets/img1.jpeg"
import img2 from "./assets/img2.jpeg"
import img3 from "./assets/img3.jpeg"
import img4 from "./assets/img4.jpeg"
import img5 from "./assets/img5.jpeg"
import img6 from "./assets/img6.jpeg"
import img7 from "./assets/img7.jpeg"


function App() {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const items = [
    {
      title: "Tyler Durden",
      image: img1,
      className: "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "The Narrator",
      image: img2,
      className: "absolute top-[-5%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "Iceland",
      image: img3,
      className: "absolute top-[-60%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "Japan",
      image: img4,
      className: "absolute top-[-110%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "Norway",
      image: img5,
      className: "absolute top-[-165%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "New Zealand",
      image: img6,
      className: "absolute top-[-220%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    },
    {
      title: "Canada",
      image: img7,
      className: "absolute top-[-275%] left-[50%] -translate-x-1/2 -translate-y-1/2",
    },
  ];

  return (
    <div className="bg-amber-300 h-screen w-screen flex items-center justify-center p-4">

      <DraggableCardContainer ref={containerRef} className="relative w-full max-w-lg h-[600px]">
        {/* Show background text only if not dragging */}
        {!isDragging && (
          <p
            className="absolute top-0 inset-0 flex items-center justify-center text-2xl font-black text-neutral-950 pointer-events-none"
            style={{ opacity: 0.15, zIndex: 0 }}
          >
            Happy Birthday To You.<br/> Kumbhakarna💗<br/>Ik thoda late coz kaam!!!
          </p>
        )}
        <div className="relative z-10 w-full h-full">
          {items.map((item) => (
            <DraggableCardBody
              key={item.title}
              className={item.className}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              dragConstraints={containerRef}
            >
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-60 w-60 object-cover rounded-md"
              />
              <h3 className="mt-2 text-center text-xl font-semibold text-neutral-700">
                {item.title}
              </h3>
            </DraggableCardBody>

          ))}
        </div>
      </DraggableCardContainer>

    </div>
  );
}

export default App;
