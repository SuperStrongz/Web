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
    filtrateResult: [],
    currentTabsIndex: 0,
    firstShowId: "",
    secondShowId: "",
    thirdShowId: "",
    scoreOfAll: [
      {
        name: "学历",
        option: [
          {
            name: "初中及以下",
            score: [1, 1, 0, 0, -3, 0, 2, 2]
          },
          {
            name: "高中",
            score: [2, 2, 2, 2, 0, 3, 2, 2]
          },
          {
            name: "大专",
            score: [3, 3, 3, 3, 1, 3, 3, 3]
          },
          {
            name: "本科",
            score: [5, 5, 5, 5, 3, 5, 5, 5]
          },
          {
            name: "硕士",
            score: [5, 5, 5, 5, 7, 5, 7, 7]
          },
          {
            name: "博士",
            score: [3, 5, 5, 5, 9, 3, 7, 5]
          }
        ]
      },
      {
        name: "性别",
        option: [
          {
            name: "男",
            score: [5, 5, 5, 5, 7, 5, 5, 4]
          },
          {
            name: "女",
            score: [5, 5, 5, 5, 3, -5, 5, 6]
          }
        ]
      },
      {
        name: "年龄",
        option: [
          {
            name: "18岁以下",
            score: [5, 5, 4, 4, 4, 5, 3, 4]
          },
          {
            name: "18-24岁",
            score: [5, 5, 4, 4, 4, 5, 6, 7]
          },
          {
            name: "25-30岁",
            score: [5, 5, 5, 5, 3, 4, 4, 4]
          },
          {
            name: "30岁以上",
            score: [4, 4, 4, 4, 6, 2, 4, 3]
          }
        ]
      },
      {
        name: "基础",
        option: [
          {
            name: "零基础",
            score: [4, 3, 6, 4, 3, 4, 6, 2]
          },
          {
            name: "绘画基础",
            score: [5, 5, 6, 5, 6, 5, 4, 4]
          },
          {
            name: "网络相关",
            score: [5, 5, 6, 3, 7, 6, 2, 5]
          },
          {
            name: "原型设计",
            score: [5, 5, 6, 6, 3, 7, 9, 7]
          }
        ]
      },
      {
        name: "专业",
        option: [
          {
            name: "无专业",
            score: [5, 5, 5, 5, 3, 4, 4, 4]
          },
          {
            name: "计算机相关",
            score: [4, 4, 4, 4, 6, 2, 4, 3]
          },
          {
            name: "理工科",
            score: [4, 3, 6, 4, 3, 4, 6, 2]
          },
          {
            name: "文科",
            score: [5, 5, 6, 5, 6, 5, 4, 4]
          }
        ]
      },
      {
        name: "逻辑",
        option: [
          {
            name: "渣渣",
            score: [5, 5, 6, 3, 7, 6, 2, 5]
          },
          {
            name: "普通",
            score: [5, 5, 6, 6, 3, 7, 9, 7]
          },
          {
            name: "卓越",
            score: [5, 5, 5, 5, 3, 4, 4, 4]
          }
        ]
      }
    ]
  },
  calculateScore: function(res) {
    // CSS|JS|ANDROID|IOS|JAVA|OP|PM|UI
    // 根据第一页的六个选择，匹配到六个关于分数的数组
    var scoreArray = [];
    for (var i = 0; i < 6; i++) {
      // 六个选项，循环六次
      for (var y = 0; y < this.data.scoreOfAll[i].option.length; y++) {
        if (this.data.scoreOfAll[i].option[y].name === res[i]) {
          scoreArray.push(this.data.scoreOfAll[i].option[y].score);
        }
      }
    }
    console.log(scoreArray);
    // 六个关于分数的数组相加，计算分数,得到一个新的分数数组
    var countScore = scoreArray[0].map(function(v, i) {
      return (
        v +
        scoreArray[1][i] +
        scoreArray[2][i] +
        scoreArray[3][i] +
        scoreArray[4][i] +
        scoreArray[5][i]
      );
    });
    console.log(countScore);
    //加上id，进行排序,根据id找到分数前三的职业
    var rearrangement = [
      {
        id: 1,
        score: countScore[0]
      },
      {
        id: 2,
        score: countScore[1]
      },
      {
        id: 3,
        score: countScore[2]
      },
      {
        id: 4,
        score: countScore[3]
      },
      {
        id: 5,
        score: countScore[4]
      },
      {
        id: 6,
        score: countScore[5]
      },
      {
        id: 7,
        score: countScore[6]
      },
      {
        id: 8,
        score: countScore[7]
      }
    ];

    //根据分数排序，拿到分数排名前三的id;
    function sortId(a, b) {
      return b.score - a.score;
    }

    this.setData({
      firstShowId: rearrangement.sort(sortId)[0].id,
      secondShowId: rearrangement.sort(sortId)[1].id,
      thirdShowId: rearrangement.sort(sortId)[2].id
    });
  },
  showContent: function(data) {
    // 这里拿到了要展示的数据
    var transferFirst = data.data.occupations[this.data.firstShowId - 1];
    var transferSecond = data.data.occupations[this.data.secondShowId - 1];
    var transferThird = data.data.occupations[this.data.thirdShowId - 1];
    var newSalaryFirst = JSON.parse(transferFirst.salary);
    var newSalarySecond = JSON.parse(transferSecond.salary);
    var newSalaryThird = JSON.parse(transferThird.salary);
    this.setData({
      filtrateResult: [
        [
          transferFirst.threshold + "星",
          transferFirst.difficult + "星",
          transferFirst.cycle,
          transferFirst.company + "家",
          transferFirst.basis,
          "",
          transferFirst.onlineUserCount,
          transferFirst.name,
          newSalaryFirst
        ],
        [
          transferSecond.threshold + "星",
          transferSecond.difficult + "星",
          transferSecond.cycle,
          transferSecond.company + "家",
          transferSecond.basis,
          "",
          transferSecond.onlineUserCount,
          transferSecond.name,
          newSalarySecond
        ],
        [
          transferThird.threshold + "星",
          transferThird.difficult + "星",
          transferThird.cycle,
          transferThird.company + "家",
          transferThird.basis,
          "",
          transferThird.onlineUserCount,
          transferThird.name,
          newSalaryThird
        ]
      ]
    });
    console.log(this.data.filtrateResult);

    console.log(this.data.filtrateResult[this.data.currentTabsIndex][8]);
  },
  onShow: function() {
    var getParameter = wx.getStorageSync("key");
    var that = this;
    console.log(getParameter);
    // 知道了要展示的id
    this.calculateScore(getParameter);
    wx.request({
      url: "https://jnshu.com/a/occupation/list",
      header: {},
      success(res) {
        //拿到要展示的数据
        console.log(res.data);
        that.showContent(res.data);
      }
    });
  },
  onUnload: function() {
    wx.clearStorage("key");
  },
  changeColor: function(event) {
    console.log(event.currentTarget.dataset.index);
    this.setData({
      //将当前点击的index值取到
      currentTabsIndex: event.currentTarget.dataset.index
    });
  }
});
