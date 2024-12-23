const { exec } = require('child_process');
const chokidar = require('chokidar');

// Watch specific files or directories
chokidar.watch(['static/assets/js', 'static/assets/scss']).on('change', (path) => {
    console.log(`File ${path} has been changed. Building...`);

    // Run Vite build process
    exec('vite build', (err, stdout, stderr) => {
        if (err) {
            console.error(`Error during build: ${err.message}`);
            return;
        }
        console.log(stdout);
        if (stderr) {
            console.error(stderr);
        }
    });
});

console.log('Watching files for changes...');
