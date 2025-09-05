function keys<T>(obj: object): Array<keyof T> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

function values(obj) {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}
