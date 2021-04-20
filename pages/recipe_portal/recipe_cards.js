import Image from 'next/image';
import styles from '../../styles/recipe.module.css';

const Recipe_card = ({ recipe }) => {
    return (

        <section className="recipe_card">
        <Image src={`/images/${recipe.name}.png`} width="500" />
        <div className="ingredients_container">

        </div>
        <div className="instructions_container">

        </div>
        </section>
     );
}

export default Recipe_card;
