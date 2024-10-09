const { exec } = require('child_process');

exec('ipconfig', (error, stdout, stderr) => {
    console.log(stdout.length);
});
