<template>
  <div>
    <div v-html="content"></div>
    <message-board/>
  </div>
</template>

<script>
  import MessageBoard from "../components/MessageBoard";

  import marked from 'marked/marked.min';

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
        return marked(this.markdownContent, { sanitize: true });
      }
    }
  }
</script>

<style scoped>

</style>
