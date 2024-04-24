'use client';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const words = `Developing Full Stack Apps Using Agile Strats.
`;
const subtitle = `Using Agile Strats`;

export function Motto() {
  return <TextGenerateEffect words={words} />;
}

export function MottoSubTitle() {
  return <TextGenerateEffect words={subtitle} />;
}
