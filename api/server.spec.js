const db = require("../data/db-Config");
const server = require("./server");
const request = require("supertest");

describe("GET", () => {
  it("GET server.js", () => {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it("GET users", () => {
    return request(server)
      .get("/api")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});

// describe("User Registration", () => {
//   it("Create new user", async () => {
//     return await request(server)
//       .post("/api/register")
//       .send({ username: "Baggins", password: "Baggins" })
//       .expect(200);
//   });
// });

describe("User Login + GET", () => {
  it("Login, GET", async () => {
    return await request(server)
      .post("/api/login")
      .send({ username: "Baggins", password: "Baggins" })
      .expect(200)
      .then(res => {
        request(server)
          .post("/api/login")
          .send({ username: "Baggins", password: "Baggins" })
          .expect(200);
      })
      .then(res => {
        const token = res;
        request(server)
          .get("/kitchen")
          .set({ Authorization: token })
          .expect(200);
      });
  });
});

describe("User Login + POST", () => {
  it("User Login + POST", async () => {
    return await request(server)
      .post("/api/login")
      .send({ username: "Baggins", password: "Baggins" })
      .expect(200)
      .then(res => {
        request(server)
          .post("/api/login")
          .send({ username: "Baggins", password: "Baggins" })
          .expect(200);
      })
      .then(res => {
        const token = res;
        request(server)
          .post("/kitchen/inventory")
          .set({ Authorization: token })
          .send({
            quantity: 5,
            weightUnit: 12,
            inventoryItem: "Tonka"
          })
          .expect(200);
      });
  });
});

describe("Login + PUT", () => {
  it("Login + PUT", async () => {
    return await request(server)
      .post("/api/login")
      .send({ username: "Baggins", password: "Baggins" })
      .expect(200)
      .then(res => {
        request(server)
          .post("/api/login")
          .send({ username: "Baggins", password: "Baggins" })
          .expect(200);
      })
      .then(res => {
        const token = res;
        request(server)
          .put("/kitchen/inventory")
          .set({ Authorization: token })
          .send({
            id: 1,
            quantity: 50,
            weightUnit: 120,
            inventoryItem: "Tonka Trucks"
          })
          .expect(200);
      });
  });
});

describe("Login + DELETE", () => {
  it("Login + DELETE", async () => {
    return await request(server)
      .post("/api/login")
      .send({ username: "Baggins", password: "Baggins" })
      .expect(200)
      .then(res => {
        request(server)
          .post("/api/login")
          .send({ username: "Baggins", password: "Baggins" })
          .expect(200);
      })
      .then(res => {
        const token = res;
        request(server)
          .delete("/kitchen/inventory/1")
          .set({ Authorization: token })
          .send({
            id: 1
          })
          .expect(200);
      });
  });
});

describe("register request", () => {
  it("register fail for lack of password", () => {
    return request(server)
      .post("/api/register")
      .send({ username: "API 123 Test2" })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
  it("register fail for lack of password", () => {
    return request(server)
      .post("/api/register")
      .send({ password: "API 123 Test2" })
      .then(res => {
        expect(res.status).toBe(500);
      });
  });
});
