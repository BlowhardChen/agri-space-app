# Agri Space App

农域（AgriSpace App）

该项目是一个 **React Native + GIS 地图开发** 的跨平台农业地图应用，主要目标是实现农田地块管理、农事任务管理以及农机作业轨迹记录等功能，同时提供用户个人信息管理、设备注册与绑定等功能。

技术重点：

- React Native
- TypeScript
- Openlayers 地图库
- react-native-amap3d
- MobX 状态管理
- GIS 农业地图架构设计

---

## 技术栈

技术 说明

---

React Native 移动端开发框架
TypeScript 类型安全
Openlayers 地图库
MobX 状态管理

---

## 功能模块

---

首页
地块管理
农事管理
个人中心

---

## 项目结构

```
agri-space-app
├── src
│   ├── assets/
│   │   └── images/
│   │       ├── bootPage/
│   │       └── tabBar/
│   ├── core/
│   │   ├── location/
│   │   │   └── locationService.ts
│   │   ├── sensor/
│   │   │   └── headingService.ts
│   │   └── storage/
│   │       └── storageService.ts
│   ├── domain/
│   │   ├── device/
│   │   │   └── Device.ts
│   │   ├── field/
│   │   │   └── Field.ts
│   │   ├── task/
│   │   │   └── Task.ts
│   │   ├── track/
│   │   │   └── Track.ts
│   │   └── user/
│   │       └── User.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   └── useAuth.tsx
│   ├── images/
│   │   └── tabbar/
│   ├── map-sdk/
│   │   ├── MapController.ts
│   │   ├── MapDraw.ts
│   │   ├── MapLayers.ts
│   │   ├── MapTrack.ts
│   │   ├── MapView.tsx
│   │   └── types.ts
│   ├── navigation/
│   │   ├── tabNavigators/
│   │   │   ├── FieldStackNavigator.tsx
│   │   │   ├── ProfileStackNavigator.tsx
│   │   │   └── TaskStackNavigator.tsx
│   │   ├── AppNavigator.tsx
│   │   ├── BottomTabNavigator.tsx
│   │   ├── TabBarContext.tsx
│   │   └── navigationRef.ts
│   ├── repositories/
│   │   ├── deviceRepository.ts
│   │   ├── fieldRepository.ts
│   │   ├── taskRepository.ts
│   │   ├── trackRepository.ts
│   │   └── userRepository.ts
│   ├── screens/
│   │   ├── AuthScreen/
│   │   │   └── LoginScreen.tsx
│   │   ├── BootPage/
│   │   │   ├── PrivacyPolicyScreen.tsx
│   │   │   └── SplashScreen.tsx
│   │   ├── FieldScreen/
│   │   │   └── FieldManagementScreen.tsx
│   │   ├── ProfileScreen/
│   │   │   └── ProfileScreen.tsx
│   │   └── TaskScreen/
│   │       └── TaskManagementScreen.tsx
│   ├── services/
│   │   ├── deviceService.ts
│   │   ├── fieldService.ts
│   │   ├── taskService.ts
│   │   ├── trackService.ts
│   │   └── userService.ts
│   ├── stores/
│   │   ├── deviceStore.ts
│   │   ├── fieldStore.ts
│   │   ├── taskStore.ts
│   │   ├── trackStore.ts
│   │   └── userStore.ts
│   ├── types/
│   │   ├── navigation.d.ts
│   │   ├── navigation.ts
│   │   └── user.d.ts
│   └── utils/
│       ├── auth.ts
│       └── tokenUtils.ts
├── .bundle/
├── __tests__/
├── android/
├── ios/
├── .editorconfig
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc.cjs
├── .watchmanconfig
├── App.tsx
├── Gemfile
├── LICENSE
├── README.md
├── app.json
├── babel.config.js
├── commitlint.config.js
├── index.js
├── jest.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── tsconfig.json
└── yarn.lock
```

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
