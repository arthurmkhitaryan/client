import AuthRepository from "./repositories/AuthRepository";
import ProfileRepository from "./repositories/ProfileRepository";


export default class RepositoryFactory {
    static auth(method, data) {
        return AuthRepository[method](data)
    }
    static profile(method, data) {
        return ProfileRepository[method](data);
    }
}
