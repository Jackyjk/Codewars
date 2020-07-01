/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @param {*} or 
 * describe("Basic tests",_=>{
  Test.assertSimilar(orArrays([1,2,3],[1,2,3]),[1,2,3]);
  Test.assertSimilar(orArrays([1,2,3],[4,5,6]),[5,7,7]);
  Test.assertSimilar(orArrays([1,2,3],[1,2]),[1,2,3]);
  Test.assertSimilar(orArrays([1,2],[1,2,3]),[1,2,3]);
  Test.assertSimilar(orArrays([1,2,3],[1,2,3],3),[1,2,3]);
})
 */

const orArrays = (arr1, arr2, or) => arr1.length >= arr2.length ? arr1.map((x, i) => x | (arr2[i] || or)) : arr2.map((x, i) => x | (arr1[i] || or));
