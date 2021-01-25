<template>
<div class="window-header noselect">
  <div class="buttons">
    <button @click="$emit('close')">X</button>
  </div>
  <div class="title" @mousedown="$emit('dragstart', $event)"><slot></slot></div>
  <div class="buttons"></div>
</div>
</template>

<script>
export default {
  name: 'window-header',
};
</script>

<style lang="scss">
.window-header {
  background: $color-gray-300;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .buttons {
    width: 2rem;
    padding: 0 0.5rem;
    button {;
      line-height: 1.25rem;
      width: 1.25rem;
      text-align: center;
      padding: 0;
      border: 0;
      border-radius: 50%;
      font-size: 0.7rem;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      color: $color-gray-200;
      background-color: $color-gray-600;
      transition: all 0.25s linear;
      &:hover {
        background-color: $color-danger;
        color: $color-white;
      }
    }
  }
  & > .title {
    flex-grow: 1;
    cursor: move;
    text-align: center;
  }
}
</style>
