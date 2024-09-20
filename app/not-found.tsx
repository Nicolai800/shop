import Link from "next/link"

export default function NotFound(){
    return(
        <div className="flex justify-center items-center gap-3">
            <h1>Page Not Found</h1>
            <Link href="/"><p>Go home</p></Link>
            
        </div>
    )
}