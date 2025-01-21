"use client";
import * as m from "@/paraglide/messages.js";
import { H2, Section } from "@/styles/main";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Loader2, File } from "lucide-react";
import {
  AlertContainer,
  AlertDescription,
  ErrorMessage,
  FileInput,
  FileInputWrapper,
  FormContainer,
  Input,
  InputWrapper,
  Label,
  SubmitButton,
  TextArea,
} from "./styles/contact";
import { languageTag } from "@/paraglide/runtime";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      if (data.file && data.file[0]) {
        formData.append("file", data.file[0]);
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData, // Remove the headers as FormData sets them automatically
      });

      if (!response.ok) {
        throw new Error("Błąd podczas wysyłania wiadomości");
      }

      setShowSuccess(true);
      reset();
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Błąd podczas wysyłania wiadomości");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <H2>{m.dane_kontaktowe()}</H2>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
    </Section>
  );
}
