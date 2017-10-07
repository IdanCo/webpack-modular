// Import Template
import MainTemplate from './main.html';

// Set up controller
class MainController {
  constructor($element) {
    this.text = 'Angular ' + angular.version.full + ' is working!';
    this.$element = $element;
  }

  $onInit() {
    this.events = [
      {
        date: 'October 6, 2010',
        title: 'Something Happened',
        image: 'https://unsplash.it/100'
      },
      {
        date: 'October 6, 2010',
        title: 'Something Happened',
        image: 'https://unsplash.it/100'
      },
      {
        date: 'October 6, 2010',
        title: 'Something Happened',
        image: 'https://unsplash.it/100'
      },
      {
        date: 'October 6, 2010',
        title: 'Something Happened',
        image: 'https://unsplash.it/100'
      },
      {
        date: 'October 6, 2010',
        title: 'Something Happened',
        image: 'https://unsplash.it/100'
      }
    ]
  }
}

// annotate injections
MainController.$inject = ['$element'];

// Define and export component
export default {
  template: MainTemplate,
  controller: MainController
};
