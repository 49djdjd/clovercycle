import Image from "next/image";
import Link from "next/link";

export default function Home() {
return (
    <div className="flex min-h-screen flex-col font-sans bg-[#fffdf1]">
    <main className="flex flex-col mx-auto justify-between items-center w-full py-0 bg-[#fffdf1]">
        <ul className = "bg-cover bg-top sticky flex list-none flex-wrap justify-between m-0 p-4 gap-4 w-full"
        style={{ backgroundImage: "url('/images/cloverbg.png')" }}>
        <li><Image src="/images/cloverlogo1.png" alt="clover" width={50} height ={50} className="object-contain"/></li>
        <li><Link href="/"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Home</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Mission</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Research</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Initatives</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Contact Us</Link></li>
        </ul>
    <div>
        <p className="text-base md:text-lg text-black">
            Clovercycle is a student led organization meant to spread awareness about the importance of enviornmental sustanability and it's impact on human health
        </p>
    </div>
    </main>
    </div>

);
}