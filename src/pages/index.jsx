import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  BlueskyIcon,
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpeg'
import image2 from '@/images/photos/image-2.jpeg'
import image3 from '@/images/photos/image-3.jpeg'
import image4 from '@/images/photos/image-4.jpeg'
import image5 from '@/images/photos/image-5.jpeg'
import logoEliinova from '@/images/logos/eliinova.png'
import logoCion from '@/images/logos/cion.png'
import logoBixolon from '@/images/logos/bixolon.png'
import logoUofO from '@/images/logos/uofo.png'
import logoGirlgaze from '@/images/logos/girlgaze.png'
import logoStacks from '@/images/logos/stacks.png'
import logoOw3 from '@/images/logos/ow3.png'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <div>
      <div className="mx-auto mb-6 max-w-7xl rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 md:grid md:grid-cols-1">
        <div className="md:flex md:flex-col">
          <div className="md:flex-shrink-0">
            <div className="dark:hidden">
              <img
                className="h-20"
                src="https://logos-world.net/wp-content/uploads/2022/01/University-of-Oregon-Logo.png"
                alt="University of Oregon Logo"
              />
            </div>
            <div className="dark:block" hidden>
              <svg
                className="h-20 w-36"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 104"
              >
                <rect
                  className="cls-1"
                  x="154.51"
                  y="1.18"
                  width="1.5"
                  height="99.94"
                />
                <path
                  className="cls-1"
                  d="M199.64,67.92c0-11.31,4.46-21.25,15.56-21.25,11.33,0,15.7,10.09,15.7,21.25,0,11.45-4.53,22.16-15.7,22.16S199.64,80,199.64,67.92m-8.9,0c0,13.49,10.27,24.93,24.46,24.93,14.34,0,24.53-11.52,24.53-24.93S229.45,44,215.2,44s-24.46,10.7-24.46,24m71.13.83h-5.81V48.47a22.88,22.88,0,0,1,4.61-.75h1.74c7.46,0,10.94,3.24,10.94,10,0,6.93-3.7,11.08-11.48,11.08M277,91.88h11.49V89.77l-4.54-1.2a16,16,0,0,1-4.74-5.13l-4.69-7.16c-2.42-3.85-3.54-5.35-5-6.26,6.42-1.35,12-6.48,12-12.59,0-8.2-7.71-12.27-17.89-12.27H241.72v2l4.46,1c1.42.3,1.95.46,1.95,1.67V87.29c0,1-.23,1.13-2,1.5l-4.38.91v2.18h20.69V89.77l-4.52-.9c-1.6-.3-1.83-.45-1.83-1.58V71.61h7.33l7.09,11.9c2.34,3.84,4.83,7.31,6.48,8.37m44.21-46.72H291v2.19l4.46.9c1.73.3,1.95.52,1.95,1.59V87.29c0,1-.22,1.2-2,1.5L291,89.7v2.18h37.3l2.18-14.7h-2c-1,3.4-2.86,7.85-4.46,9.72-2.11,1.59-6.94,2.34-9.88,2.34H312.4a45.93,45.93,0,0,1-7-.54V69.05h9.07c2.19,1.5,3.47,4.15,4.16,7.23h1.51V59.09H318.6c-.37,2.35-2.05,5.66-4.16,6.94h-9.07V48.32a37,37,0,0,1,5.9-.44H312c4.59,0,9.35,1.19,11,2.25,1.42,2,2.64,5.72,3.55,9.2h2l-1.36-15a24.47,24.47,0,0,1-6,.83m55,15.59h2l-.89-16.26h-1.59l-1.44,2c-2-1-5.58-2.5-12.83-2.5-16.31,0-27.18,10.11-27.18,23.67s9.44,25,24.23,25c8.23,0,16.09-2.11,19.56-4l-.38-1.43V73.26c0-1.5.52-1.88,2-2.49l1.28-.52V68.53H362.85v2l5.37,1.28c1.58.38,1.89.75,1.89,1.81V87.05c-1.89,1.82-6.27,3.09-10.11,3.09-9.14,0-16.77-8.21-16.77-23,0-11.76,6-20.64,18-20.64,5.89,0,9.43,1.88,11.25,3.46,1.35,2.11,3.09,7.45,3.69,10.77m49.16,7.17c0,11.45-4.53,22.16-15.7,22.16S394.12,80,394.12,67.92c0-11.31,4.46-21.25,15.55-21.25,11.32,0,15.7,10.09,15.7,21.25m8.84,0c0-13.35-10.27-24-24.54-24s-24.45,10.7-24.45,24c0,13.49,10.27,24.93,24.45,24.93,14.35,0,24.54-11.52,24.54-24.93m42.28-10.25V79.22L448.86,45.16H436.4v2.19l3.55.82c2.12.46,2.35.46,2.35,1.67V79.52c0,2.12-.23,6-.38,7.69-.15,1.36-.46,1.66-1.37,1.8l-4.58.76v2.11h17.8V89.77l-6.19-.9c-.83-.17-1.2-.61-1.37-1.66-.22-2.18-.36-5.57-.36-7.76V52.85L478.3,92.79H480V57.6c0-2.73.14-5.88.22-7.85.08-1.43.83-1.58,1.58-1.73l4.53-.74V45.16H468.49v2.12l6.35.89c.9.15,1.21.46,1.34,1.81.15,1.66.31,4.83.31,7.69"
                />
                <path
                  className="cls-1"
                  d="M214.46,11.06h0V9.83h-7.17v1.23l2.2.45c.66.13.66.24.66.52V22.57c0,4.24-2.08,6.67-5.71,6.67-3.15,0-5-2.39-5-6.37V12.07c0-.37,0-.47.61-.59l2-.41h0V9.83H193v1.23l1.7.38c.59.13.62.24.62.59V22.87c0,5.19,3.25,8.29,8.7,8.29,5.18,0,8.26-3.22,8.26-8.59V12c0-.31,0-.43.67-.59Zm26.79.36,2.08-.36V9.83h-8.21v1.23l2.81.42c.33,0,.48.24.51.68a27.09,27.09,0,0,1,.2,3.39v8.76L227.09,9.88,227,9.83h-6v1.25l1.75.4.14,0c.7.17.71.17.71.56v13c0,.88-.08,1.92-.14,2.67l-.06.84c-.06.38-.12.49-.47.54l-2.12.36v1.22H229V29.49l-2.82-.41c-.35-.07-.42-.17-.48-.55-.06-.65-.19-2.22-.19-3.47v-11l13.63,17,0,.05h1.31V15.49c0-1,.07-2,.12-2.68v-.08c0-.19,0-.36,0-.51l0-.19c0-.46.16-.55.55-.61m8.58,19.3h9.6V29.5l-2-.42c-.75-.17-.75-.18-.75-.53V12c0-.32,0-.35.79-.52l1.9-.45h0V9.83h-9.6v1.23l2,.45c.75.16.75.17.75.52V28.55c0,.35,0,.36-.78.53l-1.91.4,0,0Zm36.75-19.66h0V9.83h-6.55v1.23l1.68.38c.26.06.58.14.63.24s0,.16-.06.33l-5.43,13.92-5.36-13.82c-.08-.2-.1-.32-.06-.39s.25-.17.55-.24l1.81-.39h0V9.83h-8.57v1.25l1,.33.06,0c.41.14.69.23.86.7l7.45,18.92v0h1.79l8.09-19a1,1,0,0,1,.79-.67Zm12.75,18V20.65h3.5a5,5,0,0,1,1.81,3.08l0,.11h.93V16h-.94v.12a5,5,0,0,1-1.8,3h-3.51V11.49a13.14,13.14,0,0,1,2.16-.17h.3a10.46,10.46,0,0,1,4.66,1,12.49,12.49,0,0,1,1.62,4l0,.11h1.16l-.62-6.88V9.41l-.18.06a11.09,11.09,0,0,1-2.62.36h-13.4v1.23l2,.42c.76.16.76.2.76.55V28.55c0,.35,0,.36-.79.53l-1.9.4-.05,0v1.22h16.69l1-6.7V24H309l0,.11a14.53,14.53,0,0,1-2,4.21,8.67,8.67,0,0,1-4.21,1H302a16.32,16.32,0,0,1-2.45-.18Zm25.94-8.83h-1.81V11.55a7.27,7.27,0,0,1,1.69-.3h.56c3,0,4.48,1.38,4.48,4.24,0,3.1-1.7,4.74-4.92,4.74m6.4,10.48h5.53V29.51L335.29,29a6.49,6.49,0,0,1-2-2.2l-1.93-3.1A10.89,10.89,0,0,0,329.21,21c2.59-.67,5.16-2.79,5.16-5.62,0-3.43-3.08-5.56-8-5.56h-9.75V11l2,.47c.76.16.76.2.76.55V28.55c0,.35,0,.36-.79.53l-1.91.4,0,0v1.22h9.57V29.5l-2-.42c-.68-.13-.68-.18-.68-.56V21.79h2.29L328.81,27a12.65,12.65,0,0,0,2.84,3.73Zm15.84-16.78a3.14,3.14,0,0,1,3.29-3.26,4.85,4.85,0,0,1,3.57,1.68,12.66,12.66,0,0,1,1.42,3.79v.13H357l-.21-6.75V9.46h-.92l-.66.92a9,9,0,0,0-4.42-1.08c-4.18,0-7.2,2.38-7.2,5.66,0,2.76,1.5,4.61,4.85,6l2.09.86c1.63.68,3.15,1.65,3.15,4s-1.58,3.91-4.12,3.91a4.34,4.34,0,0,1-3.66-1.81,17.48,17.48,0,0,1-1.33-4.55l0-.12h-1.3l0,.62c0,.64,0,1.32.06,2,.06,2,.13,4.23.06,5.13v.16h1l.55-.95a12,12,0,0,0,5,.95c4.71,0,7.87-2.52,7.87-6.29,0-3.29-2.23-4.8-4.64-5.95l-3-1.42c-1.9-.91-2.64-1.89-2.64-3.53m16.77,16.79h9.61V29.5l-2-.42c-.75-.17-.75-.18-.75-.53V12c0-.33,0-.35.8-.52l1.89-.45h.05V9.83h-9.61v1.23l2,.45c.75.16.75.17.75.52V28.55c0,.35,0,.36-.78.53l-1.91.4,0,0Zm34.27-14.39h1.2l-.25-6.9V9.36l-.19.08a9.78,9.78,0,0,1-2.67.39H383.43a9.45,9.45,0,0,1-3-.42l-.19-.07-.24,6.9v.06h1.17l0-.11A15.53,15.53,0,0,1,382.73,12a9,9,0,0,1,4-.75h1V28.55c0,.33,0,.33-.69.47l-2.3.46,0,0v1.22H395V29.5L392.67,29l-.09,0c-.66-.13-.66-.13-.66-.46V11.28h1.36a6.41,6.41,0,0,1,3.69.8,15.19,15.19,0,0,1,1.56,4.13Zm26.08-5,1.08-.28V9.83H419v1.23l1.58.32c.39.08.75.16.82.29s0,.14-.11.35l-4.52,7.68-5.06-7.78c-.12-.18-.12-.24-.12-.26s.28-.12.47-.16l1.7-.41h0V9.83h-8.58v1.24l1,.36a1.47,1.47,0,0,1,.86.75l6.47,9.9v6.4c0,.27-.08.39-.79.53l-2.3.47,0,0v1.22h10.37V29.5L418.44,29c-.75-.16-.75-.16-.75-.53v-7l5.86-9.34a1.45,1.45,0,0,1,1.08-.77m27.84,18.3c-4.74,0-6.42-5.2-6.42-9.63a12.79,12.79,0,0,1,1.44-6.34,5.73,5.73,0,0,1,9.95,0A12.84,12.84,0,0,1,458.89,20c0,4.43-1.69,9.61-6.42,9.63M463.41,20a10.6,10.6,0,0,0-10.87-10.7h-.15A10.59,10.59,0,0,0,441.53,20a11,11,0,0,0,10.92,11.15h0A11,11,0,0,0,463.41,20m22.64-3.64-.62-6.88V9.42l-.17.05a14.86,14.86,0,0,1-3.48.36H469.31v1.23l2.24.45c.75.16.75.17.75.52V28.55c0,.35,0,.36-.78.53l-1.9.4,0,0v1.22H480V29.5l-2.82-.56-.2,0c-.51-.09-.51-.09-.51-.42V21h3.77a9.25,9.25,0,0,1,1.57,3.38l0,.11h1V16.35h-1.05v.11a5.65,5.65,0,0,1-1.57,2.94h-3.77V11.58a10.41,10.41,0,0,1,2.15-.26h.33a9.53,9.53,0,0,1,4.33,1,11.6,11.6,0,0,1,1.62,4l0,.12Z"
                />
                <path
                  className="cls-1"
                  d="M121.81,67.56c-2,13-12.9,22.63-25.43,27.44a95.64,95.64,0,0,1-34,5.9A96.84,96.84,0,0,1,28.26,95C15.72,90.19,4.86,80.58,2.83,67.56A103.69,103.69,0,0,1,1.5,51.08a110.28,110.28,0,0,1,1.33-16.5c2-13,12.89-22.61,25.43-27.43A97.06,97.06,0,0,1,62.33,1.26,95.85,95.85,0,0,1,96.38,7.15c12.53,4.82,23.39,14.41,25.43,27.43a107.7,107.7,0,0,1,1.33,16.5,107.22,107.22,0,0,1-1.33,16.48M92.92,36.93c-.31-5.57-.9-11.5-4-16C82.77,12.14,72.39,8.53,62.33,8.61S41.86,12.14,35.75,21c-3.11,4.48-3.72,10.41-4,16-.22,4.1-.38,9.09-.39,14.15s.12,10.05.33,14.13c.32,5.59,1,11.49,4.08,16C41.86,90,52.22,93.46,62.33,93.54S82.77,90,88.91,81.2c3.11-4.5,3.75-10.4,4-16,.23-4.08.16-9,.17-14s0-10.13-.2-14.23"
                />
              </svg>
            </div>
            <div></div>
          </div>
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-zinc-800 dark:text-zinc-300 md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-zinc-200 dark:text-zinc-700"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <p className="relative">You should have become a teacher.</p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="/gerald.png"
                    alt="Gerald Tindal Headshot"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Dr. Gerald Tindal
                  </div>
                  <div className="text-base text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Department Head of Educational Methodology, Policy, and
                    Leadership
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
      <form
        action="/thank-you"
        className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Get notified when I publish something new, and unsubscribe at any
          time. <em>No hard feelings.</em>
        </p>
        <div className="mt-6 flex">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
          />
          <Button type="submit" className="ml-4 flex-none">
            Join
          </Button>
        </div>
      </form>
    </div>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Stacks.js, Inc.',
      title: 'Founder & CEO',
      logo: logoStacks,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Open Web Foundation',
      title: 'Founding Member',
      logo: logoOw3,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Bixolon',
      title: 'Consultant',
      logo: logoBixolon,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'University of Oregon',
      title: 'Consultant',
      logo: logoUofO,
      start: '2020',
      end: {
        label: '2021',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Girlgaze',
      title: 'Consultant',
      logo: logoGirlgaze,
      start: '2019',
      end: {
        label: '2020',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Eliinova',
      title: 'Engineering Lead',
      logo: logoEliinova,
      start: '2018',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'CION',
      title: 'Founder & CEO',
      logo: logoCion,
      start: '2016',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-6 w-6 rounded"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="/resume.pdf" variant="secondary" className="group mt-6 w-full" target="_blank">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Chris Breuer - Dog lover, software engineer, founder and entrepreneur
          based in Silicon Beach.
        </title>
        <meta
          name="description"
          content="I’m Chris, a software engineer, educator and entrepreneur based in Playa Vista, CA. I’m the founder of Stacks.js, Meema and CION Agency."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software engineer, founder,
            <br />
            and dog lover 🐶
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Chris, a software engineer, educator and entrepreneur based in
            Playa Vista, CA—also known as Silicon Beach. Founder & Builder at <em>Stacks.js</em>, and Founding member of the{' '}
            <em>Open Web Foundation</em>.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://bsky.app/profile/chrisbreuer.dev"
              aria-label="Follow on Bluesky"
              icon={BlueskyIcon}
            />
            <SocialLink
              href="https://github.com/chrisbbreuer"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/%F0%9F%8C%B1-chris-breuer-33231765/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://instagram.com/somebuddyspecial"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <Newsletter />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
