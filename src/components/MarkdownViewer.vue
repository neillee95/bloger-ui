<template>
  <div id="markdownViewer"></div>
</template>

<script>
  import 'tui-editor/dist/tui-editor-contents.css';
  import 'highlight.js/styles/github.css';

  import Viewer from 'tui-editor/dist/tui-editor-Viewer';

  export default {
    name: "MarkdownViewer",
    props: {
      initVal: {
        type: String,
        default: ''
      }
    },
    created() {
      this.$nextTick(() => {
        new Viewer({
          el: document.querySelector('#markdownViewer'),
          height: '500px',
          initialValue: this.initVal
        });
      });
    }
  }
</script>

<style scoped>

</style>
