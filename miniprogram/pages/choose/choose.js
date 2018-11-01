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
  skip: function() {
    console.log(this.data.educationarray[this.data.educationindex]);
    wx.navigateTo({
      url:
        "../result/result?education=this.data.educationarray[this.data.educationindex]&sex=sexarray[sexindex]&age=agearray[ageindex]&basics=basicsarray[basicsindex]&subject=subjectarray[subjectindex]&logic=logicarray[logicindex]",
      success: function() {
        console.log(111);
      }
    });
  }
});
