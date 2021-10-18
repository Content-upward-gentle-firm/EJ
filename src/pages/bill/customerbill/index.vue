<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: xuxu
 * @Date: 2021-09-06 15:49:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-13 17:16:47
-->
 <template>
  <div class="customerbill">
    <!-- <el-table-column>
      <el-time-picker
        is-range
        v-model="value1"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
        size="small"
        length="16%"
      >
      </el-time-picker>
    </el-table-column> -->

    <el-form :model="params" :inline="true">
      <!-- 根据员工编号查找 -->
      <el-form-item>
        <el-select
          size="small"
          length="16%"
          v-model="params.id"
          placeholder="请选择顾客编号"
        >
          <el-option
            v-for="(item, index) of findAllCustomer"
            :label="item.name"
            :value="item.id"
            :key="index"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- /根据员工编号查找 -->
      <!-- 根据状态查找 -->
      <el-form-item>
        <el-select
          v-model="params.status"
          placeholder="请选择事件"
          size="small"
          length="16%"
        >
          <el-option label="正常" value="正常"></el-option>
          <el-option label="未审核" value="未审核"></el-option>
        </el-select>
      </el-form-item>
      <!-- 根据状态查找 -->
      <!-- 搜索按钮 -->
      <el-button @click="pageQueryCustomerAccount">搜索</el-button>
      <!-- /搜索按钮 -->
    </el-form>

    <!-- 内容区域 -->
    <el-table :data="resData.list" style="width: 100%">
      <el-table-column prop="id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="transferMoney" label="交易金额" width="180">
      </el-table-column>
      <el-table-column  label="交易时间" width="180" >
        <template v-slot="scope">
          {{scope.row.transferTime | fmtDate}}
        </template>
      </el-table-column>
      <el-table-column prop="type" label="交易类型" width="180"></el-table-column>
      <el-table-column label="状态" width="180">
        <template v-slot="scope">
          <el-tag v-if="scope.row.status == '正常'" type="success">{{
            scope.row.status
          }}</el-tag>
          <el-tag v-else type="danger">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述" width="180"></el-table-column>
    </el-table>
    <!-- /内容区域 -->

    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next, sizes"
      :total="resData.total"
      :page-size="params.pageSize"
      :current-page="params.page"
      @current-change="pageChangeHandler"
      :page-sizes="[5, 10, 15, 20]"
      @size-change="pageSizeChangeHandler"
    >
    </el-pagination>
    <!-- /分页 -->
  </div>
</template>
<script>
import request from "@/utils/request";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      params: {
        page: 1,
        pageSize: 5,
      },
      resData: {},
      findAllCustomer: [],
    };
  },
  methods: {
    //   导入状态机方法
    ...mapActions("customerAccount", ["findAllCustomerAccount"]),
    // 分页查询员工账户
    pageQueryCustomerAccount() {
      request
        .get("/account/pageQueryCustomerAccount", {
          params: this.params,
        })
        .then((res) => {
          this.resData = res.data;
        });
    },
    
    // page改变事件
    pageChangeHandler(page) {
      this.params.page = page;
      // 最新数据
      this.pageQueryCustomerAccount();
    },
    // pageSize改变事件
    pageSizeChangeHandler(pageSize) {
      this.params.pageSize = pageSize;
      this.pageQueryCustomerAccount();
    },
    
  },
  created() {
    this.pageQueryCustomerAccount();
    this.findAllCustomerAccount().then((res) => {
      this.findAllCustomer = res.data.list;
    });
  },
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>