'use client';
import { useState, useRef } from 'react';
import { validateEmail } from '@/app/_lib/utils/helpers';
import emailjs from '@emailjs/browser';
import {
  Input,
  Button,
  Textarea,
  Card,
  CardHeader,
  // Image,
} from '@nextui-org/react';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  type env = string;
  interface FormInputEvent
    extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {
    target: HTMLInputElement | HTMLTextAreaElement;
  }

  const handleInputChange = (e: FormInputEvent) => {
    const inputType: string = e.target.type;
    const inputValue: string = e.target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'text') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const publicKey: env = process.env.NEXT_EMAIL_PUBLIC_KEY!;
    const serviceId: env = process.env.NEXT_SERVICE_ID!;
    const templateId: env = process.env.NEXT_TEMPLATE_ID!;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            setError(true);
            console.log(error);
          }
        );
    }
  };

  const form = useRef();

  return (
    <Card className="w-full p-8">
      <CardHeader className="text-center w-full">Reach Out!</CardHeader>
      <form
        onSubmit={sendEmail}
        className="flex flex-col items-center justify-between md:flex-nowrap gap-4"
      >
        <Input
          type="text"
          label="name"
          name="name"
          // placeholder="John Doe"
          onChange={handleInputChange}
          value={name}
        >
          Enter Your Name:
        </Input>
        <Input
          type="email"
          label="email"
          name="email"
          // placeholder="email@email.com"
          onChange={handleInputChange}
          value={email}
        >
          Enter Your Email:
        </Input>
        <Textarea
          type="textarea"
          label="message"
          // placeholder="Message"
          onChange={handleInputChange}
          value={message}
          name="message"
        >
          Enter Your Message:
        </Textarea>
        <Button
          type="submit"
          isDisabled={
            email === '' || name === '' || message === '' ? true : false
          }
        >
          Send It!
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
