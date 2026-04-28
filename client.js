/* Power-Up ART — Théâtre de l'Union */
var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: {
        dark: 'https://nesoso.github.io/ART-Trello-SPECTACLES/icon.png',
        light: 'https://nesoso.github.io/ART-Trello-SPECTACLES/icon.png'
      },
      text: '🎭 Tableau Spectacles',
      callback: function(t) {
        return t.modal({
          url: 'https://nesoso.github.io/ART-Trello-SPECTACLES/',
          title: 'Tableau Spectacles S26/27',
          fullscreen: true
        });
      }
    }];
  }
});
