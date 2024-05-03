import { createServer } from "miragejs";
import { envObject } from "@/config";

export const startMockServer = () => {
  return createServer({
    environment: "test",
    routes() {
      this.urlPrefix = envObject.apiBaseUrl;

      this.post("/task", (_, request) => {
        const attrs = JSON.parse(request.requestBody);

        return {
          data: {
            id: "75cd2c7c-df04-4681-8644-147aaf82c1c9",
            is_completed: false,
            ...attrs,
          },
        };
      });

      this.get("/tasks", () => ({
        data: [
          {
            id: "75cd2c7c-df04-4681-8644-147aaf82c1c9",
            title: "My Task",
            description: "Good description",
            is_completed: false,
          },
          {
            id: "cc94fc3c-8f28-42f6-977e-a9e2d997e828",
            title: "My Second Task",
            description: null,
            is_completed: true,
          },
        ],
      }));
    },
  });
};
