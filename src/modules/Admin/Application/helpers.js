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

const getMessageByResponseType = (responseType, dialogType) => {
    const isSuccess = dialogType === "SUCCESS";
    const isFailure = dialogType === "FAILURE";
    switch (responseType) {
        case "ACCEPT_SUCCESS":
            return isSuccess
                ? "Demande de propriété à été acceptée "
                : undefined;
        case "ACCEPT_FAILURE":
            return isFailure ? "Une erreur s'est produite" : undefined;
        case "REFUSE_SUCCESS":
            return isSuccess ? "Demande de propriété à été refusée" : undefined;
        case "REFUSE_FAILURE":
            return isFailure ? "Une erreur s'est produite" : undefined;

        default:
            break;
    }
};

export { getColorByStatus, TableType, getMessageByResponseType };
