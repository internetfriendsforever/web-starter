# Web starter

A website starter example using the following stack:

- [11ty](https://www.11ty.dev/) frontend
- [Sanity](https://www.sanity.io/) backend
- [JavaScript Standard Style](https://standardjs.com/) and [ESLint](https://eslint.org/) for code linting
- [Mustache](https://mustache.github.io/mustache.5.html) templating (easily swappable)

_No other pre-/post processors or bundlers for JavaScript or CSS (Babel, PostCSS, Sass, Stylus, etc.) are included._

## Locales edition 🚩

_This is a branch of the original web-starter. It features localization of the website. Beware it is not neccessarily in sync with the original master branch._

**Goals:**
- Localize strings, dates, numbers, etc.
- Path based localization (e.g. `/en`, `/nb`)
- Localize urls (e.g. `/en/first-article` and `/nb/forste-artikkel`)
- Navigate between pages in different languages (without going back to start)
- Avoid duplication of code and data (i.e. templates for each locale, multiple sources of truth)
- Minimize the usage of computed data in 11ty (since its inner workings is a little complex)
- Add [meta tags for alternative locales](https://ahrefs.com/blog/hreflang-tags/)

**Mehod:**

As there are no built-in functionality for localizing in 11ty so there is many ways of going about. Some [suggested methods](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) involve a lot of duplicated code, which is not very maintainable.

After some trial and error (with symlinks), I found that you could run 11ty i mulitple processes using a different environment variable (`process.env.lang`) and output directory for each locale. There are a few downsides to this approach:

- You can't simply run the `eleventy` command. There are [build](website/build.js) and [dev](website/dev.js) scripts. Even though there's a little more tooling, it seems to be working quite well.
- If you want your assets to exist globally (`/assets/styles.css` instead of `/en/assets/styles.css`), you need to manage the copying of these outside of eleventy.

The upside is that it's a little easier to reason about and avoids a lot of duplicated code.

**Todo:**
- Add example for localization in Sanity
- Single locales.json for the website and Sanity
- Add localization methods for dates and numbers

## Prerequisites

You need to have the following tools installed on your computer:
- A [unix based terminal emulator (command-line)](https://en.wikipedia.org/wiki/List_of_terminal_emulators#Unix-like) ([Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) for Mac)
- [Node.js](https://nodejs.org/) and [NPM](https://docs.npmjs.com/), preferably installed with [NVM](https://github.com/nvm-sh/nvm)
- [Git](https://git-scm.com/) for source control management
- A text editor for working with code ([Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), [Visual Studio Code](https://code.visualstudio.com/), [GNU Nano](https://en.wikipedia.org/wiki/GNU_nano), [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)), [Emacs](https://en.wikipedia.org/wiki/Emacs))

## Setup

This repository can be forked or downloaded as a starting point.

## Development

In your terminal: `cd /path/to/project`

**Website:**

- `cd website`
- `npm install` (if dependencies are not already installed)
- `npm run dev`

**Sanity:**

- `cd sanity`
- `sanity install` (if dependencies are not already installed)
- `sanity upgrade` (if you want to upgrade Sanity)
- `sanity start`

## Deployment

### Build and deploy website

**Method 1** – Build and upload website manually:

In your terminal:
- `cd /path/to/project/website`
- `npm run build`

The files are output to `dist`, and its contents can be hosted on any static web server. For example, it can be uploaded to your hosting provider using [FTP](https://no.wikipedia.org/wiki/FTP), or using something like [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) to host it on AWS S3.

**Method 2** – Automatic deployments:

Using a hosting provider like [Netlify](https://www.netlify.com/) can simplify the process considerably as it has built-in continous integration. This means that you can set it up to build and deploy your site whenever the source code is pushed or the sanity content changes:
- Setup a project on Netlify and connect it with your hosted git repository (Github, Gitlab, Bitbucket).
- Configure _base directory_, _build command_ and _publish directory_ in Netlify build settings.
- Setup Netlify builds triggering from Sanity:
  - **Alternative 1** – Trigger _automatically_ when Sanity content is published using webhooks in [Netlify](https://docs.netlify.com/configure-builds/build-hooks/) and [Sanity](https://www.sanity.io/docs/webhooks).
  - **Alternative 2** – Trigger builds _manually_ from the Sanity dashboard interface using [Netlify Deploy plugin](https://www.sanity.io/plugins/sanity-plugin-dashboard-widget-netlify).

### Deploy Sanity Studio

In your terminal:

- `cd /path/to/project/sanity`
- `sanity deploy`
