var reloadTabOnDblclick = {
  reload: function(e) {
    if (e.originalTarget.localName == 'tab' || e.originalTarget.parentNode.localName == 'tab') {
      if (e.shiftKey) {
        BrowserReloadSkipCache();
      } else {
        BrowserReload();
      }
    }
  }
};

window.addEventListener("dblclick", reloadTabOnDblclick.reload, false);
