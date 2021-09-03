<template>
  <div>
    <div v-html="content"></div>
    <message-board class="message-board"/>
  </div>
</template>

<script>
import MessageBoard from "../components/MessageBoard";

import mixin from "@/mixins/aboutme";

export default {
  name: "AboutMe",
  components: {MessageBoard},
  mixins: [mixin]
}
</script>

<style scoped>
.message-board {
  margin-top: 48px;
}
</style>
