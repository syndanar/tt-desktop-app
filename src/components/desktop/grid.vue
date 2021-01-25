<template>
  <div id="desktop-grid" @mousemove="dragging" :style="style">
    <template v-for="(window, num) in windows">
      <desktop-window :key="'desktop-windows-' + num"
                      :window="window"
                      @dragstart="dragstart($event, window)"
                      @centralize="centralize(window)"
      ></desktop-window>
    </template>
    <desktop-taskbar></desktop-taskbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DesktopWindow from './window/index.vue';
import DesktopTaskbar from './taskbar/index.vue';

export default {
  name: 'desktop-grid',
  components: { DesktopTaskbar, DesktopWindow },
  data() {
    return {
      step: 10,
      drag: {
        active: false,
        target: null,
        window: null,
        start: {
          cursor_position: {
            x: null,
            y: null,
          },
          window: null,
        },
      },
    };
  },
  mounted() {
    window.addEventListener('mouseup', () => {
      if (this.drag.active) {
        this.drag.active = false;
        this.$store.dispatch('desktop/windows/save', this.drag.window);
      }
    });
  },
  methods: {
    centralize(window) {
      const windowX = this.$el.getBoundingClientRect().width / 2 - window.width / 2;
      const windowY = this.$el.getBoundingClientRect().height / 2 - window.height / 2;

      const gridPositionX = Math.round(windowX / this.step) * this.step;
      const gridPositionY = Math.round(windowY / this.step) * this.step;

      window.setPosition(gridPositionX, gridPositionY);
    },

    dragstart($event, window) {
      this.drag = {
        active: true,
        target: $event.target,
        window,
        start: {
          cursor_position: {
            x: $event.mouseEvent.clientX,
            y: $event.mouseEvent.clientY,
          },
          window: JSON.parse(JSON.stringify(window)),
        },
      };
    },
    dragging(evt) {
      if (this.drag.active) {
        const deltaX = evt.clientX - this.drag.start.cursor_position.x;
        const deltaY = evt.clientY - this.drag.start.cursor_position.y;

        /* eslint-disable max-len */
        switch (this.drag.target) {
          case 'window':
            this.drag.window.position.x = Math.round((this.drag.start.window.x + deltaX) / this.step) * this.step;
            this.drag.window.position.y = Math.round((this.drag.start.window.y + deltaY) / this.step) * this.step;
            break;
          case 'border-top':
            this.drag.window.position.y = Math.round((this.drag.start.window.y + deltaY) / this.step) * this.step;
            this.drag.window.height = this.drag.start.window.height + (this.drag.start.window.y - this.drag.window.position.y);
            break;
          case 'border-left':
            this.drag.window.position.x = Math.round((this.drag.start.window.x + deltaX) / this.step) * this.step;
            this.drag.window.width = this.drag.start.window.width + (this.drag.start.window.x - this.drag.window.position.x);
            break;
          case 'border-right':
            this.drag.window.width = Math.round((this.drag.start.window.width + deltaX) / this.step) * this.step;
            break;
          case 'border-bottom':
            this.drag.window.height = Math.round((this.drag.start.window.height + deltaY) / this.step) * this.step;
            break;
          default:
            break;
        }
        /* eslint-enable max-len */
        evt.preventDefault();
        return false;
      }
      return true;
    },
  },
  computed: {
    style() {
      let cursor = 'default';
      if (this.drag.active) {
        switch (this.drag.target) {
          case 'window':
            cursor = 'move';
            break;
          case 'border-top':
            cursor = 'n-resize';
            break;
          case 'border-right':
            cursor = 'e-resize';
            break;
          case 'border-bottom':
            cursor = 's-resize';
            break;
          case 'border-left':
            cursor = 'w-resize';
            break;
          default:
            cursor = 'default';
            break;
        }
      }
      return {
        cursor,
      };
    },
    ...mapGetters({ windows: 'desktop/windows/list' }),
  },
};
</script>

<style scoped lang="scss">
#desktop-grid {
  width: 100vw;
  max-width: 100vw;
  height: calc(100vh - 2rem);
  overflow: hidden;
}
</style>
