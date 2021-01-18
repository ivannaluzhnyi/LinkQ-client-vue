export default [
    {
        path: "/property/:idProperty",
        name: "Property",
        component: () => import("@/modules/Property/Pages/Property")
    },
    {
        path: "/property",
        name: "ListProperty",
        component: () => import("@/modules/Property/Pages/ListProperty"),
        props: true,
    }
]