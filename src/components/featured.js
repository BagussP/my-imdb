"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Featured = ({ data }) => {
  return (
    <div className="grid grid-cols-4 justify-items-center justify-center w-[800px] ">
      {data.map((data, index) => (
        <Link
          href={`/movie/${data.slug}`}
          className={`w-[150px] h-[300px] max-w-none translate-x-0 overflow-x-hidden ${
            index == 8 ? `col-start-2` : index == 9 ? `col-start-3` : ``
          }`}
          key={data.id}
        >
          <div className="w-[150px] max-w-none">
            <Image
              className={`w-[150px] h-[240px] max-w-none translate-x-0 ${
                index == 8 ? `col-start-2` : index == 9 ? `col-start-3` : ``
              }`}
              key={data.id}
              src={`/posterNarrow/${data.slug}.jpg`}
              alt={data.title}
              width={140}
              height={240}
              priority={true}
            />
            <p href={`/movie/${data.slug}`} className="w-[400px] max-w-none">
              {data.title} ({data.release_year})
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};
