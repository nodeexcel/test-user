import {IUser} from "./user.types"
import { UserDto } from "./user.dto";
export class UserMapper {
    public static toUser(entity: IUser): UserDto {
      return {
        id: entity.id,
        name: entity.name,
        rank: entity.rank,
        createdAt:entity.createdAt,
        updatedAt:entity.updatedAt,
      };
    }
  }