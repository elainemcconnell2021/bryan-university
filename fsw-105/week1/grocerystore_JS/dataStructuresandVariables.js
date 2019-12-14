var shopper = {
    name: "Alicia",
    age: 30,
    aldiShopper: true,
    adults: 1,
    childrenAccompanying: 3,
    totalShoppers: function () {
        return (this.adults + this.childrenAccompanying) + "";
    },
    groceryCart: ["milk", "cereal", "eggs", "bread", "ham", "cheese", "soup"]
};
console.log (shopper);