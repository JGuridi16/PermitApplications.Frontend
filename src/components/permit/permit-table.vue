<template>
  <div>
    <table class="table bg-light shadow">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre Empleado</th>
          <th scope="col">Apellido Empleado</th>
          <th scope="col">Fecha de Permiso</th>
          <th scope="col">Descripción de Permiso</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in data">
          <tr :key="item.id">
            <th scope="row">{{ item.id | empty }}</th>
            <td>{{ item.employeeName | empty }}</td>
            <td>{{ item.employeeLastname | empty }}</td>
            <td>
              <span class="badge bg-success rounded-pill">
                {{ item.permitDate | date }}</span
              >
            </td>
            <td>{{ item.permitType.description | empty }}</td>
            <td class="d-flex justify-content-evenly">
              <button @click="dropPermit(item.id)" class="btn btn-danger rounded btn-sm">
                Eliminar
              </button>
              <button
                @click="editPermit(item.id)"
                class="btn btn-success btn-sm"
              >
                Editar
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Permit from "@/models/permit/permit.model";
import PermitService from "@/services/permit/permit.service";

@Component
export default class PermitTable extends Vue {
  @Prop({ default: [] }) readonly data!: Permit[];

  public service: PermitService;

  constructor() {
    super();
    this.service = new PermitService();
  }

  public dropPermit(permitId: string) {
    this.service
      .delete(permitId)
      .then((res: any) => {
        if (res && res.data) this.$emit("permit-drop-event", Number(permitId));
      })
      .catch(() => alert("Ocurrió un error eliminando permiso!"));
  }

  public editPermit(permitId: string) {
    this.$router.push({ name: "edit-permit", params: { id: permitId } });
  }
}
</script>