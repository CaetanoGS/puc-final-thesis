export class LoginToken{
    token: string;

    constructor(json: { [key: string]: any }){
        this.token = json['token'];
    }
}