# Kanishka's Portfolio

A modern, responsive portfolio website built with React, showcasing backend engineering expertise and projects.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/           # All React components
│   │   ├── common/          # Reusable UI components
│   │   │   ├── Button.jsx   # Reusable button component
│   │   │   ├── Card.jsx     # Card wrapper component
│   │   │   └── SectionTitle.jsx  # Section title component
│   │   ├── layout/          # Layout components
│   │   │   ├── Navbar.jsx   # Navigation bar with mobile menu
│   │   │   ├── Footer.jsx   # Footer with copyright
│   │   │   └── Container.jsx  # Page width container
│   │   └── sections/        # Page section components
│   │       ├── Hero.jsx     # Landing/hero section
│   │       ├── About.jsx    # About section
│   │       ├── Skills.jsx   # Skills grid section
│   │       ├── SkillCard.jsx  # Individual skill card
│   │       ├── Projects.jsx # Projects grid section
│   │       ├── ProjectCard.jsx  # Individual project card
│   │       └── Contact.jsx  # Contact form section
│   ├── constants/           # Application constants
│   │   └── data.js         # All portfolio data
│   ├── utils/              # Utility functions
│   │   └── helpers.js      # Helper functions for validation
│   ├── styles/             # Stylesheets
│   │   └── style.css       # Main stylesheet
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎯 Design Principles Followed

1. **Single Responsibility Principle (SRP)** - Each component has one clear purpose
2. **Keep it Simple** - Straightforward, readable code
3. **DRY (Don't Repeat Yourself)** - Reusable components and utilities
4. **Meaningful Naming** - Clear, descriptive names for components and functions
5. **Small, Focused Functions** - Each function does one thing well
6. **Comment Wisely** - JSDoc comments for component purposes
7. **Modular Design** - Organized folder structure with clear separation
8. **Handle Errors Properly** - Form validation and error handling
9. **Law of Demeter** - Components only interact with immediate dependencies

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## ✨ Features

- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Smooth Scrolling** - Navigate between sections smoothly
- **Mobile Menu** - Hamburger menu for mobile devices
- **Form Validation** - Client-side validation for contact form
- **Modular Components** - Easy to maintain and extend
- **Modern UI** - Clean, professional design with gradients and animations

## 📝 Customization

### Update Personal Information
Edit `src/constants/data.js` to update:
- Personal info (name, title, email, phone)
- About section text
- Skills
- Projects
- Social links

### Modify Styling
Edit `src/styles/style.css` to customize:
- Colors (CSS variables at the top)
- Spacing and layout
- Animations and transitions
- Responsive breakpoints

### Add New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/constants/data.js`

## 🎨 Component Architecture

### Reusable Components (`components/common/`)
- Independent, reusable UI elements
- No business logic, only presentation
- Accept props for customization

### Layout Components (`components/layout/`)
- Structural components for page layout
- Provide consistent spacing and structure

### Section Components (`components/sections/`)
- Compose smaller components
- Handle section-specific logic
- Connect to data from constants

## 📦 Data Management

All portfolio data is centralized in `src/constants/data.js`:
- Easy to update without touching components
- Type-safe data structure
- Single source of truth

## 🔧 Utilities

`src/utils/helpers.js` contains utility functions:
- `scrollToElement()` - Smooth scroll to section
- `isValidEmail()` - Email validation
- `validateContactForm()` - Form validation logic

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Mobile: ≤ 768px

## 🚀 Deployment

This project can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist/` folder.

## 📄 License

© 2025 Kanishka. All rights reserved.
