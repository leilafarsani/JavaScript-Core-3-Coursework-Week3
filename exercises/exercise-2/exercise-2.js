let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

const peopleOfTheGryffindorFinder = (arr) => {
  let peopleOfTheGryffindor = arr.filter(
    (people) => people.house === "Gryffindor"
  );
  peopleOfTheGryffindor.forEach((people) => {
    const { firstName, lastName } = people;
    console.log(`${firstName} ${lastName}`);
  });
};
peopleOfTheGryffindorFinder(hogwarts);

const teacherWithPetsFinder = (arr) => {
  let teacherWithPets = arr.filter(
    (people) => people.occupation === "Teacher" && people.pet !== null
  );
  teacherWithPets.forEach((people) => {
    const { firstName, lastName } = people;
    console.log(`${firstName} ${lastName}`);
  });
};

/*OR
const teacherWithPetsFinder = (arr) => {
  let teacherWithPets = arr.filter((people) => people.occupation === "Teacher");
  teacherWithPets.forEach((people) => {
    const { firstName, lastName, pet } = people;
    if (pet) console.log(`${firstName} ${lastName}`);
  });
};*/
teacherWithPetsFinder(hogwarts);
