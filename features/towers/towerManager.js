const towerManager = {
  towers: [],
  placeTower(id, x, y) {
    const def = CONFIG.TOWER_DEFINITIONS.find(t=>t.id===id);
    if(def && this.towers.length < 10) {
      this.towers.push({ ...def, x, y });
    }
  }
};
export default towerManager;
