# 联系我们

<div class="contact-hero">
  <div class="contact-mascot">
    <img src="/assets/Kabipula.png" alt="公司吉祥物卡比扒拉" class="mascot-image">
  </div>
  <div class="contact-intro">
    <h2>期待与您的合作</h2>
    <p>如果您有任何问题、建议或合作意向，欢迎随时与我们取得联系。</p>
  </div>
</div>

<div class="contact-grid">
  <div class="contact-card">
    <div class="card-icon">🏢</div>
    <h3>公司信息</h3>
    <p><strong>公司名称：</strong>上海芯梯科技有限公司</p>
    <p><strong>公司地址：</strong>上海市金山区卫零北路333弄161号102室</p>
  </div>

  <div class="contact-card">
    <div class="card-icon">📧</div>
    <h3>联系方式</h3>
    <p>我们推荐通过电子邮件与我们沟通，以便我们更高效地处理您的请求：</p>
    <div class="email-highlight">
      <a href="mailto:videshcannataro@gmail.com">videshcannataro@gmail.com</a>
    </div>
  </div>
</div>

<div class="contact-cta">
  <h3>🚀 准备开始合作？</h3>
  <p>我们期待您的来信，并会尽快给您回复！</p>
  <a href="mailto:videshcannataro@gmail.com" class="cta-button">立即联系我们</a>
</div>

<style scoped>
.contact-hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.contact-mascot {
  flex-shrink: 0;
}

.mascot-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  transition: transform 0.3s ease;
}

.mascot-image:hover {
  transform: scale(1.05);
}

.contact-intro {
  flex: 1;
}

.contact-intro h2 {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.contact-intro p {
  font-size: 1.25rem;
  color: #64748b;
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.contact-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-card h3 {
  font-size: 1.5rem;
  color: #667eea;
  margin-bottom: 1.5rem;
}

.contact-card p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.email-highlight {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.email-highlight a {
  color: white;
  text-decoration: none;
}

.email-highlight a:hover {
  text-decoration: underline;
}

.contact-cta {
  text-align: center;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 3rem 0;
}

.contact-cta h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
}

.contact-cta p {
  font-size: 1.25rem;
  color: #cbd5e1;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

@media (max-width: 768px) {
  .contact-hero {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  
  .contact-intro h2 {
    font-size: 2rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style> 