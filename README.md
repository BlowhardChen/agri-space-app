# Agri Space App

圈地吧（AgriSpace App）

该项目是一个 **React Native + GIS 地图开发** 的跨平台农业地图应用，主要目标是实现农田地块管理、农事任务管理以及农机作业轨迹记录等功能，同时提供用户个人信息管理、设备注册与绑定等功能。

技术重点：

- React Native
- TypeScript
- AMap Native SDK
- react-native-amap3d
- MobX 状态管理
- GIS 农业地图架构设计

---

## 技术栈

技术 说明

---

React Native 移动端开发框架
TypeScript 类型安全
react-native-amap3d 高德地图 RN 封装
MobX 状态管理
AMap SDK 原生地图能力

---

## 功能模块

---

首页
地块管理
农事管理
个人中心

---

## 项目结构

agri-space-app
│
├── src
│ ├── map-sdk
│ │ ├── MapView.tsx
│ │ ├── MapController.ts
│ │ ├── MapLayers.ts
│ │ ├── MapTrack.ts
│ │ ├── MapDraw.ts
│ │ └── types.ts
│ ├── core
│ │ ├── location
│ │ │ └── locationService.ts
│ │ ├── sensor
│ │ │ └── headingService.ts
│ │ └── storage
│ │ └── storageService.ts
│ ├── domain
│ │ ├── field
│ │ │ └── Field.ts
│ │ ├── task
│ │ │ └── Task.ts
│ │ ├── track
│ │ │ └── Track.ts
│ │ └── device
│ │ └── Device.ts
│ ├── services
│ │ ├── fieldService.ts
│ │ ├── taskService.ts
│ │ └── trackService.ts
│ ├── repositories
│ │ ├── fieldRepository.ts
│ │ ├── taskRepository.ts
│ │ └── trackRepository.ts
│ ├── stores
│ │ ├── fieldStore.ts
│ │ ├── taskStore.ts
│ │ └── trackStore.ts
│ ├── screens
│ │ ├── MapScreen
│ │ ├── FieldScreen
│ │ ├── TaskScreen
│ │ └── ProfileScreen
│ ├── components
│ │ ├── MapTools
│ │ ├── TaskCard
│ │ └── FieldItem
│ └── utils
├─ .editorconfig
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.js
├─ .watchmanconfig
├─ app.json
├─ App.tsx
├─ babel.config.js
├─ commitlint.config.js
├─ Gemfile
├─ index.js
├─ jest.config.js
├─ metro.config.js
├─ package.json
├─ README.md
├─ tsconfig.json
└─ yarn.lock

---

## 架构说明

项目采用 **分层架构设计**：

UI Layer (Screens)\
↓\
State Layer (MobX Stores)\
↓\
Service Layer\
↓\
Repository Layer\
↓\
API / Storage

地图能力单独封装为 **Map SDK**：

React Native UI\
↓\
Map SDK\
↓\
AMap Engine\
↓\
AMap Native SDK

---

## Map SDK 设计

    map-sdk
    │
    ├── MapView.tsx
    ├── MapController.ts
    ├── MapTrack.ts
    ├── MapDraw.ts
    ├── MapLayers.ts
    └── types.ts

功能：

- 地图初始化
- 图层控制
- 地块绘制
- 轨迹绘制
- 定位显示
- 地图事件处理

---
