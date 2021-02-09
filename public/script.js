function renderWorkout (){
        $("#exercise").empty();
        $.ajax({
                url:"/populatedExercises",
                method:"GET",
        })
        .then(dbData => {
                console.log(dbData)
                dbData.foreach(plan => {
        
                })
        })

        $("#excercise").append()
};

