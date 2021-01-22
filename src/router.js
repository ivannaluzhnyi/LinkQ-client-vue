import Vue from "vue";
import Router from "vue-router";
import homeRoutes from "@/modules/Home/Routes/routes";
import propertyRoutes from "@/modules/Property/Routes/routes";
import applicationRoutes from "@/modules/Application/Routes/routes";

import adminRoutes from "@/modules/Admin/routes";
import authService from "@/modules/Auth/Services/auth.service";

import Layout from "@/core/layouts/Layout";
import Admin from "@/core/layouts/Admin";

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
        {
            path: "/",
            component: Layout,
            children: [...homeRoutes, ...propertyRoutes, ...applicationRoutes],
        },

        {
            path: "/admin",
            name: "admin",
            component: Admin,
            children: [...adminRoutes],
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
