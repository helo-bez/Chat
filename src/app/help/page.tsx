'use client'
import { CyberGroup } from "@/components/Molecules/CyberGroup";
import Header from "@/components/Organisms/Header";
import Image from "next/image";
import phobos_moon from '@/../public/phobos.svg'
import phobos_name from '@/../public/phobos-name.svg'
export default function Chat() {
  return (
    <main id="chat" key={'chat'} className="pt-36 flex flex-1 min-h-fit bg-animated-bg text-white">
      <section className="
      m-auto 
      transition-none 
      duration-0  
      w-screen lg:w-[1040px] 
      text-xl 
      lg:-translate-y-12
      bg-gray-darkest/30
      backdrop-blur-lg
      rounded-md
      p-8
      relative
      flex
      flex-col
      gap-4
      text-gray-lighter
      ">
        <div className="flex gap-4">
          <Image className="self-end w-4/6 animate-duration-1000 animate-delay-500 animate-fade-left" src={phobos_name} alt="phobos-name" />
          <div className="animate-fade-up w-2/6">
            <Image className="self-end w-full opacity-30" src={phobos_moon} alt="phobos-moon" />
          </div>
        </div>
        <p className="text-justify ">
          Phobos era, na mitologia grega, o deus do medo e do pânico nas batalhas, da mesma forma que Phobos "injetava" o medo e o pânico nas batalhas, manipulando a psicologia dos oponentes para desestabilizar e semear o medo, os atacantes de Ransomware também usam táticas psicológicas para pressionar as vítimas a pagar o resgate dos dados, criando um ambiente de incerteza e temor.
        </p>
        <p className="text-justify ">
          Phobos é uma experiência que simula uma negociação de Ransomware, os diálogos das conversas foram elaborados com base em testemunhos reais. Você poderá escolher diferentes gangues e observar as diferenças no modo de operação de cada grupo
        </p>
        <p className="text-justify ">
          Autoridades não recomendam o pagamento de resgate, entretanto, depois que seus sistemas foram comprometidos, pagar ou não um resgate é uma decisão muito séria, vítimas de Ransomware devem considerar vários fatores, como:
        </p>
        <ul className="list-disc pl-12 mb-2">
          <li className="py-1 border-gray-200">Consigo recuperar meus dados de um backup?</li>
          <li className="py-1 border-gray-200">Quais dados serão perdidos?</li>
          <li className="py-1 border-gray-200">Existe garantia que os dados serão restaurados?</li>
          <li className="py-1 border-gray-200">Qual a chance de ser atacado novamente?</li>
          <li className="py-1 border-gray-200">Meu negócio consegue sobreviver sem o pagamento do resgate?</li>
        </ul>
        <p className="text-justify ">
          Neste jogo você já perdeu, seus sistemas estão falhando, causando prejuízos para seu negócio. Seus dados e de seus clientes foram roubados e podem ser vazados na Internet a qualquer momento
        </p>
        <p className="text-justify ">
          E agora? Você vai ceder aos criminosos para salvar seu negócio e diminuir os danos? Você conseguirá um acordo "vantajoso"?
        </p>
        <p className="text-justify ">
          Essa pode ser sua última chance, sua capacidade de negociação será fundamental, você tem pouco tempo.
        </p>

      </section>
    </main>
  )
}

