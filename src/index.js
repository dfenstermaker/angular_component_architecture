import angular from 'angular'

import _module from 'module'

_module.config( ($locationProvider, $stateProvider, $urlRouterProvider) => {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix(null);
        $urlRouterProvider.otherwise('/')
})

angular.bootstrap(document.documentElement, ['Angular_Components'])
