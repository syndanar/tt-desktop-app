<template>
<div class="desktop-window" :style="style" @mousedown="window.updateActive()">
  <window-header @dragstart="dragstart($event, 'window')"
                 @close="close">
    {{window.title}}
  </window-header>
  <window-content></window-content>
  <window-border
    @resizeTop="dragstart($event, 'border-top')"
    @resizeRight="dragstart($event, 'border-right')"
    @resizeBottom="dragstart($event, 'border-bottom')"
    @resizeLeft="dragstart($event, 'border-left')"
  >
  </window-border>
</div>
</template>

<script>
import WindowHeader from './header.vue';
import WindowContent from './content.vue';
import WindowBorder from './border.vue';

export default {
  name: 'desktop-window',
  props: ['window'],
  components: { WindowBorder, WindowContent, WindowHeader },
  methods: {
    close() {
      this.$store.dispatch('desktop/windows/close', this.window);
    },
    dragstart($event, target) {
      this.$emit('dragstart', {
        mouseEvent: $event,
        target,
      });
    },
  },
  mounted() {
    if (this.window.centralize) {
      this.$emit('centralize');
    }
  },
  computed: {
    style() {
      return {
        width: `${this.window.width}px`,
        height: `${this.window.height}px`,
        left: `${this.window.position.x}px`,
        top: `${this.window.position.y}px`,
      };
    },
  },
};
</script>

<style lang="scss">
.desktop-window {
  position: absolute;
  background: $color-background;
  box-shadow: 0 5px 5px rgba(0,0,0, 0.2);
}
</style>
