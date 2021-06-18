import ApiFactory from "../ApiFactory";

class AuthRepository extends ApiFactory {
  constructor() {
    super();
    this.prefix = "/auth";
  }

  login(credentials) {
    console.log(credentials)
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
        console.log(res)
        resolve(res)
      }).catch(err => {
        reject(err)
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