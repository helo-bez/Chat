'use client'
import { Button } from "@/components/Atoms/Button"
import { TextInput } from "@/components/Organisms/TextInput"
import Cookies from 'js-cookie';
import sign from "jwt-encode";

import { LegacyRef, useEffect, useRef, useState } from "react"
export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoProgress, setVideoProgress] = useState<number>(0)
  const [videoDuration, setVideoDuration] = useState<number>()
  const [videoCurrentTime, setVideoCurrentTime] = useState<number>(0)
  useEffect(() => {
    setVideoDuration(videoRef.current?.duration)
    setVideoCurrentTime(videoRef.current?.currentTime || 0)
  }, [])
  useEffect(() => {
    const currentTime = videoRef.current?.currentTime
    setVideoCurrentTime(currentTime || 0)
    const recall = videoDuration !== null && currentTime !== null

    if (recall) {
      let loadingTimeout = setTimeout(() => {
        if ((videoProgress === Number(currentTime) / Number(videoDuration) || videoProgress === 0) && videoProgress < 1) {
          setVideoProgress((prev) => prev + 0.01)
        } else {
          setVideoProgress(Number(Number(currentTime) / Number(videoDuration) || 0))
        }
      }, 100)

      return () => {
        clearTimeout(loadingTimeout)
      }

    }
  }, [videoProgress, videoDuration])
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  function login() {
    if (password === "eyJSb2024." && user === "Intterconected") {
      const payload = { password, user }
      const token = sign(payload, "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNDY5MTg5MSwiaWF0IjoxNzE0NjkxODkxfQ.gxlcSmpjUszm4E9kv_KhBCkmdtV5v2vbMBFFmgEHlhc", {
        algorithm: 'HS256',
        expiresIn: '1h',
      })
      Cookies.set('token', token, { path: '/', expires: 1 });
      window.location.replace('/help')
    }
  }
  return (
    <main id="home" key={'home'} className="relative flex flex-1 flex-col bg-animated-bg min-h-fit w-full items-center place-items-center">
      <div className="m-auto">
        <div className="w-72 flex flex-col gap-4 px-4 py-8 bg-brand-primary-dark/10 backdrop-blur-sm border-2 rounded-sm border-brand-primary-future-blue-150/50">
          <h1>Login</h1>
          <TextInput.Content className="" >
            <TextInput.Input onChange={(event: any) => setUser(event.target.value)} id={'userName'} className="bg-zinc-900/10 backdrop-blur-md" />
            <TextInput.Label htmlFor={'userName'} placeholder={'User Name'} />
          </TextInput.Content>
          <TextInput.Content className="" >
            <TextInput.Input onChange={(event: any) => setPassword(event.target.value)} type={'password'} id={'passWord'} className="bg-zinc-900/10 backdrop-blur-md" />
            <TextInput.Label htmlFor={'passWord'} placeholder={'Password'} />
          </TextInput.Content>
          <span className="flex justify-end">
            <Button onClick={login}>Login</Button>
          </span>
        </div>
      </div>
    
    </main >
  )
}

