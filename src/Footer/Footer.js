import React from 'react';
import styled from 'styled-components';
import logoFooter from './tvsjc-logo-footer.png';
import logoTopo from './logo-topo-menu.png';

export const Footer = props => {

    return (
        <Container>
                <Info>
                    <img src= {logoFooter} alt="logo" />
                    <div>
                        <p><strong>CÂMARA MUNICIPAL DE SÃO JOSÉ DOS CAMPOS</strong></p>
                        <p>RUA DESEMBARGADOR FRANCISCO MURILO PINTO, 33 - VILA STA. LUZIA</p>
                        <p>CEP: 12209-535 - <a href="https://goo.gl/maps/TMwszR7jtQq" target="_blank">COMO CHEGAR</a></p>
                        <p>TEL: <strong>+55 (12) 3925-6566</strong></p>
                        <p>HORÁRIO DE FUNCIONAMENTO: <strong>2ª A 6ª FEIRA DAS 8H ÀS 17H30</strong></p>
                    </div>
                </Info>
                <MoreInfo>
                    <img src= {logoTopo} alt="Logo MediaPortal" />
                </MoreInfo>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Garante que os elementos fiquem nos cantos */
  align-items: center; /* Alinha verticalmente os itens */
  font-size: medium;
  background-color: #224358;
  padding: 25px 10rem;
  color: white;
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 5rem; /* Define o tamanho da imagem no canto esquerdo */
  }

  div {
    margin: 0 0 0 20px;

    a {
      color: white;
    }

    a:hover {
      text-decoration: none;
    }
  }
`;

const MoreInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 5rem; /* Define o tamanho da imagem no canto direito */
  }
`;

