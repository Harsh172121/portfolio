<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Harsh172121/portfolio/main/images/logo.svg">
  <img alt="Harsh Darji Logo" src="images/logo.svg" width="80" align="right">
</picture>

# Harsh Darji — Portfolio

> Full Stack Developer | MERN Stack | Mobile & Web Applications

Personal portfolio website showcasing my projects, skills, experience, and freelancing work. Built with vanilla HTML, CSS, and JavaScript with an Express backend for the contact form.

## Sections

- **Home** — Profile, typed role animation, social links, resume
- **Experience** — Internships at Elsner Technologies (Android Development)
- **Skills** — Bento-grid layout with category filters, proficiency bars, soft skills
- **GitHub** — Live stats, contribution streak, contribution snake
- **Projects** — SAL Education (attendance system) & SHIMP (expense tracker)
- **Freelancing** — Nirmaan Academy Inquiry & Portfolio Platform
- **Volunteering** — Anchoring at SAL College Induction Program
- **Education** — B.E., Diploma, SSC with coursework
- **Contact** — Contact form with email via Nodemailer

## Tech Stack

**Frontend:** HTML5, CSS3 (vanilla), JavaScript (ES6), AOS, Google Fonts
**Backend:** Node.js, Express, Nodemailer
**Hosting:** Netlify (frontend) + Render/VPS (backend)

## Features

- Dark theme with green (#4ade80) accent
- Custom cursor & particle canvas background
- 3D tilt cards & scroll-triggered animations
- Interactive developer terminal widget
- Fully responsive design
- SEO optimized with structured data, sitemap, and robots.txt
- Contact form with email delivery

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Harsh172121/portfolio.git

# Install backend dependencies
cd portfolio
npm install

# Create .env file with your credentials
cp .env.example .env

# Start the backend (for contact form)
npm start
```

Open `index.html` directly in browser for the frontend.

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 5000) |
| `EMAIL_USER` | Gmail address for sending emails |
| `EMAIL_PASS` | Gmail app password |
| `RECEIVER_EMAIL` | Email to receive contact form submissions |

## License

MIT
