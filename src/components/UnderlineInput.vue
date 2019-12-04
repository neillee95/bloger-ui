<template>
  <div style="margin: 0 auto">
    <div class="underline-input">
      <label>
        <input :value="value"
               :placeholder="placeholder"
               :type="type"
               @input="$emit('update', $event.target.value)"
               @blur="check"
               @focus="hasError=false"/>
        <span/>
      </label>
    </div>
    <div class="error_hint"
         :style="{color: hasError ? 'red': 'transparent'}"
         v-if="required">
      required
    </div>
  </div>
</template>

<script>
  export default {
    name: "UnderlineInput",
    props: {
      placeholder: String,
      type: {
        type: String,
        default: "text"
      },
      required: {
        type: Boolean,
        default: false
      },
      value: [String, Number]
    },
    data() {
      return {
        hasError: false
      }
    },
    model: {
      prop: "value",
      event: "update"
    },
    methods: {
      check() {
        if (this.required) {
          this.hasError = !this.value;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .underline-input {
    position: relative;

    & input {
      width: 100%;
      font-size: inherit;
      font-family: inherit;
      padding: 0.35em 0;
      background-color: transparent;
      border: 0;
      border-bottom: 2px solid rgba(44, 62, 80, 0.2);

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: rgba(44, 62, 80, 0.2);
      }
    }

    & span {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #2c3e50;
      transform-origin: bottom right;
      transform: scaleX(0);
      transition: transform 0.5s ease;
    }

    & input:focus ~ span {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }

  .error_hint {
    font-size: 12px;
    text-align: left;
    margin-top: 4px;
  }
</style>
