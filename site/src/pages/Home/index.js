import { Link } from "react-router-dom"

export default function Home() {
    return(
        <section>    
            <div> Home </div>

            <div>
                <Link to='/primeiro/ex1'> Ex1 </Link>
                <Link to='/primeiro/ex2'> Ex2 </Link>
                <Link to='/primeiro/ex3'> Ex3 </Link>
            </div>

            <div>
                <Link to='/segundo/ex4'> Ex4 </Link>
                <Link to='/segundo/ex5'> Ex5 </Link>
                <Link to='/segundo/ex6'> Ex6 </Link>
            </div>

        </section>
    )
};