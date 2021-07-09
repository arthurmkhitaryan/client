export function executeErrors (form, error) {
    let serverErrors = [];
    serverErrors = error.errors?.map(eachError => {
        return {
            name: eachError.param,
            errors: [eachError.msg]
        }
    });

    form.setFields(serverErrors);
}

export function dataAppend(data) {
    const formData = new FormData();
    for (let dataKey in data) {
        if (data[dataKey] instanceof File) {
            formData.append('image', data[dataKey])
        }
        else if (typeof data[dataKey] === 'object') {
            for (let key in data[dataKey]) {
                formData.append(key, data[dataKey][key]);
            }
        }else {
            formData.append(dataKey, data[dataKey]);
        }
    }
    return formData;
}