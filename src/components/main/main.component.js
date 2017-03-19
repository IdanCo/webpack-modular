// Import Template
import MainTemplate from './main.html';

// Set up controller
class MainController {
  constructor() {
    this.text = 'My main component!';
  }
}

// Define and export component
export default {
  template: MainTemplate,
  controller: MainController
};
