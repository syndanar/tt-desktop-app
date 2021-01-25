<template>
  <div id="app">
    <div id="nav">
      <router-link to="/desktop">Desktop</router-link>
      <router-link to="/subscriber">Subscriber</router-link>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-foreground;
}

#nav {
  background-color: $color-gray-400;
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
  a {
    color: $color-secondary;
    text-decoration: none;
    display: inline-block;
    padding: 0 1rem;
    &.router-link-exact-active {
      color: $color-primary;
    }
  }
}
#content {
  position: relative;
  min-height: calc(100vh - 2rem);
}
</style>
