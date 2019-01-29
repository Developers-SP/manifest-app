class FieldValidation{

    constructor(){}

    foreignKeyNotNull(){
        return { foreignKey: { allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE' };
    }
    foreignKeyNotNullAndAliasAs(alias){
        return { foreignKey: { allowNull: false }, onDelete: 'CASCADE', onUpdate: 'CASCADE', as: alias};
    }
}

module.exports = new FieldValidation();