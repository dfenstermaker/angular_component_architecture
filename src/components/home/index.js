import angular from 'angular'
import controller from './home.controller'
import template from './home.template.html'

const configs = {
    name: 'home_module'
},

_module = angular.module(configs.name, ['ui.router', 'ngMaterial', 'ngMdIcons'])

_module.component('home', {controller, template})

_module.config( ($stateProvider, $urlRouterProvider) => {

     $stateProvider
        .state('home', {
          url: "/",
          template: `<home></home>`
        })

})

export default configs
