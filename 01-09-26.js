import fs from 'fs';

function checkFileSize(file, mb) {
    fs.stat(file, (err, stats) => {
        if (err) {
            console.log(err.message);
            return;
        }

        const sizeInMB = stats.size / (1024 * 1024);

        if (sizeInMB > mb) {
            console.log(`File is greater than ${mb} MB`);
        } else {
            console.log(`File is less than ${mb} MB`);
        }
    });
}

checkFileSize("notes.txt", 1);