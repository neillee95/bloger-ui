<template>
  <div class="divider">
    <span class="text" :style="{color: textColor}">
      {{text}}
    </span>
    <div class="line"/>
  </div>
</template>

<script>
  export default {
    name: "TextDivider",
    props: {
      text: {
        type: String,
        required: true
      },
      'text-color': {
        type: String,
        default: '#b0baba'
      }
    }
  }
</script>

<style scoped>
  .divider {
    margin: 16px 0;
    display: flex;
    align-items: center;
  }

  .text {
    padding: 4px 8px;
    min-width: 32px;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #b0baba;
  }
</style>
