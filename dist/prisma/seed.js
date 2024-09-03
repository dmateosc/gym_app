"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const user1 = await prisma.user.upsert({
        where: { email: 'david@example.com' },
        update: {},
        create: {
            dni: '123456789',
            name: 'David',
            lastName: 'Mateos',
            email: 'david@example.com',
            birthDate: '1990-01-01',
            lastDate: null,
            phone: '1234567890',
        },
    });
    console.log({ user1 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map