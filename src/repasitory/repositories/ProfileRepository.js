import ApiFactory from "../ApiFactory";


class ProfileRepository extends ApiFactory {
    constructor() {
        super();
        this.prefix = "/profile"
    }

    saveCV(buffer) {
        return new Promise((resolve, reject) => {
            this.post(`${this.prefix}/cv`, buffer)
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