import { loadTestServer } from 'use-mock-service-worker';
import { getUsers } from './utils/fetchUsers';

const URL = `https://jsonplaceholder.typicode.com/users`;

const expectedData = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

const server = loadTestServer(URL, expectedData);

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeAll(() => server.resetHandlers());

describe('useMockServerWorker', () => {
  it('GET Posts ', async () => {
    const res = await getUsers(URL);
    expect(res[0].id).toEqual(1);
    expect(res[0].name).toEqual('Leanne Graham');
    expect(res[0].username).toEqual('Bret');
  });
});
