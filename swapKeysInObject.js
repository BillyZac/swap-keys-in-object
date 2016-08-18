module.exports = swapKeysInObject(keyToReplace, keyToUse, object) {
  return Object.keys(object).reduce((newObject, key) => {
    if (key === keyToReplace) {
      newObject[keyToUse] = object[keyToReplace];
    } else {
      newObject[key] = object[key];
    }
    return newObject;
  }, {});
};
