/*
import random
#Simulate a room with a certain number of people
def simulate(num_people):
  birthdays = []
  print("Here's what our room looks like:\n")
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	#Assign a random birthday to each person
  for i in range(0, num_people):
    #Choose a random month
    month_choice = random.choice(months)
    #Choose a random day based on month
    if month_choice == "February":
      day = random.randint(1, 29)
    elif month_choice == "April" or month_choice == "June" or month_choice == "September" or month_choice == "November":
      day = random.randint(1, 30)
    else:
      day = random.randint(1, 31)
    birthday = month_choice + " " + str(day)
    #Store the birthday
    birthdays.append(birthday)
    print("Person {0}'s birthday: {1}".format(i + 1, birthday))
  calculate_probability(num_people)
  match = False
  #Check for matching birthdays
  for i in range(len(birthdays)):
    if find_duplicates(birthdays, birthdays[i], i):
      match = True
      break
  if not match:
    print("\n\nIn our simulation, no two people have the same birthday")

#Calculate the probability of there being 2 people with the same birthday
def calculate_probability(num_people):
  #Check there is at least 2 people in the room
  if num_people < 2:
    print("\n\nNot enough people in the room!")
    return
  else:
    #Calculate the probability
    numerator = 365
    countdown = 364
    for i in range(2, num_people + 1):
      numerator = numerator * countdown
      countdown -= 1
    denominator = 365 ** num_people
    probability = 1 - numerator/float(denominator)
    #Change probability to percentage
    rounded = round(probability*100, 2)
    print("\n\nThe probability that two people in a room of {0} people have the same birthday is nearly {1}%".format(num_people, rounded))

    
#Find the same birthday within our list of birthdays
def find_duplicates(birthdays_list, birthday, index):
  people = []
  for i in range(len(birthdays_list)):
    if birthdays_list[i] == birthday and i != index:
      people.append(i + 1)
  if people:
    people.append(index + 1)
    print("\n\nIn our simulation, the following people have the same birthdays: ")
    for person in people:
      print("Person {0}".format(person))
    return True
  else:
    return False
*/

function simulate(num_people) {
    let birthdays = [];
    console.log("Here's what our room looks like:");
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //Assign a random birthday to each person
    for (let i = 0; i < num_people; i++) {
        //Choose a random month
        let month_choice = months[Math.floor(Math.random() * 12)];
        //Choose a random day based on month
        let day;
        if (month_choice === "February") {
          day = Math.floor(Math.random() * 29);// random.randint(1, 29)
        } else if (month_choice === "April" || month_choice == "June" || month_choice == "September" || month_choice == "November") {
          day = Math.floor(Math.random() * 30); //random.randint(1, 30)
        } else {
          day = Math.floor(Math.random() * 31); //random.randint(1, 31)
        }
        let birthday = month_choice + " " + day;
        //Store the birthday
        birthdays.push(birthday);
        console.log(`Person ${i}'s birthday: ${birthday}`);
    }
    calculate_probability(num_people)
    let match = false;
    //Check for matching birthdays
    for (let i = 0; i < birthdays.length; i++) {
        if (find_duplicates(birthdays, birthdays[i], i)) {
          match = true;
          break;
        }
    }        
    if (!match) {
        console.log("In our simulation, no two people have the same birthday");
    }
}

//Calculate the probability of there being 2 people with the same birthday
function calculate_probability(num_people) {
  //Check there is at least 2 people in the room
  if (num_people < 2) {
    console.log("Not enough people in the room!");
    return;
  } else {
    //Calculate the probability
    let numerator = 365;
    let countdown = 364;
    for (let i = 0; i < num_people - 1; i++) {
      numerator = numerator * countdown;
      countdown -= 1;
    }
    let denominator = 365 ** num_people;
    let probability = 1 - numerator/denominator;
    //Change probability to percentage
    let rounded = probability * 100;
    console.log(`The probability that two people in a room of ${num_people} people have the same birthday is nearly ${rounded}%`);
  }
}

function find_duplicates(birthdays_list, birthday, index) {
  let people = [];
  for (let i = 0; i < birthdays_list.length; i++) {
    if (birthdays_list[i] === birthday && i != index) {
      people.push(i + 1);
    }
  }
  if (people.length != 0) {
    people.push(index + 1);
    console.log("In our simulation, the following people have the same birthdays: ");
    for (let i = 0; i < people.length; i++) {
      console.log(`Person ${people[i]}`);
    }
    return true;
  } else {
    return false;
  }
}

let num_people_in_room = 20;
simulate(num_people_in_room);