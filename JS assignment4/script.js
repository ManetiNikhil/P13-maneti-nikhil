`Use Strict`
class Calculator{
    add(a,b){
        return a+b;
    
    }
    subtract(a,b){
        return a-b;
    }
    multiply(a,b){
        return a*b;
    }
    divide(a,b){
       if(b===0){
        throw new error("plese enter the valid B value")
       }
       else{
        return a%b;
       }
    }
}
class ScientificCalculator extends Calculator {
    square(a){
        return a*a
    }
    cube(a){
        return a*a*a
    }
    power(base, exponent){
        Math.pow(base, exponent)
    }
}
//creatingan instance of ScientificCalculator
const ScientificCalc= new ScientificCalculator();

const add1=Calculator.prototype.add.call(ScientificCalc, 2,5)
console.log("calling add:", add1);
const apply1=Calculator.prototype.subtract.apply(ScientificCalc, [9,5])
console.log("calling sub:", apply1);
const multiplyByTwo=Calculator.prototype.multiply.bind(ScientificCalc, 2);
console.log("calling multiply:", multiplyByTwo(10));
// Using the "bind" method to create a new method "powerOfThree"
const powerOfThree = ScientificCalc.power.bind(ScientificCalc, 4);
// Optional: Call the "powerOfThree" method with an argument
const resultPower = powerOfThree(5);
console.log("Using bind method - Power of Three:", resultPower);


  