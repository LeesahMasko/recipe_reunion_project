import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            <h1>Recipe Reunion</h1>
            </div>
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
