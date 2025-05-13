import React, { useState } from "react";

export default function InfosPratiques() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [questionText, setQuestionText] = useState("");

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre question ! Nous vous répondrons rapidement.");
    setQuestionText("");
  };

  const faqList = [
    {
      question: "🪪 Faut-il un permis bateau ?",
      answer: "Oui, un permis côtier est requis pour la location de notre bateau.",
    },
    {
      question: "⛽ Le carburant est-il inclus ?",
      answer: "Non, le carburant est à la charge du locataire. Le bateau est remis avec le plein et doit être rendu avec le plein.",
    },
    {
      question: "👨‍✈️ Peut-on louer avec un skipper ?",
      answer: "Oui, sur demande préalable, un skipper professionnel peut vous accompagner (tarif en supplément).",
    },
    {
      question: "📍 Où se fait le départ ?",
      answer: "Toutes nos locations partent de la mise à l’eau de l’Estaque à Marseille. Un parking gratuit est à proximité.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Barre de navigation */}
      <nav className="bg-white shadow-md px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/logo petit.png" alt="Logo ShareLoc'sHome" className="h-12 w-auto" />
          </div>
          <ul className="flex space-x-6 text-gray-900 font-medium text-sm md:text-base">
            <li><a href="/" className="hover:text-[#2389c6] transition">Accueil</a></li>
            <li><a href="/#services" className="hover:text-[#2389c6] transition">Nos services</a></li>
            <li><a href="/#about" className="hover:text-[#2389c6] transition">À propos</a></li>
            <li><a href="/InfosPratiques" className="hover:text-[#2389c6] transition">Infos Pratiques</a></li>
            <li><a href="/#reservation" className="hover:text-[#2389c6] transition">Réservation</a></li>
          </ul>
        </div>
      </nav>

      {/* Titre principal + introduction */}
      <header className="text-center px-4 pt-5 pb-1 bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Informations pratiques</h1>
      </header>

      {/* Section Infos pratiques */}
      <section id="info" className="py-5 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">📍 Point de départ</h2>
        <p className="text-center text-lg mb-4">
          Les départs se font depuis la <strong>mise à l'eau de l'Estaque</strong>, à Marseille.
        </p>
        <p className="text-center text-sm text-gray-600 mb-8">
          Un parking gratuit est disponible à proximité pour plus de confort.
        </p>
        <div className="flex justify-center mb-6">
          <iframe
            title="Carte Estaque"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11603.130333271789!2d5.284179036356831!3d43.36065821753796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9e9c9b5efa8cf%3A0x3ee0dbce5adea5c7!2sMise%20a%20l&#39;eau%20de%20l&#39;estaque!5e0!3m2!1sfr!2sfr!4v1746991110869!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">

          <a
  href="https://waze.com/ul?ll=43.3713784,5.3033208&navigate=yes"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#33CCFF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1CA8DD] transition text-center"
>
  🚗 Itinéraire Waze
</a>

        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-10 px-6 max-w-4xl mx-auto" id="faq">
        <h2 className="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <div key={index} className="border rounded-xl p-4 shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center font-semibold text-lg text-blue-900"
              >
                {faq.question}
                <span>{activeFAQ === index ? "−" : "+"}</span>
              </button>
              {activeFAQ === index && <p className="mt-3 text-gray-700">{faq.answer}</p>}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg">Vous ne trouvez pas votre question ? Posez-la nous :</p>
          <form onSubmit={handleQuestionSubmit} className="max-w-xl mx-auto flex flex-col gap-4">
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Écrivez votre question ici..."
              className="p-3 border rounded-xl"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#2389c6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#216a95] transition"
            >
              Envoyer la question
            </button>
          </form>
        </div>
      </section>

    {/* Retour à l'accueil button*/}
      <div className="text-center mt-12">
  <a href="/" className="text-blue-700 underline hover:text-blue-500">
    ← Retour à l'accueil
  </a>
</div>
 {/* Ajouter le boutton reservation */}

 
      {/* Footer */}
      <footer className="bg-[#216a95] text-white text-center py-6 mt-12">
        <p>© {new Date().getFullYear()-1} ShareLoc'sHome • Tous droits réservés</p>
        <p className="text-sm mt-2">Contact : contact@sharelocshome.com | 06 59 07 47 25</p>
      </footer>


    </div>
    
    
  );
  
}
