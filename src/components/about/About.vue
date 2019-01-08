<template>
  <div class="card">
    <div class="card-content">
      <div class="column">
        <img :src="image" class="profile-image"/>
      </div>
      <div class="column">
        About Page
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
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-image {
  height: auto;
  max-width: 345px;
  margin: 0 auto;
}
</style>