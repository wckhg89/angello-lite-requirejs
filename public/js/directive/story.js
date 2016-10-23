'use strict';

define(['app'], function (myModule) {
  var story = function() {
      return {
          scope: true,
          replace: true,
          template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
      }
  };

  myModule.directive('story', story);
});
