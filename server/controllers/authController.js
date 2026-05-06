const User = require('../models/userModel');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findByEmail(email);
        if (!user || user.password !== password) { // 實務上建議使用 bcrypt 加密比對
            return res.status(401).json({ message: '帳號或密碼錯誤' });
        }
        // 登入成功，可在此設定 session 或回傳 token
        res.status(200).json({ message: '登入成功', user: { id: user.id, name: user.name } });
    } catch (error) {
        res.status(500).json({ message: '伺服器錯誤' });
    }
};