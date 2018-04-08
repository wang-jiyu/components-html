<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HomePage extends Vue {
  // data
  msg: String = 'Welcome'
}
</script>
