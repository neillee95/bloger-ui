<template>
  <div>
    <div v-html="content"></div>
    <message-board/>
  </div>
</template>

<script>
  import 'markdown-it-highlight/dist/index.css';
  import MessageBoard from "../components/MessageBoard";

  import md from '@/utils/markdown-it';

  export default {
    name: "AboutMe",
    components: {MessageBoard},
    data() {
      return {
        markdownContent:
          '### About me\n' +
          '`hello world`\n' +
          'Markdown动态生成\n' +
          '```html' +
          '<!doctype html>' +
          '<html lang="en">' +
          '<head>' +
          '  <meta charset="utf-8"/>' +
          '  <title>Marked in the browser</title>' +
          '</head>' +
          '<body>' +
          '  <div id="content"></div>' +
          '  <script src="cdn.jsdelivr.net/npm/marked/marked.min.js"/>' +
          '    document.getElementById(\'content\').innerHTML =' +
          '      marked(\'# Marked in browser\\n\\nRendered by **marked**.\');' +
          '</body>' +
          '</html>' +
          '```'
      }
    },
    computed: {
      content() {
        return md.render(this.markdownContent);
      }
    }
  }
</script>

<style scoped>

</style>
