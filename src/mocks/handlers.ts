import { HttpResponse, http } from "msw";

// Mock Data
export const handlers = [
  http.get("https://dummyjson.com/todos", () => {
    return HttpResponse.json(
      {
        todos: [
          {
            id: 1,
            todo: "Do something",
            Completed: true,
            userId: 1,
          },
        ],
      },
      { status: 200 }
    );
  }),
];
