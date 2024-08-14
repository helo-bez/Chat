import { Loader } from './index'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Loader',
  component: Loader,
  args:{
    className: 'w-full h-full flex justify-center items-center'
  },
  argTypes:{
    className:{
      description: 'Classes adicionais na chamada do objeto'
    },
    size:{
      description: 'Tamanho do loader',
      defaultValue: 'small'
    }
  }
} as Meta

export const small: StoryObj = {
  args:{
    size:'small'
  },
}
export const medium: StoryObj = {
  args:{
    size:'medium'
  },
}
export const large: StoryObj = {
  args:{
    size:'large'
  },
}