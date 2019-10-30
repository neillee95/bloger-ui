<template>
  <div id="markdownEditor" @change="contentChanged"></div>
</template>

<script>
  import 'tui-editor/dist/tui-editor.css';
  import 'tui-editor/dist/tui-editor-contents.css';
  import 'codemirror/lib/codemirror.css';
  import 'highlight.js/styles/github.css';

  import Editor from 'tui-editor';

  let editor;
  let timerId;

  function fullScreen() {

  }

  export default {
    name: "MarkdownEditor",
    props: {
      initVal: {
        type: String,
        default: ''
      },
      autoSaveTimeout: {
        type: Number,
        default: 5000
      }
    },
    methods: {
      contentChanged() {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
          this.$emit('content-changed', editor.getMarkdown());
        }, this.autoSaveTimeout);
      },
      setValue(value) {
        if (editor) {
          editor.setValue(value);
        }
      },
      getMarkdown() {
        if (editor) {
          return editor.getMarkdown();
        }
      },
      getHtml() {
        if (editor) {
          return editor.getHtml();
        }
      }
    },
    created() {
      this.$nextTick(() => {
        editor = new Editor({
          el: document.querySelector('#markdownEditor'),
          initialEditType: 'markdown',
          initialValue: this.initVal,
          previewStyle: 'vertical',
          height: '800px',
          events: {
            change: this.contentChanged
          }
        });
      });
    }
  }
</script>

<style scoped>

</style>
