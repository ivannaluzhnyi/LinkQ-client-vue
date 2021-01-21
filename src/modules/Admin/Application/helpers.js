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

const getMessageByResponseType = (responseType) => {
    switch (responseType) {
        case "ACCEPT_SUCCESS":
            return "Demande de propriété à été acceptée ";
        case "ACCEPT_FAILURE":
            return "Une erreur s'est produite";
        case "REFUSE_SUCCESS":
            return "Demande de propriété à été refusée";
        case "REFUSE_FAILURE":
            return "Une erreur s'est produite";

        default:
            break;
    }
};

export { getColorByStatus, TableType, getMessageByResponseType };
