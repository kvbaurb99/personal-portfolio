"use client";
import * as m from "@/paraglide/messages.js";
import { H2, Section } from "@/styles/main";
import { useForm } from "react-hook-form";
import ContactImageSrc from "@/assets/sections/contact/messages-concept-illustration_114360-703.jpg";
import { Loader2 } from "lucide-react";
import {
  AlertContainer,
  AlertDescription,
  ErrorMessage,
  ContactImage,
  FileInput,
  FileInputWrapper,
  FormContainer,
  Input,
  InputWrapper,
  Label,
  SubmitButton,
  TextArea,
} from "./styles/contact";
import { useContactForm } from "@/hooks/contact/useContactForm";
import Image from "next/image";

interface IFormInputs {
  name: string;
  email: string;
  message: string;
  file?: FileList;
}

function Alert({ children }: { children: React.ReactNode }) {
  return <AlertContainer>{children}</AlertContainer>;
}

export default function ContactSection() {
  const { isSubmitting, showSuccess, handleFormSubmit } = useContactForm();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  return (
    <Section id="contact" className="relative">
      <H2>{m.dane_kontaktowe()}</H2>
      <FormContainer
        onSubmit={handleSubmit((data) => handleFormSubmit(data, reset))}
      >
        <InputWrapper>
          <Label htmlFor="name">{m.imie()}</Label>
          <Input
            id="name"
            {...register("name", { required: m.imie_jest_wymagane() })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="email">{m.adres_email()}</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: m.email_jest_wymagany(),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: m.email_niepoprawny(),
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="message">{m.wiadomosc()}</Label>
          <TextArea
            id="message"
            {...register("message", { required: m.wiadomosc_jest_wymagana() })}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </InputWrapper>
        <FileInputWrapper>
          <Label htmlFor="file">{m.zalacznik_pdf()}</Label>
          <FileInput
            id="file"
            type="file"
            accept=".pdf"
            {...register("file")}
          />
        </FileInputWrapper>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              {m.wysylanie()}
            </>
          ) : (
            m.wyslij_wiadomosc()
          )}
        </SubmitButton>
      </FormContainer>
      {showSuccess && (
        <Alert>
          <AlertDescription>
            {m.wiadomosc_zostala_wyslana_pomyslnie()}
          </AlertDescription>
        </Alert>
      )}
      <ContactImage
        src={ContactImageSrc}
        width={520}
        height={360}
        loading="lazy"
        alt="Contact image"
      />
    </Section>
  );
}
