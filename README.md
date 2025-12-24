# Kanishka's Portfolio

A modern, responsive portfolio website built with React, showcasing software engineering expertise, work experience, and projects.

## 👨‍💻 About

Software Engineer at Adobe with 2+ years of experience in backend development, full-stack applications, and AI solutions. Specialized in Java, Spring Boot, Node.js, React.js, AWS, and Agentic AI frameworks.

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
- **GitHub Integration** - Automatically fetches and displays your real GitHub projects
  - Shows project descriptions, languages, stars, and forks
  - Filters out forks and the portfolio repo itself
  - Falls back to static projects if API fails
- **Work Experience Timeline** - Professional experience section with details
- **Education Section** - Academic background and qualifications
- **Skills Showcase** - Real tech stack and expertise areas
- **Privacy Protected** - Contact information secured with environment variables

## 📝 Customization

### Update Personal Information

**⚠️ PRIVACY IMPORTANT:** Never commit your real email or phone number directly to the repository!

#### For Contact Information (Email & Phone):

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** with your real information:
   ```env
   VITE_CONTACT_EMAIL=your.real.email@example.com
   VITE_CONTACT_PHONE=+1 (555) 123-4567
   ```

3. **The `.env` file is already in `.gitignore`** - it will never be committed to git!

4. **For production deployment**, set these environment variables in your hosting platform (Vercel, Netlify, etc.)

#### For Other Information:
Edit `src/constants/data.js` to update:
- Name and title (safe to commit)
- About section text
- Skills
- Social links

### GitHub Projects Integration
Projects are automatically fetched from your GitHub account! To customize:

1. **Change GitHub Username**: Edit `GITHUB_USERNAME` in `src/utils/githubApi.js`
2. **Filter Projects**: Modify the filter logic in `fetchGitHubRepos()` function
3. **Number of Projects**: Change `.slice(0, 6)` to show more/fewer projects
4. **Fallback Projects**: Edit `projects` array in `src/constants/data.js` (used if GitHub API fails)

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

### Deployment Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Set Environment Variables** in your hosting platform:
   - `VITE_CONTACT_EMAIL` - Your email address
   - `VITE_CONTACT_PHONE` - Your phone number

3. **Deploy the `dist/` folder**

### Environment Variables for Production:

When deploying, make sure to set these environment variables in your hosting platform's dashboard:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- **GitHub Pages**: Use GitHub Actions secrets

**Remember:** Never commit `.env` files - they're already in `.gitignore`!

## 📄 License

© 2025 Kanishka. All rights reserved.
