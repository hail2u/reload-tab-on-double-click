var reloadTabOnDblclick = {
  reload: function (e) {
    var t = e.originalTarget;

    if (t.localName === 'tab' || t.parentNode.localName === 'tab') {
      if (e.shiftKey) {
        BrowserReloadSkipCache();
      } else {
        BrowserReload();
      }
    }
  }
};

window.addEventListener("dblclick", reloadTabOnDblclick.reload, false);
