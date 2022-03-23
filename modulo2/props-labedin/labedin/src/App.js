import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/perfil.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import IconeEmail from './img/icone-email.png';
import IconeEndereco from './img/endereco.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Davi" 
          descricao="Ola,meu nome é Davi, tenho 22 anos, sou estudante de programação na labenu.
          Gosto de tecnologia e de games."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="card-pequeno">
        <CardPequeno
          imagem={IconeEmail}
          nome="email:" 
          descricao="davia9a@gmail.com" 
        />
        
        <CardPequeno
          imagem={IconeEndereco} 
          nome="endereço:" 
          descricao="R. João Silva 237 casa.2" 
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="desenvolvedor" 
          descricao="estudante Full Stack Web Developer pela labenu" 
        />
        
        
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
