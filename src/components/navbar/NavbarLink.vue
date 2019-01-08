
<template>
  <router-link
    :to="to"
    active-class="is-active"
    class="nav-item"
    exact>
    <span class="navbar-item">
      {{ label }}
    </span>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item {
  padding: 10px;
  text-decoration: none;

  &.is-active {
    border-bottom: 1px solid $navbar-link-color;
    padding-bottom: 3px;
  }
}

.navbar-item {
  color: $navbar-link-color;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
}
</style>
