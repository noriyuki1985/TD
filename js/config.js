const CONFIG = {
  TILE_SIZE: 32,
  MAP_ROWS: 50,
  MAP_COLS: 50,
  ASSETS_PATH: '/assets/images',
  STAGE_JSON: '/assets/data/stages/stage1.json',
  ENEMY_DEFINITIONS: [
    { id: 'slime',        hp:  50, speed: 1.2, reward:  5, spriteKey: 'enemy_slime' },
    { id: 'orc_soldier',  hp: 200, speed: 1.0, reward: 20, spriteKey: 'enemy_orc_soldier' }
  ],
  TOWER_DEFINITIONS: [
    { id: 'archer_tower', cost: 100, range: 3, damage: 25, fireRate:  800, projectileType: 'arrow',          spriteKey: 'tower_archer' },
    { id: 'mage_tower',   cost: 250, range: 3, damage: 40, fireRate: 1200, projectileType: 'magic_missile', spriteKey: 'tower_mage'   }
  ],
  PROJECTILE_DEFINITIONS: [
    { id: 'arrow',          speed: 2.0, spriteKey: 'proj_arrow'    },
    { id: 'cannon_shell',   speed: 1.0, spriteKey: 'proj_cannon'   },
    { id: 'magic_missile',  speed: 1.5, spriteKey: 'proj_magic'    },
    { id: 'ice_shard',      speed: 1.2, spriteKey: 'proj_ice'      },
    { id: 'poison_blob',    speed: 0.8, spriteKey: 'proj_poison'   },
    { id: 'electric_bolt',  speed: 2.5, spriteKey: 'proj_electric' },
    { id: 'bomb_fragment',  speed: 0.7, spriteKey: 'proj_bomb'     },
    { id: 'sniper_bullet',  speed: 3.0, spriteKey: 'proj_sniper'   },
    { id: 'mortar_shell',   speed: 0.6, spriteKey: 'proj_mortar'   },
    { id: 'frost_spike',    speed: 1.3, spriteKey: 'proj_frost'    }
  ]
};
