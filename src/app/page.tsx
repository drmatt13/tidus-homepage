/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import data from "@/app/data";
import Link from "next/link";

function selectRandomIndexFromList(list: Array<any>) {
  return Math.floor(Math.random() * list.length);
}

export default function Home() {
  const [backgroundColors, setBackgroundColors] = useState<Array<string>>([
    "#3d8dd8",
    "#6f40d3",
    "#d78ee0",
    "#da4848",
    "#f5a623",
    "#d2c429",
    "#4cd964",
    "#45c05a",
    "#5ac8fa",
  ]);

  const [rows, setRows] = useState<Array<typeof data>>([]);

  useEffect(() => {
    // randomize the data order
    const shuffled = data.sort(() => 0.5 - Math.random());
    // i need 2 dimensional array of length 4 with 7 items each, so i can map it to 4 rows of 7 items, but i dont want duplicate items in each row
    const rows = [];
    for (let i = 0; i < 4; i++) {
      rows.push(shuffled.slice(i * 7, i * 7 + 7));
    }
    console.log(rows);
    setRows(rows);
  }, []);

  const randomIndex = selectRandomIndexFromList(backgroundColors);

  return (
    <>
      <style jsx global>{`
        .pulsing-background {
          background-color: ${backgroundColors[randomIndex]};
          animation: pulse 5s infinite ease-in;
        }
        @keyframes pulse {
          0%,
          100% {
            background-color: ${backgroundColors[randomIndex]}e0;
          }
          50% {
            background-color: ${backgroundColors[randomIndex]}88;
          }
        }
      `}</style>
      {/* create video background */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/prism-background.mp4"
      /> */}
      <main className="w-screen h-screen flex flex-col justify-evenly px-32 py-16 pulsing-background">
        <div className="flex-1 w-full flex">
          {rows[0] &&
            rows[0].map((item) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in"
              >
                <div className="aspect-square w-[85%] max-h-[80%] rounded-lg shadow-lg hover:shadow-xl shadow-black/40 hover:shadow-black/50 transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                  <Link href={item.url}>
                    <img
                      src={item.image}
                      alt="Picture of the author"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 w-full flex">
          {rows[1] &&
            rows[1].map((item) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in"
              >
                <div className="aspect-square w-[85%] max-h-[80%] rounded-lg shadow-lg hover:shadow-xl shadow-black/40 hover:shadow-black/50 transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                  <Link href={item.url}>
                    <img
                      src={item.image}
                      alt="Picture of the author"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 w-full flex">
          {rows[2] &&
            rows[2].map((item) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in"
              >
                <div className="aspect-square w-[85%] max-h-[80%] rounded-lg shadow-lg hover:shadow-xl shadow-black/40 hover:shadow-black/50 transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                  <Link href={item.url}>
                    <img
                      src={item.image}
                      alt="Picture of the author"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 w-full flex">
          {rows[3] &&
            rows[3].map((item) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in"
              >
                <div className="aspect-square w-[85%] max-h-[80%] rounded-lg shadow-lg hover:shadow-xl shadow-black/40 hover:shadow-black/50 transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer">
                  <Link href={item.url}>
                    <img
                      src={item.image}
                      alt="Picture of the author"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
