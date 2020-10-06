import { loadTestServer } from 'use-mock-service-worker';
import { getPosts } from './utils/fetchPosts';

const URL = `https://jsonplaceholder.typicode.com/posts`;

const expectedData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
];

const server = loadTestServer(URL, expectedData);

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeAll(() => server.resetHandlers());

describe('useMockServerWorker', () => {
  it('GET Posts ', async () => {
    const res = await getPosts();
    expect(res[0].userId).toEqual(1);
    expect(res[0].id).toEqual(1);
    expect(res[0].title).toEqual(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    );
  });
});
