'use client'
import { CyberGroup } from "@/components/Molecules/CyberGroup";
import Header from "@/components/Organisms/Header";

export default function Chat() {
  return (
    <main id="chat" key={'chat'}  className="flex flex-1 min-h-fit bg-animated-bg text-white">
      <section className="
      m-auto 
      transition-none 
      duration-0  
      px-6 lg:px-0 
      w-screen lg:w-[840px] 
      text-xl 
      lg:-translate-y-12
      ">
        <CyberGroup messageText={``} />
      </section>
    </main>
  )
}

