import angular from 'angular'
import controller from './home.controller'
import template from './home.template.html'

export var HomeModuleName = 'home_module'
export var HomeTemplate = `<home></home>`

angular.module(HomeModuleName, ['ui.router', 'ngMaterial', 'ngMdIcons'])
    .component('home', {controller, template})

