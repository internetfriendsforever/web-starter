# Web starter

A website starter example using the following stack:

- [11ty](https://www.11ty.dev/) frontend framework
- [Sanity](https://www.sanity.io/) backend
- [JavaScript Standard Style](https://standardjs.com/) and [ESLint](https://eslint.org/) for code linting
- [Mustache](https://mustache.github.io/mustache.5.html) templating (easily swappable)

_No other pre-/post processors or bundlers for JavaScript or CSS (Babel, PostCSS, Sass, Stylus, etc.) are included._

## Prerequisites

You need to have the following tools installed on your computer:
- A [unix based terminal emulator (command-line)](https://en.wikipedia.org/wiki/List_of_terminal_emulators#Unix-like) ([Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) for Mac)
- [Node.js](https://nodejs.org/) and [NPM](https://docs.npmjs.com/), preferably installed with [NVM](https://github.com/nvm-sh/nvm)
- [Git](https://git-scm.com/) for source control management
- A text editor for working with code ([Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), [Visual Studio Code](https://code.visualstudio.com/), [GNU Nano](https://en.wikipedia.org/wiki/GNU_nano), [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)), [Emacs](https://en.wikipedia.org/wiki/Emacs))

## Setup

Although this repository can be cloned and used as a starting point, it might be more constructive to [setup your project from scratch](steps.md). This will help you understand what the stack consist of, how it fits together and how to change and tweak things for the project requirements and your own personal/team taste.

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
- Add correct _base directory_, _build command_ and _publish directory_ in Netlify build settings.
- Build website from Sanity:
  - **Alternative 1**: Build website whenever Sanity content changes by triggering a Netlify [build hook](https://docs.netlify.com/configure-builds/build-hooks/) from Sanity using [webhooks](https://www.sanity.io/docs/webhooks).
  - **Alternative 2**: Trigger builds from the Sanity dashboard using the [Netlify Deploy](https://www.sanity.io/plugins/sanity-plugin-dashboard-widget-netlify) plugin for Sanity.

### Deploy Sanity Studio

In your terminal:

- `cd /path/to/project/sanity`
- `sanity deploy`
