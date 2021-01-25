<template>
  <div id="desktop-taskbar">
    <template v-for="i in [1,2,3,4,5]">
      <button
        class="run-window-button"
        :key="'run-window-' + i"
        :class="{running: numWindow(i), active: numWindow(i) === activeWindow}"
        v-html="i"
        @click="click(numWindow(i), i)"
      ></button>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'desktop-taskbar',
  computed: mapGetters({
    windows: 'desktop/windows/list',
    findByName: 'desktop/windows/findByName',
    activeWindow: 'desktop/windows/active',
  }),
  methods: {
    numWindow(i) {
      return this.findByName(`win-${i}`);
    },
    click(window, num) {
      if (window === undefined) {
        this.$store.dispatch('desktop/windows/create', {
          name: `win-${num}`,
          title: `Tile ${num}`,
          centralize: true,
        });
      } else {
        window.updateActive();
      }
    },
  },
};
</script>

<style lang="scss">
#desktop-taskbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2rem;
  background: $color-gray-200;
  display: flex;
  align-items: center;
  justify-content: center;
  .run-window-button {
    border: 0;
    margin: 0 0.25rem;
    line-height: 1.8rem;
    padding: 0;
    width: 2rem;
    text-align: center;
    outline: none;
    cursor: pointer;
    background: $color-gray-300;
    transition: all 0.2s linear;
    &.running {
      background: $color-gray-100;
      border-bottom: 2px solid $color-primary;
    }
    &.active {
      background: $color-primary;
      color: $color-white;
      border-bottom: 2px solid $color-success;
    }
  }
}
</style>
