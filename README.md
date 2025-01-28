# Qiyuan Liu's Personal Website
Welcome to my personal website repository! This project marks my very first foray into web design, making it a truly meaningful milestone in my journey. I will be updating this site regularly to document my growth and share my progress.

Feel free to explore the code, watch as the website evolves, and reach out if you'd like to connect. I'm always open to engaging with others who share an interest in robotics, web development, or anything in between!

## Visit it here! : https://www.qiyuanliu.com/
A personal website built to record my projects, educations, and experiences in robotics engineering and intelligent control. Explore my portfolio and get in touch for collaborations in the field of robotics and autonomous systems.

## Installation & Setups
Some preparations in advance, make sure you have [Node](https://nodejs.org/en/download/package-manager) and [Yarn](https://yarnpkg.com/getting-started/install) installed on your device. Remember to reconfigure your fnm environment.
```bash
fnm env --use-on-cd | Out-String | Invoke-Expression
```
Clone the repository and direct to Imitation-main directory.
```bash
git clone https://github.com/iQiyuan/iQiyuan.github.io.git
```
Open your terminal and install all dependencies. After all dependencies installed, you can start to run your website on localhost.
```bash
yarn install
yarn dev
```

## Deploy the Website
It is recommended to first create a GitHub repository, then push the built web project to GitHub. After that, log in to [Vercel](https://vercel.com/) and follow their steps to complete the deployment. Once deployed, a Vercel URL will be generated, which can be used to access the corresponding website. If you want to use a custom domain, purchase the domain first, and then point its DNS to Vercel.

## Update Logs

### 2025.Jan.27
Added one more project entitled "Autonomous Tennis Ball Fetcher". Fixed a typo in README.md. Added a button to download resume.

### 2025.Jan.21
Added "Task Allocation by Dynamic Voronoi Space Partitioning" project. Updated personal statement. Updated "About me" section. Changed descriptions in "Experince" & "Education" section.

## Why not GitHub Pages?
```bash
> Image Optimization using the default loader is not compatible with export.

Possible solutions:
- Use next start to run a server, which includes the Image Optimization API.
- Configure images.unoptimized = true in next.config.js to disable the Image Optimization API.

Read more: https://nextjs.org/docs/messages/export-image-api
```
The error message indicates that you are trying to export a Next.js project as a static site (using output: 'export'), but the default image optimization feature is incompatible with static exports. To resolve this issue, you can disable Next.js's image optimization feature. If you prefer not to disable image optimization, the best option is to use a hosting platform that can run a Next.js server (such as Vercel, Heroku, etc.) or configure an external image optimization service. However, if you still wish to use GitHub Pages, the only option is to disable the image optimization feature, as GitHub Pages does not support dynamic functionality.