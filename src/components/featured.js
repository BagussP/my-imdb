"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Featured = ({ data }) => {
  return (
    <div className="w-[800px] bg-white mt-5">
      <h1 className="text-3xl font-bold p-4">Featured</h1>
      <div className="grid grid-cols-4 justify-items-center justify-center w-[800px] gap-y-6">
        {data.map((data, index) => (
          <Link
            href={`/movie/${data.slug}`}
            className={`w-[150px] h-[264px] max-w-none translate-x-0 overflow-x-hidden group ${
              index == 8 ? `col-start-2` : index == 9 ? `col-start-3` : ``
            }`}
            key={data.id}
          >
            <div className="w-[150px] max-w-none">
              <div className="h-[240px] overflow-hidden">

              <Image
                className={`w-[150px] h-[240px] translate-x-0 translate-y-0 object-cover group-hover:scale-125 transition-transform`}
                key={data.id}
                src={`/posterNarrow/${data.slug}.jpg`}
                alt={data.title}
                width={150}
                height={240}
                priority={true}
                />
                </div>
              <p
                href={`/movie/${data.slug}`}
                className="w-[400px] max-w-none group-hover:text-orange-500"
              >
                {data.title} ({data.release_year})
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
