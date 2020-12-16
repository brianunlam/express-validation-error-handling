const request = require('supertest');
const app = require('../src/app');

const signinPath = '/api/signin';

describe('Test the sign in endpoint', () => {
  it('should create a user on post request with a valid password', async () => {
    const response = await request(app)
      .post(signinPath)
      .send({
        email: 'brian@cosmococica.com',
        password: '1passwordOk!'
      })
      .set('Accept', 'application/json')
      .expect(200);
    expect(response.body).toEqual({ message: 'User created succesfully', userId: 111 });
  });

  it('It should send status 400 if email is invalid ', async () => {
    const response = await request(app)
      .post(signinPath)
      .send({
        email: 'briancosmococica.com',
        password: 'password1'
      })
      .set('Accept', 'application/json')
      .expect(400);
    console.log(response.body);
    expect(response.body).toEqual({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Bad Request',
      details: [
        {
          value: 'briancosmococica.com',
          msg: 'Not a valid email',
          param: 'email',
          location: 'body'
        }
      ]
    });
  });
});
