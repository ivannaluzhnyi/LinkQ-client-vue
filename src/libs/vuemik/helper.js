const isSelect = (elm) => elm.options !== undefined;
const isInput = (elm) => elm.type !== undefined && elm.type !== "textarea";
const isCheckbox = (elm) => elm.type !== undefined && elm.type === "checkbox";

export { isSelect, isInput, isCheckbox };
