let defineCards = (function () {
    const Suits = {
        CLUBS: "\u2663", // ♣
        DIAMONDS: "\u2666", // ♦
        HEARTS: "\u2665", // ♥
        SPADES: "\u2660" // ♠
    };

    const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }
        set face(face) {
            if (!Faces.includes(face)) {
                throw new Error(`Invalid card face: ${face}`);
            }

            this._face = face;
        }

        get suit() {
            return this._suit;
        }
        set suit(suit) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error(`Invalid card suit: ${suit}`);
            }

            this._suit = suit;
        }

        toString() {
            return `${this.face}${this.suit}`;
        }
    }

    return {
        Suits,
        Card
    };
})();

let Card = defineCards.Card;
let Suite = defineCards.Suits;

let card = new Card('Q', Suite.DIAMONDS);
console.log(card.toString());

card.face = 'A';
card.suit = Suite.SPADES;
console.log(card.toString());

let card2 = new Card('1', Suite.DIAMONDS); // will throw error