import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/chris.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Chris Breuer</title>
        <meta
          name="description"
          content="I’m Chris Breuer. I live in Silicon Beach where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Chris Breuer. I live in Silicon Beach where I design the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, and
                wrote my first SaaS application program when I was 12 years old.
                It generated several hundreds of USD income per month, via Google AdSense. 
                Funnily, I had to use my grandfather’s identity to get signed up—since I
                was &ldquo;underage&rdquo;. <em>Sorry, Google!</em>
              </p>
              <p>
                The only thing I loved more than computers as a kid was sports and the outdoors.
                And it still applies, it still is the one of the few things that will get me
                off the computer, every time. <em>That and taking care of the dogs... duh.</em>
              </p>
              <p>
                I spent the last 10+ years working on personal & private projects,
                ranging from small apps to large enterprise services—which caused my obsession 
                with building scalable & serverless systems. In fact, I dove deep into 
                &ldquo;data storage & transfer&rdquo; and &rdquo;distributed & decentralized compute&ldquo;
                techniques these past years. And this was the reason I started working on Stacks.
              </p>
              <p>
                Today, I’m the founder of Open Web & author of the Stacks framework.
                It is where we’re working on the future of web technologies & application
                development, and I’m excited to share it with you with our upcoming v1.0
                release. Until then, follow us on GitHub & Twitter for the latest & greatest
                real-time updates.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/chrisbbreuer" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/chrisbbreuer" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/%F0%9F%8C%B1-chris-breuer-33231765/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://www.instagram.com/somebuddyspecial/ " icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="mailto:chris@stacksjs.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                chris@stacksjs.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
