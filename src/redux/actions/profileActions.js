import api from "../../repasitory/RepositoryFactory";

export function saveCVs(data) {
    return () => {
        return api.profile('saveCV',  data)
            .then(res => {
                return res;
            })
    };
}

export function myCVs() {
        return () => {
            return api.profile('myCVs')
                .then(res => {
                    return res;
                })
        }
}
