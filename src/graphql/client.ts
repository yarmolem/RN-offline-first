import {makeAsyncStorage} from '@urql/storage-rn';
import {createClient, dedupExchange, fetchExchange} from 'urql';
import {offlineExchange} from '@urql/exchange-graphcache';

const storage = makeAsyncStorage();

const cache = offlineExchange({storage});

const client = createClient({
  requestPolicy: 'cache-and-network',
  url: 'http://localhost:8080/graphql',
  fetchOptions: {credentials: 'include'},
  exchanges: [dedupExchange, cache, fetchExchange],
});

export default client;
