import transform from './transform';

class Blockchain {
  constructor() {
    this.data = [];
    this.ws = null;
    this.error = null;
    this.value = 0;
    return this;
  }

  connect() {
    this.ws = new WebSocket('wss://ws.blockchain.info/inv');
    this.ws.onerror = (evt) => {
      this.error = `Can't connect to blockchain provider.<br/> ${evt.data}`;
    };
    this.ws.onmessage = (evt) => {
      const x = transform(evt.data);
      if (typeof x === 'object') {
        this.value += x.value;
        this.data.push(x);
      } else {
        this.error = x;
      }
    };
  }

  subscribe() {
    this.ws.send(JSON.stringify({ op: 'unconfirmed_sub' }));
  }

  unsubscribe() {
    this.ws.send(JSON.stringify({ op: 'unconfirmed_unsub' }));
  }

  clear() {
    this.value = 0;
    this.data.splice(0, this.data.length);
  }
}

export default Blockchain;
