import bcrypt from "bcrypt";
import prisma from "./prisma";
import { env } from "../src/lib/env";

async function main() {
  const userHashedPassword = await bcrypt.hash("1234", Number(env.SALT_ROUNDS));

  // Create test user

  const user = await prisma.user.create({
    data: {
      username: "test",
      email: "test@test.com",
      password: userHashedPassword,
    },
  });

  console.log({ user });
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
