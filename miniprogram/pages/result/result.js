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
    profession: [{ name: "css" }, { name: "op" }, { name: "pm" }],
    filtrateResult: "",
    currentTabsIndex: 0
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
  },
  onUnload: function() {
    wx.clearStorage("key");
  },
  showContent: function(data, firstId, secondId, thirdId) {
    this.setData({
      filtrateResult: {
        firstShow: data.data.occupations.firstId,
        secondShow: data.data.occupations.secondId,
        thirdShow: data.data.occupations.thirdId
      }
    });
  },
  calculateScore: function() {
    // CSS|JS|ANDROID|IOS|JAVA|OP|PM|UI
  },
  changeColor: function(event) {
    console.log(event.currentTarget.dataset.index);
    this.setData({
      //将当前点击的index值取到
      currentTabsIndex: event.currentTarget.dataset.index
    });
  }
});
