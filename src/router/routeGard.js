
class RouteGard {
    constructor(router){
        this.router = router
        this.setupBeforeEach()
    }



    beforeEach(to,from){

    }


        setupBeforeEach(){
        this.router.beforeEach((to,from) => {
            return this.beforeEach(to,from)
        })
    }


}

/**
 * 调用时执行路由守卫规则
 * @param {object} router 传入的路由器
 * @returns 返回路由守卫的实例
 */
export function setRouteGard(router) {
    return new RouteGard(router)
}