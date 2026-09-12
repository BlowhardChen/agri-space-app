# GIS 规则

---

# GIS 架构规则

- GIS 逻辑必须模块化
- 禁止业务页面直接操作地图底层
- GIS 工具函数必须复用
- 空间分析逻辑必须统一封装
- Geometry 创建前必须校验

---

# 坐标系规则

- 默认使用 EPSG:3857
- 后端坐标统一使用 WGS84
- 渲染前必须转换坐标系
- 禁止混用 EPSG:4326 与 EPSG:3857
- 经纬度顺序统一为 [lng, lat]

---

# GeoJSON 规则

- GeoJSON 必须符合 RFC7946
- Feature 必须存在唯一 id
- Polygon 必须闭合
- Geometry 必须有效
- 非法 Geometry 禁止进入渲染流程

---

# GIS 数据规则

- 空间数据必须校验
- 大数据量 GIS 数据必须支持分块处理
- GIS 数据必须支持类型定义
- FeatureCollection 必须统一格式

---

# GIS 工具规则

GIS 工具必须统一封装：

- 面积计算
- 距离计算
- 坐标转换
- Geometry 校验
- Polygon 修复
- 空间关系判断

---

# GIS 安全规则

禁止：

- 直接修改原始 Geometry
- 混用坐标系
- 未校验 Geometry 直接渲染
- 使用无类型 GIS 数据
