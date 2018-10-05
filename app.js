
App({
  globalData: {
    res: wx.getSystemInfoSync(),
    canHideTabBar: wx.canIUse("hideTabBar"),
    statusBarHeight: wx.getSystemInfoSync().statusBarHeight || 0
  }
});