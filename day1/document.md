# 第一天
## 基础复习
### 生成ssh密钥
1. 使用scourcetree的ssh助手,生成新的ssh密钥
2. 把公钥添加到github账号中
3. 也可以导入旧密钥
### 学习一下mdn相关知识
1. 基础类型
- *Boolean*
- *null*
- *undefined*
- *Number*
- *BigInt:* 任意精度的整数
- *String*
- *Symbol:* 唯一的用法就是标识对象,目前感觉没什么用 
2. Object
3. 数字字符串+数字,直接拼接字符串, 其他运算符则进行数学运算
- praseInt():字符串转数字,不包含小数
- parseFloat():字符串转数字,包含小数
4. 数字进制
- 十进制没有特殊开头
- 八进制 0 00 0o开头
- 16进制0x开头
- 2进制0b开头
- parseInt('101',2) // 5 第二个参数可以指定第一个参数的进制(所以说parseInt()是默认转换为10进制喽?)
5. 对象
- 空串或者符号必须不能直接当属性名,必须加"",同样,取值的时候也必须用[],而不是.
6. 假值
- false
- undefined
- null
- 0
- NaN
- ""
7. 异常处理
- try…catch…finally
- ***finally中返回的值会覆盖try和catch中的返回值***
- ***如果try...catch多层嵌套,外层的catch无法捕获内部已经触发过finally的异常***
```javascript
try{
    可能异常的代码
    if(正常){
        return 1
    }else{
        throw new Error('出错了')
    }
} catch(error){
    处理异常
    return 2
} finally{
    总是执行的部分
    return 3
}
// 3
```
8. 使用tsc来编译单个ts文件,后面拼上--watch即可监听
9. 不太常用的循环语句
- 无论如何都先执行一次
  `do{ i += 1 }while{i < 5}`
- 判断条件再执行
`while(i < 5){ i += 1}`
10. label语句
- outPoint可以是任何非关键字,在多个循环嵌套中break outPoint后,会直接结束循环,跳出到outPoint块下
```javascript
let x: number = 10;
outPoint: for(let i = 0; i < 5; i++){
    console.log(i)
    if(i == 2){
        x += 5;
        break outPoint;
    }
}
console.log(x); 
// 0,1,2,15
```
11. break语句和continue语句
- break语句可以立即跳出当前循环,当break label时,直接跳到label下
- continue语句可以立刻跳过本次循环进行下一次循环,当coutinue label时,跳到指定label循环的下一次迭代,一般用于多层循环嵌套
12. for...in语句和for...of语句
- for...in语句
```javascript
for(let i in obj){
    // i直接就是obj的key值
}
for(let i in arr){
    // i会是数组的下标
}
```
- for...of 仅能在可迭代的对象中使用(如Array,Map,Set,argments)
```javascript
for(let i of arr){
    // i会是数组的某一个值
}
```
13. 在函数内,可以通过arguments数组访问所有参数
- arguments[0]即是第一个参数,哪怕第一个参数显式定义了
14. 剩余参数
- fn(a,...b) b数组接收所有剩余参数
15. 原生方法中,表单元素的onchange事件,参数中传入this,即代指该表单元素获取到的值.或者通过各种选择器找到指定元素,调用他的value属性
16. 数值推导(一种实验方法)
- [for(i of [1, 2, 3]) i*2 ] // [2, 4, 6]
17. 正则我随便看几眼就跳过了,感觉背诵意义不大,知道test就可以了