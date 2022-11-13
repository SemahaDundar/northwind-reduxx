
import * as actionTypes from "./actionTypes";



  
  export function getProductsSuccess(products){
      return{ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
  }



  export function createProductSuccess(product){
return {type:actionTypes.CREATE_PRODUCT_SUCCESS,payload:product}
  }




  //api eklemek için put  güncellemek için post kullanacağız
  export function saveProduct(product){
    return fetch("https://localhost:3000/products/" + (product.id ||" "), 
    {method: product.id?"PUT":"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(product)
  }).then(handleResponse).catch(handleError);
  }


  //stringfy elimizdeki datayı sitringleştirme işlemi yapar



  export function saveProduct(product){
    return function(dispatch){
      return saveProductApi(product).then(saveProduct=>{
        product.id?dispatch(updateProductSuccess(saveProduct)):dispatch(cr(saveProduct)
      }).catch(error => {
        throw error;
      });
    }
  } 



  export async function handleResponse(response){
    if(response.ok){
      return response.json()
    }

    const error = await  response.text()
    throw new Error(error)
  }


  export function handleError(error){
    console.log("Bir hata oluştu")
    throw error;
  }


  //üstteki kodda redux'ın reducer'i devreye girmiş oluyor

  export function updateProductSuccess(product){
    return {type:actionTypes.UPDATE_PRODUCT_SUCCESS,payload:product}
      }

  export function getProducts(categoryId) {


    return function (dispatch) {
      let url = "https://localhost:3000/products";
      if (categoryId){
        url = url + "?categoryId="+ categoryId
      return fetch(url)
        .then((response) => response.json())
        .then((result) => dispatch(getProductsSuccess(result)));
    };
  }
  