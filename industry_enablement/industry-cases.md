<style>
  .industry-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 1200px;
    margin: auto;
  }
  .industry-header {
    text-align: center;
    margin-bottom: 50px;
    padding: 40px;
    background: linear-gradient(135deg, #f8fbff 0%, #e6f3ff 100%);
    border-radius: 15px;
    border-bottom: 3px solid #2a7ae2;
  }
  .industry-header h1 {
    font-size: 3.2em;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5em;
  }
  .industry-header .subtitle {
    font-size: 1.4em;
    color: #666;
    font-style: italic;
    margin-bottom: 20px;
  }
  .industry-header .description {
    font-size: 1.2em;
    color: #444;
    max-width: 800px;
    margin: 0 auto;
    text-align: justify;
  }
  .value-proposition {
    background: linear-gradient(135deg, #ff6b35 0%, #f9ca24 100%);
    color: white;
    border-radius: 15px;
    padding: 40px;
    margin-bottom: 50px;
    text-align: center;
  }
  .value-proposition h2 {
    font-size: 2.5em;
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }
  .value-proposition p {
    font-size: 1.3em;
    color: white;
    opacity: 0.95;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }
  .cases-section {
    margin-bottom: 50px;
  }
  .cases-section h2 {
    font-size: 2.5em;
    color: #2a7ae2;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }
  .cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 30px;
    margin-top: 30px;
  }
  .case-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #2a7ae2;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .case-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2a7ae2, #4a9eff);
  }
  .case-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(42, 122, 226, 0.15);
  }
  .case-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .case-status {
    background: #d4edda;
    color: #155724;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.9em;
    font-weight: bold;
  }
  .case-status.planning {
    background: #fff3cd;
    color: #856404;
  }
  .case-status.development {
    background: #cce5ff;
    color: #004085;
  }
  .case-card h3 {
    color: #2a7ae2;
    margin-bottom: 15px;
    font-size: 1.6em;
    margin-right: 15px;
  }
  .case-card .description {
    color: #555;
    margin-bottom: 20px;
    font-size: 1.1em;
    line-height: 1.6;
  }
  .case-highlights {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  .case-highlights h4 {
    color: #2a7ae2;
    margin-bottom: 10px;
    font-size: 1.1em;
  }
  .highlights-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .highlights-list li {
    color: #555;
    margin-bottom: 5px;
    padding-left: 20px;
    position: relative;
  }
  .highlights-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #28a745;
    font-weight: bold;
  }
  .case-metrics {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 15px;
  }
  .metric {
    text-align: center;
    flex: 1;
    background: #e6f3ff;
    padding: 10px;
    border-radius: 8px;
  }
  .metric-value {
    font-size: 1.4em;
    font-weight: bold;
    color: #2a7ae2;
    display: block;
  }
  .metric-label {
    font-size: 0.9em;
    color: #666;
  }
  .case-tech-stack {
    margin-bottom: 20px;
  }
  .case-tech-stack h4 {
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
  .case-actions {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }
  .action-btn {
    flex: 1;
    padding: 10px 15px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    font-size: 0.95em;
  }
  .action-btn.primary {
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    color: white;
  }
  .action-btn.primary:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(42, 122, 226, 0.3);
  }
  .action-btn.secondary {
    background: #f8f9fa;
    color: #2a7ae2;
    border: 1px solid #2a7ae2;
  }
  .action-btn.secondary:hover {
    background: #e6f3ff;
  }
  .capabilities-matrix {
    background: white;
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #4a9eff;
  }
  .capabilities-matrix h2 {
    font-size: 2.5em;
    color: #2a7ae2;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }
  .matrix-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  .capability-item {
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    border: 1px solid #d1e7ff;
  }
  .capability-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px auto;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
  }
  .capability-item h4 {
    color: #2a7ae2;
    margin-bottom: 10px;
    font-size: 1.2em;
  }
  .capability-item p {
    color: #555;
    font-size: 0.95em;
    line-height: 1.5;
  }
  .cta-section {
    background: linear-gradient(135deg, #2a7ae2 0%, #4a9eff 100%);
    color: white;
    border-radius: 15px;
    padding: 40px;
    text-align: center;
    margin-top: 50px;
  }
  .cta-section h2 {
    color: white;
    border-bottom: 2px solid rgba(255,255,255,0.3);
    padding-bottom: 15px;
    margin-bottom: 25px;
    font-size: 2.5em;
  }
  .cta-section p {
    color: white;
    font-size: 1.3em;
    opacity: 0.95;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto 30px auto;
  }
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .cta-btn {
    background: white;
    color: #2a7ae2;
    padding: 15px 30px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
</style>

<div class="industry-container">
  <header class="industry-header">
    <h1>行业赋能</h1>
    <p class="subtitle">AI技术驱动的行业智能化升级</p>
    <p class="description">
      基于DiscoSCM因果推理框架和深度人机协作理念，芯梯科技为各行各业提供定制化的AI解决方案。
      我们不仅提供技术，更致力于理解和解决各行业的核心痛点，实现真正的智能化转型。
    </p>
  </header>

  <section class="value-proposition">
    <h2>核心价值主张</h2>
    <p>
      我们相信真正的AI应用不是简单的技术堆砌，而是深入理解业务本质，基于因果机制设计智能化解决方案。
      通过个性化的AI技术，我们帮助企业不仅知道"发生了什么"，更能理解"为什么发生"和"如何改进"。
    </p>
  </section>

  <section class="cases-section">
    <h2>成功案例与在研项目</h2>
    <div class="cases-grid">
      <div class="case-card">
        <div class="case-header">
          <h3>Payslip OCR 智能解决方案</h3>
          <span class="case-status">已上线</span>
        </div>
        <div class="description">
          基于大语言模型的金融文档自动化处理系统，实现工资单等财务文件的智能识别与信息提取。系统已成功商业化部署，为Moscca公司提供稳定的OCR服务。
        </div>
        <div class="case-metrics">
          <div class="metric">
            <span class="metric-value">99%</span>
            <span class="metric-label">分类准确率</span>
          </div>
          <div class="metric">
            <span class="metric-value">86%</span>
            <span class="metric-label">信息提取准确率</span>
          </div>
          <div class="metric">
            <span class="metric-value">月营收</span>
            <span class="metric-label">稳定收益</span>
          </div>
        </div>
        <div class="case-highlights">
          <h4>核心亮点：</h4>
          <ul class="highlights-list">
            <li>显著超越客户原有方案</li>
            <li>支持高并发实时处理</li>
            <li>完整的质量检测流程</li>
            <li>已实现商业化部署</li>
          </ul>
        </div>
        <div class="case-tech-stack">
          <h4>技术栈：</h4>
          <div class="tech-tags">
            <span class="tech-tag">大语言模型</span>
            <span class="tech-tag">OCR</span>
            <span class="tech-tag">文档理解</span>
            <span class="tech-tag">质量检测</span>
          </div>
        </div>
        <div class="case-actions">
          <a href="#" class="action-btn primary">详细案例</a>
          <a href="#" class="action-btn secondary">技术白皮书</a>
        </div>
      </div>
      <div class="case-card">
        <div class="case-header">
          <h3>智能灯效控制系统</h3>
          <span class="case-status development">开发中</span>
        </div>
        <div class="description">
          基于LLM的智能灯控制效参数自动生成系统，通过自然语言描述和场景理解，自动生成符合需求的灯光效果参数，目前已完成核心服务开发，正在进行硬件集成测试。
        </div>
        <div class="case-highlights">
          <h4>创新特性：</h4>
          <ul class="highlights-list">
            <li>自然语言灯效描述理解</li>
            <li>场景感知的参数优化</li>
            <li>实时灯效预览与调整</li>
            <li>个性化用户偏好学习</li>
          </ul>
        </div>
        <div class="case-tech-stack">
          <h4>技术栈：</h4>
          <div class="tech-tags">
            <span class="tech-tag">NLP</span>
            <span class="tech-tag">场景理解</span>
            <span class="tech-tag">参数优化</span>
            <span class="tech-tag">硬件集成</span>
          </div>
        </div>
        <div class="case-actions">
          <a href="#" class="action-btn primary">项目详情</a>
          <a href="#" class="action-btn secondary">技术演示</a>
        </div>
      </div>
    </div>
  </section>

  <section class="capabilities-matrix">
    <h2>技术能力矩阵</h2>
    <div class="matrix-grid">
      <div class="capability-item">
        <div class="capability-icon">🧠</div>
        <h4>因果推理</h4>
        <p>基于DiscoSCM理论，深度理解数据背后的因果机制</p>
      </div>
      <div class="capability-item">
        <div class="capability-icon">🤖</div>
        <h4>大模型应用</h4>
        <p>个性化对齐、垂直领域优化、高效部署</p>
      </div>
      <div class="capability-item">
        <div class="capability-icon">👁️</div>
        <h4>计算机视觉</h4>
        <p>OCR、图像理解、质量检测、场景分析</p>
      </div>
      <div class="capability-item">
        <div class="capability-icon">📊</div>
        <h4>数据智能</h4>
        <p>异构数据处理、模式识别、预测分析</p>
      </div>
      <div class="capability-item">
        <div class="capability-icon">🔧</div>
        <h4>工程化部署</h4>
        <p>高可用架构、性能优化、运维监控</p>
      </div>
      <div class="capability-item">
        <div class="capability-icon">🎯</div>
        <h4>个性化服务</h4>
        <p>用户建模、偏好学习、定制化体验</p>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <h2>携手共创智能未来</h2>
    <p>
      每个行业都有其独特的挑战和机遇。我们深信，只有深入理解行业本质，
      结合前沿的AI技术，才能创造出真正有价值的智能化解决方案。
    </p>
    <p>
      让我们一起探索AI在您的业务中的无限可能，共同推动行业的智能化升级。
    </p>
  </section>
</div> 