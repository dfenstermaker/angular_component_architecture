import angular from 'angular'
import controller from './nav.controller'
import template from './nav.template.html'

export var NavModuleName = 'nav_module'

angular.module(NavModuleName, ['ngMaterial', 'ngMdIcons'])
    .component('nav', {controller, template})

