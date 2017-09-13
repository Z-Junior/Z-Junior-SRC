<template>
  <div id="app">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="Navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href=".">
            <img src="/assets/image/logo.png" />
          </a>
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
                  <router-link :to="{ name: 'Index', params: {} }">Index</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Class', params: {} }">Class</router-link>
                </li>
              </ul>
              <p class="menu-label">
                Projects
              </p>
              <ul class="menu-list">
                <li>
                  <a href="/static/projects/Basic_HTML/index.html" target="_blank">Basic HTML</a>
                </li>
                <li>
                  <a href="/static/projects/HTML_Challenge/index.html" target="_blank">HTML Challenge</a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <router-view></router-view>
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
