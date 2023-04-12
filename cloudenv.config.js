// 云开发环境配置
module.exports = {
  envId: 'myproject-dev-env-7ekvkwbf4998e6', // 云开发环境ID
  functionRoot: 'cloud_function', // 云函数根目录
  functions: [
    {
      name: 'cloud_function', // 云函数名称
      config: {
        timeout: 300 // 云函数超时时间（单位：秒）
      }
    }
  ],
  hosting: {
    // 静态网站托管配置
    public: './miniprogram-2', // 本地静态网站文件目录
    ignore: ['node_modules'] // 静态网站托管时忽略的文件/目录列表
  },
  wxCloudAPI: {
    // 微信云开放平台API配置
    appId: 'wx127256c6d096fe02', // 小程序appId
    appSecret: 'your_app_secret', // 小程序appSecret
    grantType: 'authorization_code', // 授权类型
    components: [] // 微信云开放平台组件列表
  },
  database: {
    // 数据库配置
    client: {
      // 数据库客户端配置
      env: 'myproject-dev-env-7ekvkwbf4998e6', // 云开发环境ID
      appid: 'wx127256c6d096fe02', // 小程序appId
      secret: 'your_app_secret', // 小程序appSecret
      maxRetryTimes: 3 // 最大重试次数
    },
    // 集合配置
    collections: {
      customer: 'customer', // 客户集合
      sales_opportunity: 'sales_opportunity', // 销售机会集合
      customer_interaction_record: 'customer_interaction_record', // 客户互动记录集合
      task_and_reminder: 'task_and_reminder', // 任务和提醒集合
      data_analysis_and_report: 'data_analysis_and_report' // 数据分析和报告集合
    }
  }
};
