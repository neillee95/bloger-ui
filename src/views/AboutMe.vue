<template>
  <div>
    <div v-html="content"></div>
    <message-board/>
  </div>
</template>

<script>
  import 'markdown-it-highlight/dist/index.css';
  import MessageBoard from "../components/MessageBoard";

  import mixin from "@/mixins/aboutme";

  export default {
    name: "AboutMe",
    components: {MessageBoard},
    mixins: [mixin]
  }
</script>

<style scoped>

</style>
