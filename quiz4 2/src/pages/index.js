import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {


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
  const ghost = Bunny("Ghost", 30000, ["Inception", " Oceans 11", " Star Wars"], 15000, 23);
  const gaurav = Bunny("Gaurav", 50000000, ["Titanic", "Batman: The Dark Knight", "Wolf of WallStreet"], 1000000, 11 );
  const hana = Bunny("Hana", 45000, ["White Chicks", " Oceans 8", " Mean Girls"], 5000, 13);

  function moneyAmount(n){
    
    var netTotal = 0 ;
    netTotal = n.money - n.studentDebt;
    //console.log(n.name,"'s favorite movies are ", n.favoriteMovies)
    //console.log("the total amount of money they have is: ", netTotal)
    return `The total amount of money ${n.name} has is ${netTotal}`
  }

  function getFavNumber(a, b, c){
    var numbers = [a.primeNumber, b.primeNumber, c.primeNumber]
    var smallestNum = numbers[0];
    var highestNum = numbers[0];
    

    var medianNumber = ((a.primeNumber + b.primeNumber + c.primeNumber) / 3)

    for (var i=0; i < numbers.length; i++){
      if (numbers[i] < smallestNum){
        smallestNum=numbers[i]
      }
    }

    for (var i=0; i < numbers.length; i++){
      if (numbers[i] > highestNum){
        highestNum=numbers[i]
      }
    }

    var numberRange = highestNum - smallestNum;

    return (`The smallest number is: ${smallestNum}\n The median of the numbers is ${medianNumber} \n the number range ${numberRange}` )

    /*console.log("the smallest number is: ", smallestNum);
    console.log("the median of the numbers is: ", medianNumber);
    console.log("the number range is: ", numberRange); */

  }

  function getMovie(a){
    var person = a.favoriteMovies;

    return `${a.name}'s favorite movies are ${person}`

  }


  function collatzConjecture(a){
   
    var numberarr = [];
    var counter = 0;
    var n = a.primeNumber

    console.log(n)

	  while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      numberarr.push(n);
      counter++;
    }
    //console.log(n)
	  return `it takes ${counter} steps for ${a.primeNumber} to get to one and the steps are ${numberarr}`;
    


  }

  console.log(hana.primeNumber)
;
  //getFavNumber(ghost, hana, gaurav);
  //moneyAmount(hana);
  //collatzConjecture(ghost);


  return (
    <div className={styles.container}>
      <h1>
        Bunnies
      </h1>
      <p1>{getFavNumber(ghost, hana, gaurav)}</p1>
      <p1><br></br>{moneyAmount(hana)}</p1>
      <p1><br></br>{collatzConjecture(hana)}</p1>
      <p1><br></br>{getMovie(hana)}</p1>
    </div>
  )
}
