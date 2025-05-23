# 芯梯科技官方网站

**VitePress 版本 - 现代化的企业官网**

> 构建洞察因果的AI，探索深度人机协作，打造以人为本的应用

## 🚀 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 在浏览器中访问 http://localhost:5173
```

### 构建和部署

```bash
# 构建静态网站
npm run build

# 预览构建结果
npm run preview
```

## 🎨 特性

- **现代设计**: 采用现代化的渐变色彩和动画效果
- **响应式布局**: 完美适配各种设备屏幕
- **简洁布局**: 无侧边栏设计，提供更简洁的浏览体验
- **SEO 优化**: 内置 meta 标签和 Open Graph 支持
- **快速加载**: 基于 Vite 的快速构建和热重载
- **暗色主题**: 自动支持系统暗色主题

## 📁 项目结构

```
├── .vitepress/          # VitePress 配置目录
│   ├── config.js        # 主配置文件
│   └── theme/           # 自定义主题
├── public/              # 静态资源
├── projects/            # 项目相关页面
├── solutions/           # 解决方案页面
├── index.md            # 首页
├── intro.md            # 关于我们
├── contact.md          # 联系我们
└── *.md                # 其他页面
```

## 📝 页面说明

- **首页** (`index.md`) - 公司介绍和核心战略展示
- **关于我们** (`intro.md`) - 详细的公司介绍和方法论
- **技术基石** (`core_technology.md`) - 核心技术理念
- **愿景与使命** (`VISION_AND_MISSION.md`) - 公司战略方向
- **根本性追问** (`FOUNDATIONAL_QUESTIONS.md`) - 公司哲学基石
- **联系我们** (`contact.md`) - 联系方式和公司信息 

## 🚀 部署

网站配置了 GitHub Actions 自动部署：

1. 推送代码到 `vitepress` 分支
2. GitHub Actions 自动构建
3. 部署到 GitHub Pages

## 🔧 开发说明

### 配置文件
- `.vitepress/config.js` - 主配置文件
- `.vitepress/theme/style.css` - 全局样式

### 自定义主题
- 基于 VitePress 默认主题扩展
- 自定义品牌色彩和组件样式
- 响应式设计和动画效果

## 📄 许可证

ISC License

---

**芯梯科技 (SiCoreLadder)** - 让先进的AI普惠每一个独特的个体 