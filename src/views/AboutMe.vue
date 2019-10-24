<template>
  <div>
    <markdown-viewer :init-val="markdownContent"/>
    <message-board/>
  </div>
</template>

<script>
  import MessageBoard from "../components/MessageBoard";
  import MarkdownViewer from "../components/MarkdownViewer";

  export default {
    name: "AboutMe",
    components: {MarkdownViewer, MessageBoard},
    data() {
      return {
        markdownContent:
          '### About me\n' +
          '`hello world`<br>' +
          'Markdown动态生成<br>' +
          '```html' +
          '<!doctype html>' +
          '<html lang="en">' +
          '<head>' +
          '  <meta charset="utf-8"/>' +
          '  <title>Marked in the browser</title>' +
          '</head>' +
          '<body>' +
          '  <div id="content"></div>' +
          '  <script src="//cdn.jsdelivr.net/npm/marked/marked.min.js"/>' +
          '    document.getElementById(\'content\').innerHTML =' +
          '      marked(\'# Marked in browser\\n\\nRendered by **marked**.\');' +
          '</body>' +
          '</html>' +
          '```'
      }
    }
  }
</script>

<style scoped>

</style>
