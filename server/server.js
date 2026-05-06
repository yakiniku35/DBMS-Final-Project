const express = require('express');
const app = express();
const authController = require('./controllers/authController');

app.use(express.json()); // 解析 JSON 格式的請求體

// 登入 API 接口
app.post('/api/login', authController.login);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});