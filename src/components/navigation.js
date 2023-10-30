"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllMovies } from "@/lib/movie";

export const Navigation = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => {
      setData(data.movie);
    }).catch((error) => console.log("error", error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value === "" || value.charAt(0) === " ") {
      setFilter([]);
    } else {
      setFilter(
        data.filter((movie) => {
          return movie.title.toLowerCase().includes(value);
        })
      );
    }
  };

  const handleCLickSearch = () =>{
    setFilter([])
  }

  return (
    <div
      className={`flex w-full justify-between items-center bg-orange-500 z-50`}
    >
      <Link href="/" className="pl-8 pr-4 py-2 text-white text-4xl font-bold">
        BagussP
      </Link>
      <input
        type="text"
        className="h-9 w-[250px] border-black overflow-x-hidden border-2 m-8 rounded-md box-border pl-3"
        onChange={handleSearch}
        placeholder="Search"
      />
      <div className="absolute z-50 right-8 w-[250px] top-16 bg-white flex flex-col overflow-hidden">
        {filter.map((data, index) => (
          <div key={index} className="mt-2 w-[400px] hover:bg-[#ececec]">
            <Link
              onClick={handleCLickSearch}
              href={`/movie/${data.slug}`}
              className="w-[400px] p-3"
            >
              {data.title} ({data.release_year})
            </Link>
            <hr className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
