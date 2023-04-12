{
  "pages": [
    "pages/index/index",  // 页面路径，注意路径格式
    "pages/about/about",
    // 其他页面路径
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "MyApp",
    "navigationBarTextStyle": "black"
  },
  "sitemapLocation": "sitemap.json",
  "tabBar": {
    "color": "#666",
    "selectedColor": "#000",
    "borderStyle": "white",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "images/tabbar/home.png",
        "selectedIconPath": "images/tabbar/home_selected.png"
      },
      {
        "pagePath": "pages/about/about",
        "text": "关于",
        "iconPath": "images/tabbar/about.png",
        "selectedIconPath": "images/tabbar/about_selected.png"
      }
      // 其他底部菜单项
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": false,
  "navigateToMiniProgramAppIdList": [],
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示"
    }
  }
}
