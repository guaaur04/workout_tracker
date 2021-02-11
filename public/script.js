$(document).ready(function () {

        function renderWorkoutplans() {
                $("#workouts").empty();
                $.ajax({
                        url: "/api/exercise",
                        method: "GET",
                })
                        .then(dbWorkout => {
                                console.log(dbWorkout)
                        //         if (dbWorkout.length !== 0) {
                        //                 dbWorkout.forEach((exercise) => {
                        //                         const workouts = document.querySelector('#my-workouts');
                        //                         const ul = document.createElement('ul');
                        //                         ul.innerHTML = `
                        //                 <li>Ex
                        //                         <li>Exercise name:${exercise.name}</li>
                        //                         <li>Exercise Type:${exercise.type}</li>
                        //                         <li>Weight: ${exercise.weight}</li>
                        //                         <li>Sets : ${exercise.sets}</li>
                        //                         <li>Reps: ${exercise.reps}</li>
                        //                         <li>Duration : ${exercise.duration}</li>
                        //                         <li>Distance :${exercise.distance}</li>
                        //                `;
 
                        //                         workouts.appendChild(ul);
                                        
                        //         });   
                        // }

                })
        }

renderWorkoutplans();

//Loop through excercise and print each 

//Sumbit Form/Button
$("#submit-btn").on("click", function (event) {
        event.preventDefault();
        $.ajax({
                url: "/api/exercise",
                method: "POST",
                data:
                {
                        name: $("#name").val(),
                        type: $("#type").val(),
                        weight: $("#weight").val(),
                        sets: $("#sets").val(),
                        reps: $("#reps").val(),
                        duration: $("#duration").val(),
                        distance: $("#distance").val(),
                        // isCardio: "".val(),
                },
        })
                .then(dbWorkout => {
                        console.log(dbWorkout)
                        renderWorkoutplans();

                });

});
});