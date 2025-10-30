import type { UserTypes } from "@/@types/user";

type UserEventCreate = {
  data: UserTypes;
};
export type Events = {
  "clerk/user.created": UserEventCreate;
};
