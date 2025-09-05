const url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

    fetch(url)
      .then(response => response.json())
      .then(students => {
        // 1. All students with an average grade higher than 3
        const avgAbove3 = students.filter(s => s.averageGrade > 3);
        console.log("Students with avg > 3:", avgAbove3);

        // 2. All female student names with an average grade of 5
        const femaleAvg5 = students
          .filter(s => s.gender === "Female" && s.averageGrade === 5)
          .map(s => s.firstName);
        console.log("Female students with avg 5:", femaleAvg5);

        // 3. All male student full names who live in Skopje and are over 18
        const maleSkopje18 = students
          .filter(s => s.gender === "Male" && s.city === "Skopje" && s.age > 18)
          .map(s => `${s.firstName} ${s.lastName}`);
        console.log("Male students in Skopje > 18:", maleSkopje18);

        // 4. The average grades of all female students over the age of 24
        const femaleOver24 = students.filter(s => s.gender === "Female" && s.age > 24);
        const avgFemaleOver24 = femaleOver24.reduce((acc, s) => acc + s.averageGrade, 0) / femaleOver24.length;
        console.log("Average grade of female students > 24:", avgFemaleOver24);

        // 5. All male students with a name starting with B and average grade over 2
        const maleBOver2 = students
          .filter(s => s.gender === "Male" && s.firstName.startsWith("B") && s.averageGrade > 2)
          .map(s => s.firstName);
        console.log("Male students starting with B and avg > 2:", maleBOver2);
      })
      .catch(error => console.error("Error fetching students:", error));