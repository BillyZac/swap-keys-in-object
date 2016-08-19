const swapKeysInObject = (keyMap, object) => Object.keys(keyMap).reduce((newObject, key) => {
        const newKey = keyMap[key]
        newObject[newKey] = project[key]
        return newObject
    }, {})

module.exports = swapKeysInObject;
