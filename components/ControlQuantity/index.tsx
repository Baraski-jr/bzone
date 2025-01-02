 import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types";

export const ControlQuantity = ({ product}: {product: CartItem} ) => {
    const { addToCart, removeFromCart } = useCart();
    
    const handleQuantity = (type: 'i' | 'd') => {
      if (type === 'i' && product.quantity < product.inventory) { 
        addToCart(product)
      }
      else if (type === 'd' && product.quantity > 1) { 
        removeFromCart(product.id)
      }
      
    };

    return ( 
      <div>     
      {/* Quantity button */}
        <div className="flex flex-2 justify-center items-center border-2 border-slate-100 w-fit h-8">
          <div className="px-3 cursor-pointer hover:bg-slate-300 transition-transform duration-200"
            onClick={() => handleQuantity("d")}
          > -
          </div>
          <div className="px-3">{ product.quantity }</div>
          <div className="px-3 cursor-pointer hover:bg-slate-300 transition-all duration-300"
            onClick={() => handleQuantity("i")}
          > +
          </div>
          </div>
      </div>
    );
}
