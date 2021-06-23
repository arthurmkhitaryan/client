export function executeErrors (form, error) {
    let serverErrors = [];
    serverErrors = error.errors.map(eachError => {
        return {
            name: eachError.param,
            errors: [eachError.msg]
        }
    });

    form.setFields(serverErrors);
}