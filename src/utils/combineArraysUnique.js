// @kard js snippet
/**
 * Add elements from arrB to arrA. Each element is addad only if
 * is absent in the arrA.
 * @param  {Array} arrA - array of unique errors ids
 * @param  {Array} arrB - array of unique errors ids to add to errorsBuffer
 * @return {Array]} - combined array of errors
 */
export const combineArraysUnique = ( arrA = [], arrB = []) => {
  const acc = [].concat( arrA )

  // Add only items are not in the list yet
  arrB.forEach( errId => {
    if( !~arrA.indexOf( errId )){
    // ref: https://www.joezimjs.com/javascript/great-mystery-of-the-tilde/
      acc.push( errId )
    }
  })

  return acc
}
