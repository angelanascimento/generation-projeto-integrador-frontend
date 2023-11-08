import { Link } from 'react-router-dom';

import './About.css'

function About() {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center h-screen">
            <h2 className="text-slate-900 text-5xl font-bold">Sobre Nós</h2>
                <div className="">
                    
                    <h3>Conexão com Propósito:</h3>
                    <p>O marketplace serve como uma ponte entre consumidores que desejam apoiar causas significativas e ONGs dedicadas a fazer a diferença em áreas como educação, saúde, meio ambiente e muito mais.</p>
                    <h3>Produtos com Impacto:</h3>
                    <p>Os produtos apresentados no "Comércio com Causa" não são apenas produtos comuns, mas itens que carregam uma narrativa de mudança social. Cada compra tem um propósito, ajudando a financiar projetos e iniciativas das ONGs.</p>
                    <h3>Transparência Total:</h3>
                    <p>A transparência é a espinha dorsal do marketplace. Os consumidores podem ver exatamente como seu dinheiro está sendo usado e qual é o impacto de suas compras.</p>
                    <h3>Sustentabilidade e Ética:</h3>
                    <p>O "Comércio com Causa" está comprometido com práticas de negócios sustentáveis e éticas. Isso se reflete na seleção de produtos e nas políticas de comércio justo.</p>
                    <h3>Amplificação do ODS 8:</h3>

                    <p>
                    À medida que a conscientização sobre questões sociais e ambientais cresce, o "Comércio com Causa" se posiciona como uma plataforma pioneira, alinhando os princípios do desenvolvimento sustentável com o poder do comércio. Ele não é apenas um marketplace, mas uma expressão tangível da crença de que, juntos, podemos tornar o mundo um lugar melhor.
                    </p>
                    <p>Se você é um consumidor em busca de produtos com propósito ou uma ONG procurando ampliar seu alcance e impacto, o "Comércio com Causa" é o lugar onde o comércio e a causa se encontram, criando um futuro mais brilhante e inclusivo para todos. Junte-se a essa jornada e faça parte dessa mudança positiva!</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default About;