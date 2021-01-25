<template>
<div>
  <div class="container buttons">
    <button class="btn btn-success" @click="start">Запуск</button>
    <button class="btn btn-danger" @click="stop">Остановка</button>
    <button class="btn btn-warning" @click="clear">Сброс</button>
  </div>
  <div class="container sum">
    Sum: {{sum}} BTC
  </div>
  <div class="container">
    <template v-if="blockchain && blockchain.error !== null">
      {{blockchain.error}}
    </template>
    <template v-else>
      <table>
        <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Sum</th>
        </tr>
        </thead>
        <template v-for="(trans, transNum) in data">
          <tr :key="'transaction-row-' + transNum">
            <td>
              <template v-for="(btc, btcNum) in trans.from">
                <div :key="'btc-row-' + btcNum" >
                  <a target="_blank" :href="'https://www.blockchain.com/btc/address/' + btc">{{btc}}</a>
                </div>
              </template>
            </td>
            <td>
              <template v-for="(btc, btcNum) in trans.to">
                <div :key="'btc-row-' + btcNum" >
                  <a target="_blank" :href="'https://www.blockchain.com/btc/address/' + btc">{{btc}} BTC</a>
                </div>
              </template>
            </td>
            <td>
              <div>{{trans.value / 100000000}} BTC</div>
            </td>
          </tr>
        </template>
      </table>
    </template>
  </div>
</div>
</template>

<script>
import Blockchain from '../../bridges/blockchain';

export default {
  name: 'subscriber',
  data() {
    return {
      blockchain: null,
      data: [],
    };
  },
  mounted() {
    this.blockchain = new Blockchain();
    this.blockchain.connect();
    this.data = this.blockchain.data;
  },
  methods: {
    start() {
      this.blockchain.subscribe();
    },
    stop() {
      this.blockchain.unsubscribe();
    },
    clear() {
      this.blockchain.clear();
    },
  },
  computed: {
    sum() {
      if (this.blockchain) {
        return this.blockchain.value / 100000000;
      }
      return 0;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 2rem auto;
}
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.sum {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: $color-gray-600;
}
table {
  width: 100%;
  border-collapse:collapse;
  padding:0;
  td, th {
    padding: 1rem;
    border-bottom: 1px solid $color-gray-400;
    text-align: center;
  }
  th {
    background: $color-gray-200;
  }
  td {
    font-size: 0.85rem;

    a {
      color: $color-primary;
    }
  }
}
</style>
