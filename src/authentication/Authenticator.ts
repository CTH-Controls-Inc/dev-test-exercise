import {IUser} from '../interface/IUser';

class User {
    constructor(private username: string | null) {

    }

    getUserDetails(): IUser {
        return {
            username: this.username
        };
    }

    setUserDetails(username: string) {
        this.username = username;
    }
}

class Authenticator {
    user: User = new User(null);;

    constructor(public authenticated: boolean) {
    }

    login(username: string, password: string, cb: Function) {
        if(username === 'foo@gmail.com' && password === 'bar') {
            this.authenticated = true;
            this.user.setUserDetails(username);
            cb(true);
        }else{
            cb(false);
        }
    }

    logout(cb: Function) {
        this.authenticated = false;
        cb(true);
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getUser(): User {
        return this.user;
    }
}


export default new Authenticator(false);