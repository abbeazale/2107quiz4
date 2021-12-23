function Bunny(name, money, favoriteMovies = [], studentDebt, primeNumber){
    return {
        name, 
        money, 
        favoriteMovies, 
        studentDebt, 
        primeNumber
    }
}


//use collatz conjecturte with the prime numbers 
const ghost = Bunny("Ghost", 30000, ["Inception", "Oceans 11", "Star Wars"], 15000, 23);
const gaurav = Bunny("Gaurav", 50000000, ["Titanic", "Batman: The Dark Knight", "Wolf of WallStreet"], 1000000, 11 );
const hana = Bunny("Hana", 45000, ["White Chicks", "Oceans 8", "Mean Girls"], 5000, 13);

function moneyAmount(n){

    var favoriteMovies
    var netTotal = 0 ;
    netTotal = n.money - n.studentDebt;
    console.log(n.favoriteMovies)
    console.log(netTotal)
    return netTotal;
}






