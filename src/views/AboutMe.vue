<template>
  <div>
    <p v-html="content"></p>
    <message-board/>
  </div>
</template>

<script>
  import marked from 'marked';
  import MessageBoard from "../components/MessageBoard";

  export default {
    name: "AboutMe",
    components: {MessageBoard},
    data() {
      return {
        markdownContent:
            '### About me\n' +
            '`hello world`' +
            'Markdown动态生成' +
            '```html' +
            '<!doctype html>' +
            '<html lang="en">' +
            '<head>' +
            '  <meta charset="utf-8"/>' +
            '  <title>Marked in the browser</title>' +
            '</head>' +
            '<body>' +
            '  <div id="content"></div>' +
            '  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"/>' +
            '    document.getElementById(\'content\').innerHTML =' +
            '      marked(\'# Marked in browser\\n\\nRendered by **marked**.\');' +
            '</body>' +
            '</html>' +
            '```'
      }
    },
    computed: {
      content() {
        return marked(this.markdownContent);
      }
    }
  }
</script>

<style scoped>

</style>
