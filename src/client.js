import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: 'buacuwcz',
  dataset: "production",
  apiVersion: "2023-10-09",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});
const builder =imageUrlBuilder(client);
export const urlFor = (source)=> builder.image(source);