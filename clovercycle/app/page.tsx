import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#fffdf1]">
      <main className="flex mx-auto justify-between items-center w-full py-0 bg-[#fffdf1]">
        <ul className = "bg-[#000000] list-none flex justify-between m-0 p-2 gap-4 w-full">
        <li><a href=""className="block text-2xl text-[#258730] p-[10px] ml-1 no-underline hover:bg-[#F7F7D2]">Home</a></li>
        <li><a href=""className="block text-2xl text-[#258730] p-[10px] no-underline hover:bg-[#F7F7D2]">Survey</a></li>
        <li><a href=""className="block text-2xl text-[#258730] p-[10px] no-underline hover:bg-[#F7F7D2]">Research</a></li>
        <li><a href=""className="block text-2xl text-[#258730] p-[10px] no-underline hover:bg-[#F7F7D2]">References</a></li>
        <li><a href=""className="block text-2xl text-[#258730] p-[10px] mr-1 no-underline hover:bg-[#F7F7D2]">Contact Us</a></li>
        </ul>
      </main>
    </div>
  );
}
