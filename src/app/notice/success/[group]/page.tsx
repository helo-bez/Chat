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
import success from "../../../../../public/success.png"
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
              <h5 className="text-2xl">ACME RETORNA SUAS OPERAÇÕES</h5>
            </div>
            <p className="text-justify text-2xl indent-2 py-2">
              Após mais de uma semana com suas operações interrompidas, a ACME Industries informou que conseguiu restabelecer parte de seus sistemas. Em uma coletiva o CEO da empresa, Léguas Colot, disse que o time de sistemas está gratativamente restabelecendo seus sistemas, ele afirmou ainda que todos os esforços foram feitos para conter qualquer vazamento de dados mas não é possível garantir que os criminosos não irão divulgar as informações no futuro, sobre o acidente na fábrica ele disse que ainda não tem o total de feridos pois pessoas ainda tentam escapar das instalações.
            </p>
            <p className="text-justify text-2xl indent-2 py-2">
              Analistas estimam mais de um bilhão de prejuízo até o momento, a recuperação dos sistemas é um alento e demonstra uma chance da empresa sobreviver mesmo com a queda de mais de 70% na última semana, eles afirmam que o tempo para recuperar os sistemas foi crucial para oferecer uma chance de sobrevivência para ACME.
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
      <Image src={success} alt="sucesso" />
    </main>
  )
}

