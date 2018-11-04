Page({
  data: {
    title: [
      "职业门槛",
      "难易程度",
      "成长周期",
      "求贤企业",
      "入学基础",
      "资薪待遇"
    ],
    profession: ["css", "op", "pm"]
  },
  onShow: function() {
    var getParameter = wx.getStorageSync("key");
    console.log(getParameter);
    wx.request({
      url: "https://jnshu.com/a/occupation/list",
      header: {},
      success(res) {
        console.log(res.data);
      }
    });
    wx.setTabBarItem({
      index: 0,
      text: "css"
    });
  },
  onUnload: function() {
    wx.clearStorage("key");
  },
  calculateScore: function() {
    // CSS|JS|ANDROID|IOS|JAVA|OP|PM|UI
  }
});
