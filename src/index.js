import createItem from "./services/item.js";
import * as cart from "./services/cart.js";


const myCart = [];
const myWhishList = [];


console.log("Carrinho de compras");

const item1 = await createItem("Xbox", 1000, 2);
const item2 = await createItem("Playstation", 2000, 2);

await cart.addItem(myCart, item1);
await cart.addItem(myCart, item2);
//await cart.deleteItem(myCart, item1.name);
await cart.removeItem(myCart,item1);
await cart.removeItem(myCart,item2);

await cart.ListCart(myCart);
await cart.CalcTotal(myCart);


