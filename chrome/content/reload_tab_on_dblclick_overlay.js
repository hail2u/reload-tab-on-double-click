var reloadTabOnDblclick = {
  init: function() {
    getBrowser().mTabContainer.setAttribute("ondblclick", "if (event.originalTarget.localName != 'box') { if (event.shiftKey) BrowserReloadSkipCache(); else BrowserReload(); } else { this.parentNode.parentNode.parentNode.onTabBarDblClick(event); }");
  }
}

window.addEventListener("load", reloadTabOnDblclick.init, false);
