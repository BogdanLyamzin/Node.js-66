const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

const User = require("../../models/user");

const {DB_HOST_TEST, PORT} = process.env;

describe("test signup route", ()=> {
    let server = null;
    beforeAll(async()=> {
        await mongoose.connect(DB_HOST_TEST);
        server = app.listen(PORT);
    })

    afterAll(async()=> {
        await mongoose.connection.close();
        server.close();
    })

    beforeEach(()=> {

    })

    afterEach(async()=> {
        await User.deleteMany({});
    })

    test("test correct signup data", async()=> {
        const signupData = {
            name: "Bogdan",
            email: "bogdan@gmail.com",
            password: "123456"
        }
        const {body, statusCode} = await request(app).post("/api/auth/signup").send(signupData);

        expect(statusCode).toBe(201);
        expect(body.name).toBe(signupData.name);
        expect(body.email).toBe(signupData.email);

        const user = await User.findOne({email: signupData.email});
        expect(user.email).toBe(signupData.email);
        expect(user.name).toBe(signupData.name);
    })
})