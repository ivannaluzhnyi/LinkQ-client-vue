export default [
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/Home/Home"),
    },
    {
        path: "/profil",
        name: "Profil",
        component: () => import("@/pages/Home/Profil"),
        meta: {
            authRequired: "true",
        },
    },
];
