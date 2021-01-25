<template>
<div class="window-border">
  <div class="border-resize n-resize" @mousedown="$emit('resizeTop', $event)"></div>
  <div class="border-resize e-resize" @mousedown="$emit('resizeRight', $event)"></div>
  <div class="border-resize s-resize" @mousedown="$emit('resizeBottom', $event)"></div>
  <div class="border-resize w-resize" @mousedown="$emit('resizeLeft', $event)"></div>
</div>
</template>

<script>
export default {
  name: 'window-border',
};
</script>

<style lang="scss">
$border-thickness: 4px;
.window-border {
  .border-resize {
    position: absolute;
    &.n-resize {
      left: 0;
      top: 0;
      right: 0;
      height: $border-thickness;
      cursor: n-resize;
    }
    &.s-resize {
      left: 0;
      bottom: 0;
      right: 0;
      height: $border-thickness;
      cursor: s-resize;
    }
    &.e-resize {
      top: 0;
      bottom: 0;
      right: 0;
      width: $border-thickness;
      cursor: e-resize;
    }
    &.w-resize {
      top: 0;
      bottom: 0;
      left: 0;
      width: $border-thickness;
      cursor: w-resize;
    }

  }
}
</style>
