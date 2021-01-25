import ModelDesktopWindow from '../../../../models/desktop/window';

const save = (context, window) => {
  sessionStorage.setItem(`desktop-window-${window.name}`, JSON.stringify(window));
};

const create = ({ commit, getters }, params) => {
  if (global.isObjectHasPropery(params, 'name')) {
    if (!getters.findByName(params.name)) {
      const storage = sessionStorage.getItem(`desktop-window-${params.name}`);
      let window;
      if (storage) {
        const json = JSON.parse(storage);
        if (json.hidden) {
          json.hidden = false;
          json.centralize = true;
          json.width = 300;
          json.height = 150;
        }
        window = new ModelDesktopWindow(json);
      } else {
        window = new ModelDesktopWindow(params);
      }
      if (window !== null) {
        window.lastActive = Date.now();
        commit('push', window);
      }
    }
  }
};

const close = (context, window) => {
  context.commit('remove', window);
};

export default {
  create,
  save,
  close,
};
