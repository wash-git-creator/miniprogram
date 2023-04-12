// 添加客户信息
export const addCustomer = async (customerData) => {
  try {
    const result = await wx.cloud.callFunction({
      name: 'addCustomer', // 修改为您创建的云函数名称
      data: customerData // 修改为传入云函数的客户数据
    });
    if (result && result.result && result.result.success) {
      return { success: true, data: result.result.data };
    } else {
      return { success: false, error: '添加客户信息失败' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// 编辑客户信息
export const editCustomer = async (customerId, customerData) => {
  try {
    const result = await wx.cloud.callFunction({
      name: 'editCustomer', // 修改为您创建的云函数名称
      data: { customerId, ...customerData } // 修改为传入云函数的客户 ID 和客户数据
    });
    if (result && result.result && result.result.success) {
      return { success: true, data: result.result.data };
    } else {
      return { success: false, error: '编辑客户信息失败' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// 删除客户信息
export const deleteCustomer = async (customerId) => {
  try {
    const result = await wx.cloud.callFunction({
      name: 'deleteCustomer', // 修改为您创建的云函数名称
      data: { customerId } // 修改为传入云函数的客户 ID
    });
    if (result && result.result && result.result.success) {
      return { success: true, data: result.result.data };
    } else {
      return { success: false, error: '删除客户信息失败' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// 获取客户列表
export const getCustomers = async () => {
  try {
    const result = await wx.cloud.callFunction({
      name: 'getCustomers' // 修改为您创建的云函数名称
    });
    if (result && result.result && result.result.success) {
      return { success: true, data: result.result.data };
    } else {
      return { success: false, error: '获取客户列表失败' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};
