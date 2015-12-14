// de module path

var path = require('path');
var voorbeeldPath = ('Users/Peter Kassenaar/Documents/test.html');
console.log('normalize: ', path.normalize(voorbeeldPath));
console.log('resolve: ', path.resolve(voorbeeldPath));
console.log('dirname: ', path.dirname(voorbeeldPath));
console.log('basename: ', path.basename(voorbeeldPath));
console.log('extname: ', path.extname(voorbeeldPath));

