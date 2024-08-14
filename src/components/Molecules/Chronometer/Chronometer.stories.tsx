import { Chronometer } from './index'
import { Meta, StoryObj } from '@storybook/react'
export default {
  title: 'Components/Molecules/Chronometer',
  component: Chronometer,
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