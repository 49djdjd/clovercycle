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
        <li><Link href="/research"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Research</Link></li>
        <li><Link href="/initiatives"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Initatives</Link></li>
        <li><Link href="/mission"className="block text-base md:text-2xl text-[#258730] p-2 md:p-[10px] ml-2 hover:scale-105">Contact Us</Link></li>
        </ul>
    <div>
        <h1 className="justify-center flex m-5 text-5xl text-[#258730]">Initiatives</h1>
        <div className="rounded-2xl ml-20 mr-20 p-4 bg-[#deeec9]">
        <p className="md:text-lg text-2xl text-black m-t">CloverCycle aims to spread awareness of practicing sustainable habits and its impact on our local community. We aim to inform Syosset of ways to contribute to sustainable living, so we can conserve natural resources and  protect the planet!</p>
        </div>
    </div>
    <div>
        <h2 className="justify-center flex m-5 text-5xl text-[#258730]">Survey Results</h2>
        <div className="rounded-2xl ml-20 mr-20 p-4 bg-[#deeec9]">
        <p className="md:text-lg text-2xl text-black m-t">We used google forms to create a survey which we then sent out to our local community through social media apps. The results are displayed below.</p>
        </div>
    </div>
    </main>
    </div>

);
}