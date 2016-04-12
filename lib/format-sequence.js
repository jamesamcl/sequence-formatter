
var extend = require('xtend')

function formatSequence(sequence, opts) {

    opts = extend({

        charsPerLine: 50,
        charsPerGroup: 10,
        offsetDigits: 4

    }, opts)

    if(opts.charsPerLine % opts.charsPerGroup !== 0) {

        throw new Error('charsPerLine must be divisible by charsPerGroup')
    }

    var groupsPerLine = opts.charsPerLine / opts.charsPerGroup

    var lines = []

    var offset = 0

    while(offset < sequence.length) {

        var line = pad(offset, opts.offsetDigits)

        for(var n = 0; n < groupsPerLine; ++ n) {

            line += ' '
            line += sequence.substr(offset, opts.charsPerGroup)

            offset += opts.charsPerGroup
        }

        lines.push(line)
    }

    return lines.join('\n')
}

function pad(offset, digits) {

    offset = '' + offset

    while(offset.length < digits)
        offset = '0' + offset

    return offset
}

module.exports = formatSequence


