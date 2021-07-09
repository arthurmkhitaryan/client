import ApiFactory from "../ApiFactory";

class AuthRepository extends ApiFactory {
  constructor() {
    super();
    this.prefix = "/auth";
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      this.post(`${this.prefix}/login`, credentials).then((res) => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

  me(token) {
    return new Promise(( resolve, reject ) => {
      this.get(`${this.prefix}/me`, token ).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  register(credentials) {
    return new Promise((resolve, reject) => {
      this.post(`${this.prefix}/register`, credentials)
          .then((res) => {
            if (res.data.success === true) {
              return resolve(res.data.data)
            }
          }).catch(err => {
        console.log(err)
        reject(err);
      })
    })
  }

}

export default (new AuthRepository())