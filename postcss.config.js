const TailwindExtractor = content => {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_:/]+/g) || [];
};

const extensionsUsingCSS = ['html', 'js', 'tsx', 'ts'];
const extensionsOfCSS = ["css", "less", "pcss", "postcss", "sass", "scss", "styl"];

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [`./@(public|src)/**/*.@(${extensionsUsingCSS.join("|")})`],
    css: [`./src/**/*.@(${extensionsOfCSS.join("|")})`],
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: extensionsUsingCSS,
      },
    ],
});
  
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};