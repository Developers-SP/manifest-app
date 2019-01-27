class FieldValidation{

    constructor(){}

    foreignKeyNotNull(){
        return { foreignKey: { allowNull: false }, onDelete: 'CASCADE' };
    }
    foreignKeyNotNullAndAliasAs(alias){
        return { foreignKey: { allowNull: false }, onDelete: 'CASCADE', as: alias};
    }
}

module.exports = new FieldValidation();