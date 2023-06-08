function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / Perdigital Sms Bomber For Turkey";
    } else {
        process.stdout.write('\x1b]2;' + x + " / Perdigital Sms Bomber For Turkey" + '\x1b\x5c');
    }
}

module.exports = console_title;