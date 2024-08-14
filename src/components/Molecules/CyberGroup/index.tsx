'use client'
export interface CyberGroupDTO {
  messageText: string
}
function colorGroup(group: "Akira" | "LockBit" | "REvil") {
  switch (group) {
    case "LockBit": {
      return '#F90401'
    }
    case "Akira": {
      return '#00FE01'
    }
    case "REvil": {
      return '#0895B6'
    }
  }
}

import Link from 'next/link'
import { Hacker } from '../../Atoms/Hacker'
import { useEffect, useRef, useState } from 'react'
import { ArrowBigLeft } from 'lucide-react'
const message = "Você foi atacado por um grupo de cyber criminosos, escolha o grupo clicando em uma das imagens acima e inicie sua negociação, você será direcionado para um chat, para escolher a sua resposta clique na caixa de mensagem na parte inferior da tela e escolha uma das opções. \n Seja breve você terá pouco tempo."
// const message = ""
export function CyberGroup({ messageText = message }: { messageText: string }) {
  const [messageState, setMessage] = useState<any[]>([])
  const [showMessage, setShowMessage] = useState<boolean>(true)
  const intervalRef = useRef<any>(null);
  useEffect(() => {
    const updateMessage = async () => {
      try {
        const messageArray = message.split('');
        const arrayBase: any[] = []
        for (let i = 0; i < messageArray.length; i++) {
          arrayBase.push(messageArray[i]);
          setMessage(arrayBase);
          try {
            const randomTime = Math.random() * 100
            await new Promise((resolve) => setTimeout(resolve, randomTime));
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    updateMessage();
  }, []);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setShowMessage((prevShowMessage) => !prevShowMessage);
    },);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <article className='flex flex-col'>
      <HackerSectionDesktop />
      <HackerSectionMobile />
      <section id='message-id' className='bg-black border border-green-500 text-green-600 p-5 text-justify'>
        {messageState.map((letter, index) => (
          <b key={index}>{letter}</b>
        ))}
      </section>
    </article>
  )
}

function HackerSectionDesktop() {
  return (
    <section key={'desktop'} className='hidden lg:flex w-full lg:pt-12'>
      <Link href={'/chat/Akira'} className='flex-1 group text-center cursor-pointer'>
        <h4 className='opacity-0 group-hover:opacity-100 group-hover:animate-fade-down text-Akira text-2xl'>Akira</h4>
        <Hacker className='flex-1' color={colorGroup('Akira')} />
      </Link>
      <Link href={'/chat/LockBit'} className='flex-1 group text-center cursor-pointer lg:-translate-y-12 translate-y-0'>
        <h4 className='opacity-0 group-hover:opacity-100 group-hover:animate-fade-down text-LockBit text-2xl'>Lockbit</h4>
        <Hacker className='flex-1' color={colorGroup('LockBit')} />
      </Link>
      <Link href={'/chat/REvil'} className='flex-1 group text-center cursor-pointer'>
        <h4 className='opacity-0 group-hover:opacity-100 group-hover:animate-fade-down text-REvil text-2xl'>REvil</h4>
        <Hacker className='flex-1' color={colorGroup('REvil')} />
      </Link>
    </section>
  )
}
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function HackerSectionMobile() {
  const [page, setPage] = useState<number>(0)
  const HandleSetPage = (progress: 'next' | 'back' = 'next') => {
    switch (progress) {
      case 'next': {
        setPage(prevPage => ((prevPage + 1)))
        break
      }
      case 'back': {
        setPage(prevPage => ((prevPage - 1)))
        break
      }
    }
  }
  return (
    <section key={'mobile'} className='lg:hidden flex w-full lg:pt-12 relative'>
      <button className='absolute w-1/5 min-h-full flex justify-center items-center ' onClick={() => { HandleSetPage('back') }}><MdOutlineKeyboardArrowLeft className='text-5xl text-gray-blue rounded' /></button>
      <h2 className='absolute text-center -top-16 sm:text-3xl w-full font-bold text-brand-secondary-turquoise-100'>Escolha o grupo para simular a conversa</h2>
      {Math.abs(page % 3) === 0 &&
        <div className='flex-1 group text-center cursor-pointer px-16 sm:px-36'>
          <Link href={'/chat/Akira'}>
            <Hacker className='flex-1' color={colorGroup('Akira')} />
          </Link>
          <h4 className='text-Akira text-2xl'>Akira</h4>
        </div>

      }
      {Math.abs(page % 3) === 1 &&
        <div className='flex-1 group text-center cursor-pointer lg:-translate-y-12 px-16 sm:px-36'>
          <Link href={'/chat/LockBit'}>
            <Hacker className='flex-1' color={colorGroup('LockBit')} />
          </Link>
          <h4 className='text-LockBit text-2xl'>Lockbit</h4>
        </div>
      }
      {Math.abs(page % 3) === 2 &&
        <div className='flex-1 group text-center cursor-pointer px-16 sm:px-36'>
          <Link href={'/chat/REvil'}>
            <Hacker className='flex-1' color={colorGroup('REvil')} />
          </Link>
          <h4 className='text-REvil text-2xl'>REvil</h4>
        </div>
      }
      <button className='absolute w-1/5 right-0 min-h-full flex justify-center items-center ' onClick={() => { HandleSetPage('next') }}><MdOutlineKeyboardArrowRight className='text-5xl text-gray-blue rounded' /></button>
    </section>
  )
}