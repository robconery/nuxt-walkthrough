export default defineAppConfig({
  title: "Red:4 Aerospace",
  twitter: "https://twitter.com/robconery",
  siteRoot: "http://localhost:3000",
  twitterHandle: "@robconery",
  favicon: "/img/rings_dark.png",
  mainMenu: [
    {title: "Home", link:"/"},
    {title: "About", link:"/about"},
    {title: "Videos", link:"/course"},
  ],
  social :[
    {title: "mdi-facebook", link:"#"},
    {title: "mdi-twitter", link:"https://hachyderm.io/@robconery"},
    {title: "mdi-vimeo", link:"https://vimeo.com/bigmachine"},
    {title: "mdi-youtube", link:"https://www.youtube.com/@big-machine"}
  ]

});