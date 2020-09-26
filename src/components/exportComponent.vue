<template>
  <div id="exportExcel">
       <el-button :loading="downloadLoading" type="primary" @click="handleDownload">导出 Excel</el-button>
  </div>
</template>
<script>
export default {
    name:"exportExcel",
    // 动态props
    // 动态属性可以使用对象进行接收数据
    // required：属性代表的是必传参数
    // type：类型检测 （强类型的检测）
    // default：是一个默认值
    // props:[],
    props: {
    list: {
      required: true,
      type: Array,
    },
    tHeader: {
      required: true,
      type: Array
    },
    tValue: {
      required: true,
      type: Array
    },
    filename: {
      type: String,
      default: '列表数据'
    }
  },
  data() {
    return {
      downloadLoading: false,
      autoWidth: true,
      bookType: 'xlsx'
    }
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true
      import('./exportExcel').then(excel => {
        const data = this.formatJson(this.tValue, this.list)
        excel.export_json_to_excel({
          header: this.tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
          return v[j]
      }))
    }
  }
}
</script>
<style>
#exportExcel{
  width:120px;
  margin-top:20px;
  margin-left:300px;
}
</style>
