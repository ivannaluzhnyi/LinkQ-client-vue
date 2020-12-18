import Vue from "vue";
import Router from "vue-router";
import homeRoutes from '@/modules/Home/Routes/routes';

Vue.use(Router);

export default new Router({
    mode: "history",
    hashbang: false,
    abstract: true,
    hash: false,
    base: "/",
    linkExactActiveClass: "active",
    root: "/",
    routes: [
        ...homeRoutes,
        {path: "*", redirect: "/"}
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        }
        return {x: 0, y: 0};
    }
});
