
const calculateButton = document.getElementById("car-form-submit");


$(function(){
    const cars= [];
    $.getJSON("source/js/car_data.json", function(data){
          cars.push(data);
         
      }).fail(function(){
          console.log("An error has occurred.");
      });
      console.log("AVAILABLE cars: ", cars);

      const searchForm = document.getElementById("searchForm");
      const searchButton = document.getElementById("searchButton");
      

      searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        const name = searchForm.carName.value;
        const age = searchForm.age.value;
        const minAge = searchForm.minAge.value
        const maxAge = searchForm.maxAge.value
        const price = searchForm.price.value
        const kmDriven = searchForm.kmDriven.value

      

       let filter 
       if(Boolean(name)){
           filter = cars[0].filter((car) => car.name === name);
       }
        if(Boolean(age)){
           filter = cars[0].filter((car) => car.age === age)
       }
        if(Boolean(minAge)){
    
        filter = cars[0].filter((car) => car.minAge === minAge)
       }
        if(Boolean(maxAge)){
    
        filter = cars[0].filter((car) => car.maxAge === maxAge)
       }
        if(Boolean(price)){
           filter = cars[0].filter((car) => car.price === price)
       }
        if(Boolean(kmDriven)){
           filter = cars[0].filter((car) => car.kmDriven === kmDriven)
       }
       console.log("FILTER", filter)
       if(filter.length === 0){
           alert("No car could be found")
           return false
       }


       localStorage.removeItem('filter');
       localStorage.setItem('filter', JSON.stringify(filter));

       location.href = "filtered.html"
    })

})