const waveManager = {
  startWaves(model) {
    model.waves.forEach(w => {
      setTimeout(()=> {
        for(let i=0;i<w.enemies.length;i++){
          const e = w.enemies[i];
          for(let j=0;j<e.count;j++){
            setTimeout(()=> model.spawnEnemy(e.type), j*e.interval);
          }
        }
      }, w.delay);
    });
  }
};
export default waveManager;
