import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>Ooops...</h1>
            <h2>Looks like we can't find that page.  Sorry about that! </h2>
            <p>Go back to the <Link href="/"><a>Home</a></Link></p>
        </div>
     );
}

export default NotFound;
