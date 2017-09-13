<template>
    <div id="app">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="Navbar">
                <div class="navbar-brand">
                    <a class="navbar-item" href=".">Home</a>
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
                    <div class="column is-one-third">
                        <aside class="menu">
                            <p class="menu-label">
                                About
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <a>Class</a>
                                </li>
                            </ul>
                            <p class="menu-label">
                                Projects
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <a href="https://z-wdh.github.io/Projects/Basic_HTML/" target="_blank">Basic HTML</a>
                                </li>
                                <li>
                                    <a href="https://z-wdh.github.io/Projects/HTML_Challenge/" target="_blank">HTML Challenge</a>
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
