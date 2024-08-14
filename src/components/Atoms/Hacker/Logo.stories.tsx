import { Hacker } from './index'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/Hacker',
  component: Hacker,
  args: {
    colorText: 'black',
    colorCircle: '#0072BC',
    className: 'w-full'
  },
  argTypes: {
    colorText: {
      description: 'Cor do texto NTT',
      control: {
        type: 'inline-radio',
      }
    },
    colorCircle: {
      description: 'Cor do loop NTT',
      control: {
        type: 'inline-radio',
      }
    },
    className: {
      description: 'Classes que podem ser colocadas na chamada',
    },
  },
} as Meta

export const Default: StoryObj = {

}
export const White: StoryObj = {
  args: {
    colorText: 'white',
    colorCircle: 'white',
  },
}
export const Black: StoryObj = {
  args: {
    colorText: 'black',
    colorCircle: 'black',
  },
}
export const Blue: StoryObj = {
  args: {
    colorText: '#0072BC',
    colorCircle: '#0072BC',
  },
}