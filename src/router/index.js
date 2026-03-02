import { createRouter,createWebHashHistory } from "vue-router";
import routeList from "./routeList";

const routes  = [
    ...routeList
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router
