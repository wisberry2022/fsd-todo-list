export const Paths = {
  todo: {
    getAll: "/api/v1/todo",
    add: "/api/v1/todo",
    update: "/api/v1/todo",
    conclude: "/api/v1/todo/conclude",
    delete: (id: number) => `/api/v1/todo/${id}`,
  },
};
