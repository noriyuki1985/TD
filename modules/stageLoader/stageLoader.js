const stageLoader = {
  loadStage(url) {
    return fetch(url).then(res => res.json());
  }
};
export default stageLoader;
