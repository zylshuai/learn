// createCounter函数
const createCounter = () => {
  let count = 0;
  return () => {
    count += 1;
    return count;
  };
};

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// 随便一个计算函数
const add = (a, b) => {
  return a + b;
};

// 闭包缓存函数
const memoie = (fn) => {
  const cache = {};

  return (...arg) => {
    const key = JSON.stringify(arg);
    if (cache[key]) {
      console.log("旧", cache[key]);
      return cache[key];
    } else {
      const value = fn(...arg);
      console.log("新", value);
      cache[key] = value;
      return value;
    }
  };
};

const memoieAdd = memoie(add);
memoieAdd(1, 2);
memoieAdd(1, 2);
memoieAdd(1, 2);
memoieAdd(1, 2);
memoieAdd(1, 3);

const test = (a, ...arg) => {
  console.log("测试", a, arg);
};

test(1, 2, 3);

// const team = {
//   members: ["Alice", "Bob", "Charlie"],
//   // 你的代码将写在这里
//   [Symbol.iterator]: () => {
//     let index = 0;

//     return {
//       next: () => {
//         index++;
//         return {
//           value: this.members[index],
//           done: index >= this.members.length ? false : true,
//         };
//       },
//     };
//   },
// };

// for (const member of team) {
//   console.log(member); // 应该依次输出 'Alice', 'Bob', 'Charlie'
// }
