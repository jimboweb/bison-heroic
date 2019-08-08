/**
 * Returns kendall-tau rank coefficient as a measure of "percentage matched" between a target sorted
 * array and a comparison array. Uses a naive algorithm right now, may update to more efficient algorithm later.
 * @param a target sorted array
 * @param b comparison array of the same length as a
 * @returns number between 0 (completely unmatched) and 1 (completely matched)
 */
const kendallTau = (a,b)=>{
  if(a.length!==b.length){
    throw new Error("in kendall tau algorithm arrays must be same length");
  }

  //this reduce returns a bigger array than you put in. if you find that
  //unseemly, you might want to look away
  const compareAll= (arr) => arr.reduce(
    (accumOuter,itemOuter,i)=>
      accumOuter.concat(
        arr
          .slice(i+1,arr.length)
          .reduce(
            (accumInner, itemInner)=>
            {
              accumInner.push(itemOuter===itemInner?
                0:
                itemOuter<itemInner?
                  1:-1)
              return accumInner;
            },[]
          )
      )
    ,[]
  );
  const numPairs = ((a.length*(a.length-1))/2);
  const bCompare = compareAll(b);
  return 1-compareAll(a)
    .map(
      (aItem,i)=>
        (aItem===0 || bCompare[i] === 0)?
          0:
          aItem===bCompare[i]?0:1

    ).reduce(
      (accum,item)=>
        accum+item
    )/numPairs
};

export default kendallTau;
