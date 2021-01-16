const convertToSearchUrl = (data) => {
    let searchInformation = ""

    const range_filter = convertData(data)

    for (let prop in range_filter) {
        // console.log("test", prop);
        // console.log('range_filter :>> ', range_filter[prop]);
        if (range_filter[prop]["min"] !== undefined && range_filter[prop]["max"] !== undefined) {
            searchInformation += `${prop}[between]=${range_filter[prop]["min"]}..${range_filter[prop]["max"]}&`
        } else if (range_filter[prop]["min"] !== undefined) {
            searchInformation += `${prop}[gte]=${range_filter[prop]["min"]}&`
        } else if (range_filter[prop]["max"] !== undefined) {
            searchInformation += `${prop}[lte]=${range_filter[prop]["max"]}&`
        }
    }
    // console.log('searchInformation :>> ', searchInformation);
    return searchInformation;
}

const convertData = (data) => {
    let format_data = {}
    for (let range in data) {
        // console.log('data :>> ', range);
        const INFORMATION_RANGE = range.split('_')
        if (!Object.prototype.hasOwnProperty.call(format_data, INFORMATION_RANGE[0])) {
            format_data[INFORMATION_RANGE[0]] = {
                [INFORMATION_RANGE[1]]: data[range]
            }
        } else {
            format_data[INFORMATION_RANGE[0]][INFORMATION_RANGE[1]] = data[range]
        }
    }
    return format_data
}
export { convertToSearchUrl };
