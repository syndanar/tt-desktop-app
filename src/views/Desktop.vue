<template>
  <div class="desktop">
    <desktop-grid>

    </desktop-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DesktopGrid from '../components/desktop/grid.vue';
import DesktopModule from '../store/modules/desktop/index';
import TasksMock from '../tasks';

export default {
  name: 'view-desktop',
  created() {
    this.$store.registerModule(['desktop'], DesktopModule);
  },
  mounted() {
    TasksMock.forEach((task) => this.$store.dispatch('desktop/windows/create', task));
  },
  beforeDestroy() {
    this.$store.unregisterModule('desktop');
  },
  components: { DesktopGrid },
  computed: mapGetters({
    windows: 'desktop/windows/list',
  }),
};
</script>

<style scoped lang="scss">
.desktop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(34,148,195,1) 100%);
}
</style>
