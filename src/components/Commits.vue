<template>
  <div id="app">
    <h1 class="title">Github Commits</h1>
    <div class="box">
      <div v-if="!loaded" class="columns is-centered">
        <img class="image level-item" alt="Loading" src="~@/assets/img/loader.svg" width="100" height="100" />
      </div>
      <div v-else>
        <div class="box" v-for="commit in data">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="commit.author.avatar_url" :alt="commit.author.login">
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ commit.author.login }}</strong> <small><a :href="commit.author.html_url" target="_blank">@{{ commit.author.login }}</a></small> <small>commited {{ timeElapsed(commit.commit.author.date) }}</small>
                  <br> {{ commit.commit.message }} - <a :href="commit.html_url" target="_blank">{{ commit.sha }}</a>
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-reply"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small"><i class="fa fa-heart"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import moment from 'moment'
  export default {
    name: 'Commits',
    data () {
      return {
        loaded: false,
        error: null,
        data: []
      }
    },
    mounted () {
      axios.get('https://api.github.com/repos/Z-WDH/Z-WDH-SRC/commits')
        .then((response) => {
          this.loaded = true
          this.data = response.data
        })
        .catch((err) => {
          this.loaded = true
          this.error = err
        })
    },
    methods: {
      timeElapsed (time) {
        return moment(time).fromNow()
      }
    }
  }
</script>
