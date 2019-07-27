
const formUtil = {
  composeXWwwFormUrlEncoded: function(obj){
    return Object.keys(obj).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    }).join('&');
  },

  formInputsToObject:(form)=>{
    const inputs = Array.from(form.querySelectorAll("input"));
    const selects = Array.from(form.querySelectorAll("select"));
    const allInputs = inputs.concat(selects);
    let newObj = {};
    allInputs.forEach((input)=>{
      if(input.type==='checkbox') {
        newObj[input.name]=(input.checked==="checked");
      } else {
        newObj[input.name] = input.value;

      }
    });
    return newObj;
  }
};



export default formUtil;
