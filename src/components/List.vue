<template>
  <div>
    <div class="item" v-for="_item in items">
      <router-link :to="_item.path">
        {{_item.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      items: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .item {
    padding: 8px 16px;
    cursor: pointer;
    font-family: Poppins-Medium Arial, sans-serif;
    font-size: 18px;
  }

  .item:hover {
    background-color: #ecf5ff;
  }

  .item a {
    text-decoration: none;
    color: #2c3e50;
    display: block;
  }
</style>
