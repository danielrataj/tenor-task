// This is just an example,
// so you can safely delete all default props below

export default {
  menu: {
    aria: "menu",
    home: "Home",
    trending: "Trends",
    search: "Search",
  },
  home: {
    intro: "Search in menu on the left side.",
  },
  trending: {
    heading: "Trends",
    xhr: {
      error: "It is not possible to load the trends.",
      nodata: "There are no trends yet.",
    },
  },
  searching: {
    heading: "Search",
    form: {
      input: {
        label: "search",
        hint: "enter searched keyword",
      },
    },
    xhr: {
      error: "It is not possible to load the search results.",
      nodata: "Currently there are no search results.",
    },
  },
};
