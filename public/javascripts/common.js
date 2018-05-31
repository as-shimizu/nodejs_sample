function returnHome() {
    window.location.href = '/';
}

function returnRegist() {
    window.location.href = '/regist';
}

function getLocale() {
    var ua = window.navigator.userAgent.toLowerCase();
    var lang = document.getElementById('lang');
    //var locale;
    try {
      // chrome
      if( ua.indexOf( 'chrome' ) != -1 ){
        //locale = ( navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
      } else{
        // それ以外
        //locale = ( navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
      }
    } catch( e ) {
        //locale = undefined;
    } finally {
        //lang.setAttribute('value', locale);
    }
}