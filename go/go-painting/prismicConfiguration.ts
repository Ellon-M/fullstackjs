import {PrismicDocument} from '@prismicio/types';

export const repoName = process.env.PRISMIC_REPOSITORY_NAME;


export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`


export const accessToken = process.env.PRISMIC_API_TOKEN;

export const linkResolver = (doc:PrismicDocument) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
  else if (doc.type === 'aboutus') {
    return `/`;
  }
  return '/';
}

export const Router = {
  routes: [
    {
      "type":"aboutus",
      "path":"/"
    },
  ]
};