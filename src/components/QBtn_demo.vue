<template>
  <div>
    <p class="textContent">{{ input }}</p>
    <span>{{ counter }}</span>
    <q-btn id="mybutton" color="primary" icon="check" label="OK" @click="increment" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'QBUTTON',
  data(): {
    counter: number;
    input: string;
  } {
    return {
      counter: 0,
      input: 'rocket muffin',
    };
  },
  methods: {
    increment(): void {
      this.counter += 1;
    },
  },
});
</script>
