import markdownIt from 'markdown-it';
import markdownItHighlight from 'markdown-it-highlight';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from "markdown-it-toc-done-right";

const markdownItOption = {
  html: true,
  xhtmlOut: true,
  breaks: true,
  langPrefix: 'language-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’'
};

const markdownItAnchorOption = {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '§'
};

const md = markdownIt(markdownItOption)
  .use(markdownItHighlight);

export default md;

export function getAnchorMd(callback) {
  return markdownIt(markdownItOption)
    .use(markdownItHighlight)
    .use(markdownItAnchor, markdownItAnchorOption)
    .use(markdownItTocDoneRight, {
      listType: 'ul',
      callback: callback
    });
}
