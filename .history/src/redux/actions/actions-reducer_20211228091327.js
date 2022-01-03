import * as actionTypes from "./actions-type";


const Initstate = {
    products: [
        {
            id: 1,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3145/1024x15368GI6Pa7SBv4UHTg4JQwo3AaC1MWrKkOfiSVxCbF4.jpeg",
            title: "ÁO PHOLO SỌC XANH THỦY THỦ",
            price: "336.000đ",
        },
        {
            id: 2,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/3131/1024x1536Ubkl50DI4Hgb5VwcHhOM6O5cwXvcGhTIumeem1uY.jpeg",
            title: "ÁO POLO LOGO MRSIMPLE",
            price: "250.000đ"
        },
        {
            id: 3,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2302/1024x1536gowTe2KSdtjNiOCwzO15V70YRm8FHMDFAmT7FPU7.jpeg",
            title: "ÁO POLO SỌC XANH DƯƠNG",
            price: "400.000đ"
        },
        {
            id: 4,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2984/1024x1536A6GXufyTdYm7l5RmngGTZUr1XqduESWU4sC5rSc1.jpeg",
            title: "ÁO POLO XÁM FORM REGULAR VẢI 9366",
            price: "425.000đ"
        },
        {
            id: 5,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2920/1024x1536gXJ3iM8Gyy4yBQ6bzFrc8QTmE7ADj2TCBulqV4wK.jpeg",
            title: "ÁO POLO 2 NÚT VẢI COTTON VÀNG",
            price: "256.000đ"
        },
        {
            id: 6,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2918/1024x1536fKOGfbbStt5u5H218GQEX8tNcjbx76ZGokZqJ5pb.jpeg",
            title: "ÁO POLO XANH DƯƠNG",
            price: "350.000đ"
        },
        {
            id: 7,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2731/1024x1536rVeBHzzDhWUcFPu5XZ81ssXxgvadjklhekZLeDBr.jpeg",
            title: "POLO NAM LEN DỆT",
            price: "520.000đ"
        },
        {
            id: 8,
            img: "https://mrsimple.s3.cloud.cmctelecom.vn/images/products/2574/1024x15369Wx22zslYpGn79YsximoXfEWNSmBRsV4qrCBsrdp.jpeg",
            title: "POLO SỌC NGANG ĐEN TRẮNG",
            price: "320.000đ"
        }
    ],
    cart: [],
    currentItem: null,
}

const CartReducer = (state = Initstate, action )  => {
    
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(pro => pro.id === action.payload.id)

            const Incart = state.products.find(item => item.id === action.payload.id ? true :false)

            return {
                ...state,
                cart: Incart
                  ? state.cart.map(( item )=>
                     item.id === action.payload.id ? {...item,qty: item.qty + 1} 
                        : item
                     ) 
                     : [...state.cart,{...item,qty:1}]
              
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id !== action.payload.id
                )
            }
        case actionTypes.QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id ? {...item,qr}
                )
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {

            }
        default:
            return state;
    }
}
export default CartReducer;