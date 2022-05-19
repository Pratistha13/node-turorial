//npm global command, comes with node
//npm version
//local dependency
// npm install packagename
//global dependency - use it in any project
// npm install -g<packagename>

//package.json- stores important info about project/package
//npm init
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);