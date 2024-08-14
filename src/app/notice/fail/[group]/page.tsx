'use client'

import { LineChart } from "lucide-react"
import Image from "next/image";
import { BiLineChartDown } from "react-icons/bi";
import acmeLogo from "../../../../../public/acme_logo.svg"
import Akira from "../../../../../public/akira.logo.png"
import LockBit from "../../../../../public/lockbit.logo.png"
import REvil from "../../../../../public/revil.logo.png"
import jshop from "../../../../../public/jshop.png"
import identify from "../../../../../public/identify.png"
import fail from "../../../../../public/fail.png"
export default function Chat({ params }: { params: { group: 'Akira' | 'LockBit' | 'REvil' } }) {
  const image = {
    Akira,
    LockBit,
    REvil,
  }
  return (
    <main className="flex flex-1 min-h-fit bg-animated-bg text-yellow-100 px-16">
      {/* <section className="bg-gray-middle/60 backdrop-blur-md pt-8 flex flex-col gap-8 w-full animate-jump-in">
        <h2 className="text-center font-semibold text-8xl px-8">DIÁRIO DE AMANHÃ</h2>
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-4" >
            <hr className="border-2 border-black rounded w-full" />
            <h3 className="w-[30rem] text-center">Notícias de hoje amanhã e notícias de ontem hoje</h3>
            <hr className="border-2 border-black rounded w-full" />
          </div>
          <section id="menu-section" className="flex gap-8 pb-4">
            <div className="flex w-full justify-around items-center">
              <div className="flex gap-2 items-center">
                <b>ACME</b>
                <BiLineChartDown className="w-10 h-10 text-red-600" />
              </div>

              <div className="flex gap-2 items-center">
                <b>STC</b>
                <LineChart className="w-10 h-10 text-green-600" />
              </div>

              <div className="flex gap-2 items-center">
                <b>OURO</b>
                <LineChart className="w-10 h-10 text-green-600" />
              </div>
              <div className="flex gap-2 items-center">
                <b>Carvão</b>
                <BiLineChartDown className="w-10 h-10 text-red-600" />
              </div>
            </div>
            <div className="flex w-[30rem]">

            </div>
            <div className="flex w-full justify-around items-center">
              <div className="flex gap-2 items-center">
                <b>CHURROS</b>
                <LineChart className="w-10 h-10 text-green-600" />
              </div>

              <div className="flex gap-2 items-center">
                <b>CAFÉ</b>
                <LineChart className="w-10 h-10 text-green-600" />
              </div>

              <div className="flex gap-2 items-center">
                <b>CEVADA</b>
                <LineChart className="w-10 h-10 text-green-600" />
              </div>
             
            </div>

          </section>
          <hr className="border-2 border-black rounded w-full" />
        </section>

        <section className="flex items-center px-4">
          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <h4 className="font-bold text-red-600 text-5xl">Breaking News</h4>
              <h5 className="text-2xl">CEO da ACME Industries confirma atque Hacker</h5>
            </div>
            <p className="text-justify text-2xl indent-2 py-2">
              Na manhã desta segunda feira o CEO da ACME Industries, Léguas Colot, informou que a empresa foi vítima de um ataque hacker, confirmando os rumores do mercado. A empresa está com todas as suas operações paradas por mais de uma semana. Léguas informou ainda que dados pessoais de mais de 40.000 funcionários e 500.000 clientes podem ter sido roubados, ele também informou que o incidente da fábrica da ACME também foi consequências do ataque, o número total de vítimas ainda não foi informado pois pessoas ainda tentam escapar da fábrica.
            </p>
            <p className="text-justify text-2xl indent-2 py-2">
              Analistas estimam mais de um bilhão de prejuízo até o momento, alguns deles questionam a capacidade de recuperação da empresa já que as ações caíram mais de 70% na ultima semana, eles afirmam que o tempo para recuperar os sistemas é crucial para a sobrevivência da empresa.
            </p>
          </div>
          <Image className="h-full" src={acmeLogo} alt="acme logo" />
        </section>
        <div className="flex items-center gap-4" >
          <hr className="border-2 border-black rounded w-full" />
          <h3 className="w-[15rem] text-center">Publicidade Dark</h3>
          <hr className="border-2 border-black rounded w-full" />
        </div>
        <section className="flex w-full justify-between pb-4">
          <Image className="w-[30%]" src={image[params.group]} alt="acme logo" />
          <Image className="w-[30%]" src={jshop} alt="acme logo" />
          <Image className="w-[30%]" src={identify} alt="acme logo" />
        </section>
      </section> */}
      <Image src={fail} alt="sucesso" />
    </main>
  )
}

