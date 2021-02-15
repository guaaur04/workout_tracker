
$(document).ready(function () {

        //         function renderWorkoutplans() {
        //                 $("#workouts").empty();
        //                 $.ajax({
        //                         url: "/api/exercise",
        //                         method: "GET",
        //                 })
        //                         .then(dbWorkout => {
        //                                 console.log(dbWorkout)
        //                                 if (dbWorkout.length !== 0) {
        //                                         dbWorkout.forEach((exercise) => {

        //                                                 const workouts = document.querySelector('#my-workouts');
        //                                                 const ul = document.createElement('ul');
        //                                                 ul.innerHTML = `
        //                                         <li>
        //                                                 <li>Exercise name:${exercise.name}</li>
        //                                                 <li>Exercise Type:${exercise.type}</li>
        //                                                 <li>Weight: ${exercise.weight}</li>
        //                                                 <li>Sets : ${exercise.sets}</li>
        //                                                 <li>Reps: ${exercise.reps}</li>
        //                                                 <li>Duration : ${exercise.duration}</li>
        //                                                 <li>Distance :${exercise.distance}</li>
        //                                        `;
        //                                                 //newcard.appendChild(newCard);
        //                                                 workouts.appendChild(ul);

        //                                         });
        //                                 }

        //                         })
        //         }

        //         renderWorkoutplans();

        //         //Sumbit Form/Button
        //         $("#submit-btn").on("click", function (event) {
        //                 event.preventDefault();
        //                 console.log("Input Data", {
        //                         name: $("#name").val(),
        //                         type: $("#type").val(),
        //                         weight: $("#weight").val(),
        //                         sets: $("#sets").val(),
        //                         reps: $("#reps").val(),
        //                         duration: $("#duration").val(),
        //                         distance: $("#distance").val(),
        //                         // isCardio: "".val(),
        //                 })
        //                 $.ajax({
        //                         url: "/api/exercise",
        //                         method: "POST",
        //                         data:
        //                         {
        //                                 name: $("#name").val(),
        //                                 type: $("#type").val(),
        //                                 weight: $("#weight").val(),
        //                                 sets: $("#sets").val(),
        //                                 reps: $("#reps").val(),
        //                                 duration: $("#duration").val(),
        //                                 distance: $("#distance").val(),
        //                                 // isCardio: "".val(),
        //                         },
        //                 })
        //                         .then(dbWorkout => {
        //                                 console.log("Add route", dbWorkout)
        //                                 renderWorkoutplans();

        //                         });

        //         });

        //         // //CREATE A NEW CARD 
        //         // function populateCard() {
        //         //         const card = document.querySelector('#day');
        //         //         newCard.appendChild(renderWorkoutplans())
        //         // };

        //         parentElement = document.querySelector('#day');
        //         console.log(parentElement);


        // });

        //I'm writing this to test deploy !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        function renderWorkoutplans() {
                $("#workouts").empty();
                $.ajax({
                        url: "/api/exercise",
                        method: "GET",
                })
                        .then(dbWorkout => {
                                console.log(dbWorkout)
                                dbWorkout.forEach((workout) => {
                                        // Make a new div each workout
                                        const newDiv = $('<div>', {
                                                style: 'width: 25%; border: 2px solid blue;',

                                        })
                                        const title = $("<h3>", {
                                                text: workout.name
                                        })
                                        const newUl = $("<ul>", { text: 'Exercises' })
                                        newDiv.append(title)



                                        if (dbWorkout.length !== 0) {
                                                dbWorkout.forEach((exercise) => {
                                                        const newLi = $("<li>", {
                                                                text: `Name: ${exercise.name} \n Type: ${exercise.type} \n Sets: ${exercise.weight}\n Reps: ${exercise.reps}\n Duration: ${exercise.duration}\n Distance: ${exercise.distance}\n Is it cardio? ${exercise.isCardio ? "Yes" : "No"}
                                                        `
                                                        })
                                                        newUl.append(newLi);
                                                })
                                                // Form: Add Workouts to Workout Days
                                                const newForm = $("<form>", {
                                                        id: workout._id
                                                })
                                                const newBtn = $("<button>", {
                                                        text: 'Add exercise',
                                                        class: 'update-btn',
                                                        'data-id': workout._id
                                                })
                                                const nameInput = $("<input>", {
                                                        type: 'text',
                                                        id: `name-${workout._id}`,
                                                        placeholder: 'Exercise Name'
                                                })
                                                const typeInput = $("<input>", {
                                                        type: 'text',
                                                        for: `Type-${workout._id}`,
                                                        text: 'Type',
                                                        placeholder: 'Type'
                                                })
                                                const weightInput = $("<input>", {
                                                        type: 'number',
                                                        id: `Weight-${workout._id}`,
                                                        placeholder: 'Weight'
                                                })

                                                const setsInput = $("<input>", {
                                                        type: 'number',
                                                        id: `Sets-${workout._id}`,
                                                        placeholder: 'Sets'
                                                })

                                                const repsInput = $("<input>", {
                                                        type: 'number',
                                                        id: `Reps-${workout._id}`,
                                                        placeholder: 'Reps'
                                                })


                                                const durationInput = $("<input>", {
                                                        type: 'number',
                                                        id: `Duration-${workout._id}`,
                                                        placeholder: 'Duration'
                                                })

                                                const distanceInput = $("<input>", {
                                                        type: 'text',
                                                        id: `Distace-${workout._id}`,
                                                        placeholder: 'Distance'
                                                })

                                                const cardioLabel = $("<input>", {
                                                        type: 'checkbox',
                                                        id: `Cardio-${workout._id}`,
                                                        placeholder: 'Is it cardio?'
                                                        
                                                })

                                                newForm
                                                        .append(nameInput)
                                                        .append(typeInput)
                                                        .append(weightInput)
                                                        .append(setsInput)
                                                        .append(repsInput)
                                                        .append(durationInput)
                                                        .append(distanceInput)
                                                        .append(cardioLabel)
                                                        .append(newBtn)

                                                newDiv
                                                        .append(newUl)
                                                        .append(newForm);


                                                $("#workouts").append(newDiv);
                                        }

                
                                })
                        })
                }
                renderWorkoutplans();

                $("#new-workout").on('submit', (e) => {
                        e.preventDefault();
                        const workoutname = $("#workout-name").val().trim();
                        console.log(workoutname);
                        $.ajax({
                                url: "/api/exercise",
                                method: "POST",
                                data: { name: workoutname }
                        })
                                .then(renderWorkoutplans())
                })

                $("#workouts").on('click', ".update-btn", (e) => {
                        e.preventDefault();
                        const workoutId = e.target.dataset.id;
                        console.log(workoutId);
                        const name = $(`#name-${workoutId}`).val().trim();
                        const type = parseInt($(`#type-${workoutId}`).val());
                        const weight = parseInt($(`#weight-${workoutId}`).val());
                        const sets = parseInt($(`#sets-${workoutId}`).val());
                        const reps = parseInt($(`#reps-${workoutId}`).val());
                        const duration = parseInt($(`#duration-${workoutId}`).val());
                        const distance = parseInt($(`#distance-${workoutId}`).val());
                        const isCardio = $(`#cardio-${workoutId}`).is(":checked");

                        const newObj = {
                                name, type, weight, sets, reps, duration, distance, isCardio, workoutId
                        }

                        console.log(newObj);

                        $.ajax({
                                url: "/api/exercise",
                                method: "POST",
                                data: newObj
                        })
                                .then(dbWorkout => {
                                        console.log(dbWorkout)
                                        renderWorkoutplans();
                                })
                                .catch(err => {
                                        console.log(err);
                                })

                })
        });