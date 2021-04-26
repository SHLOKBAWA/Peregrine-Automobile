



const calculator = document.getElementById("calculatorForm");
const priceCalculator = document.getElementById("price-calc");







priceCalculator.addEventListener("click", (e) => {
    e.preventDefault();
    const make = calculator.carMake.value;
    const model = calculator.carModel.value;
    const year = calculator.yearMake.value;
    const accidents = calculator.accidents.value;
    const kms = calculator.kilometres.value;

   if(make === "" || year === "" || kms === "" || accidents === "" || model === ""){
    alert("All fields are required")
    
   }else{
    const values = {
        make: make,
        model: model,
        year: year,
        accidents: accidents,
        kms: kms
    }
    const yearsRemaining = 2021-year;
    const value = 700 * yearsRemaining;
    const accidentDepreciation = 1000 * accidents;


    const resultingValue = value - accidentDepreciation;
    console.log(`Value of  car is: `+resultingValue)
    console.log(values);
    document.getElementById("calculatorForm").style.display = "none";
    localStorage.setItem('carWorth', JSON.stringify(resultingValue));
    location.href = "results.html"
   }

})

