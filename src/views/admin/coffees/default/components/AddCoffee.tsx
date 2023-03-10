import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Textarea,
  Box,
  Text,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import FormInputController, { FormInputType } from "components/form/FormInputController";

export default function AddCoffee() {
  const [fileUploaded, setFileUploaded] = useState(false);

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
    display: "flex",
  };

  const handleDrop = (acceptedFiles: File) => {
    acceptedFiles && setFileUploaded(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
  } = useForm();
  const hasErrors = Object.keys(errors).length > 0;

  const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        align={{ sm: "flex-start", lg: "center" }}
        justifyContent={"center"}
        w="100%"
        px="22px"
        pb="20px"
        mb="10px"
        boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
      >
        <FormControl>
          <FormInputController
            trigger={trigger}
            control={control}
            name="name"
            type={FormInputType.TEXT}
            rules={{ required: "Nazwa jest obowiązkowa" }}
            placeholder="nazwa..."
            label="Nazwa"
          />

          <FormInputController
            trigger={trigger}
            control={control}
            name="brand"
            type={FormInputType.TEXT}
            rules={{ required: "Marka jest obowiązkowa" }}
            placeholder="Marka..."
            label="Marka"
          />

          <FormInputController
            trigger={trigger}
            control={control}
            name="coffeeGrain"
            type={FormInputType.SELECT}
            rules={{ required: "Typ jest obowiązkowa" }}
            placeholder="Wybierz typ"
            label="Typ Ziaren"
            options={[{value: 'ARABICA', text: 'Arabica'}, {value: 'ROBUSTA', text: 'Robusta'}]}
          />

          <FormInputController
            trigger={trigger}
            control={control}
            name="coffeeType"
            type={FormInputType.SELECT}
            rules={{ required: "Typ jest obowiązkowa" }}
            placeholder="Wybierz typ"
            label="Typ kawy"
            options={[{value: 'BEANS', text: 'Ziarnista'}, {value: 'POWDER', text: 'Mielona'}]}
          />

          <FormInputController
            trigger={trigger}
            control={control}
            name="description"
            type={FormInputType.TEXTAREA}
            rules={{ required: "Opis jest obowiązkowa" }}
            placeholder="Opis..."
            label="Opis"
          />

          <FormLabel {...labelCss}>Zdjęcie</FormLabel>

          <Dropzone onDrop={handleDrop} fileUploaded={fileUploaded} />

          <Flex justifyContent="space-between" align="center" mb="24px"></Flex>
          <Button
             disabled={hasErrors}
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
            type="submit"
          >
            Dodaj
          </Button>
        </FormControl>
      </Flex>
    </form>
  );
}

const Dropzone = ({
  onDrop,
  fileUploaded,
}: {
  onDrop: any;
  fileUploaded: boolean;
}) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "image/*",
    });

  return (
    <Box
      {...getRootProps()}
      bg={isDragActive ? "gray.200" : "gray.100"}
      p={4}
      borderRadius="md"
      borderWidth={2}
      borderColor={isDragActive ? "teal.500" : "gray.300"}
      transition="all .2s ease-in-out"
      _hover={{ bg: "gray.200" }}
      cursor="pointer"
      fontSize="sm"
      ms={{ base: "0px", md: "0px" }}
      mb="24px"
      fontWeight="500"
    >
      <input {...getInputProps()} />
      {fileUploaded ? (
        <Flex alignItems="center" justifyContent="center" textAlign="center">
          Plik dodany pomyślnie{" "}
          <Icon as={AiOutlineCheck} marginLeft="10px" color="green.500" />
        </Flex>
      ) : (
        <Text textAlign="center">
          {isDragActive ? "Upuść plik tutaj" : "Przenieś lub kliknij wyszukaj"}
          {isDragAccept}
        </Text>
      )}
    </Box>
  );
};
