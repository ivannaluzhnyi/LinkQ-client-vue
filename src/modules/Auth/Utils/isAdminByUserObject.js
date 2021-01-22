import { USER_ROLES } from "@/core/constants/enums";

export default (user) => user.roles.includes(USER_ROLES.ROLE_ADMIN);
