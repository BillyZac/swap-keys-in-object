# Swap keys in an object!

If you have an object like this:

```
const project = {
    id: 'Ploppy39',
    name: 'Crumbface',
    age: 137,
}
```

And an object that maps your old keys onto your new keys, like this:

```
const keyMap = {
    id: '_id',
    name: '_name',
    age: '_age',
}
```

Then you can swap out the old keys for new, like this:

```
const newObject = swapKeysInObject(keyMap, project)
```

Which gives you this:

```
{
    _id: 'Ploppy39',
    _name: 'Crumbface',
    _age: 137,
}
```
