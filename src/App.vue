<template>
  <div id="app">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="Navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href=".">
            <img src="./assets/img/logo.png" />
          </a>
          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="button is-dark" href="https://github.com/RumbleFrog" target="_blank">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Z's Honors Web Design</h1>
          <h2 class="subtitle">Class of 2017-2018</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-quarter">
            <aside class="menu">
              <p class="menu-label">
                About
              </p>
              <ul class="menu-list">
                <li>
                  <router-link :to="{ name: 'Index', params: {} }" exact-active-class="is-active">Index</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Class', params: {} }" exact-active-class="is-active">Class</router-link>
                  <router-link :to="{ name: 'Commits', params: {} }" exact-active-class="is-active">Commits</router-link>
                </li>
              </ul>
              <p class="menu-label">
                Projects
              </p>
              <ul class="menu-list">
                <li>
                  <a href="./static/projects/Basic_HTML/index.html" target="_blank">Basic HTML</a>
                </li>
                <li>
                  <a href="./static/projects/HTML_Challenge/index.html" target="_blank">HTML Challenge</a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <keep-alive><router-view></router-view></keep-alive>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style src="./assets/css/bulma/bulma.sass" lang="sass"></style>
