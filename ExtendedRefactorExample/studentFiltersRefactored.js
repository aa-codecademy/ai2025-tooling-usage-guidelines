/**
 * @typedef {Object} Student
 * @property {string} firstName - Student's first name
 * @property {string} lastName - Student's last name
 * @property {number} age - Student's age
 * @property {string} gender - Student's gender
 * @property {string} city - Student's city of residence
 * @property {number} averageGrade - Student's average grade
 */

/**
 * Fetches student data from the API
 * @param {string} url - The API endpoint URL
 * @returns {Promise<Student[]>} Array of student objects
 * @throws {Error} If the fetch operation fails
 */
const fetchStudentData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch student data:', error);
    throw error;
  }
};

/**
 * Higher-order function to filter students by minimum average grade
 * @param {number} minGrade - Minimum grade threshold
 * @returns {function(Student): boolean} Filter function
 */
const filterByMinAverageGrade = (minGrade) => (student) => 
  student.averageGrade >= minGrade;

/**
 * Higher-order function to filter students by exact grade
 * @param {number} grade - Exact grade to match
 * @returns {function(Student): boolean} Filter function
 */
const filterByExactGrade = (grade) => (student) => 
  student.averageGrade === grade;

/**
 * Higher-order function to filter students by gender
 * @param {string} gender - Gender to filter by
 * @returns {function(Student): boolean} Filter function
 */
const filterByGender = (gender) => (student) => 
  student.gender === gender;

/**
 * Higher-order function to filter students by city
 * @param {string} city - City to filter by
 * @returns {function(Student): boolean} Filter function
 */
const filterByCity = (city) => (student) => 
  student.city === city;

/**
 * Higher-order function to filter students by minimum age
 * @param {number} minAge - Minimum age threshold
 * @returns {function(Student): boolean} Filter function
 */
const filterByMinAge = (minAge) => (student) => 
  student.age >= minAge;

/**
 * Higher-order function to filter students by name starting with
 * @param {string} letter - Starting letter to filter by
 * @returns {function(Student): boolean} Filter function
 */
const filterByNameStartsWith = (letter) => (student) => 
  student.firstName.startsWith(letter);

/**
 * Extracts first name from student object
 * @param {Student} student - Student object
 * @returns {string} Student's first name
 */
const getFirstName = (student) => student.firstName;

/**
 * Creates full name from student object
 * @param {Student} student - Student object
 * @returns {string} Student's full name
 */
const getFullName = (student) => 
  `${student.firstName} ${student.lastName}`;

/**
 * Calculates average grade for a group of students
 * @param {Student[]} students - Array of student objects
 * @returns {number} Average grade
 */
const calculateAverageGrade = (students) => {
  if (students.length === 0) return 0;
  
  const totalGrade = students.reduce(
    (sum, student) => sum + student.averageGrade, 
    0
  );
  return totalGrade / students.length;
};

/**
 * Main function to process student data and apply filters
 * @param {string} apiUrl - The API endpoint URL
 */
const processStudentData = async (apiUrl) => {
  try {
    const students = await fetchStudentData(apiUrl);
    console.log('Processing data for', students.length, 'students');

    // 1. High performers (average grade > 3)
    const highPerformers = students
      .filter(filterByMinAverageGrade(3));
    console.log('High performers:', highPerformers.length);

    // 2. Top female students (average grade = 5)
    const topFemaleStudents = students
      .filter(filterByGender("Female"))
      .filter(filterByExactGrade(5))
      .map(getFirstName);
    console.log('Top female students:', topFemaleStudents);

    // 3. Adult male students from Skopje
    const adultMaleSkopje = students
      .filter(filterByGender("Male"))
      .filter(filterByCity("Skopje"))
      .filter(filterByMinAge(18))
      .map(getFullName);
    console.log('Adult male students from Skopje:', adultMaleSkopje);

    // 4. Senior female students' average grade
    const seniorFemaleStudents = students
      .filter(filterByGender("Female"))
      .filter(filterByMinAge(24));
    const seniorFemaleAverage = calculateAverageGrade(seniorFemaleStudents);
    console.log('Senior female students average grade:', seniorFemaleAverage);

    // 5. Male students with names starting with 'B' and grade > 2
    const maleBStudents = students
      .filter(filterByGender("Male"))
      .filter(filterByNameStartsWith("B"))
      .filter(filterByMinAverageGrade(2))
      .map(getFirstName);
    console.log('Male B-named students:', maleBStudents);

  } catch (error) {
    console.error('Error processing student data:', error);
    throw error;
  }
};

// Usage example
const API_URL = 'https://api.example.com/students';
processStudentData(API_URL).catch(error => {
  console.error('Application error:', error);
});
