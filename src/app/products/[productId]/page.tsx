import { Metadata } from "next"

type Props = {
    params: {
        productId: string;
    }
}
export const generateMetadata = async({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => { 
        setTimeout(() => {
            resolve(`iphone ${params.productId}`)
        },100)
    })
    return {
        title: `Product ${title}`
    }
}


export default async function ProductDetails({ params }: Props) {
    const productId = (await params).productId
    return <h1>Product Details {productId} </h1>
}