"use client";
import { useState, useEffect } from "react";
import { getAllMovies } from "@/lib/movie";
import { Genre } from "@/components/genre";
import Image from "next/image";
import Link from "next/link";

export default function GenrePage ({ params }) {
  const [data, setData] = useState([]);
  const [allMovie, setAllMovie] = useState([]);

  // Menambahkan semua genre ke state genres
  useEffect(() => {
    getAllMovies().then((data) => {
      setData(data.movie.filter((movie) => movie.genre.includes(params.genre)));
      setAllMovie(data.movie);
    });
  }, []);

  return (
    <div
      className={`bg-[#ececec] flex justify-center gap-5 ${
        data.length < 3 ? `h-screen` : `h-full`
      }`}
    >
      <div className="bg-white w-[800px] flex flex-col">
        <h1 className="text-3xl m-8 mb-4">{params.genre}</h1>
        {data.map((data) => (
          <div key={data.id}>
            <div className="flex m-4">
              <div className="mr-5 w-[140px] h-[200px] overflow-hidden">
                <Link href={`/movie/${data.slug}`} className="group ">
                  <Image
                    src={`/posterNarrow/${data.slug}.jpg`}
                    alt={data.title}
                    width={140}
                    height={240}
                    className="hover:scale-125 duration-300"
                  />
                </Link>
              </div>
              <div className="w-[500px]">
                <Link
                href={`/movie/${data.slug}`}
                  key={data.id}
                  className="text-2xl hover:text-orange-500"
                >
                  {data.title}
                </Link>
                <p>{data.release_year}</p>
                <p className="mt-5">
                  {data.synopsis.length > 300
                    ? `${data.synopsis.slice(0, 300)}...`
                    : data.synopsis}
                </p>
              </div>
            </div>
            <hr className="w-4/5 m-auto" />
          </div>
        ))}
      </div>
      <Genre data={allMovie} />
    </div>
  );
}
