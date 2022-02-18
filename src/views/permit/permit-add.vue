<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-8 offset-md-2">
        <permit-card />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import PermitCard from "@/components/permit/permit-card.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        "permit-card": PermitCard
    }
})
export default class PermitAddView extends Vue {
  constructor() {
    super();
  }
}
</script>
<style scoped>
</style>