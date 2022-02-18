<template>
  <div class="card bg-light d-flex justify-content-center shadow">
    <div class="card-body">
      <h3 class="card-title mx-4">Solicitar Permiso</h3>
      <div class="d-flex justify-content-around mt-5">
        <div class="mb-3 col-5">
          <label for="input1" class="form-label">Nombre Empleado</label>
          <input
            v-model="model.employeeName"
            type="text"
            class="form-control"
            id="input1"
            placeholder="Michael"
          />
        </div>
        <div class="mb-3 col-5">
          <label for="input2" class="form-label">Nombre Empleado</label>
          <input
            v-model="model.employeeLastname"
            type="text"
            class="form-control"
            id="input2"
            placeholder="Jackson"
          />
        </div>
      </div>
      <div class="d-flex justify-content-around mt-3">
        <div class="mb-3 col-5">
          <label for="input3" class="form-label">Tipo de Permiso</label>
          <select
            name="selector"
            class="form-select"
            v-model.number="model.permitTypeId"
          >
            <template v-for="optionItem in permitTypesOptions">
              <option :key="optionItem.id" :value="optionItem.id">
                {{ optionItem.description }}
              </option>
            </template>
          </select>
        </div>
        <div class="mb-3 col-5">
          <label for="input4" class="form-label">Fecha de Permiso</label>
          <input
            v-model="model.permitDate"
            type="date"
            class="form-control"
            id="input4"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <button
          v-if="isValidPermitToEdit"
          class="btn btn-success col-10 m-2"
          @click="updatePermit"
          type="button"
        >
          Actualizar
        </button>
        <button
          class="btn btn-primary col-10 m-2"
          @click="addPermit"
          type="button"
          v-else
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Permit from "@/models/permit/permit.model";
import PermitTypeService from "@/services/permit-type/permit-type.service";
import PermitService from "@/services/permit/permit.service";

@Component
export default class PermitCard extends Vue {
  @Prop({ default: null }) readonly permitEntity!: Permit;

  public model!: Permit;
  public permitTypes = [];

  public permitTypesService: PermitTypeService;
  public permitService: PermitService;

  constructor() {
    super();
    this.permitTypesService = new PermitTypeService();
    this.permitService = new PermitService();
    this.model = this.permitEntity ?? new Permit();
  }

  mounted() {
    this.loadPermitTypesOptions();
    this.model.permitDate = this.today;
  }

  @Watch("permitEntity", { immediate: true })
  refreshModelProp() {
    this.model = this.permitEntity ?? new Permit();
  }

  public addPermit() {
    let isValid = this.isValidModel();
    if (isValid) {
      this.permitService
        .post(this.model)
        .then(() => alert("Solicitud registrada exitosamente!"))
        .catch(() => alert("Ocurrió un error registrando permiso!"));
    }
  }

  public updatePermit() {
    let isValid = this.isValidModel();
    if (isValid && this.model.id) {
      if (this.model.permitType) {
        this.model.permitType = undefined;
      }
      this.permitService
        .put(this.model.id, this.model)
        .then(() => alert("Solicitud actualizada exitosamente!"))
        .catch(() => alert("Ocurrió un error registrando permiso!"));
    }
  }

  public isValidModel() {
    return (
      this.model.employeeName &&
      this.model.employeeLastname &&
      this.model.permitTypeId &&
      this.model.permitDate
    );
  }

  get isValidPermitToEdit() {
    return !!this.permitEntity?.id;
  }

  get today() {
    let date = new Date();
    return date.toISOString().split("T")[0];
  }

  get permitTypesOptions() {
    return this.permitTypes ?? [];
  }

  public loadPermitTypesOptions() {
    this.permitTypesService.getAll().then((res: any) => {
      if (res && res.data) {
        this.permitTypes = res.data;
      }
    });
  }
}
</script>