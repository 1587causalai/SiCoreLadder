<style>
  .advantages-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 900px;
    margin: auto;
  }
  .advantages-header {
    text-align: center;
    margin-bottom: 30px; /* Reduced bottom margin slightly */
    padding-bottom: 15px;
    border-bottom: 2px solid #eaeaea;
  }
  .advantages-header h1 {
    font-size: 2.8em; /* Consistent with intro.md */
    color: #2a7ae2; 
    margin-bottom: 0.3em;
  }
  .advantages-intro p {
    font-size: 1.1em;
    color: #555;
    margin-bottom: 1em;
    text-align: justify; /* Justify intro text */
  }
  .research-highlight {
    margin-top: 30px;
  }
  .research-highlight h3 {
    font-size: 1.8em; /* Prominent section title */
    color: #2a7ae2;
    margin-bottom: 20px;
    text-align: center; /* Center section title */
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .paper-details {
    background-color: #f9f9f9;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 20px; /* Space below paper card */
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    border-left: 4px solid #2a7ae2; /* Accent border */
  }
  .paper-details .paper-title {
    font-size: 1.4em;
    font-weight: bold;
    color: #2a7ae2; /* Consistent blue */
    margin-bottom: 10px;
    display: block;
  }
  .paper-details .authors,
  .paper-details .publication {
    font-size: 1em;
    color: #444; /* Slightly darker than intro p for emphasis */
    margin-bottom: 8px;
    line-height: 1.5;
  }
  .paper-details .paper-link a {
    display: inline-block;
    margin-top: 10px;
    font-weight: bold;
    color: #2a7ae2;
    text-decoration: none;
    padding: 8px 15px;
    background-color: #e6f3ff; /* Light blue background for link */
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  .paper-details .paper-link a:hover {
    background-color: #d1e7ff; /* Darker on hover */
    text-decoration: none;
  }
  .tech-cta {
    margin-top: 25px;
    padding: 20px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    border-radius: 12px;
    text-align: center;
  }
  .tech-cta p {
    margin-bottom: 15px;
    font-size: 1.05em;
  }
  .detail-button {
    display: inline-block;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05em;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  }
  .detail-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }
  hr {
    border: 0;
    height: 1px;
    background-color: #eaeaea;
    margin-top: 20px;
    margin-bottom: 30px;
  }
</style>

<div class="advantages-container">
  <header class="advantages-header">
    <h1>技术基石</h1>
  </header>

  <section class="advantages-intro">
    <p>我们致力于研发能深刻理解世界、洞察事物背后因果关系的AI引擎.</p>
    <p>我们提出了基于个体因果的<strong>分布一致结果因果模型(DiscoSCM)</strong>理论, 设计了学习异质性因果关系的 <strong>Abduction/Action Net 框架</strong>, 构成了有关个性化算法和应用的基石.</p>
    <div class="tech-cta">
      <p>我们的中期目标是构建<strong>洞察因果关系的大语言模型</strong>，用DiscoSCM理念重构所有基座模型的构建流程。</p>
      <a href="/core_technology_details" class="detail-button">探索完整技术路径 →</a>
    </div>
  </section>

  <hr>

  <section class="research-highlight">
    <h3>代表性研究成果</h3>
    <div class="paper-details">
      <span class="paper-title">Distribution-consistency structural causal models</span>
      <p class="authors"><em>Authors:</em> Gong H, Lu C, Zhang Y.</p>
      <p class="publication"><em>Publication:</em> arXiv preprint arXiv:2401.15911 (2024).</p>
      <p class="paper-link"><a href="https://arxiv.org/abs/2401.15911" target="_blank" rel="noopener noreferrer">[Read Paper on arXiv]</a></p>
    </div>
    <!-- Future papers can be added here as additional .paper-details divs -->
  </section>
</div>