import { Link } from "react-router-dom"
import '../../commom.scss'
import './styles.scss'

export default function Home() {
    return(
        <section className="column home-padding ">
            <div className="row"> 
                <img src="/images/home.png" />
                <h1 className="text home"> <span className="c4d4dff"> H </span> <span className="c74c365"> o </span> M E</h1>
            </div>

            <div className="column jc-center al-center">
                <div className="card">
                    <h1 className="sequencia"> Primeira Sequência</h1>
                    
                    <div className="row jc-between titulo">
                        <div className="column jc-center al-center">
                            <h2> Açaí </h2>
                            <Link to='/primeiro/ex1'> <button className="text b4d4dff botão"> Exercício 1 </button> </Link>
                        </div>
                        <div className="column jc-center al-center">
                            <h2> Signo </h2>
                            <Link to='/primeiro/ex2'> <button className="text b4d4dff botão"> Exercício 2 </button> </Link>
                        </div>
                        <div className="column jc-center al-center">
                            <h2> Sorveteria </h2>
                            <Link to='/primeiro/ex3'> <button className="text b4d4dff botão"> Exercício 3 </button> </Link>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h1 className="sequencia2"> Segunda Sequência</h1>
                    
                    <div className="row jc-between titulo">
                        <div className="column jc-center al-center">
                            <h2> Salário </h2>
                            <Link to='/segundo/ex4'> <button className="text b74c365 botão"> Exercício 4 </button> </Link>
                        </div>
                        <div className="column jc-center al-center">
                            <h2> Paradas </h2>
                            <Link to='/segundo/ex5'> <button className="text b74c365 botão"> Exercício 5 </button> </Link>
                        </div>
                        <div className="column jc-center al-center">
                            <h2> Temperatura </h2>
                            <Link to='/segundo/ex6'> <button className="text b74c365 botão"> Exercício 6 </button> </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div> Home </div>

            <div>
                <Link to='/primeiro/ex1'> Ex1 </Link>
                <Link to='/primeiro/ex2'> Ex2 </Link>
                <Link to='/primeiro/ex3'> Ex3 </Link>
            </div>

            <div>
                <Link to='/segundo/ex4'> Ex4 </Link>
                <Link to='/segundo/ex5'> Ex5 </Link>
                <Link to='/segundo/ex6'> Ex6 </Link>
            </div> */}

        </section>
    )
};