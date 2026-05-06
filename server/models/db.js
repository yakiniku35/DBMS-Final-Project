import mysql from 'mysql2';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. 取得目前檔案的目錄路徑 (ESM 必備)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. 指定 .env 的路徑：從 server/models 往上跳兩層到根目錄
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// 3. 建立連線池
const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 測試用：如果還是失敗，可以取消下面這行的註釋來確認有沒有讀到帳號
// console.log('Current DB User:', process.env.DB_USER);

export default pool.promise();