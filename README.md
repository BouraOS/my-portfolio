# 🚀 Bouramada Oussama - Portfolio

A modern, responsive, and accessible personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a beautiful dark/light mode, smooth animations, and internationalization support.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC.svg)](https://tailwindcss.com/)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with beautiful color schemes
- 🌓 **Dark/Light Mode** - Smooth theme switching with localStorage persistence
- 🌍 **Internationalization** - Multi-language support (EN/FR) with i18next
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and semantic HTML
- 📱 **Responsive** - Fully responsive design for all screen sizes
- ⚡ **Performance** - Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Scroll-triggered animations with Intersection Observer
- 🧩 **Component-Based** - Modular, maintainable, and reusable components
- 🎯 **Type-Safe** - Full TypeScript support for better developer experience
- 🎨 **shadcn/ui** - Beautiful, accessible components built with Radix UI

## 📋 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## 🌐 Demo

[Live Demo](https://bouraos.netlify.app/)

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 7.1.12** - Build tool and dev server
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **React Router DOM 6.26.2** - Client-side routing

### UI Components & Styling

- **Lucide React** - Icon library
- **Tailwind Animate** - Animation utilities

### State & Data

- **React i18next** - Internationalization

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Plugin React SWC** - Fast React refresh

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BouraOS/my-portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
portfolio/
├── public/                # Static assets
│   └── images/           # Images and media files
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── HeroSection
│   │   ├── AboutSection
│   │   ├── ServicesSection
│   │   ├── ExperienceSection
│   │   ├── ContactSection
│   │   ├── PortfolioSidebar
│   │   └── ThemeProvider.tsx
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── locales/         # Translation files
│   │   ├── en.json
│   │   └── fr.json
│   ├── styles/          # Global styles
│   │   └── globals.css
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── i18n.ts          # i18next configuration
├── .eslintrc.js         # ESLint configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 Customization

### Colors & Theme

Edit `src/styles/globals.css` to customize the color scheme:

```css
:root {
  /* Light mode colors */
  --portfolio-bg: 35 20% 98%;
  --portfolio-card: 0 0% 100%;
  --portfolio-orange: 33 100% 50%;
  /* ... */
}

.dark {
  /* Dark mode colors */
  --portfolio-bg: 240 10% 8%;
  --portfolio-card: 240 8% 12%;
  /* ... */
}
```

### Content

1. **Personal Information** - Update content in components
2. **Translations** - Edit `src/locales/en.json` and `src/locales/fr.json`
3. **Images** - Replace images in `public/images/`
4. **Resume** - Add your CV/Resume file

### Adding New Sections

1. Create component in `src/components/`
2. Import and add to `App.tsx`
3. Add navigation link in `PortfolioSidebar.tsx`
4. Add translations in locale files

## 🚢 Deployment

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🎯 Features Roadmap

- [ ] Blog section
- [ ] Project showcase with filtering
- [ ] Contact form backend integration
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance metrics
- [ ] Testimonials section
- [ ] CV download functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Bouramada Oussama**

- Email: osamaboura@gmail.com
- Phone: +212 691-288849
- Location: Casablanca, Morocco
- LinkedIn: [My LinkedIn](https://www.linkedin.com/in/oussama-bouramada-371b612a3/)
- GitHub: [My GitHub](https://github.com/BouraOS)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React i18next](https://react.i18next.com/)

---

⭐ **Star this repo if you find it helpful!**

Made with ❤️ by Bouramada Oussama
