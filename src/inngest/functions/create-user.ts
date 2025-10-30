import prisma from "@/lib/prisma";
import { inngest } from "../client";

export const userCreated = inngest.createFunction(
  { name: "sync-user-create", id: "sync-user-create" },
  { event: "clerk/user.created" },
  async ({ event, step }) => {
    const { name, email } = event.data;

    await prisma.user.create({
      data: {
        email: email,
        name: name,
      },
    });

    /*  await step.run("send-welcome-email", async () => {
      console.log("Enviar e-mail de boas-vindas para", email);
    }); */

    return { ok: true };
  }
);
