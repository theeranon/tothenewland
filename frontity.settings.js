const settings = {
  name: "tothenewland",
  state: {
    frontity: {
      url: "https://tothenewland.com/",
      title: "To The New Land",
      description: "ตัวอย่างเว็บไซต์สร้างจาก WordPress และ Frontity",
    },
  },
  packages: [
    {
      name: "yokyai",
      state: {
        theme: {
          menu: [
            ["หน้าแรก", "/"],
            ["Story", "/category/story/"],
            ["About", "/about/"],
            ["Contact", "/contact/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://team.tothenewland.com/",
          homepage: "/home",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
