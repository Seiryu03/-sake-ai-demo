const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// MIMEタイプの定義
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// 静的ファイルサーバーの作成
const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  let filePath;
  
  // ルーティング設定
  if (req.url === '/' || req.url === '/index.html') {
    filePath = path.join(__dirname, 'public/index.html');
  } else if (req.url === '/sales' || req.url === '/sales.html') {
    filePath = path.join(__dirname, 'sales-landing.html');
  } else if (req.url.startsWith('/public/')) {
    filePath = path.join(__dirname, req.url);
  } else if (req.url.startsWith('/data/')) {
    filePath = path.join(__dirname, req.url);
  } else if (req.url === '/styles-v2.css') {
    filePath = path.join(__dirname, 'public/styles-v2.css');
  } else {
    // その他のリクエストは404
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>404 - Not Found</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>Available pages:</p>
        <ul>
          <li><a href="/">Demo Page</a></li>
          <li><a href="/sales">Sales Landing Page</a></li>
        </ul>
      </body>
      </html>
    `);
    return;
  }

  // ファイル拡張子からMIMEタイプを取得
  const extName = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extName] || 'application/octet-stream';

  // ファイルの存在チェックと送信
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 404エラー
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>404 - Not Found</title>
            <style>
              body { 
                font-family: Arial, sans-serif; 
                text-align: center; 
                padding: 50px; 
                background: #f5f5f5;
              }
              .error { 
                background: white; 
                padding: 40px; 
                border-radius: 10px; 
                display: inline-block;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
            </style>
          </head>
          <body>
            <div class="error">
              <h1>404 - File Not Found</h1>
              <p>The requested file <strong>${req.url}</strong> was not found.</p>
              <p><a href="/">← Back to Demo</a></p>
            </div>
          </body>
          </html>
        `);
      } else {
        // 500エラー
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head><title>500 - Server Error</title></head>
          <body>
            <h1>500 - Internal Server Error</h1>
            <p>Sorry, something went wrong on the server.</p>
            <p><a href="/">← Back to Demo</a></p>
          </body>
          </html>
        `);
      }
    } else {
      // ファイル送信成功
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache' // 開発用にキャッシュ無効
      });
      res.end(content);
    }
  });
});

// サーバー起動
server.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🍶 APrise 日本酒デモ・チャットボット サーバー起動');
  console.log('='.repeat(50));
  console.log(`📱 デモページ: http://localhost:${PORT}`);
  console.log(`🔧 サーバー: Node.js ${process.version}`);
  console.log(`⏰ 起動時間: ${new Date().toLocaleString('ja-JP')}`);
  console.log('='.repeat(50));
  console.log('💡 使い方:');
  console.log('   1. 上記URLをブラウザで開く');
  console.log('   2. 右下の吹き出しアイコンをクリック');
  console.log('   3. 日本酒について質問してみる');
  console.log('   4. 言語切り替えボタンでEN/JAを切り替え');
  console.log('='.repeat(50));
  console.log('⛔ 終了するにはCtrl+Cを押してください');
  console.log('');
});

// 終了時の処理
process.on('SIGINT', () => {
  console.log('\n🛑 サーバーを終了しています...');
  server.close(() => {
    console.log('✅ サーバーが正常に終了しました');
    process.exit(0);
  });
});