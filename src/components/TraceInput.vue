<template>
  <div>
    <label>
      <input :placeholder="placeholder" :type="type"/>
      <span class="bottom"/>
      <span class="right"/>
      <span class="top"/>
      <span class="left"/>
    </label>
  </div>
</template>

<script>
  export default {
    name: "TraceInput",
    props: {
      placeholder: {
        type: String
      },
      type: {
        type: String,
        default: "text"
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    position: relative;
    margin: 8px auto;
    text-align: center;
  }

  input {
    width: calc(100% - 12px);
    color: #2c3e50;
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    padding: 0.35em 4px;
    border: 2px solid rgba(44, 62, 80, 0.2);
    transition: background-color 0.3s ease-in-out;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(44, 62, 80, 0.2);
    }
  }

  span {
    position: absolute;
    transition: transform 0.1s ease;
    background-color: #fc2f70;
  }

  .bottom,
  .top {
    height: 2px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }

  .left,
  .right {
    width: 2px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }

  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }

  input:focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  .right {
    right: 0;
    transform-origin: top right;
    transition-delay: 0.05s;
  }

  input:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  .top {
    top: 0;
    transform-origin: top left;
    transition-delay: 0.15s;
  }

  input:focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  .left {
    left: 0;
    transform-origin: bottom left;
    transition-delay: 0.25s;
  }

  input:focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
  }

</style>
