import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

/**
 * we want to setup a counter
 * after every one second the number increases by 1
 * we want to display that number on screen as it increases
 */

export default function ExampleFive() {
    const [counter, setCounter] = useState(0)

    useEffect (() => {
        const interval = setInterval(() => {
            setCounter(counter + 1)
        }, 1000)

        return() => clearInterval(interval);
    }, [counter])


    return(
        <>
        <Header />
        <main>
            <div stylw={{
                display: "flex",
                margin: "auto",
                textAlign: "center"
            }}>
            <h1>Example Five: Number Counter</h1>
            <h3>Example using setInterval</h3>
            <div>{counter}</div>
            </div>
        </main>
        <Footer />
        </>
    )
}