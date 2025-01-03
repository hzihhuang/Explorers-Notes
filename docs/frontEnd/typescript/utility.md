---
title: 工具类型
date: 2025-01-03 16:00:00
---

工具类型（Utility Types）是 TypeScript 提供的一组内置类型，用于基于已有的类型进行操作和变换，生成新的类型。它们可以帮助开发者更高效地定义类型，避免重复劳动，并让类型系统更加灵活和强大。

工具类型的特点:
1. 基于现有类型：工具类型通常以输入的类型为基础，进行某种变换或提取。
2. 灵活性高：可以组合使用多个工具类型，满足复杂场景需求。
3. 提升开发效率：通过减少手动定义类型的工作量，提高代码的可读性和复用性。

## 内置工具类型

### Partial<T>
将类型 T 的所有属性变为可选。
### Required<T>
将类型 T 的所有属性变为必填。
### Readonly<T>
将类型 T 的所有属性变为只读。
### Pick<T, K>
从类型 T 中挑选指定的属性 K 生成新的类型。
### Omit<T, K>
从类型 T 中移除指定的属性 K 生成新的类型。
### Record<K, T>
创建一个键为类型 K，值为类型 T 的对象类型。
### Exclude<T, U>
从类型 T 中排除 U。
### Extract<T, U>
从类型 T 中提取 U。
### NonNullable<T>
移除类型中的 null 和 undefined。
### ReturnType<T>
获取函数的返回值类型。
### InstanceType<T>
获取类构造函数的实例类型。
### Parameters<T>
获取函数的参数类型。

## 自定义工具类型

### DeepPartial<T>
实现深度可选，将对象的所有属性递归变为可选。
```ts
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 示例
type User = {
  id: number;
  name: string;
  address: {
    city: string;
    zip: number;
  };
};

type PartialUser = DeepPartial<User>;
// PartialUser 等价于
// {
//   id?: number;
//   name?: string;
//   address?: {
//     city?: string;
//     zip?: number;
//   };
// }
```

### ValueOf<T>
获取对象类型的所有值类型。
```ts
type ValueOf<T> = T[keyof T];

// 示例
type User = {
  id: number;
  name: string;
  active: boolean;
};

type UserValues = ValueOf<User>;
// UserValues 等价于 number | string | boolean
```