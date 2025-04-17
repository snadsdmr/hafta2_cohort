const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end('<h2>Index sayfasına hoşgeldiniz</h2>');
    } else if (req.url === '/hakkimda') {
        res.statusCode = 200;
        res.end('<h2>Hakkımda sayfasına hoşgeldiniz</h2>');
    } else if (req.url === '/iletisim') {
        res.statusCode = 200;
        res.end('<h2>İletişim sayfasına hoşgeldiniz</h2>');
    } else {
        res.statusCode = 404;
        res.end('<h2>Sayfa bulunamadı</h2>');
    }
});

server.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
