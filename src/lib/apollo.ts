/**
 * IMPORTS
 */
import {ApolloClient} from '@apollo/client';
import {InMemoryCache} from '@apollo/client';


/**
 * CONSTANTS AND DEFINITIONS
 */
const DEFAULT_URL = 'https://api-sa-east-1.graphcms.com/v2/cl4o21wdw06hf01xi4wq1eup5/master';


/**
 * EXPORTS
 */
export const clientAPI = new ApolloClient({
  uri: DEFAULT_URL,
  cache: new InMemoryCache()
});
