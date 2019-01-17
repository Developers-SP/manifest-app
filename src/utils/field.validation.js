class FieldValidation{

    constructor(){}

    undefinedOrHimself(object, atribute){
        return ((object != undefined) && (object[atribute] != undefined)) ? object[atribute] : undefined;
    }
}

module.exports = new FieldValidation();