import { Icon, IconProps } from './index'
import { Meta, StoryObj } from '@storybook/react'
const StorieMarkdown = {
  Users: `
  ### Users Icon
  Um ícone de Users padrão que normalmente é usado relacionando o client portal
  `,
  Logout:`
  #### Logout
  Um ícone que normalmente é usado relacionando ao logout do usuário
  `,
  Apollo:`
  #### Apollo Icon
  Um ícone que normalmente é usado relacionando ao Apollo, uma curiosidade sobre o  Apollo é que apesar de normalmente ser relacionado ao deus grego Apolo, foi pensado como uma referência as missões espaciais Apollo. 
  Um dev desavizado dessas ideias criou o Hermes também pensando em deuses gregos por isso consolidando também com a aplicação Poseidon, apesar de ter também missões espaciais com tais nomes, sendo Hermes um projeto descontinuado de ônibus espacial e um projeto falho de lançamento de satélite à marte, e Poseidon um projeto de mapeamento da superfície dos oceanos da Terra.
  `,
  }
export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  args: {
    size: 'large',
    color: 'text-brand-black'
  },
  argTypes: {
    iconName: {
      description: 'Id do elemento html',
      control: {
        type: 'select',
      }
    },
    size: {
      description: 'Estilo do botão',
      control: {
        type: 'select',
      }
    },
    color: {
      description: 'Funcionalidade do botão',
      control: {
        type: 'inline-radio',
      }
    },
  }
} as Meta<IconProps>

export const Users: StoryObj<IconProps> = {
  args: {
    iconName: 'users',
  },
  parameters: {
    docs: {
      description: {
        component: StorieMarkdown.Users,
      },
    },
  },
}

export const Apollo: StoryObj<IconProps> = {
  args: {
    iconName: 'apollo',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Apollo,
      },
    },
  },
}

export const Logout: StoryObj<IconProps> = {
  args: {
    iconName: 'logout',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Logout,
      },
    },
  },
}