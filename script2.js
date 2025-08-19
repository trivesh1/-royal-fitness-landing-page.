const routineDisplay = document.getElementById("routineDisplay");
const routineList = document.getElementById("routineList");

// Define workout routines for each goal
const workoutRoutines = {
    strength: [
        { day: "Monday", exercise: "Push-Ups - 3 sets of 15 reps" },
        { day: "Wednesday", exercise: "Squats - 3 sets of 20 reps" },
        { day: "Friday", exercise: "Deadlifts - 3 sets of 10 reps" },
    ],
    cardio: [
        { day: "Monday", exercise: "Running - 30 minutes" },
        { day: "Wednesday", exercise: "Cycling - 45 minutes" },
        { day: "Friday", exercise: "Swimming - 30 minutes" },
    ],
    flexibility: [
        { day: "Tuesday", exercise: "Yoga - 1 hour" },
        { day: "Thursday", exercise: "Pilates - 1 hour" },
        { day: "Saturday", exercise: "Stretching - 30 minutes" },
    ],
};

// Function to generate a workout routine
function generateRoutine() {
    const goal = document.getElementById("workoutGoal").value;

    // Clear any existing routine
    routineList.innerHTML = "";
    routineDisplay.style.display = "block";

    // Display the selected routine
    workoutRoutines[goal].forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.day}: ${item.exercise}`;
        routineList.appendChild(listItem);
    });
}