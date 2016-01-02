import _module from './module'
import {HomeTemplate} from './components/home/home'


_module.config( ($locationProvider, $stateProvider, $urlRouterProvider) => {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix(null);
        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                 url: "/",
                 template: HomeTemplate
            })
})
