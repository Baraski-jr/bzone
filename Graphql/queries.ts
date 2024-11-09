import { gql } from '@apollo/client';

export const PRODUCTSBYID = gql`
    query Products($categoryId: ID!) {
    products(categoryId: $categoryId) {
        id
        title
        price
        images
    }
    }
    `;

