import ApiFactory from "../ApiFactory";

class AuthRepository extends ApiFactory {
  constructor() {
    super();
    this.prefix = "/auth";
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      this.post(`${this.prefix}/login`, credentials).then(() => {
        console.log("ok")
        resolve();
      }).catch(err => {
        reject(err);
      })
    })
  }

  logout() {

  }

  register(credentials) {
    return new Promise((resolve, reject) => {
      this.post(`${this.prefix}/register`, credentials)
          .then((res) => {
            if (res.data.success) {
              resolve(res.data.data)
            }
          }).catch(err => {
        reject(err);
      })
    })
  }

}

export default (new AuthRepository())