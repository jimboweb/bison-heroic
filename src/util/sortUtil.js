module.exports.kendallTau = (a,b)=>{
  if(a.length!==b.length){
    throw new Error("in kendall tau algoritm arrays must be same length");
  }

  const compareAll= (arr) => arr.reduce(
    (accumOuter,itemOuter,i)=>
      accumOuter.push(
        arr.filter(
        (_void,j)=>
          j!==i
      )
        .reduce(
          (accumInner, itemInner)=>
            accumInner.push(itemOuter===itemInner?
              0:
              itemOuter<itemInner?
                1:-1)
        )
      )
  )

  const bCompare = compareAll(b);
  return compareAll(a)
    .map(
      (aItem,i)=>
        (a===0 || b === 0)?
          0:
          a<b?-1:1

    ).reduce(
      (accum,item)=>accum+item
    )
};
