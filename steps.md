_Note: The documentation is outdated for this branch!_

# How to make this project from scratch

These instructions are general steps on how to reproduce the example website. It does not contain all details and source code. Find and copy code from the [repository](https://github.com/internetfriendsforever/web-starter) when needed.

## Prepare your workspace and tools
- Make a project folder somewhere on your computer
- Open the project folder in your favorite text editor
- Open your terminal emulator (command-line) and navigate to your project folder: `cd /path/to/project`

## Setup website
- Create a `website` directory in your project folder
- Create a `package.json` file in website directory containing an empty object `{}`
- Navigate to the website directory in yout terminal: `cd /path/to/project/website`
- Install dependencies: `npm install @11ty/eleventy pretty`
- Install development dependencies (for syntax linting): `npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard`
- Add `.eslintrc` config which extends [standardjs](https://standardjs.com/) in website directory (see repository source code)
- Add `.nvmrc` to specify which node version the project is using in website directory
- Create `.eleventy.js` config in website directory
  - Passthrough copy for `assets` folder
  - Disable browser syncing
  - Pretty transform `.html` files
  - Configure template language
  - Configure file extensions and directory names

### Make a page
- Create `src` directory
- Add an `index.mustache` template file in src directory
- Add `package.json` scripts for `build`, `dev` and `clean`
- Run `npm run dev` and open in your browser. You should see the contents of your index template file

### Add a layout
- Create `src/includes` directory
- Create `layout.mustache` in includes directory with a html layout template
- Add layout and title frontmatter in your `src/index.mustache` template

### Add a stylesheet
- Create `src/assets` directory
- Create `styles.css` file and add some styling
- Add stylesheet link tag in `src/includes/layout.mustache`

## Setup Sanity
- Create a `sanity` folder in your project directory
- Navigate to it in your terminal `cd /path/to/project/sanity`
- Make sure you have sanity command line tool installed on your system `npm install -g @sanity/cli`
- Setup a clean sanity project `sanity init`
- Define a document type in `schemas/schema.js`
- Run studio `sanity start`
- Add some content in the studio
- Deploy studio `sanity deploy`

## Add data to website
- Navigate to the website folder in your terminal `cd /path/to/project/website`
- Install a few more dependencies `npm install @11ty/eleventy-cache-assets @sanity/block-content-to-html @sanity/client @sanity/image-url`
- Create a `utils` directory in src folder
- Create a `sanity.js` file in utils directory
  - Add client configuration
  - Add fetch with cache utility script
  - Add image and html utility script
- Create a `data` directory in src folder
- Create `articles.js` file in data folder and use sanity utility to fetch and transform some data
- Add markup in `index.mustache` template to display data

## Initialize git and commit files
- Navigate to your project folder in terminal `cd /path/to/project`
- Initialize git `git init`
- Create `.gitignore` in your project folder and add files and folders that is not supposed to be in your repository. As a general rule, this are files and folders that are generated
- Use your favorite git client, review, stage your files and commit

## Setup and push to remote git origin
- Setup a remote repository at a hosting provider ([Github](https://github.com/), [GitLab](https://gitlab.com/), [BitBucket](https://bitbucket.org/), [Gitern](https://gitern.com/))
- Navigate to your project folder in terminal `cd /path/to/project`
- Add a remote origin: `git remote add origin path-to-repository-goes-here`
- Push to remote: `git push origin master`
