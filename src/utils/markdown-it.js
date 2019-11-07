import markdownItHighlight from 'markdown-it-highlight'

const md = require('markdown-it')({
  html:         true,
  xhtmlOut:     true,
  breaks:       true,
  langPrefix:   'language-',
  linkify:      true,
  typographer:  true,
  quotes: '“”‘’'
});

md.use(markdownItHighlight);

export default md;
