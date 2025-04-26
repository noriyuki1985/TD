import resultModel from './resultModel.js';
import resultView from './resultView.js';
const resultController = {
  init(score) {
    resultModel.init(score);
    resultView.show(score);
  }
};
export default resultController;
