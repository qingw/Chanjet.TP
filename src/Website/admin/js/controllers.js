'use strict';

/* Controllers */
 
angular.module('admin.controllers', ['admin.views']).

  controller('viewlistCtrl', ['$scope', 'views', function ($scope, views) {
      $scope.views = views;
  }])

  .controller('defaultCtrl', [function () {

  }])

  .controller('site_listCtrl', [function () {

  }])

  .controller('account_createCtrl', [function () {

  }])

  .controller('account_hiddensetCtrl', [function () {

  }])

  .controller('account_listCtrl', [function () {

  }])

  .controller('backup_createCtrl', [function () {

  }])

  .controller('backup_listCtrl', [function () {

  }])

  .controller('job_listCtrl', [function () {

  }])

  .controller('server_settingCtrl', [function () {

  }])


 ;