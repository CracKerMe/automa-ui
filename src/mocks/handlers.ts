import { http, HttpResponse } from 'msw';
import { setToken, getToken } from '@/utils/token';

export const handlers = [
  http.get('/api/status', () => {
    return HttpResponse.json(
      {
        status: 'ok',
      },
      { status: 200 },
    );
  }),
  http.post('/api/login', () => {
    const token = Math.random().toString(16).slice(2);
    setToken(token);

    return HttpResponse.json(
      {
        code: 0,
        status: 200,
        msg: 'Login Success',
        data: {
          expire: -1,
          token: Math.random().toString(16).slice(2),
        },
      },
      { status: 200 },
    );
  }),
  http.get('/api/user', () => {
    const isAuthenticated = getToken();
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return HttpResponse.json(
        {
          code: -1,
          status: 403,
          msg: 'Not authorized',
        },
        { status: 403 },
      );
    }
    // If authenticated, return a mocked user details
    return HttpResponse.json(
      {
        code: 0,
        status: 200,
        msg: 'Login Success',
        data: {
          username: 'admin',
        },
      },
      { status: 200 },
    );
  }),
];
