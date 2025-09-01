

async function addItem(userCart,item) {
userCart.push(item);
    
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);
    if( index !== -1){
        userCart.splice(index,1)
        return;
    }

}

async function removeItem(userCart, item) {
  const  indexFound = userCart.findIndex((p)=>p.name === item.name)
  console.log(indexFound)

  if(indexFound ===-1){
    console.log("item não encontrado");
  }
  if(userCart[indexFound].quantity>1){
    userCart[indexFound].quantity--;
    return;

  }
  else{
    userCart.splice(indexFound,1)
  }

    
}

async function CalcTotal(userCart) {
    const total = userCart.reduce((total, item)=> total + item.subtotal(),0)
    console.log(total)
}

async function ListCart(myCart) {
    console.log(myCart)
    
}

export {addItem,deleteItem,removeItem,CalcTotal, ListCart}