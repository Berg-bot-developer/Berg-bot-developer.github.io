function getVisualViewportHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--visual-viewport-height', `${window.visualViewport.height}px`);
  }