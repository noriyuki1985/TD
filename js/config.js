-// js/config.js
-const CONFIG = {
-  TILE_SIZE: 32,
-  MAP_ROWS: 50,
-  MAP_COLS: 50,
-  ASSETS_PATH: '/assets/images',
-  STAGE_JSON:  '/assets/data/stages/stage1.json',
+// js/config.js
+const CONFIG = {
+  TILE_SIZE: 32,
+  MAP_ROWS: 50,
+  MAP_COLS: 50,
+  // ─── 先頭の「/」を外して相対パスに ───
+  ASSETS_PATH: 'assets/images',
+  STAGE_JSON:  'assets/data/stages/stage1.json',
   ENEMY_DEFINITIONS: [ /* … */ ],
   TOWER_DEFINITIONS: [ /* … */ ],
   PROJECTILE_DEFINITIONS: [ /* … */ ]
 };
 export default CONFIG;
