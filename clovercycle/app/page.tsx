import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[#fffdf1]">
      <main className="flex flex-col mx-auto justify-between items-center w-full py-0 bg-[#fffdf1]">
        <ul className = "bg-cover bg-top sticky flex list-none flex-wrap justify-between m-0 p-4 gap-4 w-full"
        //refernced ai for this line
        style={{ backgroundImage: "url('/images/cloverbg.png')" }}>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2"><img src="/images/cloverlogo.png" className="w-[50px] h-[50px] object-contain"/></a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Home</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Survey</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Research</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">References</a></li>
        <li><a href=""className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Contact Us</a></li>
        </ul>
        {/* //reference ai for this div (needed help making it appear with tailwind) */}
        <div className="flex justify-center items-center p-8">
          <blockquote className="instagram-media mx-auto my-px min-w-[326px] max-w-[540px] w-[calc(100%-2px)] rounded border-0 bg-white p-0 shadow-[0_0_1px_0_rgba(0,0,0,0.5) 0_1px_10px_0_rgba(0,0,0,0.15)]" data-instgrm-permalink="https://www.instagram.com/embroidery_for_everyone/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14"></blockquote>
        </div>
      </main>
    </div>
  );
}