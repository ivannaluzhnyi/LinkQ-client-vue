import applicationsRoutes from "./Application/Routes";
import dashboardRoutes from "./Dashboard/Routes";

import adminPropertyRoutes from "@/modules/Admin/Properties/Routes/routes";
import adminUserRoutes from "@/modules/Admin/Users/Routes/routes";

export default [
    ...applicationsRoutes,
    ...dashboardRoutes,
    ...adminPropertyRoutes,
    ...adminUserRoutes,
];
