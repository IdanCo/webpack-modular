// Entry point for entire app

// Frameworks
import angular from 'angular';
// import { tooltip } from 'bootstrap'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Internal Modules
import ComponentsModule from './components/components.module';

// Register app
angular
  .module('app', [
    ComponentsModule
  ]);