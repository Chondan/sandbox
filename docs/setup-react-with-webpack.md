# How to use Webpack with React

Tutorial link: https://www.freecodecamp.org/news/learn-webpack-for-react-a36d4cac5060/

## Lesson Learned & Tip & Tricks

- [chalk](https://www.npmjs.com/package/chalk) -> Terminal string styling done right

## Install Dependencies and Dev-Dependencies

### Dependencies

- `react`
- `react-dom` -> Provides DOM-specific methods for the browser
- `prop-types` -> Runtime type checking for React props
- `react-router-dom` -> Provides routing capabilities to React for the browser
- `semantic-ui-react` -> CSS Framework

### Dev-Dependencies

- `@babel/core` -> Core dependencies for Babel
	- `Babel` is a transpiler that compiles JavaScript ES6 to JavaScript ES5 iallowing you to write JavaScript "from the future" so that current browsers will understand it.
- `babel-loader` -> This package allows transpiling JavaScript files using Babel and webpack
- `@babel/preset-env` -> With this you don't have to specify if you will be writing ES2015, ES2016 or ES2017. Babel will automatically detect and transpile accordingly.
- `@babel/preset-react` -> Tells Babel we will be using React
- `@babel/plugin-proposal-class-properties`
- `@babel/plugin-syntax-dynamic-import` -> Be able to use dynamic imports
- `css-loader` -> Interprets `@import` and `url()` like `import/require()` and will resolve them
- `style-loader` -> Adds CSS to the DOM by injecting a `<style>` tag
- `html-webpack-plugin` -> Can generate an HTML file for your applicatoin, or you can provide a template
- `webpack` -> Module bundler
- `webpack-dev-server` -> Provides a development server for your application
- `webpack-cli` -> Command Line Interface, needed for Webpack 4.0.1 and latest

---

## Setup

1. Setting up Babel
	- In the root directory, we create the Babel configuration file. 
	- `touch .babelrc`
2. Setting up Webpack
	- `touch webpack.config.js`
3. Creating the React App
	- `mkdir public && cd $_`
	- `touch index.html`
4. Setting up Hot Module Replacement (HMR)
	- update `.babelrc`
5. Code Splitting
	- With code splitting, instead of having your application in one big bundle, you can have multiple bundles each loading asynchronously or in parallel. Also you can separate vendor code from your app code which can potentially decrease loading time.
6. By Route
	- There are several ways we can acieve code splitting by route, however in our case we will be using `react-imported-component` (https://github.com/theKashey/react-imported-component)
	- We would also like to show a *loading spinner* when the user navigates to a different route.
	- However, if the new page loads really fast, we don't want the user to see a flashing loading spinner for a couple of milliseconds, so will delay the *Loading* component by 300 milliseconds. To achieve this, we will be using `React-Delay-Render`.
	- `yarn add react-imported-component react-delay-render`
7. Production Configuration
	- Rename the Webpack configuration from `webpack.config.js` to `webpack.config.development.js`. Then make a copy and name it `webpack.config.production.js`.
	- We will need a development dependency, `Extract Text Plugin`. From their docs: "It moves all the required `*.css` modules in entry chunks into a separate CSS file. So, your styles are no longer inlined into the JS bundle, but in a separate CSS file (`style.css`). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle."
	- `yarn add mini-css-extract-plugin -D`
	- Also since we added PostCSS to the production configuration, we need to install it and create a configuration file for it.
	- `yarn add postcss-loader autoprefixer cssnano postcss-preset-env -D`
	- `touch postcss.config.js`
	- At this point we have two working Webpack configurations, one for development and one for production. However, since both configurations are very similar, they share many of the same settings. If we wanted to add something else, we would have to add it to both configurations files. Let's fix this inconvenience.
8. Webpack Composition
	- Let's start by install `webpack-merge` and `Chalk` as development dependencies.
	- `yarn add webpack-merge chalk -D`
