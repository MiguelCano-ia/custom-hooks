import { ChangeEvent, useState } from "react";

export const useForm = ( initialForm = {} ) => {
  
  const [formState, setFormState] = useState( initialForm );

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  return {
    formState,
    ...formState, // Pasamos las propiedades del formulario
    onInputChange,
    onResetForm,
  }
}
