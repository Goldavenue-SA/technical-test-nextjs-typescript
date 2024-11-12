import { createMocks } from "node-mocks-http";
import handler from "../pages/api/pokemon/[id]";

describe("GET /api/pokemon/[id]", () => {
  it("should return a Pokémon for a valid ID", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: { id: "1" },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data).toHaveProperty("name", "Bulbasaur");
  });

  it("should return a 404 if the Pokémon is not found", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: { id: "99999" },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    const data = JSON.parse(res._getData());
    expect(data).toHaveProperty("error", "Pokémon not found");
  });

  it("should return a 400 for an invalid ID", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: { id: "invalid" },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    const data = JSON.parse(res._getData());
    expect(data).toHaveProperty("error", "Invalid Pokémon ID");
  });
});
