class Dog{
    constructor() {
        
    }
}

class Golden extends Dog{  // extends - nasljeđuje svojstva klase Dog
    constructor(breed) {
        super();            //poziva se konstruktor glavne klase Dog
        this.breed = breed;
    }
}

