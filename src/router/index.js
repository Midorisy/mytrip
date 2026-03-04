import { createRouter,createWebHashHistory } from "vue-router";
import routeList from "./routeList";
import { setRouteGard } from "./routeGard";

const routes  = [
    ...routeList
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})

setRouteGard(router)


export default router
