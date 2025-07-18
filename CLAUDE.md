# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Tom & Tess" - a React TypeScript landing page for an AI-powered platform that connects content creators with businesses. The application serves as a dual-sided marketplace where companies can find upcoming creators and creators can find brand partnerships.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server
- **Build**: `npm run build` - Creates production build
- **Lint**: `npm run lint` - Runs ESLint on the codebase
- **Preview**: `npm run preview` - Preview production build locally

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom gradient backgrounds
- **Icons**: Lucide React for icons, custom SVG/PNG assets in `/public`
- **Linting**: ESLint with TypeScript support

## Architecture

### Core Components

**App.tsx** - Main application container with:
- Tab-based navigation (`for companies` vs `for creators`)
- Dual personality system (Tom for companies, Tess for creators)
- Dynamic gradient backgrounds and content based on active tab
- External form integration via Tally forms

**InfluencerShowcase.tsx** - Complex showcase component featuring:
- Platform filtering (TikTok/Instagram for companies, Restaurants/Retail for creators)
- Specialized content filters (e.g., "Airplane Listeners", "BookTok", "Aesthetic Lifestyle")
- Mock data for creators and businesses with engagement metrics
- Dynamic filtering system based on tags

### Key Features

- **Dual-sided Interface**: Single app serving both companies and creators with different UI/UX
- **Dynamic Content**: All text, gradients, and showcase data changes based on active tab
- **Mock Data System**: Realistic creator profiles and business listings with engagement metrics
- **Filter System**: Sophisticated tag-based filtering for matching creators with specific niches
- **External Integration**: Links to Tally forms for lead capture

### Asset Management

Static assets in `/public` include platform logos (TikTok, Instagram), verification badges, and brand logos. The app recently switched from checkmark SVG to Twitter verified badge for credibility indicators.

### Styling Approach

Uses Tailwind with extensive custom styling including:
- Gradient backgrounds that change per tab
- Custom button animations with shadow effects
- Responsive design with mobile-first approach
- Backdrop blur effects and transparency layers