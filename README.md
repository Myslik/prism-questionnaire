# PRISM Questionnaire

A lightweight, customizable questionnaire widget built for Shoptet using modern web technologies.

## About

This project provides a simple, stylish questionnaire interface that can be embedded in web applications. It uses petite-vue (a 6kb subset of Vue 3) for reactivity and Vite for development and building.

## Project Structure

```
prism-questionnaire/
├── docs/                   # Main application directory
│   ├── index.html          # HTML structure
│   ├── questionnaire.js    # Application logic
│   └── style.css           # Styling
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Prerequisites

- Node.js (v14+ recommended)
- npm or npx

## Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/Myslik/prism-questionnaire.git
cd prism-questionnaire
npm install
```

## Usage

### Development Server

Start the development server with:

```bash
npx vite docs --host 0.0.0.0 --port 5173 --strictPort
```

This will serve the application at `http://localhost:5173` with hot module replacement (HMR) enabled.

### Building for Production

Build the project for production:

```bash
npx vite build docs
```

This will generate optimized assets in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npx vite preview docs
```

## Technical Overview

The questionnaire uses:

- **petite-vue**: A 6KB subset of Vue 3 with the same template syntax for reactivity
- **CSS Custom Properties**: Easy theming through CSS variables
- **Vite**: Modern frontend build tooling with fast HMR

The interface features:
- Step indicator
- Question list with 1-6 scale ratings
- Customizable styling through CSS variables
- Mobile-friendly responsive design