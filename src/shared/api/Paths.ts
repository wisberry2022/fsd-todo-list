export const Paths = {
  todo: {
    getAll: "/api/v1/todo",
    add: "/api/v1/todo",
    update: "/api/v1/todo",
    delete: (id: number) => `/api/v1/todo/${id}`,
  },
};
