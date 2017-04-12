// Import Template
import MainTemplate from './main.html';

// Set up controller
class MainController {
  constructor() {
    this.text = 'Bootstrap is on!';
  }
}

// Define and export component
export default {
  template: MainTemplate,
  controller: MainController
};
