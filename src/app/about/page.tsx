import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'about page',
    description: "about page description",
    openGraph: {
        images: ['']
    }
}

export default function AboutPage(){
    return <div>this is post example project!</div>
}