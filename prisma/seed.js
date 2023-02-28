import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    prisma.$disconnect();

    /* const newProject = await prisma.project.upsert({
        where: { id: index },
        update: {},
        create: {
            name: `Proje ${index}`,
            createdAt: new Date(Date.now()),
            system: {
                connectOrCreate: {
                    create: index % 2 ? system1 : system2,
                    where: { id: index % 2 ? 1 : 2 }
                }
            }
        },
    }) */
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
