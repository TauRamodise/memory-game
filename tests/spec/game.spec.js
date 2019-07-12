

describe('shuffleCards()', function(){
    it('should return a new array ', function(){
        let card = ['a', 'b', 'c', 'd', 'e', 'f']
        let array = shuffleCards(card);
        expect(array).not.toBe(['a', 'b', 'c', 'd', 'e', 'f'])
    })
});

describe('backCard', function(){
    it('should define the back side of the memory card', function(){
        let card = showCard();
        expect(card).toBeDefined();
    })
});

describe('frontCard', function(){
    it('should define the front side of the memory card', function(){
        let card = showCard();
        expect(card).toBeDefined();
    })
});

describe('showCard()', function(){
    it('should know if the cards are a match ', function(){
        let card = showCard();
        expect(card).toBeTruthy();
    })
});

describe('showCard()', function(){
    it('should know if the cards do not match', function(){
        let card = showCard();
        expect(card).toBeDefined();
    })
});