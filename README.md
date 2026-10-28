# PAPANAIDU PADAKANDLA — Developer Portfolio

A responsive developer portfolio built with React, Vite, Tailwind CSS, Motion for React, and Lucide icons.

## What’s included

- Resume-based profile, education, internship experience, and certifications
- Verified GitHub repositories for the project cards
- Downloadable resume and the supplied profile photo
- Skills and personal contact details stored in one editable file
- Contact form that opens a prefilled draft in the visitor’s email app
- Responsive navigation, keyboard controls, reduced-motion support, and scroll-based section highlights
- Vercel- and Netlify-ready production build

The project links point to public repositories. A live demo has not been published for these projects, so no fictitious demo links are displayed.

## Requirements

- Node.js 20.19 or newer (or Node.js 22.12 or newer)
- npm
- Visual Studio Code

## 1. Install dependencies

Open the portfolio folder in VS Code. In **Terminal → New Terminal**, run:

```powershell
npm.cmd install
```

`npm.cmd` works in Windows PowerShell when script execution policies prevent the `npm.ps1` wrapper from running.

## 2. Run the website locally

```powershell
npm.cmd run dev
```

Open the local address printed in the terminal (usually `http://localhost:5173`). Stop the development server by pressing **Ctrl+C** in the terminal.

## 3. Customize personal details

Edit [`src/data/portfolio.js`](./src/data/portfolio.js) to update the name, headline, contact details, biography, skills, projects, education, and experience.

- Use skill tags only for technologies you have personally used.
- Add internship dates only after verifying them.
- Add a real credential or live-demo URL only if one is available.

Replace `public/assets/profile.jpg` or `public/assets/resume.pdf` to update the photo or resume. Keep those filenames so the current links continue to work. The original copies in the root `assets` folder are retained as well.

The contact form deliberately does **not** claim a message has been sent. It opens the visitor’s default email application with the form details filled in; the visitor must review and send the email. It requires no API key or third-party form account.

## 4. Create a GitHub repository

Create a **new empty public repository** in GitHub without auto-generating a README. Because this development folder is nested inside a larger Windows user directory, publish only a clean copy of this project—not `C:\Users\ADMIN` or your full Desktop.

An easy beginner workflow:

1. In Windows File Explorer, create a separate folder such as `C:\Portfolio\papanaidu-portfolio`.
2. Copy the portfolio project files into that folder. Include `src`, `public`, `package.json`, `vite.config.js`, `index.html`, and `README.md`. Do not copy `node_modules` or `dist`.
3. Open **GitHub Desktop**, choose **File → Add local repository**, and select `C:\Portfolio\papanaidu-portfolio`.
4. If GitHub Desktop says the folder is not a repository, select **Create a repository** for that folder.
5. Commit the initial files, choose **Publish repository**, and publish the dedicated portfolio repository.

The public profile and project repositories are at <https://github.com/papanaidu>.

## 5. Build and deploy

Check the production build locally:

```powershell
npm.cmd run build
npm.cmd run preview
```

To deploy with **Vercel**:

1. Sign in at <https://vercel.com> using GitHub.
2. Select **Add New → Project** and import the new portfolio repository.
3. Keep the framework preset as **Vite**. The build command is `npm run build`; the output directory is `dist`.
4. Select **Deploy**. Vercel provides a public `*.vercel.app` address when the build completes.
5. Later pushes to the repository automatically create fresh deployments.

To use **Netlify** instead, import the same GitHub repository, use `npm run build` as the build command and `dist` as the publish directory. Netlify will provide a public `*.netlify.app` address.

## Project structure

```text
public/
  assets/
    profile.jpg
    resume.pdf
src/
  components/
    Navbar.jsx
    ProjectCard.jsx
    Reveal.jsx
    SectionHeading.jsx
  data/
    portfolio.js
  App.jsx
  index.css
  main.jsx
index.html
package.json
vite.config.js
README.md
```
