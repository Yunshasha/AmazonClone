import { createSlice } from "@reduxjs/toolkit";
import productsImg from "@/assets/img/products/products";
const data = {
  firstRowProducts: [
    {
      id: 1,
      discription:
        "This is the description, this is the discriptions is the description",
      price: 11.99,
      imgSrc: productsImg.product1,
      rating: 3,
      cartCount: 0,
    },
    {
      id: 2,
      discription:
        "Laserò Lampada con Foto Personalizzata - Regalo San Valentino per Lei",
      price: 35.99,
      imgSrc: productsImg.product2,
      rating: 2,
      cartCount: 0,
    },
  ],
  secondRowProducts: [
    {
      id: 3,
      discription: "Fossil Orologio Colleague da donna, movimento al quarzo",
      price: 43.99,
      imgSrc: productsImg.product3,
      rating: 1,
      cartCount: 0,
    },
    {
      id: 4,
      discription: "Swarovski Collezione Infinity",
      price: 124.85,
      imgSrc: productsImg.product4,
      rating: 4,
      cartCount: 0,
    },
    {
      id: 5,
      discription: "Brubaker Orsacchiotto Orso di Peluche - 100 cm di Altezza",
      price: 39.98,
      imgSrc: productsImg.product5,
      rating: 1,
      cartCount: 0,
    },
    {
      id: 6,
      discription: "Cioccolatini di lusso belgi 19x indulgenza individuale",
      price: 14.9,
      imgSrc: productsImg.product6,
      rating: 4,
      cartCount: 0,
    },
  ],
  thirdRowProducts: [
    {
      id: 7,
      discription: "Swarovski Collezione Lifelong Heart",
      price: 84.0,
      imgSrc: productsImg.product7,
      rating: 4,
      cartCount: 0,
    },
    {
      id: 8,
      discription: "Swarovski Collezione Florere, Regalo per Lei",
      price: 113.3,
      imgSrc: productsImg.product8,
      rating: 1,
      cartCount: 0,
    },
    {
      id: 9,
      discription:
        "KENTIS - Bouquet di 30 tulipani Rosa - Mazzo di Fiori Veri Freschi",
      price: 49.9,
      imgSrc: productsImg.product9,
      rating: 4,
      cartCount: 0,
    },
  ],
};

const productStore = createSlice({
  name: "products",
  initialState: {
    firstRowProducts: data.firstRowProducts,
    secondRowProducts: data.secondRowProducts,
    thirdRowProducts: data.thirdRowProducts,
    cartList: [],
  },
  reducers: {
    AddToCart: (state, action) => {
      for (const k in state) {
        const categoray = state[k];
        if (k === "cartList") {
          continue;
        }
        categoray.forEach((product) => {
          if (product.id === action.payload.id) {
            state.cartList.push(product);
          }
        });
      }
    },
    RemoveFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    ClearCart: (state) => {
      state.cartList = [];
    },
  },
});

export const { AddToCart, RemoveFromCart, ClearCart } = productStore.actions;
export default productStore.reducer;
