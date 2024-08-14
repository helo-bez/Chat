import { NoDataProps } from './index'
import { NoData } from './index'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Atoms/NoData',
  component: NoData,
  args: {
    empty: true,
  },

  argTypes: {
    direction:{
      description: 'Direção do texto',
      defaultValue: 'horizontal'
    }
  },
} as Meta<NoDataProps>

export const empty: StoryObj = {
}
export const not_empty: StoryObj = {
  args:{
    empty: false,
  }
}