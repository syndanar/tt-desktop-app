const list = (state) => state.windows.sort((a, b) => a.lastActive - b.lastActive);

const activeReducer = (acc, cur) => {
  if (acc === null) {
    return cur;
  }
  return acc.lastActive > cur.lastActive ? acc : cur;
};

const active = (state) => state.windows.reduce(activeReducer, null);

const findByName = (state) => (name) => state.windows.find((model) => model.name === name);

export default {
  list,
  active,
  findByName,
};
