import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export const Genre = ({ data }) => {
  const [genres, setGenres] = useState([]);

  // Menambahkan semua genre ke state genres
  useEffect(() => {
    const allGenres = data.reduce((acc, movie) => {
      movie.genre.forEach((genre) => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []);
    setGenres(allGenres);
  }, [data]);

  return (
    <div className="flex flex-col w-1/4 h-fit pb-10 gap-2 bg-white">
      <h1 className="text-3xl font-bold m-4">Genre</h1>
      {genres.map((genre) => (
        <Link key={genre} href={`/genre/${genre}`} className="hover:text-orange-600 ml-2">{genre}</Link>
      ))}
    </div>
  );
};
