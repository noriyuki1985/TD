// js/main.js
// ─────────────────────────────────
// ESモジュールとして読み込む前提です

import assetLoader    from '../modules/assetLoader/assetLoader.js';
import audioManager   from '../modules/audio/audioManager.js';
import stageLoader    from '../modules/stageLoader/stageLoader.js';
import renderer       from '../modules/renderer/renderer.js';
import playModel      from '../scenes/play/playModel.js';
import playView       from '../scenes/play/playView.js';
import playController from '../scenes/play/playController.js';

Promise.all([
  assetLoader.loadImages(),
  audioManager.init(),
  stageLoader.loadStage(CONFIG.STAGE_JSON)
]).then(([, , stageData]) => {
  renderer.init('game-canvas', assetLoader.images);
  playModel.init(stageData);
  playView.init(renderer, playModel);
  playController.init(playModel, playView);
  playController.start();
});
