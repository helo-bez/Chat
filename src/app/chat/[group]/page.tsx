'use client'

import { Button } from "@/components/Atoms/Button"
import { chat } from "@/helpers/chat"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Typing } from "../chatBoxAnimation"
import { useGroupStyles as importedUseGroupStyles } from '../useGroupStyles'
import { group } from "console"
import { twMerge } from "tailwind-merge"
import { Plus, } from "lucide-react"
import { MdEmojiEmotions } from "react-icons/md"
import { IoMdSend } from "react-icons/io"
import { Hacker } from "@/components/Atoms/Hacker"
import clsx from "clsx"
import Link from "next/link"
import ParagraphSelect from "@/components/Molecules/paragraphSelect"
import { Chronometer } from "@/components/Molecules/Chronometer"
import { toast } from 'react-hot-toast';


export default function Chat({ params }: { params: { group: 'Akira' | 'LockBit' | 'REvil' } }) {
  const chatType: any = chat[params.group]
  const [chatPath, setChatPath] = useState<any>(chatType)
  const [selectedOption, setSelectedOption] = useState<string>('')
  const timeLeft = {
    Akira: 4 * 60 * 100,
    LockBit: 4 * 60 * 100,
    REvil: 5 * 60 * 100
  }
  const [showMessage, setShowMessage] = useState<boolean>(true)
  let baseChatArray: string[] = chatType.message
  const [fullChat, setFullChat] = useState<string[]>(chatType.message)

  const { dotColor } = importedUseGroupStyles(params.group);
  const [showTypingAnimation, setShowTypingAnimation] = useState<boolean>(false);
  const [typingIndicator, setTypingIndicator] = useState<boolean>(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const intervalRef = useRef<any>(null);
  //reset
  useLayoutEffect(() => {
    setSelectedOption('')
    setFullChat(chatType.message)
  }, [chatType]);
  useEffect(() => {
    let typingInterval: any;
    if (typingIndicator) {
      typingInterval = setInterval(() => {
        setTypingIndicator((prev) => !prev);
      }, 20);
    } else {
      clearInterval(typingInterval);
    }
    return () => clearInterval(typingInterval);
  }, [typingIndicator]);


  const handleResponse = (option: string) => {
    setShowTypingAnimation(true);
    setResponse(option);
    setSelectedOption('')
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setShowMessage((prevShowMessage) => !prevShowMessage);
    },);
    return () => clearInterval(intervalRef.current);
  }, []);

  const [options, setOptions] = useState<string[]>(Object.keys(chatType.options || {}))
  const [response, setResponse] = useState<string>('')
  const [negotiationFailed, setNegotiationFailed] = useState<boolean>(false)
  const [negotiationSuccessfull, setNegotiationSuccessfull] = useState<boolean>(false)
  useEffect(() => {
    if (response) {
      const pathResponse = chatPath.options[response as any]
      if (pathResponse) {
        if (response) {
          baseChatArray.push(`user_response: ${response}`)
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
              top: chatContainerRef.current.scrollHeight,
              behavior: 'smooth',
            });
          }
          if (pathResponse?.message) {
            pathResponse?.message?.forEach((message: string, index: number) => {
              setTimeout(() => {
                baseChatArray.push(message)
                if (index === (pathResponse?.message.length - 1))
                  setShowTypingAnimation(false);
                if (chatContainerRef.current) {
                  chatContainerRef.current.scrollTo({
                    top: chatContainerRef.current.scrollHeight,
                    behavior: 'smooth',
                  });
                }
              }, 1500 + 1500 * index);
            })
          }
        }
        if (pathResponse?.options) {
          { setOptions(Object.keys(pathResponse?.options) || []) }
        } else {
          setOptions([])
        }
        if (pathResponse?.success === false) {
          setNegotiationFailed(true)
          toast.error('Falha na negociação!', { duration: 1000 })
          setTimeout(() => {
            // window.location.replace(`/notice/fail/${params.group}`)
          }, 5000);
        }
        if (pathResponse?.success === true) {
          setNegotiationSuccessfull(true)
          toast.success('Sucesso na negociação! ', { duration: 1000 })
          setTimeout(() => {
            // window.location.replace(`/notice/success/${params.group}`)
          }, params.group === 'Akira' ? 25000 : 8000);
        }
        setChatPath(pathResponse)
      }
    }

  }, [response])
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleResponse(selectedOption);
    }
  };
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


  return (
    <main className={twMerge(`h-screen mt-[-2rem] bg-gray-middle text-white overflow-scroll pb-36`,
      `${clsx(
        {
          'bg-Akira-600/10': params.group == 'Akira',
          'bg-LockBit-600/10': params.group == 'LockBit',
          'bg-REvil-600/10': params.group == 'REvil',
        })
      }`
    )} style={{}} ref={chatContainerRef} >
      <div className="fixed z-50 -translate-y-1/2 -translate-x-1/2 top-8 left-1/2">
        <Chronometer secondsLeft={timeLeft[params.group]} group={params.group} stop={negotiationSuccessfull || negotiationFailed} />
      </div>

      <section key={params.group} id="chat" className="my-8 w-full h-fit px-6 flex flex-col gap-4 pb-20 pt-4">

        {fullChat.map((message, index) => {
          if (message.includes('user_response: ')) {
            return (
              <div key={index} className="flex items-center justify-end">
                <div className={`text-white p-4 rounded-lg ml-auto max-w-[80vw]
                ${clsx(
                  {
                    'bg-Akira-600': params.group == 'Akira',
                    'bg-LockBit-600': params.group == 'LockBit',
                    'bg-REvil-600': params.group == 'REvil',
                  })}
                `}>
                  {message.replace('user_response: ', '')}
                </div>
                <div className="w-3 overflow-hidden">
                  <div className={`h-4 transform rotate-45 origin-top-left rounded-sm
                ${clsx(
                    {
                      'bg-Akira-600': params.group == 'Akira',
                      'bg-LockBit-600': params.group == 'LockBit',
                      'bg-REvil-600': params.group == 'REvil',
                    })}
                `}></div>
                </div>
              </div>
            )
          }
          return (
            <div key={index} className="flex items-center gap-4">
              <Link href={'/chat'} className="bg-black rounded-full overflow-hidden"
              >
                <Hacker className='h-16 w-16' color={colorGroup(params.group)} />
              </Link>
              <div className="p-4 max-w-[70vw] bg-gray-darkest text-gray-lightly rounded-lg">
                {params.group}: {message}
              </div>
            </div>
          )
        })}
      </section>

      {showTypingAnimation && <div className="fixed bottom-24"><Typing style={{ dotColor }} /></div>}
      <section className="fixed bottom-0 py-4 w-full flex justify-around bg-gray-middle gap-6 items-center px-4">

        <MdEmojiEmotions className="text-3xl" />
        <Plus className="text-3xl" />
        <div className="relative w-full">
          {!negotiationFailed && !negotiationSuccessfull &&
            <ParagraphSelect options={options} onSelect={setSelectedOption} selectedOption={selectedOption} handleKeyDown={handleKeyDown} />
          }
          {negotiationFailed &&
            <div className="animate-fade-up">
              <Button widthStyle="full" styleType="error" onClick={() => {
                window.location.replace(`/notice/fail/${params.group}`)
              }}>Failed</Button>
            </div>
          }
          {negotiationSuccessfull &&
            <div className="animate-fade-up">
              <Button widthStyle="full" styleType="success" onClick={() => {
                window.location.replace(`/notice/success/${params.group}`)
              }}>Success</Button>
            </div>
          }
        </div>
        {/* <select key={options[0]} name="select" className="bg-gray-darkest w-full h-16 rounded-xl px-4 !appearance-none" required
          onChange={(event) => {
            setSelectedOption(event.target.value)
          }}
          onKeyDown={handleKeyDown}
          defaultValue={""}
        >
          <option className="opacity-50" value="" disabled hidden>Digite uma mensagem</option>
          {options.map((option) => {
            return (
              <option key={option} className="py-20 !line-clamp-3" value={option}>
                {option}
              </option>
              // <Button key={`button-${option.length}`} onClick={() => handleResponse(option)} style={{ backgroundColor: buttonColor }}>
              //   {option}
              // </Button>
            )
          })}
        </select> */}
        <IoMdSend className="text-3xl" onClick={() => {
          handleResponse(selectedOption)
        }} />
      </section>
    </main>
  )
}

