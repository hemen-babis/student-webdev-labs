let result = {};

const insertItem = (key, value) => {
  result[key] = value;
};

const deleteItem = (key) => {
  delete result[key];
};

const lookupItem = (key) => {
  return key in result ? result[key] : 'Item does not exist';
};

const printItems = () => {
  return Object.keys(result).join(', ');
};

insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
console.log(lookupItem('lorem'));

deleteItem('lorem');
console.log(printItems());
console.log(lookupItem('lorem'));