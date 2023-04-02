export default function({title, description, image}){
  const config = useAppConfig();
  const route = useRoute();
  const meta = [
    {hid: "title", name: "title", content: title},
    {hid: "description", name: "description", content: description},
    {hid: "og:title", name: "og:title", content: title},
    {hid: "og:description", name: "og:description", content: description},
    {hid: "og:image", name: "og:image", content:  `${config.siteRoot}/images/${image}`},
    {hid: "og:url", name: "og:url", content: `${config.siteRoot}${route.path}`},
    {hid: "twitter:title", name: "twitter:title", content: title},
    {hid: "twitter:description", name: "twitter:description", content: description},
    {hid: "twitter:image", name: "twitter:image", content: `${config.siteRoot}/images/${image}`},
    {hid: "twitter:creator", name: "twitter:creator", content: config.twitterHandle},
    {hid: "twitter:site", name: "twitter:site", content: config.twitterHandle},
    {hid: "twitter:card", name: "twitter:card", content: "summary_large_image"}
  ];
  useHead({
    title: `${title} | ${config.title}`,
    description: description,
    meta
  })
}