<template>
  <div class="section" id="about">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          <figure class="image">
            <img :src="image"/>
          </figure>
        </div>
        <div class="column">
          <h1 class="title">About Me</h1>
          <h3 class="subtitle">{{title}}</h3>
          <p>
            {{quote}}
          </p>
          <hr />
          <div class="columns is-desktop">
            <div class="column">
              <b>Name: </b> {{userName}}
            </div>
            <div class="column">
              <b>Email: </b> <a :href="mailLink">{{email}}</a>
            </div>
          </div>

          <div class="columns is-desktop">
            <div class="column">
              <b>Age: </b> {{age}}
            </div>
            <div class="column">
              <b>From: </b> {{location}}
            </div>
          </div>

          <div class="columns is-desktop">
            <div class="column">
              <b>LinkedIn: </b> <a :href="linkedinLink">{{linkedin}}</a>
            </div>
            <div class="column">
              <b>Github: </b> <a :href="githubLink">{{github}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Photo from '../../assets/images/coding-time.jpg'
// TODO: create image for landing page

export default {
  data: function() {
    return {
      image: Photo,
      title: 'I am a Full-Stack Software Engineer',
      userName: 'Jonathan Peraza Feliciano',
      email: 'jperazafeliciano@gmail.com',
      location: 'Cancún, Quintana Roo, México',
      linkedin: 'jpfeliciano',
      github: 'yoniihdc',
      quote: 'Enjoys solving logical and mathematical problems using algorithms and learning about new development technologies and frameworks.',
      year: 1991,
    }
  },
  computed: {
    mailLink: function() {
      return `mailto:${this.email}`
    },
    githubLink: function() {
      return `https://github.com/${this.github}`
    },
    linkedinLink: function() {
      return `https://www.linkedin.com/in/${this.linkedin}`
    },
    age: function() {
      const currentYear = new Date().getFullYear();

      return currentYear - this.year
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  transform: scaleX(-1);
  border-radius: 5px;
  opacity: 0.7;
}
</style>