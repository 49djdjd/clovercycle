import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
    //refernced ai for this line
    <>
    <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive"/>
    <div className="flex min-h-screen flex-col font-sans bg-[#fffdf1]">
      <main className="flex flex-col mx-auto justify-between items-center w-full py-0 bg-[#fffdf1]">
        <ul className = "bg-cover bg-top sticky flex list-none flex-wrap justify-between m-0 p-4 gap-4 w-full"
        //refernced ai for this line
        style={{ backgroundImage: "url('/images/cloverbg.png')" }}>
        <li><Image src="/images/cloverlogo1.png" alt="clover" width={50} height ={50} className="object-contain items-center"/></li>
        <li><Link href="/"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Home</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Mission</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Research</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Initatives</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Contact Us</Link></li>
        </ul>
        {/* //reference ai for this div (needed help making it appear with tailwind) */}
        {/* <div className="flex justify-center items-center p-12">
          <blockquote className="instagram-media transform scale-110 md:scale-150 mx-auto my-px min-w-[506px] max-w-[800px] w-full rounded border-0 bg-white p-0 shadow-[0_0_1px_0_rgba(0,0,0,0.5),0_1px_10px_0_rgba(0,0,0,0.15)]" data-instgrm-permalink="https://www.instagram.com/embroidery_for_everyone/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14"></blockquote>
          <a href="https://ww.instgram.com/embroidery_for_everyone/"></a>
        </div> */}
        <div className ="flex flex-col w-full items-center relative px-5 -mt-3">
          {/*referenced ai for help with the svg*/}
        <svg
        viewBox="0 0 300 130"
        className="w-full h-auto"
      >
        <path
          id="arc"
          d="M10,180 A140,140 0 0,1 290,180"
          fill="none"
        />
        <text
          fontSize="32"
          fill="#258730"
          fontWeight="700"
        >
          <textPath
            href="#arc"
            startOffset="50%"
            textAnchor="middle"
          >
            Live Green. Live Well.
          </textPath>
        </text>
      </svg>
      <Image src="/images/clovercyclelogo.png" alt="logo with name" width={500} height={500} className="object-contain ml-6 flex sm:-mt-[150px] md:-mt-[200px] lg:-mt-[450px] w-[150px] sm:w-[300px] lg:w-[500px]"></Image>
        </div>
      </main>
    </div>
    </>
  );
}