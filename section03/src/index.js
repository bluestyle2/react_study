// CJS 모듈
// const { add, sub } = require("./math");

// ESM 모듈
// import mul from "./math.js";
import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
