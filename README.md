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

---

## ⚠️ 当前 GitHub Pages 部署问题记录 (截至 YYYY-MM-DD)

目前，将 VitePress 站点部署到 GitHub Pages 时遇到了持续性问题。主要表现为：**部署到 GitHub Pages 后，网站的 CSS、JS 及图片等静态资源无法正确加载，导致页面样式混乱，功能缺失。**

### 现象
- 本地开发 (`npm run dev`) 和本地构建预览 (`npm run build` 后 `npm run preview`) 均能正常显示和运行。
- 部署到 GitHub Pages (`https://<username>.github.io/SiCoreLadder/`) 后，页面 HTML 结构存在，但所有静态资源请求返回 404。

### 已尝试的排查和解决方案

1.  **`base` 路径配置**:
    -   在 `.vitepress/config.js` 中已正确配置 `base: '/SiCoreLadder/'`，以适配 GitHub Pages 的子目录部署。

2.  **GitHub Actions Workflow (`.github/workflows/deploy.yml`)**:
    -   **触发分支**：已确认为 `gh-pages`。
    -   **Node.js 版本**：已设置为 20。
    -   **构建命令**：尝试过 `npm run build`，`npm run build -- .`，以及 `npx vitepress build . --debug`。
    -   **环境变量**：为构建步骤明确设置了 `NODE_ENV: production` 和 `DEBUG: "vitepress:*"`。
    -   **构建产物目录 (`outDir`)**：VitePress 配置为 `dist` (项目根目录)。
    -   **Artifact 上传路径**：
        -   最初尝试项目根目录下的 `dist`，Actions 日志显示 `dist: No such file or directory`。
        -   通过在 Actions 中执行 `ls -Rla` 调试，发现构建产物实际生成在 `.vitepress/dist`。
        -   已将 `actions/upload-pages-artifact@v3` 的 `path` 修改为 `.vitepress/dist`，确保了 artifact 能被正确创建和上传。
    -   **部署步骤**：使用 `actions/deploy-pages@v4` 将 artifact 部署到 `gh-pages` 分支的根目录。

3.  **GitHub Pages 环境配置**:
    -   仓库 `Settings > Pages > Build and deployment > Source` 已设置为 "GitHub Actions"。
    -   仓库 `Settings > Environments > github-pages > Deployment branches` 已允许 `gh-pages` 分支部署。

### 当前状态和推测

- **核心问题**：尽管 GitHub Actions 中的 `upload-pages-artifact` 步骤现在能够正确找到并上传位于 `.vitepress/dist` 的构建产物，并且 `actions/deploy-pages@v4` 也成功将这些产物部署到了 `gh-pages` 分支的根目录，但部署上线后的网站仍然无法正确加载 CSS、JS 和图片等资源。
- **主要推测**：问题很可能依然与 **VitePress 在生产构建时如何处理和生成静态资源的 URL 链接** 有关，特别是当 `base` 路径设置为 `/SiCoreLadder/` 时。虽然 HTML 文件中的链接理论上应该已经包含了这个 `base` 路径，但 GitHub Pages 服务器在解析这些链接时可能存在不匹配，或者 VitePress 构建的资源清单 (manifest) 或某些内部路径处理逻辑在 GitHub Pages 环境下表现不同。

### 后续排查方向建议

1.  **深入检查构建产物**：
    -   在 GitHub Actions 的 `Build with VitePress` 步骤成功后，下载生成的 artifact (`pages-artifact`)。
    -   解压后，仔细检查 `index.html` (及其他HTML文件) 中对 CSS、JS、图片等资源的 `<link>` 和 `<img>` 标签的 `href` 和 `src` 路径，确认它们是否正确地包含了 `/SiCoreLadder/` 前缀，并且路径是否与 artifact 内的实际文件结构匹配。
    -   例如，如果 CSS 链接是 `/SiCoreLadder/assets/index.css`，那么在 artifact 的根目录下应该能找到 `assets/index.css`。

2.  **对比本地构建产物**：
    -   在本地运行 `NODE_ENV=production npm run build`。
    -   对比本地 `dist` (或 `.vitepress/dist`，取决于本地行为) 目录的内容和文件链接，与 Actions 生成的 artifact 中的内容和链接进行比较，看是否有差异。

3.  **VitePress `assetsInclude` 配置**：
    -   如果图片等资源是通过 Markdown 以外的方式引用的，可能需要检查 `.vitepress/config.js` 中的 `vite.assetsInclude` 配置，确保所有类型的静态资源都被正确处理。

4.  **GitHub Pages 自定义域名和 HTTPS**：
    -   如果未来使用了自定义域名，或者强制 HTTPS，有时也会影响资源加载，但这通常不是初期部署的问题。

5.  **简化测试**：
    -   尝试在一个最简单的 VitePress 项目（只有一个 `index.md` 和一张图片）中配置 `base: '/SiCoreLadder/'` 并通过 Actions 部署，看是否能复现问题。这有助于排除项目特定配置的干扰。

希望这些记录能帮助您在后续解决此问题。 