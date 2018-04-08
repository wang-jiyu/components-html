<template>
  <div id="app">
    <hai-header></hai-header>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HaiHeader from '@/components/header.vue';

@Component({
  components: {
    HaiHeader,
  }
})
export default class App extends Vue {
  // mounted
  public mounted() {
    const body = document.getElementsByTagName('body')[0]
    body.className = 'custom-test'
  }
}
</script>

<style lang="scss">
  .main {
    max-width: 1600px;
    margin: 0 auto;
    padding: 5px 15px;
  }
</style>
