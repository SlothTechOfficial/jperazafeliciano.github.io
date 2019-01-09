<template>
  <div class="card">
    <div class="card-content">
      <div class="column">
        <img :src="image" class="profile-image"/>
      </div>
      <div class="column">
        <div class="title">Jonathan <b>Peraza Feliciano</b></div>
        <div class="job-description">Software Engineer @ <a href="https://www.wizeline.com/">WIZE<b class="wzln-red">LINE</b></a></div>
        <hr />
        <div class="about-content">
          <ul class="items">
            <li v-for="(item, index) in information" :key="index">
              <i :class="item.icon"></i>
              <p class="item-description">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="quote-item">
        ~ {{ quote }}
      </div>
    </div>
    <div class="card-footer">
      DOWNLOAD RESUME
    </div>
  </div>
</template>

<script>
import Photo from '../../assets/images/photo.png'

export default {
  data: function() {
    return {
      image: Photo,
      information: [
        { icon: 'fas fa-map-marker-alt', description: 'C Aguamarina 2306 8 Col Bosques de la Victoria 44549 Guadalajara, Jal, MX' },
        { icon: 'fas fa-envelope', description: 'jperazafeliciano@gmail.com' },
        { icon: 'fab fa-linkedin', description: 'jpfeliciano' },
        { icon: 'fab fa-github-square', description: 'yoniihdc' },
        { icon: 'fas fa-mobile-alt', description: '+52 (998) 239-6542' },
      ],
      quote: 'Enjoys solving logical and mathematical problems using algorithms and learning about new development technologies and frameworks.',
    }
  }
}
</script>

<style lang="scss" scoped>
.quote-item {
  color: $font-accent-color;
  font-style: italic;
  font-size: 18px;
}

ul {
  padding-left: 0;
}

li {
  list-style-type: none;
  color: $font-accent-color;
  font-size: 18px;
  padding-bottom: 20px;
}

i {
  padding-right: 20px;
}

a {
  text-decoration: none;
  color: black;
}

.profile-image {
  height: auto;
  max-width: 345px;
  margin: 0 auto;
}

.title {
  font-size: 24px;
  color: $font-primary-color;
}

.job-description {
  text-transform: uppercase;
  font-size: 14px;
  color: $font-lighter-color;
}

.item-description {
  display: inline;
}

.wzln-red {
  color: #D84C4B;
}
</style>