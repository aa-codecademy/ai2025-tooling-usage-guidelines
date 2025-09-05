const url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

// Filter functions    
const filterByMinAverageGrade = (minGrade) => (student) => 
  student.averageGrade > minGrade;

const filterByGender = (gender) => (student) => 
  student.gender === gender;

const filterByExactGrade = (grade) => (student) => 
  student.averageGrade === grade;

const filterByCity = (city) => (student) => 
  student.city === city;

const filterByMinAge = (age) => (student) => 
  student.age > age;

const filterByNameStartsWith = (letter) => (student) => 
  student.firstName.startsWith(letter);

// Map functions
const getFullName = (student) => 
  `${student.firstName} ${student.lastName}`;

const getFirstName = (student) => 
  student.firstName;

// Helper function for average calculation
const calculateAverageGrade = (students) => 
  students.reduce((sum, student) => sum + student.averageGrade, 0) / students.length;

// Main data processing
fetch(url)
  .then(response => response.json())
  .then(students => {

    // 1. All students with an average grade higher than 3
    const highPerformers = students
      .filter(filterByMinAverageGrade(3));
    console.log("Students with avg > 3:", highPerformers);

    // 2. All female student names with an average grade of 5
    const topFemaleStudents = students
      .filter(filterByGender("Female"))
      .filter(filterByExactGrade(5))
      .map(getFirstName);
    console.log("Female students with avg 5:", topFemaleStudents);

    // 3. All male student full names who live in Skopje and are over 18
    const adultMaleSkopje = students
      .filter(filterByGender("Male"))
      .filter(filterByCity("Skopje"))
      .filter(filterByMinAge(18))
      .map(getFullName);
    console.log("Male students in Skopje > 18:", adultMaleSkopje);

    // 4. The average grades of all female students over the age of 24
    const seniorFemaleStudents = students
      .filter(filterByGender("Female"))
      .filter(filterByMinAge(24));
    const seniorFemaleAverage = calculateAverageGrade(seniorFemaleStudents);
    console.log("Average grade of female students > 24:", seniorFemaleAverage);

    // 5. All male students with a name starting with B and average grade over 2
    const maleBStudents = students
      .filter(filterByGender("Male"))
      .filter(filterByNameStartsWith("B"))
      .filter(filterByMinAverageGrade(2))
      .map(getFirstName);
    console.log("Male students starting with B and avg > 2:", maleBStudents);
  })
  .catch(error => console.error("Error fetching students:", error));