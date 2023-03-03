import * as service from '../services/user'
import {CreateUserDto, UpdateUserDTO,} from './user.dto'

import { UserMapper } from './user.mapper'
import { IUser } from './user.types'


export const create = async(payload: CreateUserDto): Promise<IUser> => {
    return UserMapper.toUser(await service.create(payload))
}
export const update = async (id: string, payload: UpdateUserDTO): Promise<IUser> => {
    return UserMapper.toUser(await service.update(id, payload))
}
export const getById = async (id: string): Promise<IUser | null> => {
    const data =await service.getById(id);
    if(!data){
        return null
    }
    return UserMapper.toUser(data)
}
export const deleteById = async(id: string): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)
    return isDeleted
}
export const getAll = async(): Promise<IUser[]> => {
    return (await service.getAll()).map(UserMapper.toUser)
}