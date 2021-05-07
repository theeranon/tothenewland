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
            ["ธรรมชาติ", "/category/nature/"],
            ["ท่องเที่ยว", "/category/travel/"],
            ["ญี่ปุ่น", "/tag/japan/"],
            ["เกี่ยวกับเรา", "/about/"],
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
          url: "https://ongkorn.seeddemo.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
