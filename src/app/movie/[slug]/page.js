"use client";
import { useState, useEffect } from "react";
import { getAllMovies } from "@/lib/movie";
import Image from "next/image";
import { Featured } from "@/components/featured";

export default function movie({ params }) {
  const [data, setdata] = useState([]);
  const [allMovie, setAllMovie] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => {
      setdata(data.movie.find((movie) => movie.slug === params.slug));
      setAllMovie(data.movie);
    });
  }, []);

  const handleWishlist = () => {

    fetch("http://localhost:3000/api/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({data}),
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="bg-primaryBackground flex text-white h-screen">
        <div>
          <Image
            src={`/posterNarrow/${params.slug}.jpg`}
            alt="id"
            width={200}
            height={280}
          />
        </div>
        <div className="w-2/5">
          <div>
            <h1 className="text-4xl">{data.title}</h1>
            <p className="text-gray-500">{data.release_year}</p>
          </div>
          <div className="flex items-center w-[130px]  justify-between mt-5 ">
            <Image src={`/star.webp`} width={50} height={50} alt="star" />
            <div className="text-2xl font-bold flex">
              {data.rating}
              <p className="text-gray-400 font-normal">/10</p>
            </div>
          </div>
          <div className="flex gap-2 ">
            {Array.isArray(data.genre) &&
              data.genre.map((data, index) => {
                return (
                  <p
                    key={index}
                    className="border-2 border-white text-sm px-5 rounded-full"
                  >
                    {data}
                  </p>
                );
              })}
            <button
              onClick={handleWishlist}
              className="bg-red-600 px-5 rounded-full"
            >
              wishlist
            </button>
          </div>
          <p>{data.synopsis}</p>
        </div>
      </div>
      <Featured data={allMovie} />
    </div>
  );
}
