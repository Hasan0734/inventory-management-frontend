import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";

interface PropsType {
  form: any;
  label: string;
  isMessage?: true;
  name: string;
  placeholder: string;
  type?: string;
  customeMessage?: string[] | undefined;
}

const TextInput = ({
  form,
  label,
  name,
  placeholder,
  isMessage,
  customeMessage,
  type = "text",
  ...rest
}: PropsType) => {
  return (
    <>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <Input
                type={type}
                placeholder={placeholder}
                {...field}
                {...rest}
              />
            </FormControl>

            {isMessage && customeMessage ? (
              <FormMessage>{customeMessage}</FormMessage>
            ) : (
              <FormMessage />
            )}
          </FormItem>
        )}
      />
    </>
  );
};

export default TextInput;
