# AGENTS.md

## 作用

这个仓库当前包含两块彼此独立的代码区域：

1. 根目录 React Native 应用：`App.tsx`、`src/`、`android/`、`ios/`
2. 独立的 Web 原型项目：`openlayers-react-native/`

在修改文件前，先确认任务到底属于哪一块。

## 事实来源

- 以当前代码为准，不要优先相信 `README.md`。
- 当前 `README.md` 存在编码问题，而且其中描述的 GIS / 地图架构明显比现在的实际实现更超前。
- 如果任务听起来像“架构分析”，先从真实入口文件顺着 import 往下追，不要默认每个目录都已经启用。

## 当前项目概况

- 根应用技术栈：React Native 0.84、React 19、TypeScript、React Navigation 7、AsyncStorage、React Native Paper
- 根应用包管理器：Yarn 1（见 `package.json` 中的 `packageManager`）
- 根应用 Node 要求：`>= 22.11.0`
- `openlayers-react-native/` 是一个单独的 Vite + TypeScript 项目，拥有自己的 `package.json`
- 虽然安装了 `mobx`，但 `src/stores/`、`src/services/`、`src/repositories/`、`src/domain/`、`src/core/`、`src/map-sdk/` 下的大部分文件仍然是占位文件或空文件

## 高价值入口

- 应用启动入口：`index.js` -> `App.tsx`
- 根导航：`src/navigation/AppNavigator.tsx`、`src/navigation/BottomTabNavigator.tsx`
- 导航类型：`src/types/navigation.ts`
- 当前可见页面：`src/screens/**`
- 鉴权相关文件：
  - `src/utils/auth.ts`
  - `src/utils/tokenUtils.ts`
  - `src/hooks/useAuth.ts`
  - `src/hooks/useAuth.tsx`
  - `src/screens/AuthScreen/LoginScreen.tsx`
  - `src/screens/BootPage/SplashScreen.tsx`
  - `src/screens/BootPage/PrivacyPolicyScreen.tsx`
- 当前实际使用的图片资源位于 `src/assets/images/**`
- 当前 Tab 图标来自 `src/assets/images/tabBar/`
- `src/images/tabbar/` 虽然存在，但里面是 0 字节占位文件，当前 Tab 导航并没有使用这些资源

## Agent 工作规则

- 只做和任务匹配、且与当前已接线代码一致的最小改动。
- 不要因为仓库里存在 `store/service/repository/domain` 目录，就主动引入新的抽象层。只有当任务确实需要时，才补这些层。
- 保持 `@` 路径别名约定不变，也就是 `@/*` -> `src/*`。
- 修改导航时，同时检查导航实现文件和 `src/types/navigation.ts`。
- 修改鉴权或启动流程前，先把整条链路看完：`App.tsx`、启动页、隐私页、登录页、鉴权工具，以及两个 `useAuth` 文件。
- 原生层标识、签名配置、keystore、bundle 名称都属于敏感面。除非任务明确和重命名、发版配置、原生启动相关，否则不要顺手改。
- 不要对全仓做“统一修乱码”。当前多个文件存在乱码风险，只修本次任务涉及的文本，并在修改后仔细检查 JSX、引号和闭合标签。
- 做地图相关任务时，先确认目标到底是：
  - 根目录 React Native 应用
  - 独立的 `openlayers-react-native/` 原型
- 不要默认 `src/map-sdk/*` 已经实现完成，它目前仍然处于脚手架级别。

## 已知不一致与陷阱

- 鉴权存储 key 目前不一致：
  - `src/utils/auth.ts` 读取的是 AsyncStorage 的 `token`
  - `src/utils/tokenUtils.ts` 读写的是 `userToken`
- 仓库里有两个同名但实现不同的鉴权 hook：
  - `src/hooks/useAuth.ts`
  - `src/hooks/useAuth.tsx`
  在修改鉴权逻辑前，先确认当前实际被解析到的是哪一个。
- `src/screens/AuthScreen/LoginScreen.tsx` 目前只是直接跳转到 `Main`，并没有真正持久化鉴权状态。
- `src/screens/BootPage/SplashScreen.tsx` 目前只会在 `userAgreed === "true"` 时自动继续跳转。
- JavaScript 层和原生层的应用命名目前不一致：
  - `app.json` 注册名是 `agrispace`
  - iOS target 和 module 仍然使用 `agriProject`
  - Android 的 namespace 和 `applicationId` 使用 `com.blowhardchen.agrispace`
  - Android 源码路径仍然位于 `android/app/src/main/java/com/agriproject`
- 如果任务和应用重命名或启动失败有关，要把这些命名面一起看，不要只改一处。
- `README.md` 中提到的 AMap / OpenLayers / GIS 架构，与当前真实接线实现并不一致。
- `openlayers-react-native/` 目前仍然接近 Vite 默认样板，还没有真正接入 React Native 主应用。

## 验证建议

- 纯文档修改，优先运行 `git diff --check`。
- 修改根应用的 JavaScript / TypeScript 后，优先做最小但有效的验证：
  - `yarn test`
  - `yarn lint:eslint`
  - `yarn format:check`
- 修改 `openlayers-react-native/` 后，到该目录下运行 `npm run build`。
- 如果无法运行原生构建、真机验证或依赖安装，需要在交付说明里明确说清楚。

## 按任务类型的默认切入点

- UI 流程变更：优先从 `App.tsx` 和 `src/navigation/*` 入手
- 登录或鉴权问题：先把所有鉴权相关文件一起看完，再决定真实状态源应该放在哪里
- 地图功能需求：先澄清目标代码区域，再基于真实代码实现，不要跟着 README 的承诺走
- 清理类任务：只有在用户明确要求清理，或者占位代码直接阻碍当前任务时，才去删除或收敛这些空壳文件
- 应用重命名或启动问题：把 JavaScript 注册名、iOS module 名、Android 组件名和显示名作为一组一致性修改来处理
