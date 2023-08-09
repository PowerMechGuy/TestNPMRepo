// Heirarchy of require module
// checks:
// 1: Core Module
// 2: File or folder
// 3: node_modeles

var _ = require('underscore');

var result = _.contains([1,2,3], 2);
console.log(result);
