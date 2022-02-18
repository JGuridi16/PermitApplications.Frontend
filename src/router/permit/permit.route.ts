import { RouteConfig } from "vue-router";

const routes = {
    path: "/",
    component: () => import("../../views/base/base.vue"),
    children: [
        {
            path: "add",
            name: "add-permit",
            component: () => import("../../views/permit/permit-add.vue"),
        },
        {
            path: "edit/:id",
            name: "edit-permit",
            component: () => import("../../views/permit/permit-edit.vue"),
        }
    ],
} as RouteConfig;

export default routes;