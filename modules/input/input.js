const input = {
  clicks: [],
  init() {
    const canvas = document.getElementById('game-canvas');
    canvas.addEventListener('click', e => {
      const rect = canvas.getBoundingClientRect();
      this.clicks.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    });
  },
  getClicks() {
    const c = this.clicks.slice();
    this.clicks.length = 0;
    return c;
  }
};
export default input;
