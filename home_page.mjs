export function home_page(req, res) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.send(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>UnofficialAPI</title>
</head>
<body>
<h3>UnofficialAPI部署成功</h3>
</body>
</html>
    `)
}
