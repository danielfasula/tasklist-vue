<template>
  <div class="card">
    <div class="card-title">
      <h3>{{ list.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: { type: Object, required: true }
  },
  setup() {
    return {}
  }
}
</script>
