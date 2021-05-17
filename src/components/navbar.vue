<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand text-light">
      <a class="navbar-brand" href="#">
        <img
          src="assets/img/floweroflife.jpg"
          width="50"
          height="50"
          alt=""
          loading="lazy"
        />
        <span class="ml-2">Task Manager</span>
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  setup() {
    return {
    }
  }
}
</script>

<style scoped>
header {
  background-color: #001010;
}
</style>
