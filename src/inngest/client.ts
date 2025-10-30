import { EventSchemas, Inngest } from "inngest";
import type { Events } from "./@types/user";

export const inngest = new Inngest({
  id: "email-builder",
  schemas: new EventSchemas().fromRecord<Events>(),
});
