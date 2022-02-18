<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-8 offset-md-2">
        <permit-card :permitEntity="model" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import PermitCard from "@/components/permit/permit-card.vue";
import Permit from "@/models/permit/permit.model";
import PermitService from "@/services/permit/permit.service";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    "permit-card": PermitCard,
  },
})
export default class PermitEditView extends Vue {
  public model: Permit;
  public id = "";

  public service: PermitService;

  constructor() {
    super();
    this.service = new PermitService();
    this.model = new Permit();
  }

  mounted() {
    this.id = this.$route.params.id;
    if (!Number(this.id)) this.$router.push({ name: "homepage" });

    this.service.getById(this.id).then((res: any) => {
      if (res && res.data) {
        this.model = res.data;
      }
    });
  }

  public getPermitToUpdate() {
    this.model = new Permit();
  }
}
</script>
<style scoped>
</style>