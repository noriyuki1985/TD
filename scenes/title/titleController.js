import titleModel from './titleModel.js';
import titleView from './titleView.js';
const titleController = {
  init() {
    titleModel.init();
    titleView.show();
  }
};
export default titleController;
