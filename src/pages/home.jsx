import React from 'react';
import Navbar from '../components/navbar';
import { Globe } from 'lucide-react';
import Card from '../components/card';
import quarto1 from '../assets/img/quartoHotel1.jpg';
import quarto2 from '../assets/img/quartoHotel2.jpg';
import quarto3 from '../assets/img/quartoHotel3.jpg';
function Home() {
    const small = 'Por apenas'

    //Inicio dos dados mock , substituir pelos dados do back com uma api para buscar todos os dados -- TODO
    const q1 = {
      id: 1,
      url: quarto1,
      alt: "Quarto 1",
      title: "Rua Imaculada Conceição",
      walking: "Ao lado da PUCPR",
      preco: "300 R$/Mês",
    }
    const q2 = {
      id: 2,
      url: quarto2,
      alt: "Quarto 2",
      title: 'Rua André de Barros',
      walking: 'A 150 metros da UPPR',
      preco: '400 R$/Mês',
    }
    const q3 = {
      id: 3,
      url: quarto3,
      alt: "Quarto 3",
      title: 'Rua Mauá',
      walking: 'A 300 metros do estádio Couto Pereira',
      preco: "500 R$/Mês",
    }
  return (
    <>
      <Navbar />
      <div className="ms-4 mt-4">
        <h1 className="fw-bold display-4 ms-4">Encontre seu</h1>
        <div className="d-flex align-items-center">
          <h1 className="fw-bold display-4 me-3 mb-0 ms-4">lugar no mundo</h1>
          <Globe size={55} />
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row d-flex align-items-center justify-content-around mb-4">
        <Card imageUrl={q1.url} imageAlt={q1.alt} title={q1.title} walkingText={q1.walking} smallText={small}
        largeText={q1.preco} href={`/quarto/${q1.id}`} className='col-3' />

        <Card imageUrl={q2.url} imageAlt={q2.alt} title={q2.title} walkingText={q2.walking} smallText={small}
        largeText={q2.preco} href={`/quarto/${q2.id}`} className='col-3' />

        <Card imageUrl={q3.url} imageAlt={q3.alt} title={q3.title} walkingText={q3.walking} smallText={small}
        largeText={q3.preco} href={`/quarto/${q3.id}`} className='col-3' />
        </div>
        </div>
    </>
  );
}

export default Home;



