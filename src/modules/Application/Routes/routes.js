export default [
    {
        path: "/application",
        name: "Demandes",
        component: () => import("@/pages/Application/Application"),
        meta: {
            authRequired: "true",
        },
    },
];
