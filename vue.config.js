module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html"
    },
    page1: {
      entry: "src/pages/page1/main.js",
      template: "public/page1.html",
      filename: "page1.html"
    }
  }
};
