<template>
  <div class="divider">
    <div :class="['line', position === 'left' ? 'line-0' : '']"/>
    <span class="text" :style="{color: textColor}">{{text}}</span>
    <div :class="['line', position === 'right' ? 'line-0' : '']"/>
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
      },
      position: {
        type: String,
        default: 'left'
      }
    }
  }
</script>

<style lang="scss" scoped>
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

    &-0 {
      width: 0;
    }
  }
</style>
