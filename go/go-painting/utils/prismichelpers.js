// ~/utils/prismicHelpers.js
import * as prismic from '@prismicio/client'
import Link from 'next/link'
import {
  repoName,
  accessToken,
  linkResolver,
  Router
} from '../prismicConfiguration'

// Helper function to convert Prismic Rich Text links to Next/Link components
// export const customLink = (type, element, content, children, index) => (
//   <Link
//     key={index}
//     href={linkResolver(element.data)}
//   >
//     <a>{content}</a>
//   </Link>
// )

// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.

const endpoint = prismic.getEndpoint(repoName);

// Options to be passed to the Client
const createClientOptions = (prismicAccessToken = null, routes = null) => {
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  const routesOption = routes ? { routes: Router.routes } : {}
  return {
    ...accessTokenOption,
    ...routesOption,
  }
}

export const client = prismic.createClient(endpoint);
