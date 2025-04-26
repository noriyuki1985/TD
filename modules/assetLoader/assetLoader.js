const assetLoader = {
  images: {},
  audios: {},
  loadImages() {
    const keys = [
      // タイル
      'tile_grass','tile_road','tile_water','tile_rock',
      // 敵
      ...CONFIG.ENEMY_DEFINITIONS.map(e => e.spriteKey),
      // タワー
      ...CONFIG.TOWER_DEFINITIONS.map(t => t.spriteKey),
      // 発射体
      ...CONFIG.PROJECTILE_DEFINITIONS.map(p => p.spriteKey)
    ];
    const promises = keys.map(key => {
      const img = new Image();
      let category;
      if (key.startsWith('tile_')) category = 'tiles';
      else if (key.startsWith('enemy_')) category = 'enemies';
      else if (key.startsWith('tower_')) category = 'towers';
      else category = 'projectiles';
      img.src = `${CONFIG.ASSETS_PATH}/${category}/${key}.png`;
      this.images[key] = img;
      return new Promise(res => img.onload = res);
    });
    return Promise.all(promises);
  },
  getImage(key) {
    return this.images[key];
  }
};
export default assetLoader;
