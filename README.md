# Jan Brian Villamayor Portfolio

Personal portfolio website for Jan Brian Villamayor, a Full Stack Developer with 9+ years of experience building web applications, dashboards, customer portals, CMS/e-commerce solutions, API integrations, and internal business tools.

Live site: [https://jbvillamayor.netlify.app/](https://jbvillamayor.netlify.app/)

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Netlify

## Features

- Dark/light mode toggle
- Animated hero, skill cards, experience cards, and project cards
- Technical skills with stack icons
- Professional experience timeline
- Featured project portfolio with live project links
- Resume download CTA
- Mobile-responsive layout

## Featured Work

- Breeze
- Quantem SOF and Odfjell SOF
- Odfjell Customer Portal
- Banter App
- Trading Economics and Dynamics CRM integration
- John Foord Customer Portal
- SelectStart
- Doventry WordPress Website
- MindNation Web App
- Monique Ong Website
- Duke Connected Equipment Platform
- Inevitably Homegrown

## Common Commands

Run these commands from the `portfolio` folder.

Start local development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Refresh the downloadable resume in the website after regenerating the main resume PDF:

```powershell
Copy-Item -LiteralPath "..\Jan-Brian-Villamayor-Resume-ATS.pdf" -Destination ".\public\Jan-Brian-Villamayor-Resume-ATS.pdf" -Force
```

## Resume Regeneration Notes

The resume source file is:

```text
..\Jan-Brian-Villamayor-Resume-ATS.html
```

The generated resume files are:

```text
..\Jan-Brian-Villamayor-Resume-ATS.pdf
..\Jan-Brian-Villamayor-Resume.pdf
..\Jan-Brian-Villamayor-Resume-ATS.docx
```

After updating the resume HTML, regenerate both PDFs and the DOCX, then copy the latest ATS PDF into `public/` so the portfolio download stays updated.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
```

## Deployment

This site is deployed on Netlify.

Build command:

```bash
npm run build
```

Netlify configuration is defined in `netlify.toml`.

## Contact

- Email: janbrian.villamayor@outlook.com
- LinkedIn: [linkedin.com/in/jbvillamayor](https://www.linkedin.com/in/jbvillamayor/)
- GitHub: [github.com/iamjbpv](https://github.com/iamjbpv)
