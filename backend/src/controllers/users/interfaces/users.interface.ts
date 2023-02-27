export interface IUser{
    
    login(): Promise<Response|Error>;
    createUser(): Promise<Response|Error>;

}