import {CoffeeType} from "../../../../@types/coffee";
import {
    CoffeeActionsWrapper,
    CoffeeCardContainer,
    CoffeeCategories,
    CoffeeCategory,
    CoffeeOrder,
    CoffeePricing
} from "./styles.ts";
import {useEffect, useState} from "react";
import {QuantityInput} from "../../../../components/Form/QuantityInput";
import {ShoppingCart, Check} from "phosphor-react";

interface CoffeeCardProps {
    coffee: CoffeeType
}

export function CoffeeCard({coffee}:CoffeeCardProps) {
    const [quantity, setQuantity] = useState(1);
    const [isItemAdded, setIsItemAdded] = useState(false);

    function incrementQuantity() {
        setQuantity((state) => state + 1)
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity((state) => state - 1)
        }
    }

    function handleAddItem() {
        // addItem({ id: coffee.id, quantity })
        setIsItemAdded(true)
        setQuantity(1)
    }

    useEffect(() => {
        let timeout: number

        if (isItemAdded) {
            timeout = setTimeout(() => {
                setIsItemAdded(false)
            }, 1000)
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isItemAdded])

    return (
        <CoffeeCardContainer>
            <img src={coffee.imagePath} alt={coffee.name}/>
            <CoffeeCategories>
                {coffee.categories.map((category: string) => (
                    <CoffeeCategory key={category}>{category}</CoffeeCategory>
                ))}
            </CoffeeCategories>
            <h4>{coffee.name}</h4>
            <p>{coffee.description}</p>
            <CoffeeActionsWrapper>
                <CoffeePricing>
                    <span>$</span>
                    {coffee.price.toFixed(2)}
                </CoffeePricing>
                <CoffeeOrder $itemAdded={isItemAdded}>
                    <QuantityInput
                        quantity={quantity}
                        incrementQuantity={incrementQuantity}
                        decrementQuantity={decrementQuantity}
                    />

                    <button disabled={isItemAdded} onClick={handleAddItem}>
                        {isItemAdded ? (
                            <Check weight="fill" size={22} />
                        ) : (
                            <ShoppingCart size={22} />
                        )}
                    </button>
                </CoffeeOrder>
            </CoffeeActionsWrapper>
        </CoffeeCardContainer>
    );
}
