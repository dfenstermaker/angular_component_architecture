import {HomeModuleName} from './components/home/'
import services from './services/'

export default angular.module('Angular_Components', [
    'ui.router',
    'ngMaterial',
    'ngMdIcons',
    services.name,
    HomeModuleName
])
