import { H2, Section } from "@/styles/main";
import ContactImage from "@/assets/sections/contact/composing-email-digital-device.jpg";
import {
  Grid,
  Input,
  InputGrid,
  StyledForm,
  StyledImage,
  TextArea,
} from "./styles/contact";

export default function ContactSection() {
  return (
    <Section id="contact">
      <Grid>
        <StyledForm>
          <H2>Skontaktuj się ze mną</H2>
          <InputGrid>
            <Input
              placeholder="Twój email..."
              type="text"
              name="email"
              id="email"
            />
            <Input
              placeholder="Twoja nazwa..."
              type="text"
              name="name"
              id="name"
            />
          </InputGrid>
          <TextArea
            rows={8}
            placeholder="Twoja wiadomość..."
            name="message"
            id="message"
          />
          <button className="max-w-fit border mt-2.5 px-6 py-2 text-lg rounded">
            <span>Wyślij wiadomość</span>
          </button>
        </StyledForm>
        <StyledImage src={ContactImage} alt="contact" />
      </Grid>
    </Section>
  );
}
