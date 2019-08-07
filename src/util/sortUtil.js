/**
 * naive algorithm to compare two algorithms using kendall-tau
 * this has reduces that make a bigger array than the original,
 * if that bothers you look away
 * @param a first array
 * @param b second array
 * @returns integer of kendall-tau comparison
 */
const kendallTau = (a,b)=>{
  if(a.length!==b.length){
    throw new Error("in kendall tau algoritm arrays must be same length");
  }

  /**
   * compares each number to each other number to find integer comparison for each pair
   * @param arr
   * @returns LARGER array (size: triangular(arr.length)) with integer comparison for each pair
   */
  const compareAll= (arr) => arr.reduce(
    (accumOuter,itemOuter,i)=>

      accumOuter.concat(
        arr.filter(
          (_void,j)=>
            j!==i
        )
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

  const bCompare = compareAll(b);
  return compareAll(a)
    .map(
      (aItem,i)=>
        (aItem===0 || bCompare[i] === 0)?
          0:
          aItem===bCompare[i]?0:1

    ).reduce(
      (accum,item)=>
        accum+item
    )
};
