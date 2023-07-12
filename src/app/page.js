"use client";
import { useState, useEffect } from "react";
import { Hero } from "@/components/hero";
import Image from "next/image";
import { getAllMovies } from "@/lib/movie";
import { Featured } from "@/components/featured";
import { Wishlist } from "@/components/wishlist";

export default function Home() {
  const [data, setdata] = useState([])
  
  useEffect(() => {
    getAllMovies().then((data) => {
      setdata(data.movie)
    })
  }, []);

  return (
    <main className="bg-white h-screen">
      <Hero data={data} />
      <Featured data={data}/>
      <Wishlist data={data}/>
    </main>
  );
}
