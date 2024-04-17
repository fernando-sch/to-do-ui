import { createServer } from "miragejs";
import { envObject } from "@/config";

export const startMockServer = () => {
  return createServer({
    environment: "test",
    routes() {
      this.urlPrefix = envObject.apiBaseUrl;

      this.get("/tasks", () => ({
        data: [
          {
            title: "My Task",
            description: "Good description",
            "is_completed?": false,
          },
          {
            title: "My Second Task",
            description: null,
            "is_completed?": true,
          },
        ],
      }));
    },
  });
};
