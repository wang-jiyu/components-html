<template>
  <div class="form">
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class FromPage extends Vue {
  title: String = 'Form Page'
}
</script>

<style lang="scss" scoped></style>
