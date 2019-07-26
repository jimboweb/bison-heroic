const fetchUtil = {

  getApiUrl:()=>{
    const port = 4444;
    return `http://localhost:${port}`;
  },
  //apiUrl = ...;

  getData:(route, callback) => {
    fetchUtil.fetchData(route, 'get', null, callback);
  },

  postData: (route, data, callback) => {
    fetchUtil.fetchData(route, 'post', data, callback);
  },

  putData: (route, data, callback) => {
    fetchUtil.fetchData(route, 'put', data, callback);
  },

  deleteData: (route, callback) => {
    fetchUtil.fetchData(route, 'delete', null, callback);
  },

  patchData: (route, data, callback) => {
    fetchUtil.fetchData(route, 'patch', data, callback);
  },

  fetchData : (route, method, data, callback) => {


    const headers = new Headers(
      method==='get'?{}:{
        'Content-Type': route==='account/login'?'application/x-www-form-urlencoded':'application/json'
      }
    );


    // commented out for dev and local uri
    // if(token){
    //   headers.set('x-access-token',token);
    // }

    let requestProps = {
      method: method,
      mode: 'no-cors',
      redirect: "follow",
      headers: headers
    };

    if(method!=='get' && data){
      requestProps.body=data;
    }

    const request = new Request(
      fetchUtil.getApiUrl() + route,
      requestProps
    );

    fetch(request)
      .then(
        resp => {
          return resp.json();
        },
        err=> {
          throw new Error("error: " + err);
        })
      .then(
        respData=>{callback(respData)}
      );
  }

};
export default fetchUtil;
