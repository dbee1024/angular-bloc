(function() {
     function AlbumCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum();
        this.songPlayer = SongPlyaer;
     }
 
     angular.module('blocJams')
         .controller('AlbumCtrl', ['Fixtures','SongPlayer' AlbumCtrl]);
 })();