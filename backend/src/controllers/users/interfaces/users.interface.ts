export interface IUser{
    
    login(): Promise<string|Error|Object>;
    createUser(): Promise<Response|Error>;

}