const express = require('express');
const app = express();
app.use(express.json());

// Endpoint đăng ký
app.post('/api/register', (req, res) => { /* Xử lý tạo user, trả token */ });
// Endpoint đăng nhập
app.post('/api/login', (req, res) => { /* Kiểm tra, trả token + user */ });
// Endpoint lấy thông tin user
app.get('/api/user', (req, res) => { /* Xác thực token, trả dữ liệu */ });
// Endpoint thêm tiết kiệm
app.post('/api/savings', (req, res) => { /* Cập nhật số dư, thêm lịch sử */ });
// Endpoint thêm chi tiêu
app.post('/api/expense', (req, res) => { /* Cập nhật số dư, thêm lịch sử */ });
// Endpoint đổi mật khẩu
app.post('/api/change-password', (req, res) => { /* Kiểm tra mật khẩu cũ, đổi */ });
// Endpoint logout
app.post('/api/logout', (req, res) => { /* Hủy token */ });
// Endpoint lấy thông tin hiện tại (cho token đã lưu)
app.get('/api/me', (req, res) => { /* Trả user từ token */ });
