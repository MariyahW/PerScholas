class Learner {
    #grades = [];
    #name = {
      first: '',
      last: '',
    }
    #age;
  
      constructor(firstName, lastName, age) {
          this.#name.first = firstName;
      this.#name.last = lastName;
      this.#age = age;
      }
    get getName() {
      return this.#name.first + ' ' + this.#name.last; 
    }
    get getAge() {
      return this.#age;
    }
    get getGrade(){
        return this.#grades;
    }
    set setGrades(grade) {
        // change the grade to a Number, in case it was provided as a String
        grade = Number(grade);
        // Only accept values between 0 and 100
        if (grade >= 0 && grade <= 100) {
          this.#grades.push(grade);
        }
      }
     addGrades(...grades) {
        grades = grades.flat(20);
        grades.forEach((grade) => {
          grade = Number(grade);
    
          if (grade >= 0 && grade <= 100) {
            this.#grades.push(grade);
          }
        });
      }
        get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
  }
  
  const learner1 = new Learner('Leeroy', 'Jenkins', 18);
  learner1.addGrades(79,99,50,[1,[26,100,[44,9,6]]]);
  console.log(learner1.getGrade);