<template>
  <div class="navbar-container">
    <div class="navbar-menu">
      <navbar-link to="/" label="About" />
      <navbar-link to="/education" label="Education" />
      <navbar-link to="/skills" label="Skills" />
      <navbar-link to="/experience" label="Work Experience" />
    </div>
  </div>
</template>

<script>
import NavbarLink from './NavbarLink';
export default {
  components: {
    NavbarLink,
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  background-color: $primary-color;
  height: 300px;
}

.navbar-menu {
  padding-top: 40px;
  max-width: 80%;
  margin: 0 auto;
}
</style>

