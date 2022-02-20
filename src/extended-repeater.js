const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = String(options.addition);
  let separator = options.separator ? options.separator : '+';
  let addSeparator = options.additionSeparator ? options.additionSeparator : '|';
 
  if (options.additionRepeatTimes)
    str += (addition + addSeparator).repeat(options.additionRepeatTimes - 1) + addition;
  else if (options.addition) str += addition;
  return (str + separator).repeat(options.repeatTimes - 1) + str;
}

module.exports = {
  repeater
};
