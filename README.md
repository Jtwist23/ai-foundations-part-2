# AI Foundations Lab Notes

A beginner-friendly Vite app with a setup checklist, a Linux and Git command cheat sheet, and a fictional AI experiment form. Form data is saved only in the browser with `localStorage`; the app has no backend, API keys, or external services.

## Install

You need [Node.js](https://nodejs.org/) installed. In a terminal, move into the project folder and install its packages:

```bash
cd ai-lab-notes
npm install
```

## Run locally

Start Vite's development server:

```bash
npm run dev
```

Open the local address printed in the terminal, usually `http://localhost:5173`. Press `Ctrl+C` in the terminal to stop the server.

## Build

Create a production build:

```bash
npm run build
```

Vite writes the finished site to the `dist` folder. You can test that build locally with:

```bash
npm run preview
```

## Upload to GitHub

Create an empty repository on GitHub, then run these commands from this project's folder. Replace the example URL with your repository URL.

```bash
git init
git add .
git commit -m "Build AI lab notes app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

If the project already has an `origin` remote, do not add it again. Check it with `git remote -v`, then use `git push` after each new commit.

## Deploy with Vercel

1. Push the project to GitHub.
2. Sign in at [vercel.com](https://vercel.com/) and choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Vite automatically. Confirm that the build command is `npm run build` and the output directory is `dist`.
5. Select **Deploy**.

No environment variables are needed. Future pushes to the connected GitHub branch will trigger new deployments.

## Data and privacy

The lab notes form stores one set of notes under the key `ai-foundations-lab-notes` in the current browser's `localStorage`. The saved notes are not uploaded anywhere. Clearing site data in the browser also deletes the saved notes.
