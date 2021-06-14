import AuthRepository from "./repositories/AuthRepository"


export default class RepositoryFactory {
    static auth(method, data) {
        return AuthRepository[method](data)
    }
}
