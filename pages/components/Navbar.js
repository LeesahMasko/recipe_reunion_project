import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <Link href="/"><a> Home</a></Link>
            <Link href="/about"><a> My Story</a></Link>
            <Link href="/recipe_portal/recipe_cards"><a> My Recipes</a></Link>
            <Link href="/recipe_portal"><a> My Cookbooks</a></Link>
            <Link href="/recipe_portal"><a> Find People</a></Link>
            <Link href="/recipe_portal"><a> Find Foods!</a></Link>

        </nav>
     );
}

export default Navbar ;
