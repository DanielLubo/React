import { ItemCounter } from "./shopping-cart/ItemCounter"
import type { ItemInCart } from "./Interface"

const itemsInCart: ItemInCart[] = [
    { productName: "Minecraft", productUnits: 2 },
    { productName: "Valorant", productUnits: 1 },
    { productName: "LoL", productUnits: 3 },
];

export const FirstSetpsApp = () => {
    return (
        <>
            <h1>Carrito de compras</h1>
            {
                itemsInCart.map(({ productName, productUnits }) => (
                    <ItemCounter key={productName} name={productName} units={productUnits} />
                ))
            }
        </>
    )
}