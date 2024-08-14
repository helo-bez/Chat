'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

export function Chronometer({ secondsLeft = 60000 /**10 minutos em segundos**/, group, stop }: { secondsLeft?: number, group?: 'Akira' | 'LockBit' | 'REvil', stop?: boolean }) {
  const [timeRemaining, setTimeRemaining] = useState(secondsLeft);
  const [colorAlert, setColorAlert] = useState<'bg-brand-attention-orange-150 text-brand-attention-orange' | 'bg-brand-attention-yellow text-brand-attention-orange-100' | 'bg-gray-middle text-gray'>('bg-gray-middle text-gray'); // 10 minutos em segundos
  const formattedTime = () => {
    const minutes = Math.floor(timeRemaining / 6000);
    const seconds = Math.floor(Math.floor(timeRemaining % 6000) / 100);
    const ms = Math.floor(timeRemaining % 1000);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;
  };
  const router = useRouter()
  useEffect(() => {

    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        if (!stop) setTimeRemaining((prevTime) => prevTime - 1);
        if (timeRemaining < secondsLeft / 4) {
          setColorAlert('bg-brand-attention-orange-150 text-brand-attention-orange')
        } else if (timeRemaining < secondsLeft / 2) {
          setColorAlert('bg-brand-attention-yellow text-brand-attention-orange-100')
        }

      } else {
        // Ações a serem realizadas quando a contagem regressiva termina
        router.push(`/notice/fail/${group}`)
      }
    }, 10);

    return () => clearInterval(interval);
  }, [timeRemaining]);
  return (
    <div id="countdown" className={`${colorAlert} w-fit rounded px-4 py-1 transition-colors duration-300`}>
      <div id="time-display" className='font-extrabold'>{formattedTime()}</div>
    </div>
  )
}

