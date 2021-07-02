import ApiFactory from "../ApiFactory";


class ProfileRepository extends ApiFactory {
    constructor() {
        super();
        this.prefix = "/profile"
    }

    saveCV(file) {
        return new Promise((resolve, reject) => {
            this.post(`${this.prefix}/cv`, file)
                .then(res => {
                    console.log(res)
                    resolve(res)
                }).catch(e => {
                    reject(e);
            })
        })
    }
}

export default (new ProfileRepository());