<template>
  <div class="card" @click="onClick">
    <div v-if="loading">
      Loading...
    </div>
    
    <div v-else class="card-inner">
      <avatar :username="name" :size="size" :src="image"></avatar>
      <div class="card-content">
        <h3 class="title">
          {{ title }}
        </h3>
        <p class="description">
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  name: 'AvatarCard',
  components: {
    Avatar,
  },
  props: {
    name: String,
    image: String,
    title: String,
    size: String,
    loading: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('click', this.$props)
    },
  },
}
</script>

<style scoped>
.card {
  min-height: 35px;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
  margin: 2rem;
}

.card:hover {
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
}

.card-inner {
  display: flex;
}

.title, .description {
  margin: 0;
}

.card-content {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
