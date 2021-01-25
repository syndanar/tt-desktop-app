const push = (state, window) => {
  state.windows.push(window);
};

const remove = (state, window) => {
  state.windows.splice(state.windows.indexOf(window), 1);
};

export default {
  push,
  remove,
};
