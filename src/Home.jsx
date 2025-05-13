import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

  
export default function App() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [questionText, setQuestionText] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }
}, [location]);


  const galleryImages = ["/images/2.png", "/images/3.png","/images/4.png"];

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqList = [
    {
      question: "🪪 Faut-il un permis bateau ?",
      answer: "Oui, un permis côtier est requis pour la location de notre bateau.",
    },
    {
      question: "⛽ Le carburant est-il inclus ?",
      answer:
        "Non, le carburant est à la charge du locataire. Le bateau est remis avec le plein, il doit être rendu avec le plein également.",
    },
    {
      question: "👨‍✈️ Peut-on louer avec un skipper ?",
      answer:
        "Oui, sur demande préalable, un skipper professionnel peut vous accompagner (tarif en supplément).",
    },
    {
      question: "📍 Où se fait le départ ?",
      answer:
        "Toutes nos locations partent de la mise à l’eau de l’Estaque à Marseille. Un parking gratuit est à proximité.",
    },
  ];

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre question ! Nous vous répondrons rapidement.");
    setQuestionText("");
  };

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-3xl text-blue-900 cursor-pointer z-10"
      onClick={onClick}
    >
      ➤
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-3xl text-blue-900 cursor-pointer z-10"
      onClick={onClick}
    >
      ⬅
    </div>
  );
}


  
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Barre de navigation */}
      <nav className="bg-white shadow-md px-8 py-4 sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    
    {/* Logo + sans nom */}
    <div className="flex items-center gap-4">
      <img src="/images/logo petit.png" alt="Logo ShareLoc'sHome" className="h-12 w-auto" />
    </div>

    {/* Menu de navigation */}
    <ul className="flex space-x-6 text-gray-900 font-medium text-sm md:text-base">
      <li><a href="#accueil" className="hover:text-[#2389c6] transition">Accueil</a></li>
      <li><a href="#services" className="hover:text-[#2389c6] transition">Nos services</a></li>
      <li><a href="#about" className="hover:text-[#2389c6] transition">À propos</a></li>    
      <li><a href="/InfosPratiques" className="hover:text-[#2389c6] transition">Infos pratiques</a></li>
      <li><a href="#reservation" className="hover:text-[#2389c6] transition">Réservation</a></li>
    </ul>
  </div>
</nav>

{/* Section Accueil */}
<section
  id="accueil"
  className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: "url('/images/erevine.jpg')" }}
>
  {/* Filtre sombre en arrière-plan 10% */}
  <div className="absolute inset-0 bg-black/10 z-0"></div>

  {/* Contenu aligné à droite */}
  <div className="relative z-10 max-w-6xl w-full px-6 flex justify-end">
  <div className="bg-white bg-opacity-90 rounded-3xl p-8 max-w-md text-blue-900 shadow-xl flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
      Naviguez, explorez, profitez : votre bateau vous attend.
      </h1>
      <p className="text-base md:text-lg mb-6 text-gray-700">
      Réservez facilement un bateau fiable et tout confort, 
      au départ de l'estaque. Idéal pour une sortie en mer entre amis ou en famille.
      </p>
      <a href="#reservation">
      <button className="bg-[#216a95] hover:bg-[#2389c6] text-white px-6 py-3 rounded-xl font-semibold transition">
  Voir les disponibilités
</button>

      </a>
    </div>
  </div>
</section>

{/* Section Nos services */}
<section id="services" className="scroll-mt-40 py-10 px-6 max-w-6xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Nos services</h2>
  <div className="grid md:grid-cols-3 gap-10 text-center">
    
    <div className="bg-white p-6 rounded-xl shadow-lg border">
      <div className="text-4xl mb-4">🛥️</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Location de bateau tout équipé</h3>
      <p className="text-gray-700">Notre Zodiac Medline 2C est prêt à naviguer : GPS, bimini, musique, douchette et tout le matériel de sécurité fourni.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg border">
      <div className="text-4xl mb-4">🧭</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Briefing & itinéraires personnalisés</h3>
      <p className="text-gray-700">Avant votre départ, nous vous donnons les meilleurs conseils pour découvrir les calanques et criques en toute sécurité.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg border">
      <div className="text-4xl mb-4">👨‍✈️</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Skipper disponible</h3>
      <p className="text-gray-700">Pas de permis ou envie de se détendre ? Un skipper expérimenté peut vous accompagner (sur demande).</p>
    </div>

   {/* <div className="bg-white p-6 rounded-xl shadow-lg border">
      <div className="text-4xl mb-4">⛽</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Carburant non inclus</h3>
      <p className="text-gray-700">Le bateau est livré avec le plein, vous le ramenez plein. Simple et transparent.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg border">
      <div className="text-4xl mb-4">📍</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Départ depuis l’Estaque</h3>
      <p className="text-gray-700">Un emplacement facile d’accès avec parking gratuit à proximité pour plus de confort.</p>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg border">
      <div className="text-4xl mb-4">☎️</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-800">Service client disponible</h3>
      <p className="text-gray-700">Tomas reste disponible avant, pendant et après votre location pour répondre à toutes vos questions.</p>
    </div>*/}
    
  </div>
  <div className="mt-16 bg-blue-50 rounded-3xl p-10 text-center shadow-xl" data-aos="fade-up">
  <h3 className="text-2xl font-bold mb-6 text-gray-900">Événements sur-mesure</h3>
  <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
    Offrez une expérience inoubliable sur l’eau pour tous vos moments forts. Nous organisons des sorties personnalisées pour célébrer :
  </p>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-blue-800 font-semibold">
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">🎉 EVG / EVJF</div>
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">🎂 Anniversaire</div>
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">🏢 Team Building</div>
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">🌇 Sortie coucher de soleil</div>
  </div>
</div>
</section>

{/* Section A propos */}
      <section id="about" 
      className="scroll-mt-40 py-10 px-6 max-w-5xl mx-auto" 
      data-aos="fade-up">

  <h2 className="text-3xl font-bold mb-6 text-center">À propos du bateau</h2>
  <div className="grid md:grid-cols-2 gap-10 items-center">
  <div className="max-w-xl mx-auto">
  <div className="max-w-xl mx-auto flex gap-4">

         {/* Miniatures à gauche */}
  <div className="flex flex-col justify-center gap-3">
    {galleryImages.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Miniature ${index + 1}`}
        className={`h-20 w-20 object-cover rounded-md cursor-pointer border-2 ${
          photoIndex === index ? "border-blue-600" : "border-transparent"
        }`}
        onClick={() => setPhotoIndex(index)}
      />
    ))}
  </div>

        {/* Image principale */}
  <div className="relative cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
    <img
      src={galleryImages[photoIndex]}
      alt="Zoom"
      className="rounded-xl shadow-lg max-h-[350px] object-cover"
    />
  </div>
</div>

</div>

    <div className="flex flex-col justify-center">
      <p className="mb-4"><strong>Modèle :</strong> Zodiac Medline 2C</p>
      <p className="mb-4"><strong>Motorisation :</strong> 115CV Yamaha</p>
      <p className="mb-4"><strong>Capacité :</strong> 6 à 8 personnes</p>
      <p className="mb-4"><strong>Équipements :</strong> Bimini, échelle de bain, GPS/Sondeur, coffre de rangement, musique bluetooth, douchette</p>
      <p className="mb-4"><strong>Permis requis :</strong> Oui</p>
      <p className="mb-4"><strong>Départ :</strong> Mise à l'eau de l'Estaque, Marseille</p>

      <a
  href="#reservation"
  className="bg-[#216a95] hover:bg-[#2389c6] text-white px-6 py-3 rounded-xl font-semibold transition flex flex-col items-center text-center"
>
  Réserver maintenant
</a>

    </div>
  </div>
</section>


{/* Section avis */}
<section
  id="avis"
  className="py-10 px-6 max-w-6xl mx-auto text-center"
  data-aos="fade-up"
>
  <h2 className="text-3xl font-bold mb-10 text-gray-900">⭐ Avis clients ⭐</h2>
  <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
    Consultez les retours de nos clients sur nos plateformes partenaires :
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Samboat */}
    <a
      href="https://www.samboat.fr/location-bateau/carry-le-rouet/semi-rigide/169622"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
    >
      <div className="mb-4 text-center">
        <img
          src="images/Logo_SamBoat_2.png"
          alt="Samboat"
          className="h-10 mx-auto"
        />
      </div>
      <p className="text-gray-700 text-center">
        Lisez les témoignages de nos locataires, découvrez leurs expériences et
        réservez votre prochaine sortie en toute confiance.
      </p>
    </a>

    {/* Click&Boat */}
    <a
      href="https://www.clickandboat.com/location-bateau/l-estaque/semi-rigide/zodiac-medline-ii-qp8zb95?isPreview=1&url=https:%2F%2Fwww.clickandboat.com%2Faccount%2Flisting%2Fedit%2F161483:2"
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white border rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
    >
      <div className="flex justify-center mb-4">
        <img
          src="/images/Logo_click_&_boat.png"
          alt="Click&Boat"
          className="h-8 mx-auto"
        />
      </div>
      <p className="text-gray-700 text-center">
        Consultez nos avis certifiés, les commentaires laissés par nos clients
        et la note moyenne de notre bateau.
      </p>
    </a>
  </div>
</section>


 {/* Section Tarifs*/}
 <section id="tarifs" className="py-10 px-6 max-w-6xl mx-auto " data-aos="fade-up">
 <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Tarifs</h2>
  <p className="text-center text-gray-600 mb-8">
    Découvrez nos formules à la journée ou demi-journée. Carburant non inclus. Skipper en option.
  </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Carte Demi-journée */}
          <div className="bg-white border-2 rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Demi-journée</h3>
            <p className="text-4xl font-bold text-gray-900 mb-1">300€</p>
            <p className="text-sm text-gray-500 mb-4">TTC</p>

            <ul className="text-gray-700 space-y-2 text-sm">
              <li>🕐 9h00 - 13h00 ou 13h30 - 17h30</li>
              <li>📍 Départ mise à l'eau de l'estaque</li>
              <li>💳 Acompte 25% requis</li>
              <li>⛽ Carburant non inclus</li>
            </ul>
          </div>

          {/* Carte Journée */}
          <div className="bg-white border-2 border-[#D4AF37] rounded-2xl shadow-lg p-6 text-center ">
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Journée complète</h3>
            <p className="text-4xl font-bold text-gray-900 mb-1">450€</p>
            <p className="text-sm text-gray-500 mb-4">TTC</p>

            <ul className="text-gray-700 space-y-2 text-sm">
              <li>🕘 9h00 - 17h00</li>
              <li>📍 Départ mise à l'eau de l'estaque</li>
              <li>💳 Acompte 25% requis</li>
              <li>⛽ Carburant non inclus</li>
            </ul>
          </div>

          {/* Carte Sunset */}
          <div className="bg-white border-2 rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Sortie Sunset</h3>
            <p className="text-4xl font-bold text-gray-900 mb-1">220€</p>
            <p className="text-sm text-gray-500 mb-4">TTC</p>

            <ul className="text-gray-700 space-y-2 text-sm">
              <li>🌇 18h30 - 21h00</li>
              <li>📍 Départ mise à l'eau de l'estaque</li>
              <li>💳 Acompte 25% requis</li>
              <li>⛽ Carburant non inclus</li>
            </ul>
          </div>
        </div>
      </section>

{/* Section reservation */}
<section id="reservation" className="py-10 px-6 max-w-6xl mx-auto" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Réserver votre sortie</h2>
{/* Texte d'introduction */}
<p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
    Réservation simple et rapide : par <strong>WhatsApp</strong> pour un échange direct, ou via nos <strong>plateformes partenaires</strong> pour consulter le calendrier des disponibilités en temps réel.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* WhatsApp */}
    <a
      href="https://wa.me/33620426968"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition p-6 flex justify-center items-center"
    >
      <img src="/images/WhatsApp.jpg" alt="WhatsApp" className="h-12 w-auto" />
    </a>

    {/* Samboat */}
    <a
      href="https://www.samboat.fr/location-bateau/carry-le-rouet/semi-rigide/169622"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition p-6 flex justify-center items-center"
    >
      <img src="/images/Logo_SamBoat_2.png" alt="Samboat" className="h-10 w-auto" />
    </a>

    {/* Click&Boat */}
    <a
      href="https://www.clickandboat.com/location-bateau/l-estaque/semi-rigide/zodiac-medline-ii-qp8zb95"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition p-6 flex justify-center items-center"
    >
      <img src="/images/Logo_click_&_boat.png" alt="Click&Boat" className="h-10 w-auto" />
    </a>

  </div>
</section>

     
      {/* zoom sur photo dans a propos */}
      {lightboxOpen && (
  <Lightbox
    mainSrc={galleryImages[photoIndex]}
    nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
    prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
    onCloseRequest={() => setLightboxOpen(false)}
    onMovePrevRequest={() =>
      setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)
    }
    onMoveNextRequest={() =>
      setPhotoIndex((photoIndex + 1) % galleryImages.length)
    }
  />
)}

       {/* Footer */}
      <footer className="bg-[#216a95] text-white text-center py-3 mt-12">
        <p>© {new Date().getFullYear()-1} ShareLoc'sHome • Tous droits réservés</p>
        <p className="text-sm mt-2">Contact : contact@sharelocshome.com | 06 59 07 47 25</p>
      </footer>
    </div>
  );
}
