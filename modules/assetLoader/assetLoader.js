// modules/assetLoader/assetLoader.js
// ─────────────────────────────────
// グローバル CONFIG を参照して画像を一括プリロード

const assetLoader = {
  images: {},

  loadImages() {
    const keys = [
      // タイル
      'tile_grass','tile_road',
      // 敵
      ...CONFIG.ENEMY_DEFINITIONS.map(e => e.spriteKey),
      // タワー
      ...CONFIG.TOWER_DEFINITIONS.map(t => t.spriteKey),
      // 発射体
      ...CONFIG.PROJECTILE_DEFINITIONS.map(p => p.spriteKey)
    ];

    return Promise.all(
      keys.map(key => {
        const category = key.startsWith('tile_')   ? 'tiles'
                        : key.startsWith('enemy_')  ? 'enemies'
                        : key.startsWith('tower_')  ? 'towers'
                        :                             'projectiles';

        const img = new Image();
        img.src = `${CONFIG.ASSETS_PATH}/${category}/${key}.png`;
        this.images[key] = img;
        return new Promise(res => { img.onload = res; });
      })
    );
  },

  getImage(key) {
    return this.images[key];
  }
};

export default assetLoader;
