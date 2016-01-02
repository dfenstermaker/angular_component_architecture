import angular from 'angular'
import home from './components/home/'

export default angular.module('Angular_Components', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    home.name
])
