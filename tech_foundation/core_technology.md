<style>
  .tech-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 1000px;
    margin: auto;
  }
  .tech-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 3px solid #2a7ae2;
  }
  .tech-header h1 {
    font-size: 3em;
    color: #2a7ae2;
    margin-bottom: 0.3em;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .tech-header .slogan {
    font-size: 1.4em;
    color: #666;
    font-style: italic;
    margin-top: 15px;
  }
  .disco-intro {
    background: linear-gradient(135deg, #f8fbff 0%, #e6f3ff 100%);
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 40px;
    border-left: 5px solid #2a7ae2;
  }
  .disco-intro h2 {
    font-size: 2.2em;
    color: #2a7ae2;
    margin-bottom: 20px;
    text-align: center;
  }
  .disco-intro p {
    font-size: 1.1em;
    color: #444;
    margin-bottom: 15px;
    text-align: justify;
  }
  .disco-intro .highlight {
    background-color: #fff5b2;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: bold;
  }
  .pillars-section {
    margin-bottom: 40px;
  }
  .pillars-section h2 {
    font-size: 2.2em;
    color: #2a7ae2;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }
  .pillars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
    margin-bottom: 30px;
  }
  .pillar-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  .pillar-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2a7ae2, #4a9eff);
  }
  .pillar-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(42, 122, 226, 0.15);
  }
  .pillar-card h3 {
    font-size: 1.6em;
    color: #2a7ae2;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  .pillar-card h3::before {
    content: '▶';
    margin-right: 10px;
    color: #4a9eff;
  }
  .pillar-card p {
    font-size: 1em;
    color: #555;
    line-height: 1.7;
  }
  .roadmap-section {
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
    padding: 30px;
    border-radius: 12px;
    margin-bottom: 40px;
  }
  .roadmap-section h2 {
    font-size: 2.2em;
    color: #2a7ae2;
    text-align: center;
    margin-bottom: 25px;
  }
  .roadmap-timeline {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .timeline-item {
    display: flex;
    align-items: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #2a7ae2;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }
  .timeline-marker {
    width: 20px;
    height: 20px;
    background: #2a7ae2;
    border-radius: 50%;
    margin-right: 20px;
    flex-shrink: 0;
  }
  .timeline-content h4 {
    color: #2a7ae2;
    margin-bottom: 8px;
    font-size: 1.3em;
  }
  .timeline-content p {
    color: #555;
    margin: 0;
  }
  .tech-detail-btn {
    text-align: center;
    margin: 40px 0;
  }
  .tech-detail-btn a {
    display: inline-block;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    color: white;
    padding: 15px 35px;
    font-size: 1.2em;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(42, 122, 226, 0.3);
  }
  .tech-detail-btn a:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(42, 122, 226, 0.4);
  }
  .tech-detail-btn a::after {
    content: ' →';
    margin-left: 8px;
  }
  .research-papers {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 30px;
  }
  .research-papers h3 {
    font-size: 1.8em;
    color: #2a7ae2;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .paper-item {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    border-left: 4px solid #2a7ae2;
  }
  .paper-title {
    font-size: 1.3em;
    font-weight: bold;
    color: #2a7ae2;
    margin-bottom: 8px;
  }
  .paper-authors {
    color: #666;
    margin-bottom: 8px;
    font-style: italic;
  }
  .paper-link a {
    color: #2a7ae2;
    text-decoration: none;
    font-weight: bold;
    padding: 8px 15px;
    background: #e6f3ff;
    border-radius: 5px;
    display: inline-block;
    margin-top: 8px;
    transition: background-color 0.3s ease;
  }
  .paper-link a:hover {
    background: #d1e7ff;
  }
</style>

<div class="tech-container">
  <header class="tech-header">
    <h1>技术基石</h1>
    <p class="slogan">洞察因果关系的大语言模型，重构AI基座架构</p>
  </header>

  <section class="disco-intro">
    <h2>DiscoSCM：分布一致性结构因果模型</h2>
    <p>我们的<span class="highlight">核心创新</span>在于提出了<strong>Distribution-consistency Structural Causal Models (DiscoSCM)</strong>框架，这是一个突破性的因果建模理念。</p>
    <p><strong>核心思想：</strong>将每个独特个体或单元自身的特性（表征）视为其行为和结果产生的直接"原因"。与传统因果推断不同，DiscoSCM不仅关注预定义变量间的因果关系，更将<span class="highlight">个体自身的细粒度表征直接作为原因变量</span>纳入因果建模。</p>
    <p>这一理念的革命性在于：它让我们能够深究事物的本质原因，特别是源于个体差异的原因。比如，为什么同一营销策略对不同用户效果迥异？为什么某个患者对药物反应特殊？DiscoSCM正是为解决这类<span class="highlight">高度个性化需求</span>而生。</p>
  </section>

  <section class="pillars-section">
    <h2>三大技术支柱</h2>
    <div class="pillars-grid">
      <div class="pillar-card">
        <h3>个体因果建模</h3>
        <p>基于DiscoSCM理论，我们开发了能够精准捕捉个体特性与行为结果之间因果关系的建模方法。通过将个体表征作为因果图中的关键节点，实现了比传统方法更深刻的个性化洞察能力。这使得我们能够回答"为什么这个个体会有这样的反应"这类深层因果问题。</p>
      </div>
      <div class="pillar-card">
        <h3>因果感知的大语言模型</h3>
        <p>我们正在构建具备因果推理能力的大语言模型，让AI不仅能理解"是什么"，更能深刻洞察"为什么"。通过将DiscoSCM的因果机制融入大模型架构，我们的目标是开发出能够进行三层因果推理（关联、干预、反事实）的智能系统，为个性化决策提供强大的AI引擎。</p>
      </div>
      <div class="pillar-card">
        <h3>Abduction/Action Net框架</h3>
        <p>我们创新性地开发了Cauchy Abduction/Action回归算法，这是DiscoSCM理论的实际应用体现。该框架具备卓越的鲁棒性：当面对数据噪声或异常情况时，它会先进行"溯因分析"，理解异常背后的真实原因，然后基于这种因果理解进行预测，而非盲目拟合数据表面模式。</p>
      </div>
    </div>
  </section>

  <section class="roadmap-section">
    <h2>技术发展路线图</h2>
    <div class="roadmap-timeline">
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h4>阶段一：DiscoSCM理论奠基</h4>
          <p>建立分布一致性结构因果模型的数学理论基础，开发核心算法框架，验证在个性化场景中的有效性。</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h4>阶段二：因果感知LLM原型</h4>
          <p>将DiscoSCM机制集成到大语言模型中，开发具备基础因果推理能力的AI系统，重点解决个性化对齐问题。</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h4>阶段三：全栈因果AI引擎</h4>
          <p>构建完整的因果感知AI平台，实现从数据采集、因果发现、模型训练到应用部署的全流程因果AI解决方案。</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h4>阶段四：行业生态赋能</h4>
          <p>将因果AI技术广泛应用于金融、医疗、教育、制造等各个垂直领域，构建因果AI的行业应用生态。</p>
        </div>
      </div>
    </div>
  </section>

  <div class="tech-detail-btn">
    <a href="tech_foundation/technical_details.md">深入了解技术细节</a>
  </div>

  <section class="research-papers">
    <h3>代表性研究成果</h3>
    <div class="paper-item">
      <div class="paper-title">Distribution-consistency structural causal models</div>
      <div class="paper-authors">Gong H, Lu C, Zhang Y.</div>
      <div class="paper-link"><a href="https://arxiv.org/abs/2401.15911" target="_blank">查看论文 →</a></div>
    </div>
    <div class="paper-item">
      <div class="paper-title">DiscoNet: Causality is Invariance Across Heterogeneous Units</div>
      <div class="paper-authors">Gong H, Wang Z, Miao H, Zhang Y, Lu C, Ou W.</div>
      <div class="paper-link"><a href="https://openreview.net/forum?id=qsAckNdySL" target="_blank">查看论文 →</a></div>
    </div>
    <div class="paper-item">
      <div class="paper-title">Aligning Large Language Models via Distributional Reward Modeling</div>
      <div class="paper-authors">Gong H, et al.</div>
      <div class="paper-link"><a href="#" target="_blank">即将发布 →</a></div>
    </div>
  </section>
</div>