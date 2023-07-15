"use client";
import { useState, useEffect } from "react";
import { Hero } from "@/components/hero";
import Image from "next/image";
import { getAllMovies } from "@/lib/movie";
import { Featured } from "@/components/featured";
import { Genre } from "@/components/genre";

export default function Home() {
  const [data, setdata] = useState([])
  
  useEffect(() => {
    getAllMovies().then((data) => {
      setdata(data.movie)
    })
  }, []);

  return (
    <main className="bg-[#ececec] justify-center gap-5 flex">
      <div className="">
      <Hero data={data} />
      <Featured data={data}/>
      </div>
      <Genre data={data}/>
    </main>
  );
}
