const playModel = {
  mapData: null,
  waves: null,
  enemies: [],
  towers: [],
  gold: 1000,
  lives: 20,
  init(stageData) {
    this.mapData = stageData.map;
    this.waves  = stageData.waves;
    this.waypoints = stageData.path.waypoints;
  },
  spawnEnemy(type) {
    const def = CONFIG.ENEMY_DEFINITIONS.find(e => e.id === type);
    this.enemies.push({ ...def, x: 0, y: 0, waypointIndex: 0 });
  }
};
export default playModel;
