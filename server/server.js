const { spawn } = require('child_process');
const http = require('http');

const server = http.createServer((req, res) => {
  const php = spawn('php', ['-S', '0.0.0.0:3000', '-t', 'public/']);
  php.stdout.on('data', (data) => console.log(`PHP stdout: ${data}`));
  php.stderr.on('data', (data) => console.error(`PHP stderr: ${data}`));
  php.on('close', (code) => {
    console.log(`PHP process exited with code ${code}`);
    res.end('Server stopped');
  });

  req.pipe(php.stdin);
  php.stdout.pipe(res);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
