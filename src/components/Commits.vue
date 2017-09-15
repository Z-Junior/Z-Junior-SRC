<template>
  <div id="app">
    
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Commits',
    data: () => {
      return {
        loaded: false,
        error: null
      }
    },
    mounted: () => {
      axios.get('https://api.github.com/repos/Z-WDH/Z-WDH-SRC/commits')
        .then((response) => {
          this.loaded = true
          console.log(response)
        })
        .catch((err) => {
          this.loaded = true
          this.error = err
        })
    }
  }
</script>
