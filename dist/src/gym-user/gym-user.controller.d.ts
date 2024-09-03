import { userService } from './gym-user.service';
import { CreateuserDto } from './dto/create-gym-user.dto';
import { UpdateuserDto } from './dto/update-gym-user.dto';
export declare class userController {
    private readonly userService;
    constructor(userService: userService);
    create(createuserDto: CreateuserDto): import("@prisma/client").Prisma.Prisma__userClient<{
        userId: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        birthDate: string;
        inscriptionDate: Date | null;
        lastDate: Date | null;
        phone: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        userId: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        birthDate: string;
        inscriptionDate: Date | null;
        lastDate: Date | null;
        phone: string;
    }[]>;
    findOne(id: string): Promise<{
        userId: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        birthDate: string;
        inscriptionDate: Date | null;
        lastDate: Date | null;
        phone: string;
    }>;
    update(id: string, updateuserDto: UpdateuserDto): string;
    remove(id: string): string;
}
