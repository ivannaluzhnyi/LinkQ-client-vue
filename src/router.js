import Vue from "vue";
import Router from "vue-router";
import homeRoutes from "@/modules/Home/Routes/routes";
import propertyRoutes from "@/modules/Property/Routes/routes";

import authService from "@/modules/Auth/Services/auth.service";

Vue.use(Router);

const router = new Router({
    mode: "history",
    hashbang: false,
    abstract: true,
    hash: false,
    base: "/",
    linkExactActiveClass: "active",
    root: "/",

    routes: [
        ...homeRoutes,
        ...propertyRoutes,

        {
            path: "/admin",
            name: "admin",
            component: Vue.component(
                "Admin",
                require("./core/layouts/Admin.vue")
            ),
            // beforeEnter: requireAuth,
        },
        { path: "*", redirect: "/" },
    ],
    scrollBehavior: (to) => {
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    },
});

router.beforeEach((to, from, next) => {
    const authRequired = to.path.includes("/admin");
    const loggedIn = authService.isAuth();

    if (authRequired && !loggedIn) {
        return next("/#login");
    }

    next();
});

export default router;
