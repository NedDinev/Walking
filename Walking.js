function walking(input) {
  let dailyStepsTarget = 10000;
  let index = 0;
  let command = input[index];
  index++;
  let countOfSteps = 0;
  let difference = 0;

  while (command !== "Going home") {
    let steps = Number(command);
    countOfSteps += steps;
    if (countOfSteps >= dailyStepsTarget) {
      break;
    }
    command = input[index];
    index++;
  }
  if (command === "Going home") {
    countOfSteps += Number(input[index]);
  }
  difference = Math.abs(countOfSteps - dailyStepsTarget);
  if (countOfSteps < dailyStepsTarget) {
    console.log(`${difference} more steps to reach goal.`);
  } else {
    console.log(`Goal reached! Good job!`);
    console.log(`${difference} steps over the goal!`);
  }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
