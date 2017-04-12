// Entry point for entire app

// Frameworks
import angular from 'angular';

// import Bootstrap's compiled javascript:
import 'bootstrap';

// Import Bootstrap's compiled CSS:
// import 'bootstrap/dist/css/bootstrap.min.css';


// import general styling (including bootstrap):
import './index.scss'

// Internal Modules
import ComponentsModule from './components/components.module';

// Register app
angular
  .module('app', [
    ComponentsModule
  ]);