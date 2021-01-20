import moment from "moment";

const displayDate = (date) => (date ? moment(date).format("L") : "");

export { displayDate };
