document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('add-exercise-btn').addEventListener('click', function(event) {
        event.preventDefault();
        addExercise();
        navigateToResultPage();
    });
});

function navigateToResultPage() {
    // Get input values
    var exerciseName = document.getElementById('exercise-name').value;
    var exerciseDuration = document.getElementById('exercise-duration').value;
    var exerciseDescription = document.getElementById('exercise-description').value;

    // Construct the URL with query parameters
    var resultPageURL = 'result.html' +
        '?exerciseName=' + encodeURIComponent(exerciseName) +
        '&exerciseDuration=' + encodeURIComponent(exerciseDuration) +
        '&exerciseDescription=' + encodeURIComponent(exerciseDescription);

    // Redirect to the result page
    window.location.href = resultPageURL;
}

function addExercise() {
    // Get input values (unchanged from your original function)
    var exerciseName = document.getElementById('exercise-name').value;
    var exerciseDuration = document.getElementById('exercise-duration').value;
    var exerciseDescription = document.getElementById('exercise-description').value;

    // Create a new exercise entry (unchanged from your original function)
    var exerciseEntry = document.createElement('div');
    exerciseEntry.innerHTML = '<strong>' + exerciseName + '</strong> - Durasi: ' + exerciseDuration + ' menit<br>' + exerciseDescription;

    // Append the new exercise entry to the exercise-list (unchanged from your original function)
    document.getElementById('exercise-list').appendChild(exerciseEntry);

    // Clear form inputs (unchanged from your original function)
    document.getElementById('exercise-name').value = '';
    document.getElementById('exercise-duration').value = '';
    document.getElementById('exercise-description').value = '';
}
