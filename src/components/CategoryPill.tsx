import { useState } from "react";
import categories from "../data/home";
import Button from "./Button";

const CategoryPill = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="p-1 overflow-x-hidden">
            <div className="whitespace-nowrap">
                {categories.map(category => (
                    <Button 
                        className="px-3 py-1 rounded-lg mx-1"
                        onClick={() => setSelectedCategory(category)}
                        variant={selectedCategory === category ? "dark" : "default"}
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    )
}


export default CategoryPill;