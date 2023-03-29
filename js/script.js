function getVisualViewportHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--visual-viewport-height', `${window.visualViewport.height}px`);
  }

  getVisualViewportHeight();

  const nav = document.querySelector('#nav');
  const navBtn = document.querySelector('#nav-btn');
  const navBtnImg = document.querySelector('#nav-btn-img');

  navBtn.onclick = () => {
      if (nav.classList.toggle('open')) {
          navBtnImg.src="Img/NAVCLOSE.svg"
          navBtn.classList.toggle('_click')
      } else {
          navBtnImg.src="Img/menunav.png"
          navBtn.classList.remove('_click')
      }
  }
