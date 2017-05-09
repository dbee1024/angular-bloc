(function() {
     function CollectionCtrl() {
        this.albums = Fixtures.getCollection(12);
     }
 //enisp
     angular.module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();