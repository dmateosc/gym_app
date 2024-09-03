import { CreateuserDto } from './dto/create-gym-user.dto';
import { UpdateuserDto } from './dto/update-gym-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class userService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    update(id: number, updateuserDto: UpdateuserDto): string;
    remove(id: number): string;
}
