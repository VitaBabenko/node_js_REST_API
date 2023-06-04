const login = require("./auth");
const app = require("../app");

/*
1. given email, password.

2. return 
token, 
user: {
    email, 
    subscription
}

3. if given not valid argument throw error with message.



{"email": "user@mail.com",
"password": "12345678"}    - 200


!user - error "Email or password is wrong"
!passwordCompare - error "Email or password is wrong"
{} - error 'data must be exist'
*/

const req = {
  body: {
    token: "",
    user: {
      email,
      subscription: "starter",
    },
  },
};

test("should send a status code of 200");
