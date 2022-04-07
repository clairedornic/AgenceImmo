<template>
  <button :type="type">{{text_input}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: ['type', 'text_input'],
  data () {
      return {
        // text_input: this.text_input
      }
  },
}
</script>