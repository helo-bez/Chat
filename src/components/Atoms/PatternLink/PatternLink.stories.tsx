import { PatternLink, LinkProps } from './index'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/PatternLink',
  component: PatternLink,
  args:{
    children: 'Eu sou um link'
  },
  argTypes:{
    className:{
      description: 'Classes adicionais na chamada do objeto'
    },
    href:{
      description: 'Rota de redirecionamento, também aceita o objeto href previsto no Next: { pathname?: string, query?: any }',
      defaultValue: '/',
    },
    theme:{
      description: 'Afeta a cor dependendo do tema',
      defaultValue: 'light'
    },
    as:{
      description: 'as é uma funcionalidade do next que permite apelidar a rota que o link irá redireciona-lo'
    },
    replace: {
      description: 'especifica se a navegação deve substituir a entrada atual do histórico do navegador ou adicionar uma nova.',
    },
    scroll: {
      description: 'especifica se a página deve rolar para o topo quando a navegação é concluída.',
    },
    shallow: {
      description: 'especifica se a navegação deve ser "rasa", sem acionar a execução de código do lado do servidor.',
    },
    passHref: {
      description: 'especifica se o href deve ser passado para o componente filho.',
    },
    prefetch: {
      description: 'especifica se a página para a qual o usuário está navegando deve ser pré-carregada.',
    },
    locale: {
      description: 'especifica o idioma em que a página deve ser renderizada, caso haja suporte a múltiplos idiomas.',
    },
  }
} as Meta<LinkProps>

export const Default: StoryObj<LinkProps> = {

}
