import { FormControl, Input, FormErrorMessage, FormLabel, useColorModeValue, Textarea, Select } from "@chakra-ui/react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  UseFormTrigger,
} from "react-hook-form";

export  enum FormInputType {
  TEXT = 'text',
  SELECT = 'select',
  TEXTAREA = 'textarea'
}

interface Props {
  trigger: UseFormTrigger<FieldValues>,
  control: Control,
  name: string,
  type: FormInputType,
  rules: RegisterOptions,
  placeholder: string,
  label: string,
  options?: {value: string, text: string}[]
}

const FormInputController: React.FC<Props> = ({
  trigger,
  control,
  name,
  type,
  rules,
  placeholder,
  label,
  options
 }) => {
  const textColor = useColorModeValue("navy.700", "white");
  const inputCss = {
    fontSize: "sm",
    ms: { base: "0px", md: "0px" },
    mb: "24px",
    fontWeight: "500",
    size: "lg",
  };

  const labelCss = {
    ms: "4px",
    fontSize: "sm",
    fontWeight: "500",
    color: textColor,
    display: "flex",
  };

  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      rules={rules}
      render={({ field: { onChange, ...rest }, fieldState: { error } }) => {
        switch (type) {
          case FormInputType.TEXTAREA:
            return (
              <FormControl isInvalid={!!error} {...inputCss}>
                <FormLabel {...labelCss}>{label}</FormLabel>
                <Textarea
                  isRequired={true}
                  placeholder={placeholder}
                  onChange={(e) => {
                    onChange(e);
                    trigger(name);
                  }}
                  {...rest}
                />
                {<FormErrorMessage>{error?.message}</FormErrorMessage>}
              </FormControl>
            );
          case FormInputType.SELECT:
            return (
              <FormControl isInvalid={!!error} {...inputCss}>
                <FormLabel {...labelCss}>{label}</FormLabel>
                <Select
                  isRequired={true}
                  placeholder={placeholder}
                  onChange={(e) => {
                    onChange(e);
                    trigger(name);
                  }}
                  {...rest}
                >
                  {
                    options.map(({value, text}) => (
            <option value={value} key={value}>{text}</option>

                    ))
                  }
                </Select>
                {<FormErrorMessage>{error?.message}</FormErrorMessage>}
              </FormControl>
            );
          default:
            return (
              <FormControl isInvalid={!!error} {...inputCss}>
                <FormLabel {...labelCss}>{label}</FormLabel>
                <Input
                  isRequired={true}
                  type={type}
                  placeholder={placeholder}
                  onChange={(e) => {
                    onChange(e);
                    trigger(name);
                  }}
                  {...rest}
                />
                {<FormErrorMessage>{error?.message}</FormErrorMessage>}
              </FormControl>
            );
        }
      }}
    />
  );
};

export default FormInputController;
