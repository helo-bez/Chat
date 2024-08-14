'use client'

import Image from "next/image"
import article1 from '../../../public/programming-background-with-person-working-with-codes-computer.jpg'
export default function Chat() {
  return (
    <main className="flex flex-1 min-h-fit bg-animated-bg text-white px-16">
      <div className="bg-gray-middle pt-8 flex flex-col gap-8">
        <h2 className="text-center font-semibold text-3xl px-8">Vazamento de dados expõe informações confidenciais da Acme,<br></br> Hacker invade sistema e obtém acesso a dados de clientes e funcionários.</h2>
        <section className="
        bg-gray-base/5 
        w-full
        h-fit
        text-base
        grid
        grid-cols-1
        ">
          <article className="grid grid-cols-1 gap-2 p-4 text-justify">
            <p>Na tarde de hoje, a Acme foi vítima de um ataque cibernético que resultou no vazamento de dados confidenciais de clientes e funcionários. O hacker, ainda não identificado, conseguiu invadir o sistema da empresa e obter acesso a informações como nomes completos, endereços, números de telefone, CPFs, RGs, dados bancários e históricos de compras.</p>
            <p>A empresa confirmou o ataque e comunicou as autoridades competentes. Uma equipe de especialistas em segurança cibernética está trabalhando para identificar a origem do ataque e minimizar os danos causados. A Acme também está em contato com os clientes e funcionários afetados para fornecer orientação e suporte.</p>
          </article>
        </section>
        <section className="
        rounded-e-3xl
        bg-gray-base/5 
        w-full
        h-fit
        text-base
        grid
        grid-cols-2
        ">
          <article className="grid grid-cols-1 gap-2 p-4 text-justify">
            <h2 className="text-center font-semibold text-xl px-8">Especialistas alertam para os riscos de ataques cibernéticos.</h2>
            <p>Este caso é um exemplo preocupante dos riscos que as empresas e indivíduos correm no mundo digital. Os ataques cibernéticos estão cada vez mais frequentes e sofisticados, e podem ter consequências graves para as empresas, como danos à reputação, perda de clientes e multas milionárias.</p>
            <p>É importante que as empresas tomem medidas para se proteger contra ataques cibernéticos, como investir em segurança cibernética, treinar seus funcionários para identificar e evitar golpes online e manter seus sistemas atualizados.</p>
          </article>
          <aside className="w-full h-full text-center items-center justify-center flex">
            <Image className="max-h-60 aspect-square  object-cover rounded-3xl overflow-hidden" priority alt="hacker image" src={article1} />
          </aside>
        </section>
        <section className="
        rounded-e-3xl
        bg-gray-base/5 
        w-full
        h-fit
        text-base
        grid
        grid-cols-1
        ">
          <article className="grid grid-cols-1 gap-2 p-4 text-justify shadow rounded">
            <h2 className="text-center font-semibold text-xl px-8 text-blue-500">Recomendações</h2>
            <p>
              A Acme deve:
              <ul className="list-disc pl-4 mb-2">
                <li className="py-1 border-gray-200">Comunicar o ataque de forma transparente e clara aos seus clientes e funcionários.</li>
                <li className="py-1 border-gray-200">Fornecer orientação e suporte aos clientes e funcionários afetados.</li>
                <li className="py-1 border-gray-200">Investir em segurança cibernética para se proteger contra futuros ataques.</li>
              </ul>
              Os clientes e funcionários da Acme devem:
              <ul className="list-disc pl-4 mb-2">
                <li className="py-1 border-gray-200">Monitorar seus extratos bancários e cartões de crédito com atenção.</li>
                <li className="py-1 border-gray-200">Comunicar qualquer atividade suspeita às autoridades.</li>
                <li className="py-1 border-gray-200">Manter seus dados pessoais seguros e evitar fornecer informações confidenciais a sites ou pessoas desconhecidas.</li>
              </ul>
            </p>
          </article>


        </section>
      </div>

    </main>
  )
}

