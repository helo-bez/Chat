import { TitleProps } from './index'
import { Title } from './index'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Title',
  component: Title,
  args: {
    children: 'Eu sou um título',
  },

  argTypes: {
    Component: {
      description: 'Componente base do título',
      defaultValue: 'h2'
    },
    children: {
      description: 'O filho do componente Title',
    },
    className: {
      description: 'Classes a serem adicionadas ao componente Title',
      control: 'text'
    },
    size:{
      description: 'Tamanho do texto',
      defaultValue: 'medium'
    },
    typeInformation:{
      description: 'Define a cor do texto de acordo com a documentação da branch da NTT',
      defaultValue: 'black'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'A simple button component',
      },
    },
  }
} as Meta<TitleProps>

export const Default: StoryObj = {
  args:{
    typeInformation: 'default'
  }
}
export const white: StoryObj = {
  args:{
    typeInformation: 'white'
  }
}
export const black: StoryObj = {
  args:{
    typeInformation: 'black'
  }
}
export const info: StoryObj = {
  args:{
    typeInformation: 'info'
  }
}
export const warning: StoryObj = {
  args:{
    typeInformation: 'warning'
  }
}
export const danger: StoryObj = {
  args:{
    typeInformation: 'danger'
  }
}
export const success: StoryObj = {
  args:{
    typeInformation: 'success'
  }
}
