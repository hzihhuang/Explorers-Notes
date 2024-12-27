---
title: TypeScript 装饰器
date: 2024-12-27 17:00:00
---

# 深入理解 TypeScript 装饰器

装饰器是 TypeScript 提供的一个强大且灵活的元编程特性，允许开发者在运行时动态地修改类、方法、属性或参数的行为。在这篇文章中，我们将深入探讨装饰器的概念、使用场景及实际应用。

## 1. 什么是装饰器？

装饰器是一个特殊的 TypeScript 元数据注解，它用于修改类、方法、属性或参数的行为。装饰器是基于 JavaScript 提案（目前为 Stage 2）的实验性功能，在 TypeScript 中可通过启用 experimentalDecorators 编译选项来使用。

### 装饰器的作用

装饰器允许你：

- 修改类的行为或属性。
- 为类的属性或方法添加元数据。
- 在不修改原始代码的情况下增强功能。

装饰器本质上是一种通过附加元数据或增强类行为来实现功能的方式。

## 2. 如何启用装饰器

在 TypeScript 中，装饰器是一个实验性功能，所以默认情况下是禁用的。要启用装饰器，你需要在 tsconfig.json 文件中进行如下配置：

```json
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

## 3. 装饰器的类型

在 TypeScript 中，装饰器分为几种类型，分别用于不同的场景。以下是常见的装饰器类型：

### 3.1 类装饰器（Class Decorators）

类装饰器用于修改类的行为，它是一个函数，接收构造函数作为参数。

```typescript
function logClass(target: Function) {
  console.log(`Class ${target.name} is created`);
}

@logClass
class MyClass {
  constructor() {
    console.log("MyClass instance created");
  }
}

const myClassInstance = new MyClass();
// 输出：
// Class MyClass is created
// MyClass instance created
```

### 3.2 方法装饰器（Method Decorators）

方法装饰器用于修改类的方法，它接收三个参数：

- target: 方法所在的类的原型。
- key: 方法名。
- descriptor: 方法的属性描述符。

示例：

```typescript
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method ${key} is called with arguments: ${args}`);
    return originalMethod.apply(this, args);
  };
}

class MyClass {
  @logMethod
  greet(name: string) {
    console.log(`Hello, ${name}!`);
  }
}

const myClass = new MyClass();
myClass.greet("Alice");
// 输出：
// Method greet is called with arguments: [ 'Alice' ]
// Hello, Alice!
```

### 3.3 属性装饰器（Property Decorators）

属性装饰器用于修改类的属性，接收两个参数：

- target: 类的构造函数。
- key: 属性名。

示例：

```typescript
function logProperty(target: any, key: string) {
  let value = target[key];

  const getter = () => {
    console.log(`Getting value of ${key}: ${value}`);
    return value;
  };

  const setter = (newValue: any) => {
    console.log(`Setting value of ${key}: ${newValue}`);
    value = newValue;
  };

  Object.defineProperty(target, key, { get: getter, set: setter });
}

class MyClass {
  @logProperty
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const myClass = new MyClass("Alice");
myClass.name = "Bob"; // 输出：Setting value of name: Bob
console.log(myClass.name); // 输出：Getting value of name: Bob
```

### 3.4 参数装饰器（Parameter Decorators）

参数装饰器用于修改类方法的参数，它接收三个参数：

- target: 方法所在的类的原型。
- key: 方法名。
- index: 参数索引。

示例：

```typescript
function logParameter(target: any, key: string, index: number) {
  console.log(`Parameter at index ${index} in method ${key} is decorated`);
}

class MyClass {
  greet(@logParameter name: string) {
    console.log(`Hello, ${name}!`);
  }
}

const myClass = new MyClass();
myClass.greet("Alice");
// 输出：Parameter at index 0 in method greet is decorated
```

## 4. 装饰器工厂（Decorator Factories）

装饰器工厂是一个返回装饰器函数的函数，它允许你在装饰器中传递参数。这对于需要动态配置装饰器行为的场景非常有用。

示例：

```typescript
function logWithPrefix(prefix: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`${prefix} Method ${key} is called with arguments: ${args}`);
      return originalMethod.apply(this, args);
    };
  };
}

class MyClass {
  @logWithPrefix("INFO:")
  greet(name: string) {
    console.log(`Hello, ${name}!`);
  }
}

const myClass = new MyClass();
myClass.greet("Alice");
// 输出：INFO: Method greet is called with arguments: [ 'Alice' ]
// Hello, Alice!
```

## 5. 装饰器的应用场景

装饰器在多个领域有广泛的应用，以下是几个常见的场景：

1. 日志记录

使用装饰器来记录方法调用、参数和返回值，对于调试和性能监控非常有帮助。

2. 权限控制

可以通过装饰器在方法执行前验证权限，确保只有具有合适权限的用户才能执行特定操作。

3. AOP（面向切面编程）

通过装饰器为方法、类添加额外的行为，类似于 AOP 中的切面，增强系统功能。

## 6. 注意事项与最佳实践

- 装饰器是一个实验性特性，因此在生产环境中使用时需要小心。
- 使用装饰器时要确保它们不会过度复杂化你的代码，装饰器的目的是增强而不是替代现有的功能。
- 如果你需要修改类的方法或属性，优先考虑装饰器，但也要了解它可能引入的性能开销。

## 7. 总结

装饰器是 TypeScript 中非常强大的功能，它为开发者提供了在运行时修改类行为和属性的能力。通过装饰器，你可以实现代码的解耦、复用，并提升代码的可维护性和可扩展性。在实际开发中，装饰器常用于日志记录、权限控制、缓存和 AOP 等场景。

如果你还没有尝试过装饰器，不妨在你的 TypeScript 项目中开启装饰器功能，体验这一强大特性带来的便利。
