# React Native 规则

---

# React 规则

- 只允许函数组件
- 只允许 Hooks
- 禁止 Class Component
- 优先使用组合式逻辑

---

# RN 架构规则

- 页面保持轻量
- 业务逻辑必须封装 Hook
- Native 能力必须封装
- 权限管理必须统一

---

# Hook 规则

地图相关 Hook：

- useMap
- useLayer
- useLocation
- useDraw
- useTrajectory
- useMeasure

禁止：

- 页面中堆积 GIS 逻辑
- 页面直接操作地图实例

---

# 状态管理规则

- GIS 状态统一管理
- UI 状态与 GIS 状态分离
- 避免重复状态
- 避免全局存储超大 Geometry

---

# Native 模块规则

必须封装：

- 定位
- 相机
- 蓝牙
- 文件系统
- 方向传感器

禁止：

- 页面直接调用 Native API

---

# RN 安全规则

禁止：

- UI 线程执行重计算
- 高频 setState
- 不必要 re-render
- 未清理定时器
