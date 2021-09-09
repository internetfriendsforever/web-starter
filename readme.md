# Web starter

A website starter example using the following stack:

- [Sanity](https://www.sanity.io/) backend
- [JavaScript Tagged Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) templating
- [Scripts](./website/scripts) and [utilities](./website/src/utils) for build and development
- [JavaScript Standard Style](https://standardjs.com/) and [ESLint](https://eslint.org/) for code linting

_No other pre-/post processors or bundlers for JavaScript or CSS (Babel, PostCSS, Sass, Stylus, etc.) are included._

It features:

- A no-framework approach
- Plain pre-rendered [pretty](https://github.com/jonschlinkert/pretty) HTML
- Async component based architecture
- Data fetching from any source
- Data caching in development for fast iterations
- Vanilla CSS and JavaScript
- Zero overhead on delivery to end user

## Prerequisites

You should have the following tools installed on your computer:
- A [unix based terminal emulator (command-line)](https://en.wikipedia.org/wiki/List_of_terminal_emulators#Unix-like) ([Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)) for Mac)
- [Node.js](https://nodejs.org/) and [NPM](https://docs.npmjs.com/), preferably installed with [NVM](https://github.com/nvm-sh/nvm)
- [Git](https://git-scm.com/) for source control management
- A text editor for working with code ([Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), [Visual Studio Code](https://code.visualstudio.com/), [GNU Nano](https://en.wikipedia.org/wiki/GNU_nano), [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor)), [Emacs](https://en.wikipedia.org/wiki/Emacs))
- For tips on syntax highlighting, see [editing](#editing).

## Setup

This template repository can be used directly as a starting point. Click “Use this template” on [GitHub](https://github.com/internetfriendsforever/web-starter), and clone your newly created repository to your computer.

In your terminal: `cd /path/to/project`

**Website:**

- `cd website`
- `npm install`

**Sanity:**

Recommended: Clear out the Sanity folder and [set up using their latest documentation](https://www.sanity.io/docs/getting-started-with-sanity-cli). This ensures a fresh install with latest dependencies using your account and project.

Alternatively: Edit the `sanity.json` file with correct `projectId` and `dataset`. In this case, you might want to do a `sanity install` and `sanity upgrade` as well.

## Development

In your terminal: `cd /path/to/project`

**Website:**

- `cd website`
- `npm run dev`

**Sanity:**

- `cd sanity`
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
- Setup Netlify builds triggering from Sanity:
  - **Alternative 1** – Trigger _automatically_ when Sanity content is published using webhooks in [Netlify](https://docs.netlify.com/configure-builds/build-hooks/) and [Sanity](https://www.sanity.io/docs/webhooks).
  - **Alternative 2** – Trigger builds _manually_ from the Sanity dashboard interface using [Netlify Deploy plugin](https://www.sanity.io/plugins/sanity-plugin-dashboard-widget-netlify).

### Deploy Sanity Studio

In your terminal:

- `cd /path/to/project/sanity`
- `sanity deploy`

## Editing

### HTML syntax highlighting with tagged template literals in Sublime Text 3

Use [Sublime’s package manager](https://packagecontrol.io/installation) to install JSCustom.

Go to **Preferences → Package settings → JS Custom → Settings** and update or create the following configuration:

```
{
  "configurations":
  {
    "Template literals":
    {
      "custom_templates":
      {
        "tags": {
          "html": "scope:text.html.basic"
        }
      }
    }
  }
}
```

Go to **Preferences → Package settings → JS Custom → Rebuild syntaxes** and restart Sublime. You might have to close and reopen your files to get syntax highlighting to work.

For more details on customizing JS Custom, see the [JS Custom GitHub repository](https://github.com/Thom1729/Sublime-JS-Custom#js-custom).

Happy coding!

## Patterns

### Load and execute client side scripts from partials

Partials load and execute client side scripts "locally" for each occurence using
[`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
in a `script` tag of `type="module"`. Script tags will be scattered in the HTML document, but module loading are deferred automatically ([See JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)).

An example can be viewed in the [counter partial](website/src/partials/counter.js) and its [client side script](website/src/assets/counter.js).

**Advantages:**

- No need to serialize and deserialize data and configuration in HTML `data-*` attributes. It can be passed as properties in the function call directly.
- Only client scripts that are actually in use for the given page is loaded and executed.
- Calls to client scripts are coupled with the partial, instead of being decoupled globally somewhere.

**Potential drawbacks:**

- Many script tags in the DOM. Is this a problem?
  - Slower DOM parsing?
  - More HTML over the wire?
  - Problems with CSS and rendering? A rumour says that CSS grids handle script tags poorly, and require `script { display: none }`.
- Is there any overhead calling `import` many times over, or do the browsers handle this efficiently?
- Elements need identifiers (`id` attribute), since we're targeting specific elements of the same type.
- Is there any overhead in calling many `document.getElementById` instead of a single `document.querySelectorAll`?

_This pattern can be measured up against the classic pattern of having global scripts._


