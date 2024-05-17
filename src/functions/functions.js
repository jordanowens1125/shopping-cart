const filterBySearch = (list, input) => {
  if (input === "" || input === null) {
    return list;
  } else {
    const filtered = list.filter((item) => {
      const capitalizedTitle = item.title.toUpperCase();
      return capitalizedTitle.includes(input.toUpperCase());
    });
    return filtered;
  }
};

const filterByCategory = (list, category) => {
  if (!category) {
    return list;
  }
  const filtered = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].category === category) {
      filtered.push(list[i]);
    }
  }
  return filtered;
};

const A = "A";
const Z = "Z";
const LEAST = "least";
const GREATEST = "greatest";

const sortBy = (list, sortOption) => {
  if (sortOption === LEAST) {
    return list.sort((a, b) => a.price - b.price);
  }
  if (sortOption === GREATEST) {
    return list.sort((a, b) => b.price - a.price);
  }
  if (sortOption === A) {
    return list.sort(function (a, b) {
      var titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase();
      if (titleA < titleB)
        //sort string ascending
        return -1;
      if (titleA > titleB) return 1;
      return 0; //default return value (no sorting)
    });
  }
  if (sortOption === Z) {
    return list.sort(function (a, b) {
      var titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase();
      if (titleA < titleB)
        //sort string ascending
        return 1;
      if (titleA > titleB) return -1;
      return 0; //default return value (no sorting)
    });
  }
};

export { sortBy, filterByCategory, filterBySearch, A, Z, LEAST, GREATEST };
