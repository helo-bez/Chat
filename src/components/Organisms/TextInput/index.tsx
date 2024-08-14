import { DefaultTemplateDTO } from "./DTO/InputText.dto";
import { Content } from "./composition/AutocompleteContent";
import { Label } from "./composition/AutocompleteLabel";
import { Input } from "./composition/AutocompleteInput";
import { Clear } from "./composition/AutocompleteClear";

export const TextInput = {
  Content,
  Label,
  Input,
  Clear,
  Templates: {
    Default: DefaultTemplate,
    Glassmorphism
  }
}

function DefaultTemplate({
  placeholder,
  id,
  error,
  success
}: DefaultTemplateDTO) {
  return (
    <TextInput.Content className="bg-zinc-900" error={error} success={success}>
      <TextInput.Label htmlFor={id} placeholder={placeholder} />
      <TextInput.Input id={id} />
      <TextInput.Clear />
    </TextInput.Content>
  )
}

function Glassmorphism({
  placeholder,
  id,
  error,
  success
}: DefaultTemplateDTO) {
  return (
    <TextInput.Content className="" error={error} success={success}>
      <TextInput.Input id={id} className="bg-zinc-900/50 backdrop-blur-md" />
      <TextInput.Label htmlFor={id} placeholder={placeholder} />
      <TextInput.Clear />
    </TextInput.Content>
  )
}