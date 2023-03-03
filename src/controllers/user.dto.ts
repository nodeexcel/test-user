export interface CreateUserDto {
    name: string;
    rank:number;
}
  
export interface UpdateUserDTO{
    name?: string;
    rank?:number;
}
 export interface UserDto{
    id: string;
    name: string;
    rank:number;
    createdAt: Date;
    updatedAt: Date;
 }
