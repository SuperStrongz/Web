Page({
  data: {
    educationarray: ["初中及以下", "高中", "大专", "本科", "硕士", "博士"],
    educationindex: 0,
    sexarray: ["男", "女"],
    sexindex: 0,
    agearray: ["18岁以下", "18-24岁", "25-30岁", "30岁以上"],
    ageindex: 0,
    basicsarray: ["零基础", "绘画基础", "网络相关", "原型设计"],
    basicsindex: 0,
    subjectarray: ["无专业", "计算机相关", "理工科", "文科"],
    subjectindex: 0,
    logicarray: ["渣渣", "普通", "卓越"],
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
  bindPickerChangeBasics: function(e) {
    this.setData({
      basicsindex: e.detail.value
    });
  },
  bindPickerChangeLogic: function(e) {
    this.setData({
      logicindex: e.detail.value
    });
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
