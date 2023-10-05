import React from 'react'
import { Button } from '@nextui-org/button';
import { VercelIcon } from '../../public/Icon'
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";

export default function Footer() {

  const links: { href: string, icon: JSX.Element, className: string }[] = [
    {
      href: "https://www.facebook.com/trinpsri.11/",
      icon: <FaFacebook size={20} />,
      className: "hover:bg-blue-500 hover:text-white"
    },

    {
      href: "https://www.instagram.com/trinpsri.11/",
      icon: <FaInstagram size={20} />,
      className: "hover:bg-rose-400 hover:text-white"
    },

    {
      href: "https://www.youtube.com/@TinnyXP",
      icon: <FaYoutube size={20} />,
      className: "hover:bg-red-500 hover:text-white"
    },

    {
      href: "https://github.com/TinnyXP",
      icon: <FaGithub size={20} />,
      className: "hover:bg-zinc-800 hover:text-white"
    },
  ];

  return (
    <footer className='container mx-auto max-w-7xl pb-10 px-12'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <div className='flex justify-center gap-2'>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              <Button className={`button ${link.className}`} isIconOnly radius="full" size="md">{link.icon}</Button>
            </a>
          ))}
        </div>
        <a className='relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-70 active:opacity-disabled transition-opacity flex justify-end items-center gap-2 text-foreground hover:cursor-pointer'
          href='https://vercel.com/' target='_blank'
        >
          <span className='text-sm font-medium flex leading-none'>Deployed on</span>
          <VercelIcon className='w-[65px] h-[20px] fill-black dark:fill-white' />
        </a>
      </div>
    </footer>
  )
}