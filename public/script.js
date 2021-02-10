$(document).ready(function () {

        function renderWorkoutplans() {
                const workouts = document.querySelector('#workouts');
                // $("#workouts").empty();
                $.ajax({
                        url: "/populatedExercise",
                        method: "GET",
                })
                        .then(dbWorkout => {
                                console.log(dbWorkout)
                                dbWorkout.forEach((exercise) => {
                                        const ul = document.createElement('ul');
                                        ul.innerHTML = `
                        <li>${exercise.name}</li>
                        <li>${exercise.type}</li>
                        <li>${exercise.weight}</li>
                        <li>${exercise.sets}</li>
                        <li>${exercise.reps}</li>
                        <li>${exercise.duration}</li>
                        <li>${exercise.distance}</li>
                        `;

                       workouts.appendChild(ul);});

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
                                name: "#name".val(),
                                type: "#type".val(),
                                weight: "#weight".val(),
                                sets: "#sets".val(),
                                reps: "#reps".val(),
                                duration: "#duration".val(),
                                distance: "#distance".val(),
                                isCardio: "#exercise-name".val(),
                        }
                })
                        .then(dbWorkout => {
                                console.log(dbWorkout)
                                renderWorkoutplans();

                        });

        });
});