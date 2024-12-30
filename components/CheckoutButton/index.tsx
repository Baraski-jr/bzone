import Link from "next/link";

type Props = {
 
}
export const CheckoutBtn = ({}: Props) => {
    return ( 
        <Link
            href={'/checkout'}
            className="block w-full text-center text-sm bg-black text-white p-3">
            Check out
        </Link>
    );
}