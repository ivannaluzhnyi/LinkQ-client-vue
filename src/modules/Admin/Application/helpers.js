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

export { getColorByStatus };
