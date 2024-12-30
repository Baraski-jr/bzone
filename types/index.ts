export interface coloursType {
    name: string;
    items: number;
}

export interface ColourComponentPropType {
    colour: string;
    colours: coloursType[];
    setColour:  React.Dispatch<React.SetStateAction<string>>;
  }

 export interface PageProps {
    params: Promise<{ productId: string }>;

  }
export interface HeaderComponentProps {
    colour: string;
    logoUrl: string;
}
export interface SubHeroPropType {
    title: string;
    links?: {
        name: string;
        url: string;
    }[];
}
  
export interface sizesType {
    name: string;
    items: number;
}

export interface ThumbnailsType {
    id: number;
    direction?: string;
    images: string[];
    setIndex:  React.Dispatch<React.SetStateAction<number>>;
}

export interface MagnifyImageProps {
    url: string; 
    alt?: string; 
  };

export interface ProductsType {
    id: number;
    title: string;
    description?: string;
    images: string[];
    sizes?: sizesType[];
    colours: coloursType[];
    price: number; 
    inventory: number;
    category?: string,
    isNew?: boolean,
    isFeatured?: boolean,
    isBestSeller?: boolean
}
export interface BreakpointsType {
    640?: { slidesPerView: number }
    768?: { slidesPerView: number }
    1024?: { slidesPerView: number }
    1280?: { slidesPerView: number }
    1536?: { slidesPerView: number }
    1920?: { slidesPerView: number }
};

export interface CrouselType {
    id?: string;
    navigation?: boolean;
    pagination?: string;
    slidePerView?: number;
    breakpoint?: BreakpointsType;
    scrollbar?: boolean;

    products: ProductsType[];
    displayLimit?: number;
}
  
export interface CollectionProps {
    title: string;
    subTitle: string;
    bgUrl: string;
    id: string;
    category: string;
  }
  
export interface NavLinkProps {
    label: string;
    url: string;
}

export interface DesktopHeaderProps {
    colour: string;
    logoUrl: string;
}

export interface shoeSlide {
    id: number,
    name: string,
    image: string,
    color: string,
    price: {
      discountPrice : number,
      originalPrice: number,
    },
}
  
export interface CartItem extends ProductsType {
    quantity: number;
  }
  
export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: ProductsType) => void;
    removeFromCart: (productId: number) => void;
  }