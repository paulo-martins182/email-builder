import { serve } from "inngest/next";
import { userCreated } from "@/inngest/functions/create-user";
import { inngest } from "../../../inngest/client";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [userCreated],
});
