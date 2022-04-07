<template>
    <label>
        {{label}}
        <input 
        :type="type" 
        :id="id" 
        :name="name" 
        :value="value"
        @input="$emit('input', $event.target.value)">
    </label>
</template>

<script>
export default {
    name: 'Input',
    props: {
      value : { type: [String, Number, Boolean] },
      type: String,
      name: String,
      id: String,
      label: String
    },
    data () {
      return {
        // email: "",
      }
  },
}
</script>