# bootcamp2020c33
- JAM-Stack

## Step06 Programmatically Create Pages
- We want to create a page dynamically given the data from any source. However, to keep the step simple we are creating a page dynamically with static data.
- Usually we will create these dynamic pages by fetching data from headless CMS like Contentful at Build Time.
- In this step we are not dynamically building pages at runtime but at build time, just like the pages that are in the pages directory are created at build time. The only difference between these two methods of building pages is statically or dynamically, both at build time. In came of dynamically we basically are fetching data (may be from Headless CMS) at build time and dynamically building pages on the basis of data.
- You can now view the dynamically created component page in the browser. ⠀ http://localhost:8000/my-dynamic-page
- Note that this dynamic page is created at build time just like the pages that are in the pages directory are created at build time.
- Also note that build time is not run in the browser but on your machine using Node.js on your machine and we build static pages at build time.

Exteranl Links
- [Where Does Logic Go on Jamstack Sites?](https://css-tricks.com/where-does-logic-go-on-jamstack-sites/)
- [Build time vs runtime](https://www.gatsbyjs.com/docs/conceptual/overview-of-the-gatsby-build-process/#build-time-vs-runtime)
- [Build Time and Client Runtime Data Fetching](https://www.gatsbyjs.com/docs/conceptual/data-fetching/)
- [Creating and Modifying Pages](https://www.gatsbyjs.cn/docs/creating-and-modifying-pages/)
- [Read Create Pages Tutorial](https://www.gatsbyjs.com/docs/programmatically-create-pages-from-data/#creating-pages)
- [Node API's](https://www.gatsbyjs.cn/docs/node-apis/)
- [RFC: File System Routing Improvements](https://github.com/gatsbyjs/gatsby/pull/24463)
- Steps
  - Create gatsby-node.js in the root
  - Create tempalate dynamic-page.tsx in templates directory for the page created dynamically
  - Add a link to the my-dynamic-page page in the index.tsx page
  - gatsby develop

## Step07 Client Only Routes
- In this step we added a client-only route to our Gatsby application. It will have no static HTML assets generated for it, and will only ever be rendered client-side.
- For some pages, none of the page needs to be server rendered, as all data will be loaded live from your API. For example, a user account page that displays a user's personal profile and data. It's only accessible to the user, and the content is completely dynamic. Another example is the checkout funnel of an e-commerce application; the contents of your cart and all of the payment-related pages are completely dynamic and unique for each use.
- Steps
  - Create Client1.tsx and DefaultClient.tsx components
  - Create app.tsx page
  - create gatsby-note.js
  - gatsby develop 

External Links
- [Understanding client-only routes](https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/#understanding-client-only-routes)

## Step08 Material UI
- Steps
  - npm install gatsby-plugin-material-ui @material-ui/core @material-ui/styles mdi-material-ui --save
  - add material UI Button component in index.tsx page
  - gatsby develop

External Links
- [Material UI Plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-material-ui/)
- [Official Gatsby Example](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)
- [Material UI Buttom Documentation](https://material-ui.com/components/buttons/)

## Online Lectures
- [Link1](https://www.youtube.com/watch?v=21dnsmxRRYM&ab_channel=PanacloudServerlessSaaSTraining)
- [Link2](https://www.facebook.com/zeeshanhanif/videos/10224601577451761/)
- [Link3](https://www.youtube.com/watch?v=rdcqnWJK2Mk&ab_channel=PanacloudServerlessSaaSTraininginUrdu)
- [Link4](https://www.facebook.com/zeeshanhanif/videos/10224605671834118)
