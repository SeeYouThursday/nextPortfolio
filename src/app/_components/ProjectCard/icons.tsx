import { ReactElement } from 'react';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { SiPostgresql } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';
import { FaShopify } from 'react-icons/fa';

// Nextjs - white background - black logo
// Tailwind - black background - skyblue logo

export interface Icon {
  title: string;
  logo: ReactElement;
}

export interface Icons {
  Nextjs: Icon;
  TailwindCSS: Icon;
  Postgres: Icon;
  React: Icon;
  FramerMotion: Icon;
  Aws: Icon;
}

export const icons: Icons = {
  Nextjs: {
    title: 'Nextjs',
    logo: <TbBrandNextjs />,
  },
  TailwindCSS: {
    title: 'TailwindCSS',
    logo: <BiLogoTailwindCss />,
  },
  Postgres: {
    title: 'Postgres',
    logo: <SiPostgresql />,
  },
  React: {
    title: 'React',
    logo: <FaReact />,
  },
  FramerMotion: {
    title: 'Framer-Motion',
    logo: <TbBrandFramerMotion />,
  },
  Aws: {
    title: 'AWS',
    logo: <FaAws />,
  },
};

export const Logo = ({
  item,
  className,
}: {
  item: keyof typeof icons;
  className: string;
}) => {
  const icon = icons[item];
  return icon ? icons[item].logo : <div>Default Icon</div>;
};
