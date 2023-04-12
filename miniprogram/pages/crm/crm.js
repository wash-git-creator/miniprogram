// 获取客户表格
var customerTable = document.getElementById("customerTable");

// 添加客户
function addCustomer(name, phone, email, address) {
  var newRow = customerTable.insertRow();
  newRow.innerHTML = `<td>${name}</td><td>${phone}</td><td>${email}</td><td>${address}</td>`;
}

// 示例添加两个客户
addCustomer("王五", "111222333", "wangwu@example.com", "深圳市福田区");
addCustomer("赵六", "444555666", "zhaoliu@example.com", "广州市天河区");