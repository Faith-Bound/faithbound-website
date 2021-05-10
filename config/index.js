module.exports = {
  //-- SITE SETTINGS -----
  author: "@faithbound",
  siteTitle: "Faith Bound",
  siteShortTitle: "Faith Bound", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Faith Bound is a Christian Community Discord cantered around fellowship and sharing the truth of the Gospel.",
  siteUrl: "https://faithbound.gg/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Faith Bound", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  // Articles

  shownArticles: 3,

  // Social Media
  socialMedia: [
    {
      name: "Discord",
      url: "https://discord.gg/BCRzXrz/",
    },
    {
      name: "Forum",
      url: "/forum/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/faithbound/",
    },
    {
      name: "Blog",
      url: "/blog/",
    },
  ],

  // Navigation
  navLinks: {
    menu: [
      {
        name: "About",
        url: "/#about",
      },
      {
        name: "Blog",
        url: "/blog/",
      },
      {
        name: "Forum",
        url: "/forum/",
      },
      {
        name: "Contact",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: false,
      name: "Discord",
      fileName: "", // the file has to be placed inside the static folder at the root level
      url: "https://discord.gg/BCRzXrz", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
