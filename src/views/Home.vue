<template>
  <div class="container">
    <div v-if="showNotification">
      <alert />
    </div>
    <br />
    <permit-table
      @permit-drop-event="permitDropped($event)"
      :data="permitApplications"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PermitTable from "@/components/permit/permit-table.vue";
import PermitService from "@/services/permit/permit.service";
import Permit from "@/models/permit/permit.model";
import PermitType from "@/models/permit-type/permit-type.model";
import PermitTypeService from "@/services/permit-type/permit-type.service";
@Component({
  components: {
    "permit-table": PermitTable,
  },
})
export default class HomeView extends Vue {
  private service: PermitService;
  private permitTypesService: PermitTypeService;

  public permitApplications: Permit[] = [];
  public permitTypes: PermitType[] = [];
  public showNotification = false;

  constructor() {
    super();
    this.service = new PermitService();
    this.permitTypesService = new PermitTypeService();
  }

  mounted() {
    this.loadPermitApplications();
    this.loadPermitTypes();
  }

  public permitDropped(id: number) {
    this.showNotification = true;
    this.permitApplications = this.permitApplications.filter((x) => x.id != id);
    setTimeout(() => (this.showNotification = false), 2000);
  }

  public loadPermitApplications() {
    this.service.getAll().then((res: any) => {
      if (res && res.data) {
        this.permitApplications = res.data as Permit[];
      }
    });
  }

  public loadPermitTypes() {
    this.permitTypesService.getAll().then((res: any) => {
      if (res && res.data) {
        this.permitTypes = res.data;
      }
    });
  }
}
</script>
<style scoped>
</style>