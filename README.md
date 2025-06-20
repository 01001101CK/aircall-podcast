# Aircall Podcast Platform

A modern, responsive podcast discovery platform built with Next.js, featuring advanced search, filtering, and sorting capabilities.

## 🚀 Live Demo

[https://aircall-podcast.vercel.app/](https://aircall-podcast.vercel.app/)

## ✨ Features

- **Search & Filtering**: Real-time search across podcasts and blogs
- **Smart Sorting**: Sort by date, title, or duration
- **Responsive Design**: Mobile-first with adaptive layouts
- **Accessibility**: WCAG 2.1 AA compliant
- **Analytics**: PostHog integration
- **Testing**: Cypress E2E testing

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: CSS Modules
- **State Management**: React Context API
- **Analytics**: PostHog
- **Testing**: Cypress
- **Deployment**: Vercel
- **Font**: Fellix

## 📦 Setup

### 1. Clone & Install

```bash
git clone <repository-url>
cd aircall-podcast
npm install
```

### 2. Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```
aircall-podcast/
├── app/                    # Next.js App Router
├── components/            # React components
├── contexts/              # SearchContext for state management
├── data/                  # Static data (blogs.ts)
├── styles/                # CSS modules
├── types/                 # TypeScript definitions
└── instrumentation-client.tsx # PostHog setup
```

## 🎯 Key Components

- **SearchContext**: Global search, filter, and sort state
- **LatestReleases**: Podcast grid with search/sort functionality
- **Header**: Navigation with search integration

## 🚀 Deployment

Deploy to Vercel or run `npm run build` for production build.

## 📄 License

MIT
