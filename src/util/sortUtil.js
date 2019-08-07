const kendallTau = (a,b)=>{
  if(a.length!==b.length){
    throw new Error("in kendall tau algoritm arrays must be same length");
  }

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
