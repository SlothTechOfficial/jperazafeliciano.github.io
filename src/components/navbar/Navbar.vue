<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#"> <!-- TODO: add resume link -->
        RESUME
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="#home">
          Home
        </a>

        <a class="navbar-item" href="#about">
          About
        </a>

        <a class="navbar-item" href="#experience">
          Experience
        </a>

        <a class="navbar-item" href="#services">
          Services
        </a>

        <!-- TODO: Add portfolio section -->
        <!-- <a class="navbar-item">
          Portfolio
        </a> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-link is-rounded" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>

