<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <div class="user-info">
            <img src="../../assets/img/img1.jpg" class="user-avator" alt="" />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">用户名：<span>admin1</span></div>
        </el-card>
        <el-card shadow="hover" style="height: 252px">
          <div slot="header" class="clearfix">
            <span>评价详情</span>
          </div>
          优秀
          <el-progress :percentage="71.3" color="#42b983"></el-progress>
          良好
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          一般
          <el-progress :percentage="3.7"></el-progress>
          较差
          <el-progress :percentage="0.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height: 403px">
          <div slot="header" class="clearfix">
            <span>排行榜</span>
          </div>
          <el-table
            :data="todoList"
            :show-header="false"
            height="304"
            style="width: 100%; font-size: 14px"
          >
            <el-table-column>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{ 'todo-item-del': scope.row.status }"
                >
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <!-- 图表-->
    <el-row>
      <div id="bar" style="height: 300px"></div>
    </el-row>
  </div>
</template>

<script>
import { Chart } from "@antv/g2";
export default {
  name: "dashboard",
  data() {
    return {
      data: [
        { type: "家庭保洁", value: 34 },
        { type: "衣物护理", value: 85 },
        { type: "家电清洗", value: 103 },
        { type: "母婴陪护", value: 142 },
        { type: "家居养护", value: 251 },
        { type: "环境整治", value: 367 },
        { type: "汽车", value: 34 },
        { type: "IT 通讯电子", value: 491 },
        { type: "社会公共管理", value: 672 },
        { type: "医疗卫生", value: 868 },
        { type: "金融保险", value: 1234 },
      ],

      todoList: [
        {
          title: "家庭保洁",
        },
        {
          title: "衣物护理",
        },
        {
          title: "家电清洗",
        },
        {
          title: "母婴陪护",
        },
        {
          title: "家居养护",
        },
        {
          title: "环境整治",
        },
      ],
    };
  },
  methods: {
    initLineChart() {
      const chart = new Chart({
        container: "bar",
        autoFit: true,
      });
      chart.data(this.data);
      chart.scale({
        value: {
          max: 1400,
          min: 0,
          alias: "销量（百万）",
        },
      });
      chart.axis("type", {
        title: null,
        tickLine: null,
        line: null,
      });

      chart.axis("value", {
        label: null,
        title: {
          offset: 30,
          style: {
            fontSize: 12,
            fontWeight: 300,
          },
        },
      });
      chart.legend(false);
      chart.coordinate().transpose();
      chart
        .interval()
        .position("type*value")
        .size(26)
        .label("value", {
          style: {
            fill: "#8d8d8d",
          },
          offset: 10,
        });
      chart.interaction("element-active");
      chart.render();
    },
  },
  mounted() {
    this.initLineChart();
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.grid-num {
  font-size: 30px;
  font-weight: bold;
}
.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}
.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}
.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}
.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}
.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}
.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}
.user-info-list span {
  margin-left: 70px;
}
.mgb20 {
  margin-bottom: 20px;
}
.todo-item {
  font-size: 14px;
}
.todo-item-del {
  text-decoration: line-through;
  color: #999;
}
.schart {
  width: 100%;
  height: 300px;
}
</style>
