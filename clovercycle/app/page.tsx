import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#fffdf1]">
      <main className="flex mx-auto justify-between items-center w-full py-0 bg-[#fffdf1]">
        <ul className = "bg-cover bg-top sticky flex list-none flex-wrap justify-between m-0 p-4 gap-4 w-full"
        //refernced ai for this line
        style={{ backgroundImage: "url('/images/cloverbg.png')" }}>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Home</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Survey</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Research</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">References</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Contact Us</a></li>
        </ul>
      </main>
    </div>
  );
}