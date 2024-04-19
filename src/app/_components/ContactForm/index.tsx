'use client';

import { useState, useRef } from 'react';
import { validateEmail } from '@/app/_lib/utils/helpers';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const form = useRef();

  type env = string;

  const sendEmail = (e) => {
    e.preventDefault();
    const publicKey: env = process.env.NEXT_EMAIL_PUBLIC_KEY!;
    const serviceId: env = process.env.NEXT_SERVICE_ID!;
    const templateId: env = process.env.NEXT_TEMPLATE_ID!;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
};
