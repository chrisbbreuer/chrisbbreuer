import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  BlueskyIcon,
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/chris.jpg'

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
                Ever since I was young, I’ve loved to explore, learn, and
                create, especially while using tech. When I was 12-years-old, I
                wrote my first SaaS app, and to my surprise, it turned out quite
                successful and brought in several hundreds of dollars monthly
                via Google AdSense.
              </p>
              <p>
                The only thing I loved more than computers as a kid was sports
                and the outdoors. Almost 20 years later, not much has changed
                and going on hikes with my dogs and playing soccer are still
                some of the few things that peel me away from my desk.
              </p>
              <p>
                I spent the last 10+ years working on personal & private
                projects, ranging from small apps to large enterprise
                services—which caused my obsession with building scalable &
                serverless systems. In fact, I dove deep into &ldquo;data
                storage & transfer&rdquo; and &rdquo;distributed & decentralized
                compute&ldquo; techniques these past years. And this was the
                reason I started working on Stacks.
              </p>
              <p>
                Today, I’m the founder of Open Web & the Stacks framework. It’s
                exciting to work on the future of web technologies and
                application development, and I can’t wait to share our upcoming
                v1.0 release. Until then, follow along our journey on GitHub &
                Twitter to get the latest and greatest real-time updates.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://bsky.app/profile/chrisbreuer.dev"
                icon={BlueskyIcon}
              >
                Follow on Bluesky
              </SocialLink>
              <SocialLink
                href="https://twitter.com/stacksjs"
                icon={TwitterIcon}
                className="mt-4"
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/chrisbbreuer"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/%F0%9F%8C%B1-chris-breuer-33231765/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/somebuddyspecial/ "
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="mailto:hi@chrisbreuer.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                hi@chrisbreuer.dev
              </SocialLink>
              <SocialLink
                href="mailto:chris@stacksjs.org"
                icon={MailIcon}
                className="mt-4"
              >
                chris@stacksjs.org
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
