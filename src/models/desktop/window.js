class ModelDesktopWindow {
  constructor(params) {
    if (!global.isObjectHasPropery(params, 'name')) {
      return null;
    }
    this.name = params.name;

    this.width = 300;
    this.height = 100;
    this.title = '';
    this.lastActive = Date.now();
    this.position = {
      x: 0,
      y: 0,
    };
    this.status = 'normal';
    this.centralize = false;

    if (global.isObjectHasPropery(params, 'width')) {
      this.width = parseInt(params.width, 10);
    }
    if (global.isObjectHasPropery(params, 'height')) {
      this.height = parseInt(params.height, 10);
    }
    if (global.isObjectHasPropery(params, 'title')) {
      this.title = params.title;
    }
    if (global.isObjectHasPropery(params, 'x')) {
      this.position.x = parseInt(params.x, 10);
    }
    if (global.isObjectHasPropery(params, 'y')) {
      this.position.y = parseInt(params.y, 10);
    }

    if (global.isObjectHasPropery(params, 'centralize')) {
      this.centralize = params.centralize;
    }

    return this;
  }

  toJSON() {
    return {
      name: this.name,
      width: this.width,
      height: this.height,
      title: this.title,
      x: this.position.x,
      y: this.position.y,
      status: this.status,
    };
  }

  open() {
    this.hidden = false;
  }

  close() {
    this.hidden = true;
  }

  isCLosed() {
    return this.hidden;
  }

  updateActive() {
    this.lastActive = Date.now();
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
}

export default ModelDesktopWindow;
