 const assetLoader = {
   images: {},
   audios: {},
   loadImages() {
-    const keys = [
-      // タイル
-      'tile_grass','tile_road','tile_water','tile_rock',
-      // 敵
-      ...CONFIG.ENEMY_DEFINITIONS.map(e => e.spriteKey),
-      // タワー
-      ...CONFIG.TOWER_DEFINITIONS.map(t => t.spriteKey),
-      // 発射体（不要なものを除外）
-      ...CONFIG.PROJECTILE_DEFINITIONS.map(p => p.spriteKey)
-    ];
+    const keys = [
+      // タイル
+      'tile_grass','tile_road',
+      // 敵
+      ...CONFIG.ENEMY_DEFINITIONS.map(e => e.spriteKey),
+      // タワー
+      ...CONFIG.TOWER_DEFINITIONS.map(t => t.spriteKey),
+      // 発射体（arrow, magic_missile のみ）
+      ...CONFIG.PROJECTILE_DEFINITIONS.map(p => p.spriteKey)
+    ];

     const promises = keys.map(key => {
       const img = new Image();
-      let category;
-      if (key.startsWith('tile_')) category = 'tiles';
-      else if (key.startsWith('enemy_')) category = 'enemies';
-      else if (key.startsWith('tower_')) category = 'towers';
-      else category = 'projectiles';
+      // カテゴリは key の prefix で判別
+      const category = key.startsWith('tile_') ? 'tiles'
+                      : key.startsWith('enemy_') ? 'enemies'
+                      : key.startsWith('tower_') ? 'towers'
+                      : 'projectiles';

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
