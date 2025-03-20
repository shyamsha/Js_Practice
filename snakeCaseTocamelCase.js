function snakeToCamelCaseRecursive(obj) {
  const newObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelCaseKey = key.replace(/_([a-z])/g, (match) =>
        match[1].toUpperCase()
      );
      if (typeof obj[key] === "object" && obj[key] !== null) {
        newObj[camelCaseKey] = snakeToCamelCaseRecursive(obj[key]); // Recursive call
      } else {
        newObj[camelCaseKey] = obj[key];
      }
    }
  }

  return newObj;
}

const snakeCaseObj = {
  user_id: 123,
  first_name: "John",
  last_name: "Doe",
  address: {
    street_name: "street",
    zip_code: 12345,
  },
};

const camelCaseObj = snakeToCamelCaseRecursive(snakeCaseObj);
// console.log(camelCaseObj);

// with out regex
function snakeToCamelCase(obj) {
  const newObj = {};
  for (const key in obj) {
    let camelCaseKey = key
      .split("_")
      .map((word, index) => {
        if (index === 0) return word;
        console.log(word);
        return word[0].toUpperCase() + word.slice(1);
      })
      .join("");
    if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[camelCaseKey] = snakeToCamelCase(obj[key]);
    } else {
      newObj[camelCaseKey] = obj[key];
    }
  }
  return newObj;
}
console.log(snakeToCamelCase(snakeCaseObj));
