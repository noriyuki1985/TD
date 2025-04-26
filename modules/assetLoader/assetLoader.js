// modules/assetLoader/assetLoader.js
// ─────────────────────────────────
// グローバルの CONFIG を参照して画像をプリロードします。
// import CONFIG は不要・書かないでください。

const assetLoader = {
  images: {},

  loadImages() {
    // 読み込む spriteKey の一覧を組み立て
    const keys = [
      // タイル
      'tile_grass', 'tile_road',
      // 敵
      ...CONFIG.ENEMY_DEFINITIONS.map(e => e.spriteKey),
      // タワー
      ...CONFIG.TOWER_DEFINITIONS.map(t => t.spriteKey),
      // 発射体
      ...CONFIG.PROJECTILE_DEFINITIONS.map(p => p.spriteKey)
    ];

    // すべての画像を非同期ロード
    return Promise.all(
      keys.map(key => {
        // key からサブフォルダ名を判別
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
