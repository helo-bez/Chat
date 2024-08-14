import { Input, InputProps } from './index'
import { Meta, StoryObj } from '@storybook/react'
const StorieMarkdown = {
  Text: `
  ### Text Input
  Um input utilizado para receber informações como nome, sobrenome, email...
  `,
  Password:`
  #### Password Input
  Um input utilizado para receber informações de senhas
  `,
  Number:`
  #### Number Input
  Um input utilizado para receber informações numéricas como quantidade de itens como exemplo
  `,
  Disable:`
  #### Disable
  Um estado do input que pode ser usado em qualquer tipo do input, serve para desabilitar as interações com o input e mudar visualmente para indicar que está desabilitado
  `,
  LabelText:`
  #### Label Text
  Normalmente utilizado para dizer ao usuário qual é a finalidade do input que virá logo a baixo.
  `,
  ErrorMessage:`
  #### Error Message
  Utilizado para indicar um erro que possa ter vindo a ocorrer de uma validação do input, altera o estilo do input para vermelho para indicar o erro.
  `,
  LabelTextAndErrorMessage:`
  #### Label Text And Error Message
  É a junção tanto do Label Text com o Error Message.
  `,
  }

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  args: {
    id: 'identifier',
    type: 'text',
    placeholder: 'Text Input',
    onChange: undefined,
    onKeyUp: undefined,
  },
  argTypes: {
    id: {
      description: 'Id do elemento html',
    },
    type: {
      description: 'Tipo do input',
    },
    placeholder: {
      description: 'Placeholder do input',
    },
    onChange: { 
      description: 'Função de onChange do input', 
    },
  }
} as Meta<InputProps>

export const Text: StoryObj<InputProps> = {
  parameters: {
    docs: {
      description: {
        component: StorieMarkdown.Text,
      },
    },
  },
}
export const Password: StoryObj<InputProps> = {
  args:{
    placeholder: '***********',
    type: 'password',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Password,
      },
    },
  },
}
export const Number: StoryObj<InputProps> = {
  args:{
    placeholder: '000',
    type: 'number',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Number,
      },
    },
  },
}
export const Disabled: StoryObj<InputProps> = {
  args:{
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.Disable,
      },
    },
  },
}
export const LabelText: StoryObj<InputProps> = {
  args:{
    labelText: 'labelText',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.LabelText,
      },
    },
  },
}

export const ErrorMessage: StoryObj<InputProps> = {
  args:{
    errorMessage: 'errorMessage',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.ErrorMessage,
      },
    },
  },
}

export const LabelTextAndErrorMessage: StoryObj<InputProps> = {
  args:{
    labelText: 'labelText',
    errorMessage: 'errorMessage',
  },
  parameters: {
    docs: {
      description: {
        story: StorieMarkdown.LabelTextAndErrorMessage,
      },
    },
  },
}