let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

const arr = [undefined, null, -(-0), NaN, "", 0n];

for (const key in arr) {
  if (!Object.hasOwn(arr, key)) continue;

  console.log(arr[key]);
  const element = arr[key];

  if (!arr[key]) {
    console.log("falsy");
  } else {
    {
      console.log("truthy");
    }
  }
}

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

const arr2 = ["hello", 123, [], {}, () => {}];

for (const key in arr2) {
  if (!Object.hasOwn(arr2, key)) continue;

  const element = arr2[key];

  if (arr2[key]) {
    console.log("truthy");
    console.log(element + " :  truthy");
  } else {
    {
      console.log("falsy");
    }
  }
}
