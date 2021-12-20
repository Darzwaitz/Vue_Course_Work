<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>
<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
export default {
  components: {
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js dox',
          link: 'https://vuejs.org',
        },
        {
          id: 'duckduckgo',
          title: 'Learn to duckduckgo....',
          description: 'The official Vue.js dox',
          link: 'https://duckduckgo.com/',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>