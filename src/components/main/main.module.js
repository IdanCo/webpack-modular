// Import Resources
import MainComponent from './main.component';
import './main.scss';

// Register module, register component and export name
export default angular
  .module('app.components.main', [])
  .component('main', MainComponent)
  .name;
