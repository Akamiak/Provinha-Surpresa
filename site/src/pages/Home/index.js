import { Link } from "react-router-dom"
import '../../commom.scss'
import './styles.scss'

export default function Home() {
    return(
        <section className="column home-padding ">
            <div>
                <Link className="row" to='/'> 
                    <img src="/images/home.png" />
                    <h1 className="text home"> 
                        <span className="c4d4dff"> H </span> 
                        <span className="c74c365"> o </span> 
                        <span className="cd31949"> m </span> 
                        <span className=""> e </span> 
                    </h1>
                </Link>
            </div>

            <nav className="column jc-center al-center">
                <div className="card">
                    <h1 className="sequencia borda-azul"> Primeira Sequência</h1>
                    
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
                    <h1 className="sequencia borda-verde"> Segunda Sequência</h1>
                    
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

                <div className="card">
                    <h1 className="sequencia borda-vermelha"> Terceira Sequência</h1>
                    
                    <div className="row jc-around titulo">
                        <div className="column jc-center al-center">
                            <h2> Orçamento </h2>
                            <Link to='/terceiro/ex7'> <button className="text bd31949 botão"> Exercício 7 </button> </Link>
                        </div>
                        <div className="column jc-center al-center">
                            <h2> Cinema </h2>
                            <Link to='/terceiro/ex8'> <button className="text bd31949 botão"> Exercício 8 </button> </Link>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h1 className="sequencia borda-roxa"> Quarta Sequência</h1>
                    
                    <div className="row jc-between titulo">
                        <div className="column jc-center al-center">
                            <h2> Contar Até </h2>
                            <Link to='/quarto/ex9'> <button className="text b857db1 botão"> Exercício 9 </button> </Link>
                        </div>
                        <div className="column jc-center al-center">
                            <h2> Linha </h2>
                            <Link to='/quarto/ex10'> <button className="text b857db1 botão"> Exercício 10 </button> </Link>
                        </div>
                        <div className="column jc-center al-center">
                            <h2> Retângulo </h2>
                            <Link to='/quarto/ex11'> <button className="text b857db1 botão"> Exercício 11 </button> </Link>
                        </div>
                    </div>
                </div>


                <div className="card">
                    <h1 className="sequencia borda-amarela"> Quinta Sequência</h1>
                    
                    <div className="row jc-center titulo">
                        <div className="column jc-center al-center">
                            <h2> Café </h2>
                            <Link to='/quinto/ex12'> <button className="text bF9E76D botão"> Exercício 12 </button> </Link>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h1 className="sequencia borda-laranja"> Sétima Sequência</h1>
                    
                    <div className="row jc-center titulo">
                        <div className="column jc-center al-center">
                            <h2> Alunos </h2>
                            <Link to='/setimo/ex16'> <button className="text bF4A23E botão"> Exercício 16 </button> </Link>
                        </div>
                    </div>
                </div>

            </nav>
        </section>
    )
};