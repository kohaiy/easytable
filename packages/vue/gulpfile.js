const { parallel } = require('gulp')
const handleReplace = require('./build/utils/replace')
const handleCopy = require('./build/utils/copy')

exports.default = parallel([
  handleReplace,
  handleCopy,
])
