Page({
  data: {
    educationarray: ["中专", "大专", "学士", "硕士", "博士"],
    educationindex: 0,
    sexarray: ["男", "女"],
    sexindex: 0,
    agearray: ["18岁以下", "18岁-24岁", "24岁-30岁", "30岁以上"],
    ageindex: 0,
    basicsarray: ["零基础"],
    basicsindex: 0,
    subjectarray: ["理工科", "文学"],
    subjectindex: 0,
    logicarray: ["普通", "卓越"],
    logicindex: 0
  },
  bindPickerChangeEducation: function(e) {
    this.setData({
      educationindex: e.detail.value
    });
  },
  bindPickerChangeSex: function(e) {
    this.setData({
      sexindex: e.detail.value
    });
  },
  bindPickerChangeAge: function(e) {
    this.setData({
      ageindex: e.detail.value
    });
  },
  bindPickerChangeSubject: function(e) {
    this.setData({
      subjectindex: e.detail.value
    });
  },
  bindPickerChangeLogic: function(e) {
    this.setData({
      logicindex: e.detail.value
    });
  },
  onLoad: function() {
    this.data.educationindex = 0;
    this.data.sexindex = 0;
    this.data.ageindex = 0;
    this.data.basicsindex = 0;
    this.data.subjectindex = 0;
    this.data.logicindex = 0;
  },
  skip: function() {
    var passParameter = [
      this.data.educationarray[this.data.educationindex],
      this.data.sexarray[this.data.sexindex],
      this.data.agearray[this.data.ageindex],
      this.data.basicsarray[this.data.basicsindex],
      this.data.subjectarray[this.data.subjectindex],
      this.data.logicarray[this.data.logicindex]
    ];

    wx.setStorageSync("key", passParameter);
    wx.navigateTo({
      url: "../result/result",
      success: function() {}
    });
  }
});
