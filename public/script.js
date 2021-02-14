const Exercise = require("../models/exercise");

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
                $("#weeks").empty();
                $.ajax({
                        url: "/populatedworkouts",
                        method: "GET",
                })
                        .then(dbWorkout => {
                                console.log(dbWorkout)
                                dbWorkout.forEach(exercise => {
                                        // make a new div each workout
                                        const newDiv = $("<div>", {
                                                style: 'width: 25%; border: 2px solid blue',
                                        })
                                        const title = $("<h3>", {
                                                text: exercise.name
                                        })
                                        const newUl = $("<ul>", { text: 'Exercises' })
                                        newDiv.append(title)


                                        // loop through meals and print each
                                        exercise.workouts.forEach(exercise => {
                                                const newLi = $("<li>", {
                                                        text: `Name: ${exercise.name}\nType: ${exercise.type}\nSets: ${exercise.weight }\nReps: ${exercise.reps}\nDuration: ${exercise.duration}\nDistance: ${exercise.distance}\nIs it cardio? ${exercise.isCardio? "Yes" : "No"}
                                                        `
                                                })
                                                newUl.append(newLi);
                                        })
                                        // FORM TO ADD NEW MEALS TO THE WEEK
                                        const newForm = $("<form>", {
                                                id: exercise._id
                                        })
                                        const newBtn = $("<button>", {
                                                text: 'Add exercise',
                                                class: 'update-btn',
                                                'data-id': exercise._id
                                        })
                                        const nameInput = $("<input>", {
                                                type: 'text',
                                                id: `name-${exercise._id}`,
                                                placeholder: 'Exercise Name'
                                        })
                                        const typeInput = $("<label>", {
                                                type: 'text',
                                                for: `serving-${exercise._id}`,
                                                text: 'Number of servings: '
                                        })
                                        const weightInput = $("<input>", {
                                                type: 'number',
                                                id: `serving-${exercise._id}`
                                        })

                                        const setsInput = $("<input>", {
                                                type: 'number',
                                                id: `serving-${exercise._id}`
                                        })

                                        const repsInput = $("<input>", {
                                                type: 'number',
                                                id: `serving-${exercise._id}`
                                        })
                
                
                                        const durationInput = $("<input>", {
                                                type: 'number',
                                                id: `tasty-${exercise._id}`
                                        })
                                
                                        const distanceInput = $("<input>", {
                                                type: 'checkbox',
                                                id: `hotdog-${exercise._id}`
                                        })

                                        const cardioLabel = $("<input>", {
                                                type: 'checkbox',
                                                id: `Cardio-${exercise._id}`
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
                                })
                        })
        }
        renderWorkoutplans();

        $("#new-workout").on('submit', (e) => {
                e.preventDefault();
                const workoutname = $("#workout-name").val().trim();
                console.log(workoutname);
                $.ajax({
                        url: "/api/weeks",
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
                const isCardio = $(`#cardio-${weekId}`).is(":checked");

                const newObj = {
                        name, type, weight, sets, reps, duration, distance, isCardio, workoutId
                }

                console.log(newObj);

                $.ajax({
                        url: "/api/workouts",
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