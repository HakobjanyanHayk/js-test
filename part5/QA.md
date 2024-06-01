## Question/Answer of `Part 5`

# Why `ts-loader` is used instead of other loaders?

## `ts-loader` is used  because:
* it uses the `TypeScript` compiler (tsc) under the hood, which ensures that the `TypeScript` code is compiled accurately according to the `tsconfig.json` configuration
* it performs full type checking during the build process
* it requires minimal configuration to get started


# How the project would handle an import from a `JavaScript` file instead of a `TypeScript` file?
## to handle import from `JavaScript` we need to:
* Modify the `tsconfig.json` file to allow JavaScript files to be imported
  * Add `"allowJs": true` in `compilerOptions`
* Update `webpack.config.js` to handle `JavaScript`
  * Update ``` resolve: { extensions: ['.ts', '.js'] } ```
  * Update ``` rules: [
    {
    test: /\.ts$/,
    use: 'ts-loader',
    exclude: /node_modules/
    },
    {
    test: /\.js$/,
    use: 'babel-loader',
    exclude: /node_modules/
    }
    ] ```
  * Install `babel-loader` for `.js` files