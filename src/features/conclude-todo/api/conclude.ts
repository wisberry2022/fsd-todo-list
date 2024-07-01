import { ToDo } from "@/shared/api/RestService";

export const concludeFetcher = async (ids: number[]): Promise<void> => {
  await ToDo.conclude(ids);
};
