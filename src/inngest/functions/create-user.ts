import prisma from "@/lib/prisma";
import { inngest } from "../client";

export const userCreated = inngest.createFunction(
  { name: "sync-user-create", id: "sync-user-create" },
  { event: "clerk/user.created" },
  async ({ event, step }) => {
    const user = event.data;

    const formatData = {
      id: user.id,
      email: user.email_addresses[0].email_address,
      name: `${user.first_name} ${user.last_name}`,
      picture: user.image_url,
    };

    await prisma.user.create({
      data: formatData,
    });

    await step.run("send-welcome-email", async () => {
      console.log("Enviar e-mail de boas-vindas para", formatData.email);
    });

    return { ok: true };
  }
);
