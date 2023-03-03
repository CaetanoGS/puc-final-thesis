export interface IUser{
    
    login(): Promise<Object|Error>;
    createUser(): Promise<Response|Error>;

}