// js/config.js
// ─────────────────────────────────
// グローバル設定オブジェクト（export はなし）

const CONFIG = {
  TILE_SIZE: 32,
  MAP_ROWS: 50,
  MAP_COLS: 50,

  // 画像は /TD/assets/images 以下
  ASSETS_PATH: 'assets/images',

  // ステージ定義は /TD/assets/data/stages 以下
  STAGE_JSON:  'assets/data/stages/stage1.json',

  ENEMY_DEFINITIONS: [
    { id: 'slime',       hp:  50, speed: 1.2, reward:  5, spriteKey: 'enemy_slime' },
    { id: 'orc_soldier', hp: 200, speed: 1.0, reward: 20, spriteKey: 'enemy_orc_soldier' }
  ],

  TOWER_DEFINITIONS: [
    { id: 'archer_tower', cost: 100, range: 3, damage: 25, fireRate:  800, projectileType: 'arrow', spriteKey: 'tower_archer' },
    { id: 'mage_tower',   cost: 250, range: 3, damage: 40, fireRate: 1200, projectileType: 'arrow', spriteKey: 'tower_mage'   }
  ],

  PROJECTILE_DEFINITIONS: [
    { id: 'arrow', speed: 2.0, spriteKey: 'proj_arrow' }
  ]
};

// ここがファイルの全内容です。
// export は記述しないでください。
