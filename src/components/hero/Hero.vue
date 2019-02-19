<template>
<section class="hero is-primary-color is-fullheight-with-navbar" id="home">
  <div class="hero-body">
    <div class="container">
      <p class="title">
        {{userName}}
      </p>
      <p class="subtitle">
        {{description}}
      </p>
      <div class="buttons">
        <a class="button is-rounded is-dark">
          Resume
        </a>
        <a class="button is-rounded is-link" href="#contact">
          Contact
        </a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data: function() {
    return {
      userName: 'Jonathan Peraza Feliciano',
      description: 'I am a Full-Stack Software Engineer with experience for over 4 years. My expertise is to create and design Websites, Apps, Templates and more ...',
    }
  }
}
</script>

<style lang="sass">

</style>

