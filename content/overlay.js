var reloadTabOnDblclick = {
  reload: function (e) {
    var t = e.originalTarget;

    if (t.ownerDocument.evaluate("ancestor-or-self::*[local-name()='tab']", t, null, XPathResult.BOOLEAN_TYPE, null).booleanValue) {
      if (e.shiftKey) {
        BrowserReloadSkipCache();
      } else {
        BrowserReload();
      }
    }
  }
};

window.addEventListener("dblclick", reloadTabOnDblclick.reload, false);
