# Many guildlines

- Webpack & Typescript image import -> https://stackoverflow.com/questions/43638454/webpack-typescript-image-import?rq=1
- Setup a React App using Webpack, Babel and TypeScript -> https://dev.to/deadwing7x/setup-a-react-app-using-webpack-babel-and-typescript-5927
- Adding Images, Fonts, and Files -> https://create-react-app.dev/docs/adding-images-fonts-and-files/
- What is a tsconfig.json -> https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- Use Absolute Paths with React -> https://betterprogramming.pub/use-absolute-paths-with-react-51ced66f119f
    - Need to setup both at `tsconfig.json` and `webpack.common.js`
- Using ESLint and Prettier in a TypeScript Project -> https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project
- Using lint-staged, husky, and pre-commit hooks to fail fast and early -> https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc
- Husky v6 pitfalls -> https://coding.maier.tech/posts/husky-v6-pitfalls/
    - You can add additional hooks manually e.g. create an empty pre-push hook with this command `npx husky add .husky/pre-push` and add the pre-push commands to `.husky/pre-push` file
- Principles of writing consistent, idiomatic css -> https://github.com/necolas/idiomatic-css#declaration-order
- setup vscode setting to autofix at `settings.json`
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
}
```
- setup vertical rules in vscode setting at `settings.json`
```json
    "rulers": [120]
```
- @use JSDoc -> https://jsdoc.app/index.html
    - Visual Studio is now able to generate JSDoc comments
    - just type `/**` above the function
- Prettier plugin sort imports -> https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports