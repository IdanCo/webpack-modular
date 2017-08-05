// Entry point for entire app

// Frameworks
import angular from 'angular';

// import Bootstrap's compiled javascript:
import 'bootstrap';
import ng1bs4 from 'ng1bs4';
import 'ng1bs4/dist/ng1bs4.css'
// import general styling (including bootstrap):
import './index.scss'

// Import Bootstrap's compiled CSS (redundent since we compile ourselves):
// import 'bootstrap/dist/css/bootstrap.min.css';

// Internal Modules
import ComponentsModule from './components/components.module';

// Register app
angular
  .module('app', [
    ComponentsModule,
    ng1bs4
  ]);