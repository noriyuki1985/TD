import input from '../../modules/input/input.js';
import pathfinding from '../../modules/pathfinding/pathfinding.js';
import waveManager from '../../features/waves/waveManager.js';
const playController = {
  init(model, view) {
    this.m = model;
    this.v = view;
    waveManager.startWaves(this.m);
  },
  start() {
    this.loop = setInterval(()=> this.update(), 1000/60);
  },
  update() {
    // 敵移動
    this.m.enemies.forEach(e => {
      const wp = this.m.waypoints[e.waypointIndex];
      const tx = wp.col * CONFIG.TILE_SIZE;
      const ty = wp.row * CONFIG.TILE_SIZE;
      // 単純な到達判定
      if(Math.hypot(e.x-tx, e.y-ty) < e.speed) {
        e.waypointIndex++;
      } else {
        const dx = tx - e.x, dy = ty - e.y, d = Math.hypot(dx, dy);
        e.x += dx/d*e.speed;
        e.y += dy/d*e.speed;
      }
    });
    this.v.render();
  }
};
export default playController;
