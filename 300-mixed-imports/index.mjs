// Example of using both old- and new-skool modules in one file:

/**
 * Run example "node index.mjs".
 * The "type": "module" in package.json makes .js files default to ESM.
 * The .cjs extension forces CommonJS regardless. So greeter.cjs works without any extra config.
 * (If it was named greeter.js, Node would try to parse it as ESM and choke on module.exports!)
 */

// Modern ESM imports:
import { createRequire } from 'module';
import { add } from './math.mjs';

// Bridge to load old-skool CJS modules:
const require = createRequire(import.meta.url); // editor will often complain
const { greet } = require('./greeter.cjs');

console.log(greet('Peter'));   // Hello, Peter!
console.log(add(2, 3));        // 5
