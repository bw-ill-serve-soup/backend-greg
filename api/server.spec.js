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
//   it("GET kitchen", () => {
//     return request(server)
//       .get("/kitchen")
//       .set(
//         "Authorization",
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NjY5NTMxNzksImV4cCI6MTU2NzAzOTU3OX0.zDqHoaezs9oTJe-OAPYbHF7s3__V_F4YgcbdztDsK8s"
//       )
//       .then(res => {
//         expect(res.status).toBe(200);
//       });
//     //.set('Authorization', 'Bearer ' + token)
//     //.set({ 'API-Key': 'foobar', Accept: 'application/json' })
//   });
});

// describe("user creation", () => {
//   it("Create new user, test CRUD", async () => {
//     return await request(server)
//       .post("/api/register")
//       .send({ username: "Frodo5", password: "Frodo5" })
//       .expect(200)
//       .then(res => {
//         request(server)
//           .post("/api/login")
//           .send({ username: "Frodo5", password: "Frodo5" })
//           .expect(200);
//       })
//   });
// });

    //   .then(res => {
    //     request(server)
    //       .get("/kitchen")
    //       .set({
    //         Authorization:
    //         eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NjY5NTMxNzksImV4cCI6MTU2NzAzOTU3OX0.zDqHoaezs9oTJe-OAPYbHF7s3__V_F4YgcbdztDsK8s
    //   })
    //       .expect(200);
    //   });



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

describe("test", ()=>{
    it("test", ()=>{
        return request(server)  
        .get("/kitchen")
        .set({Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NjY5NTM4MjAsImV4cCI6MTU2NzA0MDIyMH0.XyXKybr3DDadOfImQVaGITc6XPHt1KYP4NzytJC1X2w`}) 
        .expect(200)
    })
})
