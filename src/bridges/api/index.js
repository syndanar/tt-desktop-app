class BridgeApi {
  static create(uri, value) {
    sessionStorage.setItem(uri, value);
  }

  static read(uri) {
    sessionStorage.getItem(uri);
  }

  static update(uri, value) {
    sessionStorage.setItem(uri, value);
  }

  static delete(uri) {
    sessionStorage.removeItem(uri);
  }
}

export default BridgeApi;
