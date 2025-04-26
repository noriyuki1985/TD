const renderer = {
  ctx: null,
  images: null,
  init(canvasId, images) {
    this.images = images;
    const canvas = document.getElementById(canvasId);
    this.ctx = canvas.getContext('2d');
  },
  clear() {
    this.ctx.clearRect(0, 0, CONFIG.MAP_COLS * CONFIG.TILE_SIZE, CONFIG.MAP_ROWS * CONFIG.TILE_SIZE);
  },
  drawTile(id, x, y) {
    const key = id === 1 ? 'tile_road' : id === 2 ? 'tile_water' : id === 3 ? 'tile_rock' : 'tile_grass';
    this.ctx.drawImage(this.images[key], x, y, CONFIG.TILE_SIZE, CONFIG.TILE_SIZE);
  },
  drawSprite(key, x, y) {
    this.ctx.drawImage(this.images[key], x, y);
  }
};
export default renderer;
