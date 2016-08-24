# Swap keys in an object!

## Usage
First install it:
```
npm install --save
```

Then use it:

```
const swapKeysInObject = require('swap-keys-in-object')
```

Say you have an object like this:

```
const oldFellow = {
    id: 'PloppyNop39',
    name: 'Crumbface',
    age: 137
}
```

But you want the keys to be preceded by underscores. Create a
map from your old keys onto your new keys:

```
const keyMap = {
    id: '_id',
    name: '_name',
    age: '_age'
}

```

Then you can swap out the old keys for new:

```
const newFellow = swapKeysInObject(keyMap, oldFellow)
```

The resulting `newFellow`:

```
{
    _id: 'PloppyNop39',
    _name: 'Crumbface',
    _age: 137
}
```
