// function renderWorkoutplants (){
//         $("#days").empty();
//         $.ajax({
//                 url:"/populatedExercises",
//                 method:"GET",
//         })
//         .then(dbData => {
//                 console.log(dbData)
//                 dbData.foreach(plan => {
        
//                 })
//         })
//         $("#excercise").append()
// };

//Sumbit 
$("#submit-btn").on("click", function (event) {
        event.preventDefault();
        $.ajax({
                url:"/submit",
                method: "POST",
                data:
                {
                name: "#exercise-name".val(),
                type: "#type".val(),
                weight: "#weight".val(),
                sets: "#sets".val(),
                reps: "#reps".val(),
                duration: "#duration".val(), 
                distance: "#distance".val(),
                isCardio: "#exercise-name".val(),
                }
                
})
});
