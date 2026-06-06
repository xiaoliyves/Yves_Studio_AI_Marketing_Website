document.addEventListener('DOMContentLoaded', () => {
  // --- 任務 2.1: 平滑滾動與導航切換 ---
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // 取得 header 的高度以做 offset 補償
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // 更新網址 hash，不引起畫面跳動
        history.pushState(null, null, targetId);
      }
    });
  });

  // --- 任務 3.3: 表單驗證與 Google Form 串接 ---
  const form = document.getElementById('clinic-form');
  const successOverlay = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');
  const resetBtn = document.getElementById('reset-form-btn');

  // Google Form ID & Entries Mapping
  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdtl_A0miKR2NB69yAgxBOU6Skk5dtZ4fnhryZVbNv3pJspyg/formResponse';
  const FIELD_MAPPING = {
    name: 'entry.1314018902',
    email: 'entry.257453907',
    line_id: 'entry.1337612215',
    pain_point: 'entry.446845619',
    description: 'entry.912766578',
    data_status: 'entry.1895727336',
    timeframe: 'entry.1386037891'
  };

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // 1. 基本防呆驗證
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const lineId = form.elements['line_id'].value.trim();
      const painPoint = form.elements['pain_point'].value;
      const description = form.elements['description'].value.trim();
      const dataStatusActive = form.querySelector('input[name="data_status"]:checked');
      const timeframeActive = form.querySelector('input[name="timeframe"]:checked');

      if (!name || !email || !lineId || !painPoint || !description || !dataStatusActive || !timeframeActive) {
        alert('請填寫所有必填欄位。');
        return;
      }

      // Email 格式簡單驗證
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('請輸入有效的電子信箱格式。');
        return;
      }

      // 2. 變更提交按鈕狀態以增強視覺體驗
      submitBtn.disabled = true;
      submitBtn.textContent = '[ TRANSMITTING_DATA... ]';
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

      // 3. 建立提交資料
      const formData = new URLSearchParams();
      formData.append(FIELD_MAPPING.name, name);
      formData.append(FIELD_MAPPING.email, email);
      formData.append(FIELD_MAPPING.line_id, lineId);
      formData.append(FIELD_MAPPING.pain_point, painPoint);
      formData.append(FIELD_MAPPING.description, description);
      formData.append(FIELD_MAPPING.data_status, dataStatusActive.value);
      formData.append(FIELD_MAPPING.timeframe, timeframeActive.value);

      try {
        // 使用 no-cors 模式發送
        await fetch(GOOGLE_FORM_ACTION, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData.toString()
        });

        // 成功顯示
        successOverlay.classList.remove('hidden');
        successOverlay.classList.add('flex');
        form.reset();
      } catch (error) {
        console.error('表單提交出錯：', error);
        alert('發送表單時遭遇錯誤，請確認網路連線或稍後再試。');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '[ 提交診斷表單，建立安全連線 ]';
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    });
  }

  if (resetBtn && successOverlay) {
    resetBtn.addEventListener('click', () => {
      successOverlay.classList.add('hidden');
      successOverlay.classList.remove('flex');
    });
  }
});
