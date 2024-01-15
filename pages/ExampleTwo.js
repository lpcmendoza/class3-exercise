import { useEffect } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExampleTwo() {
    
    // the [] makes ure the useEffect only runs once
    useEffect (() => {
        console.log("RUN");
    }, [])
    
    return(
        <>
            <Header />
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer />
        </>
    )
}