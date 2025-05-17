<style>
  .cases-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 900px;
    margin: auto;
  }
  .cases-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid #eaeaea;
  }
  .cases-header h1 {
    font-size: 2.8em;
    color: #2a7ae2;
    margin-bottom: 0.5em;
  }
  .cases-header .sub-title {
    font-size: 1.3em;
    color: #555;
  }
  .cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
    gap: 25px;
    margin-bottom: 30px;
  }
  .case-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Pushes button to bottom */
  }
  .case-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  .case-card h3 {
    font-size: 1.5em;
    color: #2a7ae2;
    margin-top: 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .case-card p {
    font-size: 1em;
    color: #555;
    margin-bottom: 15px; /* Space before button */
    flex-grow: 1; /* Allows paragraph to take available space */
  }
  .case-card .learn-more-btn {
    display: inline-block;
    background-color: #2a7ae2;
    color: white;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
    transition: background-color 0.3s ease;
    align-self: flex-start; /* Align button to the start of the flex item (bottom of card) */
  }
  .case-card .learn-more-btn:hover {
    background-color: #205cbf;
  }
  .cases-conclusion {
    text-align: center;
    font-size: 1.1em;
    color: #666;
    padding: 20px;
    background-color: #f0f8ff;
    border-radius: 8px;
  }
</style>

<div class="cases-container">
  <header class="cases-header">
    <h1>行业应用案例</h1>
    <p class="sub-title">探索 SiCoreLadder AI 技术在各行各业的实践与价值。</p>
  </header>

  <section class="cases-grid">
    <div class="case-card">
      <h3>金融票据识别</h3>
      <p>基于深度学习的智能票据识别系统，精准提取各类金融票据关键信息，大幅提升业务处理效率与准确性。</p>
      <a href="#" class="learn-more-btn">了解更多</a>
    </div>
    <div class="case-card">
      <h3>智能灯效控制系统</h3>
      <p>结合AI算法与场景感知，实现灯光效果的智能调节与动态控制，打造沉浸式、个性化的光影体验。</p>
      <a href="#" class="learn-more-btn">了解更多</a>
    </div>
    <div class="case-card">
      <h3>AI赋能质量检查</h3>
      <p>利用计算机视觉与机器学习技术，自动化识别产品缺陷，提高质检效率与标准，保障产品质量。</p>
      <a href="#" class="learn-more-btn">了解更多</a>
    </div>
    <div class="case-card">
      <h3>智能表格处理</h3>
      <p>智能识别和提取各类表格数据，支持复杂结构与手写体，将繁琐的表格处理工作自动化、智能化。</p>
      <a href="#" class="learn-more-btn">了解更多</a>
    </div>
  </section>

  <footer class="cases-conclusion">
    <p>SiCoreLadder 致力于将先进的AI技术应用于各种实际场景，助力企业创新与发展。我们相信，通过深度合作，能够共同发掘AI在更多行业中的巨大潜力。</p>
  </footer>
</div> 