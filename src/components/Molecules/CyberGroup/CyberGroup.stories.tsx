import { CyberGroup } from './index'
import { Meta, StoryObj } from '@storybook/react'
export default {
  title: 'Components/Molecules/CyberGroup',
  component: CyberGroup,
  args: {
    id: 'story-card',
    type: 'submit',
    styleType: 'primary',
    children: 'eu sou um botão',
    widthStyle: 'full',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    onMouseOver: { action: 'hovered' },
    id: {
      description: 'Id do elemento html',
    },
    styleType: {
      description: 'Estilo do botão',
      control: {
        type: 'inline-radio',
      }
    },
    children: {
      description: 'Uma forma de adicionar ícones de uma forma mais flexivel',
    },
    widthStyle: {
      description: 'Uma forma de deixar os botões mais editáveis sem precisar de mais divs',
      control: {
        type: 'inline-radio',
      }
    },
  }
} as Meta<any>


export const Primary: StoryObj<any> = {
  parameters: {
    docs: {
      description: {
      },
    },
  },
}
export const Secondary: StoryObj<any> = {
  args: {
    styleType: 'secondary',
  },
  parameters: {
    docs: {
      description: {
      },
    },
  },
}