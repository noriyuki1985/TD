const hud = {
  update(model) {
    document.getElementById('hud').textContent =
      `Gold: ${model.gold}  Lives: ${model.lives}`;
  }
};
export default hud;
