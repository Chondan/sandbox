module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 4,
    endOfLine: 'auto',
    importOrder: ['^@src/(.*)$', '^[./]'],
    importOrderSeparation: false,
    experimentalBabelParserPluginsList : ["jsx", "typescript"]
};
