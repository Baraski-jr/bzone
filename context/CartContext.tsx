'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartContextType, CartItem, ProductsType } from '@/types';


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductsType) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, totalPrice: (item.price * item.quantity) , quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, totalPrice: product.price }];
      }
    });
  };

  const removeFromCart = (productId: number, reset?: boolean) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === productId);
      if(reset) {
        return prevCart.filter(item => item.id !== productId)
      }
      else if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity -1 } : item );
      }
      else {
        return prevCart.filter(item => item.id !== productId)
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};