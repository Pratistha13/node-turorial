//CommonJs, every file in node is module by default
//Modules- Encapsulated Code(only share minimum- what we want)
const names= require('./4-firstmodules')
const sayHi= require('./5-secondmodules')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)


