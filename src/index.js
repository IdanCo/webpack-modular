// Entry point for entire app

// Frameworks
import angular from 'angular';

// Internal Modules
import ComponentsModule from './components/components.module';

// Register app
angular
  .module('app', [
    ComponentsModule
  ]);