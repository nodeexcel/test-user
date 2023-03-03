import { UserInput, UserOutput } from "./user.types";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = async (payload: UserInput): Promise<UserOutput> => {
    return await prisma.user.create({ data: payload });
}

export const update = async (id: string, payload: Partial<UserInput>): Promise<UserOutput> => {
    return await prisma.user.update({ where: { id }, data: payload });
}

export const getById = async (id: string): Promise<UserOutput|null> => {
    return await prisma.user.findUnique({ where: { id } });
}

export const deleteById = async (id: string): Promise<boolean> => {
    const deleteResult = await prisma.user.delete({ where: { id } });
    return deleteResult ? true : false;
}

export const getAll = async (): Promise<UserOutput[]> => {
    return await prisma.user.findMany( { orderBy: {
        rank: 'asc'
      }});
}
