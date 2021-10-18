<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: xuxu
 * @Date: 2021-09-06 14:55:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-18 17:04:56
-->
<template>
  <div class="order">
    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="tabClickHandler">
      <el-tab-pane label="所有订单" name="first">
        <OrderTable></OrderTable>
      </el-tab-pane>
      <el-tab-pane label="待支付" name="second">
        <OrderTable status="待支付"></OrderTable>
      </el-tab-pane>
      <el-tab-pane label="待派单" name="third">
        <OrderTable status="待派单"></OrderTable>
      </el-tab-pane>
      <el-tab-pane label="代接单" name="four">
        <OrderTable status="待接单"></OrderTable>
      </el-tab-pane>
      <el-tab-pane label="待服务" name="five">
        <OrderTable status="待服务"></OrderTable>
      </el-tab-pane>
      <el-tab-pane label="待确认" name="six">
        <OrderTable status="待确认"></OrderTable>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="seven"> 
           <OrderTable status="已完成"></OrderTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import OrderTable from "@/components/Order/index.vue";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    tabClickHandler(tab, e) {
      // console.log(tab,e);
    },
  },
  components: {
    OrderTable,
  },
};
</script>

<style lang="less" scoped>
</style>