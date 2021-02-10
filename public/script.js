$(document).ready(function(){

function renderWorkoutplans (){
        $("#workouts").empty();
        $.ajax({
                url:"/populatedExercises",
                method:"GET",
        })
        .then(dbWorkout => {
                console.log(dbWorkout)
                dbWorkout.forEach((excercise) => {
                        const tr = document.createElement('tr');
                        tr.innerHTML =`
                        <td>${excercise.name}</td>
                        <td>${excercise.type}</td>
                        <td>${excercise.weight}</td>
                        <td>${excercise.sets}</td>
                        <td>${excercise.reps}</td>
                        <td>${excercise.duration}</td>
                        <td>${excercise.distance}</td>`;

                        tbody.appendChild(tr);
                });
        
                }
});

//Loop through excercise and print each 


//Sumbit Form/Button
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
         .then(renderWorkoutplans())
                
})

});
};