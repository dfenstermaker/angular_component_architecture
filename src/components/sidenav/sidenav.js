import angular from 'angular'
import controller from './sidenav.controller'
import template from './sidenav.template.html'

export var SideNavModuleName = 'sidenav_module'

angular.module(SideNavModuleName, ['ngMaterial', 'ngMdIcons'])
    .component('sidenav', {controller, template})

