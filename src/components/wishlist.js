import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Wishlist = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex + 800);
    if (currentIndex >= 0) {
      setCurrentIndex(-7200);
    }
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex - 800);
    if (currentIndex <= -7200) {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevCount) => {
        const updatedCount = prevCount - 800;
        return updatedCount <= -7200 ? 0 : updatedCount;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-[800px] overflow-x-hidden">
      {data.map((data) => (
        <Link href={`/movie/${data.slug}`} className="w-[800px]" key={data.id}>
          <Image
            className="w-[800px] h-[511.11px] max-w-none duration-300 translate-x-0"
            key={data.id}
            src={`/posterWide/${data.slug}.jpg`}
            alt={data.title}
            width={800}
            height={511.11}
            priority={true}
            style={{
              transform: `translateX(${currentIndex}px)`,
            }}
          />
        </Link>
      ))}

      <button
        onClick={handlePrevious}
        className="absolute mt-[228px] bg-backgroundSearch bg-opacity-60 border-white border-2 text-white px-2 pb-3 ml-2 text-4xl font-extrabold"
      >
        &#60;
      </button>
      <button
        onClick={handleNext}
        className="absolute mt-[228px] bg-backgroundSearch bg-opacity-60 border-white border-2 text-white px-2 pb-3 ml-[748px] text-4xl font-extrabold"
      >
        &#62;
      </button>

      <div className="absolute  mt-[460px] ml-[284px]">
        <div className="gap-2 flex justify-between">
          {data.map((data, index) => (
            <button
              key={data.id}
              className={
                index * -800 == currentIndex
                  ? `bg-red-600 p-2`
                  : `bg-green-600 p-2`
              }
              onClick={() => {
                setCurrentIndex(index * -800);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
