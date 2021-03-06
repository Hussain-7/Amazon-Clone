import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon Clone</title>
            </Head>
            <Header />
            <main className="max-w-screen-2xl mx-auto">
                {/* Banner */}
                <Banner />
                {/* ProductFeed */}
                <ProductFeed products={products} />
            </main>
        </div>
    );
}

// Get >>> https://fakestoreapi.com/products
// Server Side Rendering
export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
    );
    // console.log(products)
    return {
        props: { products },
    };
}
