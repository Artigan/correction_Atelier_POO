class Car extends Vehicule {
    constructor(brand, model, type){   
        super(brand, model);
        this.type = type;
    }

    getBrandModel() {
        console.log('brand : ' + this.brand + ', model : '  + this.model + ', type : '  + this.type);
    }
}