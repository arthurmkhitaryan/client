import ApiFactory from "../ApiFactory";


class ProfileRepository extends ApiFactory {
    constructor() {
        super();
        this.prefix = "/profile"
    }

    saveCV(data) {
        return new Promise((resolve, reject) => {
            this.post(`${this.prefix}/cv`, data)
                .then(res => {
                    resolve(res);
                }).catch(e => {
                    reject(e);
            })
        })
    }

    myCVs() {
        return new Promise((resolve, reject) => {
            this.get(`${this.prefix}/myCvs`)
                .then(res => {
                    resolve(res);
                }).catch(e => {
                    reject(e);
            })
        })
    }
}

export default (new ProfileRepository());