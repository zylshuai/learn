# Day 2 学习笔记

## 今日目标
- 阅读闭包相关知识
- 阅读《你不知道的JavaScript》

---

## 一、闭包 (Closures)

### 1. 核心概念
- **函数作为返回值**：内层函数可以访问并修改外层函数的私有变量。
- **模块模式**：在模块文件中，通过导出的函数来操作文件内的私有变量，实现封装。

### 2. 应用场景

#### a. 函数工厂 (Function Factory)
`createCounter` 是一个函数工厂，必须由一个变量接收其返回的函数后，才能实现状态的保持和累加。
```javascript
// createCounter函数
const createCounter = () => {
    let count = 0;
    return () => {
        count += 1;
        return count;
    };
};

const counter = createCounter(); // counter 持有了对 count 的闭包
console.log(counter()); // 1
console.log(counter()); // 2
```

#### b. 缓存/记忆化 (Memoization)
通过闭包缓存计算结果，避免对相同参数的重复计算。
- `...args` (Rest Parameters): 将传入的多个参数收集到一个数组 `args` 中。
- `fn(...args)` (Spread Syntax): 将数组 `args` 展开，作为独立参数传递给 `fn`。
```javascript
// 闭包缓存函数
const memoize = (fn) => {
    const cache = {}; // cache 被保存在闭包中

    return (...args) => {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('从缓存读取:', cache[key]);
            return cache[key];
        } else {
            const value = fn(...args);
            console.log('计算新值:', value);
            cache[key] = value;
            return value;
        }
    };
};
```

#### c. 防抖与节流 (Debounce & Throttle)
在节流/防抖函数中，需要使用 `func.apply(this, arguments)` 来调用原始函数，以保证 `this` 指向的正确性。

#### d. 发布-订阅模式 (Publish/Subscribe Pattern)
闭包可以用来维护一个私有的订阅者列表。

#### e. 链式调用 (Chaining)
在闭包中返回 `this`，可以实现函数的链式调用。

---

## 二、函数与参数 (Functions & Parameters)

### 1. `arguments` 对象
- **普通函数**中，`arguments` 是一个包含所有传入参数的类数组对象。
- **箭头函数**中**没有**自己的 `arguments` 对象。它会从外层作用域查找。在箭头函数中应使用 **Rest 参数 (`...args`)** 来获取参数，它会得到一个真正的数组。

### 2. 函数柯里化 (Currying)
- **参数复用**：通过预先传递部分参数，创建一个功能更具体的新函数。
- **延迟执行**：将函数的执行时机推迟到所有参数都接收完毕后。
- **函数组合**：将多参数函数转换为单参数函数，使其更容易进行组合，构建优雅的数据处理管道。

---

## 三、迭代器 (Iterators)

### 1. 核心作用
- 为不同的数据结构提供统一的遍历接口 (`for...of`)。
- 支持**惰性计算**，可以处理无限序列或大数据集，而不会一次性加载到内存。

### 2. `Symbol.iterator`
- `Symbol.iterator` 是一个内置的、众所周知的 Symbol 值。
- 当一个对象拥有一个以 `Symbol.iterator` 为键的属性，并且该属性是一个**返回迭代器**的函数时，该对象就被认为是**可迭代的 (Iterable)**。
- 这使得自定义对象也能使用 `for...of`、展开语法 (`...`) 等。

## 四、易错点
### 1. 如果闭包是对象的方法或者我需要一个动态的this时,应该使用function
### 2. 如果闭包是回调函数,或者我需要捕获外层的this时,应该使用箭头函数

---

## 五、《你不知道的JavaScript》学习笔记
- 主要学习了**作用域**相关知识，以及**声明提升 (Hoisting)**。
- 大部分是已知的概念，需要后续跟着计划慢慢深入阅读。
