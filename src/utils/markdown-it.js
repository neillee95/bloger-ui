import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from "markdown-it-toc-done-right";
import hljs from 'highlight.js'

const markdownItOption = {
  // Enable HTML tags in source
  html: true,
  // Use '/' to close single tags (<br />).
  // This is only for full CommonMark compatibility.
  xhtmlOut: true,
  // Convert '\n' in paragraphs into <br>
  breaks: true,
  // CSS language prefix for fenced blocks. Can be
  // useful for external highlighters.
  langPrefix: 'language-',
  // Autoconvert URL-like text to links
  linkify: true,
  // Enable some language-neutral replacement + quotes beautification
  typographer: true,
  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',
  highlight: function (str, lang) {
    str = str.replace(/&lt;/g, "<");
    str = str.replace(/&gt;/g, ">");

    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
};

const markdownItAnchorOption = {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '§'
};

const md = MarkdownIt(markdownItOption);

export default md;

export function getAnchorMd(callback) {
  return md
    .use(markdownItAnchor, markdownItAnchorOption)
    .use(markdownItTocDoneRight, {
      listType: 'ul',
      callback: callback
    });
}
