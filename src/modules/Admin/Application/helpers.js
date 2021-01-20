const getColorByStatus = (status) => {
    switch (status) {
        case "PENDING":
            return "orange";

        case "ACCEPTED":
            return "green";

        case "REFUSED":
            return "red";

        default:
            return "primary";
    }
};

const TableType = Object.freeze({
    USER_APPLICATIONS: "USER_APPLICATIONS",
    ALL_APPLICATIONS: "ALL_APPLICATIONS",
    APPLICATIONS_TO_VALIDATE: "APPLICATIONS_TO_VALIDATE",
});

export { getColorByStatus, TableType };
