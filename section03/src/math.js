// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// CJS 모듈
// module.exports = {
//   add: add,
//   sub,
// };

// ESM 모듈
// export { add, sub };

export default function multiply(a, b) {
  return a * b;
}
