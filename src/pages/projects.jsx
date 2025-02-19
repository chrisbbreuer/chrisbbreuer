import Image from 'next/image'
import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoStacks from '@/images/logos/stacks.png'
import logoMeema from '@/images/logos/meema.jpeg'
import logoGreenline from '@/images/logos/greenline.jpg'
import logoDataSix from '@/images/logos/datasix.png'
import logoOw3 from '@/images/logos/ow3.png'
import logoJwi from '@/images/logos/jwi.svg'
import logoCbmSkills from '@/images/logos/cbm.svg'

const projects = [
  {
    name: 'audiox',
    description: 'Powerful audio processing for your workflows.',
    link: { href: 'https://github.com/stacksjs/audiox', label: 'github.com/stacksjs/audiox' },
    logo: logoStacks,
  },
  {
    name: 'bun-git-hooks',
    description: 'A simple git hooks manager for all-sized Bun projects.',
    link: { href: 'https://github.com/stacksjs/bun-git-hooks', label: 'github.com/stacksjs/bun-git-hooks' },
    logo: logoStacks,
  },
  {
    name: 'bun-plugin-auto-imports',
    description: 'Auto Imports support for Bun.',
    link: { href: 'https://github.com/stacksjs/bun-plugin-auto-imports', label: 'github.com/stacksjs/bun-plugin-auto-imports' },
    logo: logoStacks,
  },
  {
    name: 'bun-plugin-dtsx',
    description: "Automatically generate your TypeScript DTS files, using Bun's bundler.",
    link: { href: 'https://github.com/stacksjs/bun-plugin-dtsx', label: 'github.com/stacksjs/bun-plugin-dtsx' },
    logo: logoStacks,
  },
  {
    name: 'bun-plugin-unocss',
    description: '"Instant On-demand Atomic CSS Engine" - UnoCSS',
    link: { href: 'https://github.com/stacksjs/bun-plugin-unocss', label: 'github.com/stacksjs/bun-plugin-unocss' },
    logo: logoStacks,
  },
  {
    name: 'bunfig',
    description: 'Lightweight & smart Bun configuration loader.',
    link: { href: 'https://github.com/stacksjs/bunfig', label: 'github.com/stacksjs/bunfig' },
    logo: logoStacks,
  },
  {
    name: 'CBM Skills',
    description: 'Helping each student master math & reading through high-quality educational content, ensuring a successful learning experience.',
    link: { href: 'https://cbmskills.com', label: 'cbmskills.com' },
    logo: logoCbmSkills,
  },
  {
    name: 'clarity',
    description: 'Modern debugging & logging for browser & server.',
    link: { href: 'https://github.com/stacksjs/clarity', label: 'github.com/stacksjs/clarity' },
    logo: logoStacks,
  },
  {
    name: 'DataSix',
    description: 'A big data analytics tool to see Facebook advertising costs and insights across your market—before you buy.',
    link: { href: 'https://mutesix.com/datasix-dashboard', label: 'DataSix Dashboard' },
    logo: logoDataSix,
  },
  {
    name: 'dnsx',
    description: 'A command-line & library DNS client. Like dig & dog, but for TypeScript.',
    link: { href: 'https://github.com/stacksjs/dnsx', label: 'github.com/stacksjs/dnsx' },
    logo: logoStacks,
  },
  {
    name: 'dtsx',
    description: 'Extremely fast & configurable DTS emitter.',
    link: { href: 'https://github.com/stacksjs/dtsx', label: 'github.com/stacksjs/dtsx' },
    logo: logoStacks,
  },
  {
    name: 'Greenline',
    description: 'Started as a napkin sketch idea that developed into a fully integrated cloud based POS & management system for Dry Cleaners.',
    link: { href: 'https://greenlinedcs.com', label: 'greenlinedcs.com' },
    logo: logoGreenline,
  },
  {
    name: 'httx',
    description: 'A modern, user-friendly command-line & library HTTP client "for the API era."',
    link: { href: 'https://github.com/stacksjs/httx', label: 'github.com/stacksjs/httx' },
    logo: logoStacks,
  },
  {
    name: 'imgx',
    description: 'Make your images load faster. A better save for the web.',
    link: { href: 'https://github.com/stacksjs/imgx', label: 'github.com/stacksjs/imgx' },
    logo: logoStacks,
  },
  {
    name: 'jpgx',
    description: 'A TypeScript JPEG encoder & decoder for Bun & Node.js.',
    link: { href: 'https://github.com/stacksjs/jpgx', label: 'github.com/stacksjs/jpgx' },
    logo: logoStacks,
  },
  {
    name: 'JWI Enterprises',
    description: 'A custom contact & order management system, tracking millions of USD.',
    link: { href: 'https://jwienterprises.com', label: 'jwienterprises.com' },
    logo: logoJwi,
  },
  {
    name: 'localtunnels',
    description: 'A simple and smart tunneling alternative. Without or with self-hosting.',
    link: { href: 'https://github.com/stacksjs/localtunnels', label: 'github.com/stacksjs/localtunnels' },
    logo: logoStacks,
  },
  {
    name: 'Meema',
    description: 'Media Management as a Service. The easy way to manage, distribute and scale your media. Soon becoming a Stack.',
    link: { href: 'https://github.com/meemalabs', label: 'github.com/meemalabs' },
    logo: logoMeema,
  },
  {
    name: 'Open Web',
    description: 'At the intersection of tech & humanity, a community that builds towards a better future.',
    link: { href: 'https://ow3.org/', label: 'ow3.org' },
    logo: logoOw3,
  },
  {
    name: 'pngx',
    description: 'Modern PNG encoder & decoder.',
    link: { href: 'https://github.com/stacksjs/pngx', label: 'github.com/stacksjs/pngx' },
    logo: logoStacks,
  },
  {
    name: 'post',
    description: 'The Post. A modern mail server & utilities. Ships with a CLI, library, and UI.',
    link: { href: 'https://github.com/stacksjs/post', label: 'github.com/stacksjs/post' },
    logo: logoStacks,
  },
  {
    name: 'qrx',
    description: 'QR & Bar Code generating & reading. Lightweight & powerful.',
    link: { href: 'https://github.com/stacksjs/qrx', label: 'github.com/stacksjs/qrx' },
    logo: logoStacks,
  },
  {
    name: 'rpx',
    description: 'A modern, fast reverse proxy. For a better local development environment.',
    link: { href: 'https://github.com/stacksjs/rpx', label: 'github.com/stacksjs/rpx' },
    logo: logoStacks,
  },
  {
    name: 'Stacks',
    description: 'For full-stack Web Artisans. Develop framework-agnostic apps, clouds & libraries, faster.',
    link: { href: 'https://stacksjs.org', label: 'stacksjs.org' },
    logo: logoStacks,
  },
  {
    name: 'tlsx',
    description: 'A TLS library with automation & HTTPS by default.',
    link: { href: 'https://github.com/stacksjs/tlsx', label: 'github.com/stacksjs/tlsx' },
    logo: logoStacks,
  },
  {
    name: 'ts-avif',
    description: 'High quality & small file sizes.',
    link: { href: 'https://github.com/stacksjs/ts-avif', label: 'github.com/stacksjs/ts-avif' },
    logo: logoStacks,
  },
  {
    name: 'ts-collect',
    description: 'A powerful, yet lightweight, Laravel-like Collections written for TypeScript.',
    link: { href: 'https://github.com/stacksjs/ts-collect', label: 'github.com/stacksjs/ts-collect' },
    logo: logoStacks,
  },
  {
    name: 'ts-gif',
    description: 'Performant TypeScript implementation of a GIF encoder & decoder.',
    link: { href: 'https://github.com/stacksjs/ts-gif', label: 'github.com/stacksjs/ts-gif' },
    logo: logoStacks,
  },
  {
    name: 'ts-ndarray',
    description: 'Multidimensional arrays for JavaScript & TypeScript.',
    link: { href: 'https://github.com/stacksjs/ts-ndarray', label: 'github.com/stacksjs/ts-ndarray' },
    logo: logoStacks,
  },
  {
    name: 'ts-spreadsheets',
    description: 'Easily generate spreadsheets, like CSVs and Excel files.',
    link: { href: 'https://github.com/stacksjs/ts-spreadsheets', label: 'github.com/stacksjs/ts-spreadsheets' },
    logo: logoStacks,
  },
  {
    name: 'ts-svg',
    description: 'Powerful developer toolkit for working with SVGs.',
    link: { href: 'https://github.com/stacksjs/ts-svg', label: 'github.com/stacksjs/ts-svg' },
    logo: logoStacks,
  },
  {
    name: 'ts-webp',
    description: 'A modern image format for the Web.',
    link: { href: 'https://github.com/stacksjs/ts-webp', label: 'github.com/stacksjs/ts-webp' },
    logo: logoStacks,
  },
  {
    name: 'vidx',
    description: 'Make your videos load faster. A better save for the web.',
    link: { href: 'https://github.com/stacksjs/vidx', label: 'github.com/stacksjs/vidx' },
    logo: logoStacks,
  },
  {
    name: 'vite-plugin-local',
    description: 'Pretty development URLs, and HTTPS. Zero config, zero setup.',
    link: { href: 'https://github.com/stacksjs/vite-plugin-local', label: 'github.com/stacksjs/vite-plugin-local' },
    logo: logoStacks,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Chris Breuer</title>
        <meta
          name="description"
          content="Things I've made."
        />
      </Head>
      <SimpleLayout
        title="Things I've made."
        intro="I've worked on tons of little projects over the years but these are the ones that I'm most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8 rounded-full "
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
