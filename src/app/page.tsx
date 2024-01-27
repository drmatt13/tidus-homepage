/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import data from "@/app/data";
import Link from "next/link";

function selectRandomIndexFromList(list: Array<any>) {
  return Math.floor(Math.random() * list.length);
}

function generateRandomInteger(min: number, max: number) {
  return Math.floor(min + Math.random() * (max + 1 - min));
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

  const [hue, setHue] = useState<number>(generateRandomInteger(0, 360));

  const [rows, setRows] = useState<Array<typeof data>>([]);

  const mainRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      const row = generateRandomInteger(0, 3);
      const item = generateRandomInteger(0, 6);

      console.log(row, item);
      // select a random item from a random row and animate it
      const element = mainRef.current?.children[row].children[item].firstChild
        ?.firstChild as ChildNode as HTMLElement;
      if (element) {
        element.classList.remove("animate-bounce");
        void element.offsetWidth;
        element.classList.add("animate-bounce");
      }
      console.log(element);
    }, 3000);
  }, []);

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
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60 saturate-150"
        src="/space_-_5200 (540p).mp4"
        style={{
          filter: `hue-rotate(${hue}deg) saturate(1.5)`,
        }}
      />
      <main
        className="w-screen h-screen flex flex-col justify-evenly px-32 py-16 /pulsing-background"
        ref={mainRef}
      >
        <div className="flex-1 w-full flex">
          {rows[0] &&
            rows[0].map((item, index) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 25}ms` }}
              >
                <div className="aspect-square w-[85%] max-h-[80%] transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer delay-[30ms]">
                  <div className="h-full w-full rounded-lg shadow-lg transition-all hover:shadow-xl shadow-black/40 hover:shadow-black/50">
                    <Link href={item.url}>
                      <img
                        src={item.image}
                        alt={"item"}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 w-full flex">
          {rows[1] &&
            rows[1].map((item, index) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 25 + 175}ms` }}
              >
                <div className="aspect-square w-[85%] max-h-[80%] transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer delay-[30ms]">
                  <div className="h-full w-full rounded-lg shadow-lg transition-all hover:shadow-xl shadow-black/40 hover:shadow-black/50">
                    <Link href={item.url}>
                      <img
                        src={item.image}
                        alt={item.url}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 w-full flex">
          {rows[2] &&
            rows[2].map((item, index) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 25 + 350}ms` }}
              >
                <div className="aspect-square w-[85%] max-h-[80%] transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer delay-[30ms]">
                  <div className="h-full w-full rounded-lg shadow-lg transition-all hover:shadow-xl shadow-black/40 hover:shadow-black/50">
                    <Link href={item.url}>
                      <img
                        src={item.image}
                        alt={item.url}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex-1 w-full flex">
          {rows[3] &&
            rows[3].map((item, index) => (
              <div
                key={item.url}
                className="flex-1 flex justify-center items-center animate-fade-in opacity-0 /animate-wiggle-fast"
                style={{ animationDelay: `${index * 25 + 525}ms` }}
              >
                <div className="aspect-square w-[85%] max-h-[80%] transition-all hover:scale-105 hover:duration-100 hover:ease-in duration-300 ease-out hover:-translate-y-1 cursor-pointer delay-[30ms]">
                  <div className="h-full w-full rounded-lg shadow-lg transition-all hover:shadow-xl shadow-black/40 hover:shadow-black/50">
                    <Link href={item.url}>
                      <img
                        src={item.image}
                        alt={item.url}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
