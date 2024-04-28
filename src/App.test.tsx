import { render, screen } from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event"
import { server } from "./mocks/server"
import { HttpResponse, http } from "msw"

describe("App", () => {
    it("Check if test is available", () => {
        render(<App />)
        const text = screen.getByText("React testing library using Vite + React + TypeScript");
        expect(text).toBeInTheDocument();
    })

    it('should increment count on click', async () => {
        render(<App />)
        userEvent.click(screen.getByRole('button'))
        expect(await screen.findByText(/count is 1/i)).toBeInTheDocument()
    })

    it("api success scenario", async () => {
        render(<App />);
        expect(await screen.findByText("Todo List : 1")).toBeInTheDocument();
    })

    it("api error scenario on load", () => {
        render(<App />);
        server.use(
            http.get("https://dummyjson.com/todos", () => {
                return new HttpResponse(null, { status: 401 })
            })
        );
        expect(screen.queryByText("Todo List : 1")).not.toBeInTheDocument();
    })
})