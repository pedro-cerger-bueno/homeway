import BookingCard from "../components/bookingCard";
import CardDetails from "../components/CardDetails";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import GaleriaQuarto from "../components/galeriaQuarto";
import quarto from '../assets/img/quarto.jpg';
import banheiro from '../assets/img/banheiro.jpg';
import estudos from '../assets/img/local_estudos.jpg';
import puc from '../assets/img/pucpr.jpg';
function Quarto() {
  const navigate = useNavigate();
 // TODO -- Buscar com api os dados especificos do quarto e substituir aqui
  const galleryImages = [
  {
    id: 1,
    src: quarto,
    alt: "Quarto disponível",
    caption: "Ambiente aconchegante e mobiliado"
  },
  {
    id: 2,
    src: banheiro,
    alt: "Banheiro",
    caption: "Banheiro privativo com chuveiro elétrico"
  },
  {
    id: 3,
    src: estudos,
    alt: "Local para estudos",
    caption: "Espaço tranquilo para foco e produtividade"
  },
  {
    id: 4,
    src: puc,
    alt: "Perto da faculdade",
    caption: "Localização privilegiada ao lado da sua faculdade"
  }
];

  const cardData = {
    title: "Rua Imaculada Conceição",
    walkingText: "Ao lado da PUCPR",
    services: [
      { icon: "Bath", text: "1 banheiro" },
      { icon: "BedSingle", text: "1 quarto" },
      { icon: "BookOpenCheck", text: "Local de estudos" },
      { icon: "DollarSign", text: "Valor abaixo da média" },
    ],
    averageValue: 250
  };

  return (
    <div className="bg-light">
      <Navbar />
      <div className="bg-light h-100 w-100">
        <button
          className="btn btn-md py-4 ps-5"
          onClick={() => navigate('/home')}
          aria-label="Voltar"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="d-flex">
          <GaleriaQuarto images={galleryImages} />
        </div>
        <div className="container-fluid d-flex min-vh-40 py-5">
          <CardDetails cardData={cardData} />
          <BookingCard averageValue={cardData.averageValue} />
        </div>
      </div>
    </div>
  );
}

export default Quarto;