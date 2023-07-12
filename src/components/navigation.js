import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <div className="flex w-full justify-between items-center bg-secodaryBackground">
        <Link href="/" className="bg-backgroundSearch pl-8 pr-4 py-2">
            <Image src="/logo.png" width={60} height={60} alt="logo" priority={true}/>
        </Link>
        <input type="text" className="h-8 bg-backgroundSearch rounded-md text-white mr-8"/>
    </div>
  );
};
