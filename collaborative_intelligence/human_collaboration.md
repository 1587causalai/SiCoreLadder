<style>
  .collab-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }
  .collab-header {
    text-align: center;
    margin-bottom: 50px;
    padding: 40px;
    background: linear-gradient(135deg, #f8fbff 0%, #e6f3ff 100%);
    border-radius: 15px;
    border-bottom: 3px solid #2a7ae2;
  }
  .collab-header h1 {
    font-size: 3.2em;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5em;
  }
  .collab-header .subtitle {
    font-size: 1.4em;
    color: #666;
    font-style: italic;
    margin-bottom: 20px;
  }
  .collab-header .description {
    font-size: 1.2em;
    color: #444;
    max-width: 800px;
    margin: 0 auto;
    text-align: justify;
  }
  .featured-tool {
    background: linear-gradient(135deg, #ff6b35 0%, #f9ca24 100%);
    color: white;
    border-radius: 15px;
    padding: 40px;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .featured-tool::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }
  @keyframes shine {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
  .featured-tool h2 {
    font-size: 2.8em;
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  .featured-tool .tool-badge {
    background: rgba(255,255,255,0.2);
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 25px;
    padding: 10px 20px;
    display: inline-block;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 1.1em;
  }
  .featured-tool p {
    font-size: 1.3em;
    color: white;
    opacity: 0.95;
    margin-bottom: 20px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  .npm-link {
    background: white;
    color: #ff6b35;
    padding: 15px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    display: inline-block;
    margin-top: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  .npm-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
  .mcp-features {
    background: white;
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #2a7ae2;
  }
  .mcp-features h2 {
    font-size: 2.5em;
    color: #2a7ae2;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 30px;
  }
  .feature-card {
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
    border: 1px solid #d1e7ff;
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2a7ae2, #4a9eff);
  }
  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(42, 122, 226, 0.15);
  }
  .feature-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px auto;
    color: white;
    font-size: 1.8em;
    font-weight: bold;
  }
  .feature-card h3 {
    color: #2a7ae2;
    margin-bottom: 15px;
    font-size: 1.4em;
  }
  .feature-card p {
    color: #555;
    font-size: 1em;
    line-height: 1.6;
  }
  .future-tools {
    margin-bottom: 50px;
  }
  .future-tools h2 {
    font-size: 2.5em;
    color: #2a7ae2;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  .tool-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #4a9eff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(42, 122, 226, 0.15);
  }
  .tool-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .tool-status {
    background: #fff3cd;
    color: #856404;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.9em;
    font-weight: bold;
    margin-left: auto;
  }
  .tool-card h3 {
    color: #2a7ae2;
    margin-bottom: 15px;
    font-size: 1.6em;
    margin-right: 15px;
  }
  .tool-card .description {
    color: #555;
    margin-bottom: 15px;
    font-size: 1.1em;
    line-height: 1.6;
  }
  .tool-card .tech-stack {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
  }
  .tool-card .tech-stack h4 {
    color: #2a7ae2;
    margin-bottom: 10px;
    font-size: 1.1em;
  }
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .tech-tag {
    background: #e6f3ff;
    color: #2a7ae2;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.9em;
    font-weight: bold;
  }
  .vision-section {
    background: linear-gradient(135deg, #2a7ae2 0%, #4a9eff 100%);
    color: white;
    border-radius: 15px;
    padding: 40px;
    text-align: center;
    margin-top: 50px;
  }
  .vision-section h2 {
    color: white;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 15px;
    margin-bottom: 25px;
    font-size: 2.5em;
  }
  .vision-section p {
    color: white;
    font-size: 1.3em;
    opacity: 0.95;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;
  }
</style>

<div class="collab-container">
  <header class="collab-header">
    <h1>协作智能</h1>
    <p class="subtitle">构建深度人机协作的未来</p>
    <p class="description">
      基于"自己才是自己最好的良师益友"的核心理念，我们正在构建一个以个体上下文为中心的AI协作生态。
      通过深度理解个体的完整信息，AI能够提供真正量身定制的、高价值的智能辅助。
    </p>
  </header>

  <section class="featured-tool">
    <div class="tool-badge">🚀 已发布 • 正在迭代</div>
    <h2>Me-Server MCP 工具</h2>
    <p>
      开创性的个人信息服务器，让AI助手深度了解开发者的技能、项目和思维模式。
      通过结构化的个人数据接口，实现真正的个性化AI协作体验。
    </p>
    <a href="https://www.npmjs.com/package/@1587causalai/me-server" target="_blank" class="npm-link">
      📦 NPM 包详情 →
    </a>
  </section>

  <section class="mcp-features">
    <h2>Me-Server 核心功能</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">📋</div>
        <h3>动态个人简历</h3>
        <p>实时更新的专业履历、技能图谱和项目经验，让AI全面了解开发者的能力背景和成长轨迹，提供与经验匹配的建议。</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🧠</div>
        <h3>认知内核访问</h3>
        <p>深度表征个人的价值观、思维方式、决策模式和学习偏好，使AI能够理解"你如何思考"，提供契合个人风格的解决方案。</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>项目状态同步</h3>
        <p>实时追踪当前正在进行的项目、目标和挑战，让AI了解"你在做什么"，提供与当前任务高度相关的即时支持。</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>上下文感知</h3>
        <p>基于完整的个人上下文信息，AI能够提供更精准的代码建议、技术方案和解决思路，实现真正的"心有灵犀"。</p>
      </div>
    </div>
  </section>

  <section class="future-tools">
    <h2>未来协作工具构想</h2>
    <div class="tools-grid">
      <div class="tool-card">
        <div class="tool-header">
          <h3>CausalMind Engine</h3>
          <span class="tool-status">构想中</span>
        </div>
        <div class="description">
          基于DiscoSCM理论的因果推理引擎，能够理解个体行为背后的深层因果机制，为决策提供"为什么"的解释和"如果...会怎样"的预测。
        </div>
        <div class="tech-stack">
          <h4>技术栈：</h4>
          <div class="tech-tags">
            <span class="tech-tag">DiscoSCM</span>
            <span class="tech-tag">因果推断</span>
            <span class="tech-tag">深度学习</span>
            <span class="tech-tag">知识图谱</span>
          </div>
        </div>
      </div>
      <div class="tool-card">
        <div class="tool-header">
          <h3>PersonalLLM Adapter</h3>
          <span class="tool-status">规划中</span>
        </div>
        <div class="description">
          个性化大语言模型适配器，基于个人的认知模式和偏好，动态调整LLM的输出风格、详细程度和表达方式，让AI真正"说人话"。
        </div>
        <div class="tech-stack">
          <h4>技术栈：</h4>
          <div class="tech-tags">
            <span class="tech-tag">LLM微调</span>
            <span class="tech-tag">个性化对齐</span>
            <span class="tech-tag">风格迁移</span>
            <span class="tech-tag">MCP协议</span>
          </div>
        </div>
      </div>
  </section>
  <section class="vision-section">
    <h2>协作智能愿景</h2>
    <p>
      我们正在构建一个AI理解人、服务人的新时代。通过深度人机协作，让每个人都拥有一个真正懂你的AI伙伴。
      这不仅是技术的革新，更是人机关系的重新定义——从工具使用者到协作伙伴，从标准化服务到个性化体验。
    </p>
    <p style="margin-top: 25px; font-size: 1.4em; font-weight: bold;">
      让AI成为你最好的数字化延伸，一起创造无限可能。
    </p>
  </section>
</div>



