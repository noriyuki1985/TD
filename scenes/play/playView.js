import input from '../../modules/input/input.js';
const playView = {
  init(renderer, model) {
    this.r = renderer;
    this.m = model;
    input.init();
  },
  render() {
    this.r.clear();
    // マップ
    for(let r=0;r<this.m.mapData.rows;r++){
      for(let c=0;c<this.m.mapData.cols;c++){
        const id = this.m.mapData.tiles[r][c];
        this.r.drawTile(id, c*CONFIG.TILE_SIZE, r*CONFIG.TILE_SIZE);
      }
    }
    // 敵
    this.m.enemies.forEach(e => {
      this.r.drawSprite(e.spriteKey, e.x, e.y);
    });
  }
};
export default playView;
