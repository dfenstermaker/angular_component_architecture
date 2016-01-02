import angular from 'angular'
import controller from './home.controller'
import template from './home.template.html'
import {NavModuleName} from '../nav/nav'
import {SideNavModuleName} from '../sidenav/sidenav'

export var HomeModuleName = 'home_module'
export var HomeTemplate = `<home></home>`

angular.module(HomeModuleName, [
    'ngMaterial',
    'ngMdIcons',
    NavModuleName,
    SideNavModuleName
])
    .component('home', {controller, template})

