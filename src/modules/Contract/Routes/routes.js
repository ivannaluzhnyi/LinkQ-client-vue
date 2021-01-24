export default [
    {
        path: "/contracts",
        name: "user-contracts",
        component: () => import("@/pages/Contract/Contract"),
        meta: {
            authRequired: "true",
        },
    },
];
