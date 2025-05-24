<style>
  .contact-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    max-width: 1100px;
    margin: auto;
  }
  .contact-header {
    text-align: center;
    margin-bottom: 50px;
    padding: 40px;
    background: linear-gradient(135deg, #f8fbff 0%, #e6f3ff 100%);
    border-radius: 15px;
    border-bottom: 3px solid #2a7ae2;
  }
  .contact-header h1 {
    font-size: 3em;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5em;
  }
  .contact-header .subtitle {
    font-size: 1.4em;
    color: #666;
    font-style: italic;
    margin-bottom: 20px;
  }
  .contact-header .intro-text {
    font-size: 1.2em;
    color: #444;
    max-width: 700px;
    margin: 0 auto;
    text-align: justify;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
  .company-info {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #2a7ae2;
  }
  .company-info h2 {
    font-size: 2.2em;
    color: #2a7ae2;
    margin-bottom: 25px;
    text-align: center;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }
  .info-item:hover {
    background: #f0f8ff;
  }
  .info-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    color: white;
    font-weight: bold;
    flex-shrink: 0;
  }
  .info-content h4 {
    color: #2a7ae2;
    margin-bottom: 5px;
    font-size: 1.2em;
  }
  .info-content p {
    color: #555;
    margin: 0;
    font-size: 1em;
  }
  .contact-form {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #4a9eff;
  }
  .contact-form h2 {
    font-size: 2.2em;
    color: #2a7ae2;
    margin-bottom: 25px;
    text-align: center;
    border-bottom: 2px solid #eee;
    padding-bottom: 15px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #2a7ae2;
    font-weight: bold;
    font-size: 1.1em;
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1em;
    transition: border-color 0.3s ease;
    font-family: inherit;
  }
  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #2a7ae2;
    box-shadow: 0 0 0 3px rgba(42, 122, 226, 0.1);
  }
  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  .submit-btn {
    background: linear-gradient(135deg, #2a7ae2, #4a9eff);
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    margin-top: 10px;
  }
  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(42, 122, 226, 0.3);
  }
  .contact-methods {
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 40px;
    text-align: center;
  }
  .contact-methods h2 {
    font-size: 2.2em;
    color: #2a7ae2;
    margin-bottom: 25px;
    border-bottom: 2px solid rgba(42, 122, 226, 0.2);
    padding-bottom: 15px;
  }
  .methods-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }
  .method-card {
    background: white;
    border-radius: 10px;
    padding: 25px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e0e0e0;
  }
  .method-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(42, 122, 226, 0.15);
  }
  .method-icon {
    width: 60px;
    height: 60px;
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
  .method-card h4 {
    color: #2a7ae2;
    margin-bottom: 10px;
    font-size: 1.3em;
  }
  .method-card p {
    color: #555;
    margin-bottom: 15px;
  }
  .method-card a {
    color: #2a7ae2;
    text-decoration: none;
    font-weight: bold;
    padding: 8px 15px;
    background: #e6f3ff;
    border-radius: 5px;
    display: inline-block;
    transition: background-color 0.3s ease;
  }
  .method-card a:hover {
    background: #d1e7ff;
  }
  .business-hours {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    border-left: 5px solid #ff6b35;
    margin-bottom: 40px;
  }
  .business-hours h2 {
    font-size: 2em;
    color: #2a7ae2;
    margin-bottom: 20px;
    text-align: center;
  }
  .hours-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  .hours-item {
    text-align: center;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;
  }
  .hours-item h4 {
    color: #2a7ae2;
    margin-bottom: 8px;
  }
  .hours-item p {
    color: #555;
    margin: 0;
    font-weight: bold;
  }
  .mascot-section {
    text-align: center;
    margin: 40px 0;
  }
  .mascot-image {
    max-width: 200px;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
  }
  .mascot-image:hover {
    transform: scale(1.05);
  }
  .footer-message {
    background: linear-gradient(135deg, #ff6b35 0%, #f9ca24 100%);
    color: white;
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    margin-top: 40px;
  }
  .footer-message h3 {
    color: white;
    margin-bottom: 15px;
    font-size: 1.8em;
  }
  .footer-message p {
    color: white;
    font-size: 1.2em;
    opacity: 0.95;
    margin: 0;
  }
  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    .form-row {
      grid-template-columns: 1fr;
    }
    .contact-header h1 {
      font-size: 2.2em;
    }
  }
</style>

<div class="contact-container">
  <div class="contact-methods">
    <h2>联系方式</h2>
    <div style="text-align: center; font-size: 1.1em; line-height: 2;">
      <p><strong>上海芯梯科技有限公司</strong></p>
      <p>SiCoreLadder Technology Co., Ltd.</p>
      <p>📍 上海市金山区卫零北路333弄161号102室</p>
      <p>📧 tech@sicore-ladder.com</p>
    </div>
  </div>
  <div class="footer-message">
  <img src="assets/Kabipula.png" alt="芯梯科技吉祥物 - 卡比扒拉" class="mascot-image">
    <h3>期待与您携手同行</h3>
    <p>
      在AI技术快速发展的时代，我们相信通过深度合作能够创造更大的价值。
      让我们一起推动因果AI技术的发展，为人类社会带来更智能、更可靠的AI解决方案。
    </p>
  </div>
</div> 