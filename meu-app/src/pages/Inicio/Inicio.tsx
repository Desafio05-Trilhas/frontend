import { imagens } from '../../assets/img';     
import Botao from '../../components/Botao/Botao';
import { useNavigate } from 'react-router-dom'
import sytleInicio from './Inicio.module.css'

const Inicio = () => {
    const navegarPagina = useNavigate();

    return (
        <>
         
          <main className={sytleInicio.conteudoPrincipal}>
            <div className={sytleInicio.imagemLogo}>
            <img src={imagens.logoRecicla} alt="Imagem" className={sytleInicio.imagemInst} />
            </div>

            <Botao className={sytleInicio.botaoaAcessarPagina} onClick={() => navegarPagina('/ColetaSeletiva')}>
              {'Acessar Página'}
            </Botao>
            
           
          </main>
        </>
    );
};

export default Inicio;
