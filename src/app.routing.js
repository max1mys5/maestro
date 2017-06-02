angular.module('app')
    .config(function($stateProvider, $locationProvider, toastrConfig) {
        angular.extend(toastrConfig, {
    allowHtml: false,
    closeButton: false,
    closeHtml: '<button>&times;</button>',
    extendedTimeOut: 200000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },  
    messageClass: 'toast-message',
    onHidden: null,
    onShown: null,
    onTap: null,
    progressBar: false,
    tapToDismiss: true,
    templates: {
      toast: 'directives/toast/toast.html',
      progressbar: 'directives/progressbar/progressbar.html'
    },
    timeOut: 200000,
    titleClass: 'toast-title',
    toastClass: 'toast'
  });
            $locationProvider.hashPrefix('');
            $stateProvider
                .state('home', {
                    url: '',
                    templateUrl: "./modules/home/home.html"
                })
                .state('gallery', {
                    url: '/gallery',
                    templateUrl: "./modules/gallery/gallery.html",
                    controller: 'galleryController'
                })

                        .state('about', {
                    url: '/about',
                    templateUrl: "./modules/about/about.html"
                })
});