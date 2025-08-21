# day1

## 基础复习

### 1. 生成 SSH 密钥
1. 使用 SourceTree 的 SSH 助手生成新的 SSH 密钥
2. 把公钥添加到 GitHub 账号中
3. 也可以导入旧密钥

### 2. 基础类型
- **Boolean**
- **null**
- **undefined**
- **Number**
- **BigInt**：任意精度的整数
- **String**
- **Symbol**：唯一的用法是标识对象，目前感觉没什么用

### 3. Object
- 对象可以被冻结,冻结后除了取值外不能进行任何操作
- 对象可以被封闭,封闭后不能添加新属性,但可以删除或修改
- 使用Object.entries可以获得一个[[key,value]]嵌套数组

### 4. 数字与字符串运算
- 数字字符串 + 数字，直接拼接字符串
- 其他运算符则进行数学运算
- `parseInt()`：字符串转数字，不包含小数
- `parseFloat()`：字符串转数字，包含小数

### 5. 数字进制
- 十进制：没有特殊开头
- 八进制：0、00、0o 开头
- 十六进制：0x 开头
- 二进制：0b 开头
- `parseInt('101', 2)` // 5，第二个参数可以指定第一个参数的进制（默认转换为十进制）

### 6. 对象属性名
- 空串或符号不能直接当属性名，必须加引号
- 取值时也必须用 `[]`，而不是点号

### 7. 假值
- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `""`（空字符串）

### 8. 异常处理
- `try…catch…finally`
- **finally 中 return 的值会覆盖 try 和 catch 中的 return**
- **如果 try...catch 多层嵌套，外层的 catch 无法捕获内部已触发 finally 的异常**

```javascript
try {
    // 可能异常的代码
    if (正常) {
        return 1;
    } else {
        throw new Error('出错了');
    }
} catch (error) {
    // 处理异常
    return 2;
} finally {
    // 总是执行的部分
    return 3;
}
// 输出：3
```

### 9. 使用 tsc 编译并监听单个 ts 文件
```shell
tsc index.ts --watch
```

### 10. 不太常用的循环语句
- do...while：无论如何都先执行一次
  ```javascript
  do { i += 1 } while (i < 5)
  ```
- while：判断条件再执行
  ```javascript
  while (i < 5) { i += 1 }
  ```

### 11. label 语句
- `outPoint` 可以是任何非关键字
- 在多层循环嵌套中，`break outPoint` 会直接结束循环，跳出到 outPoint 块下

```javascript
let x = 10;
outPoint: for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i == 2) {
        x += 5;
        break outPoint;
    }
}
console.log(x); 
// 输出：0, 1, 2, 15
```

### 12. break 和 continue 语句
- `break`：立即跳出当前循环，`break label` 跳到 label 下
- `continue`：跳过本次循环，`continue label` 跳到指定 label 循环的下一次迭代（一般用于多层循环嵌套）

### 13. for...in 和 for...of 语句

- **for...in**：遍历对象的 key 或数组下标
  ```javascript
  for (let i in obj) {
      // i 是 obj 的 key
  }
  for (let i in arr) {
      // i 是数组的下标
  }
  ```
- **for...of**：遍历可迭代对象（如 Array、Map、Set、arguments）
  ```javascript
  for (let i of arr) {
      // i 是数组的某一个值
  }
  ```

### 14. arguments 对象
- 在函数内可以通过 `arguments` 访问所有参数
- `arguments[0]` 就是第一个参数，即使第一个参数已显式定义

### 15. 剩余参数
- `fn(a, ...b)`，b 数组接收所有剩余参数

### 16. 表单获取值
- 表单元素的 `onchange` 事件，参数中传入 `this`，即代指该表单元素获取到的值
- 也可以通过各种选择器找到指定元素，调用其 `value` 属性

### 17. 数值推导（实验方法）
- `[for(i of [1, 2, 3]) i*2 ] // [2, 4, 6]`（此写法为早期提案，实际应使用 map）

### 18. 正则
- 了解 `test` 方法即可，其他可查文档