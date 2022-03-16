/**
 *
 * @param {Number} ms
 * @returns {Promise}
 */
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 *
 * @param {String} theText
 * @param {Object} target ref string
 * @param {Number} ms
 * @param {Number} paragraphdelay
 * @param {Number} index default is 0
 * @param {Number} arrayIndex default is 0
 */
export function typingEffect(
  theText,
  target,
  ms,
  paragraphdelay = ms * 15,
  index = 0,
  arrayIndex = 0
) {
  if (typeof theText === "string") {
    if (index >= theText.length) return new Promise((resolve) => resolve);
    target.value += theText.charAt(index);
    return delay(ms).then(() =>
      typingEffect(theText, target, ms, paragraphdelay, index + 1)
    );
  }
  if (arrayIndex >= theText.length) return;
  if (index >= theText[arrayIndex].length) {
    return delay(paragraphdelay).then(() =>
      delay(ms).then(() =>
        typingEffect(theText, target, ms, paragraphdelay, 0, arrayIndex + 1)
      )
    );
  }
  target.value[arrayIndex] += theText[arrayIndex].charAt(index);
  return delay(ms).then(() =>
    typingEffect(theText, target, ms, paragraphdelay, index + 1, arrayIndex)
  );
}
