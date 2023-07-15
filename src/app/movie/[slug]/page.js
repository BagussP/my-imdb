"use client";
import { useState, useEffect } from "react";
import { getAllMovies } from "@/lib/movie";
import Image from "next/image";
import { Featured } from "@/components/featured";
import { Genre } from "@/components/genre";
import Link from "next/link";


export default function MoviePage({ params }) {
  const [data, setData] = useState([]);
  const [allMovie, setAllMovie] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => {
      setData(data.movie.find((movie) => movie.slug === params.slug));
      setAllMovie(data.movie);
    });
  }, []);

  return (
    <div className="bg-[#ececec] flex justify-center gap-5 ">
      <div className="">
        <div className="flex bg-white w-[800px] h-fit py-10">
          <div className="ml-5 mr-10">
            <Image
              src={`/posterNarrow/${params.slug}.jpg`}
              alt="id"
              width={200}
              height={280}
            />
          </div>
          <div className="w-3/5">
            <div>
              <h1 className="text-4xl">{data.title}</h1>
              <p className="text-gray-500">{data.release_year}</p>
            </div>
            <div className="flex items-center w-[130px]  justify-between mt-5 ">
              <Image src={`/star.webp`} width={50} height={50} alt="star" />
              <div className="text-2xl font-bold flex">
                {data.rating}
                <p className="text-gray-500 font-normal">/10</p>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              {Array.isArray(data.genre) &&
                data.genre.map((data, index) => {
                  return (
                    <Link
                    href={`/genre/${data}`}
                      key={index}
                      className="border-2 border-black text-sm px-5 rounded-full"
                    >
                      {data}
                    </Link>
                  );
                })}
            
            </div>
            <p className="mt-5 indent-8">{data.synopsis}</p>
          </div>
        </div>
        <Featured data={allMovie} />
      </div>
      <Genre data={allMovie} />
    </div>
  );
}
