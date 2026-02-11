import "../../mia/styles/flip.css"

function Card({ card, isFlipped, isMatched, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-45 aspect-9/10 perspective-[1000px] cursor-pointer"
    >
      <div
        className={`w-full h-full relative transition-transform duration-500 preserve-3d ${
          isFlipped || isMatched ? "" : "rotate-y-180"
        }`}
      >
        {/* card front */}
        <div className="absolute w-full h-full top-0 left-0 backface-hidden">
          <img
            src={card.image}
            alt={card.id}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* card back */}
        <div className="absolute w-full h-full top-0 left-0 backface-hidden rotate-y-180">
          <img
            src="/mia-images/bakside1.jpg"
            alt="Card back"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
