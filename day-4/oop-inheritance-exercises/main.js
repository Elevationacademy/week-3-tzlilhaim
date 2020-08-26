// ---------------------Learn---------------------
// Spot Check 1:
class Person {
  constructor(name, startYear) {
    this.name = name
    this.startYear = startYear
    this.courses = []
  }

  addCourse(course) {
    this.courses.push(course)
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear)
    this.grades = []
  }

  addCourse(course) {
    if (this.courses.indexOf(course) == -1) {
      super.addCourse(course)
    }
  }
  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    })
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(name, startYear)
    this.salary = salary
    this.courses = {}
  }
  addCourse(course) {
    this.courses.course ? this.courses[course]++ : (this.courses[course] = 1)
  }
  giveGrade(student, courseName, grade) {
    student.receiveGrade(courseName, grade)
  }
}

// Spot Check 1:
const s0 = new Student("Ronda", 2017)
const t0 = new Teacher("Cassandra", 2002, 40000)

t0.giveGrade(s0, "Algebra II", 82)
const firstGrade = s0.grades[0]

console.log(
  `${s0.name} received an ${firstGrade.grade} in ${firstGrade.course}`
)
//above should print "Ronda received an 82 in Algebra II"

// Spot Check 3:
t0.addCourse("Algebra II")
t0.addCourse("Algebra II")
t0.addCourse("Trigonometry")
console.log(t0.courses) //should print {Algebra II: 2, Trigonometry: 1}

// ---------------------Apply---------------------
// Exercises:
class Principal extends Person {
  constructor(name, startYear) {
    super(null, startYear)
    this.name = "Principal " + name
    this.teachers = []
    this.students = []
  }
  hireTeacher(teacher) {
    this.teachers.push(teacher)
    console.log(this.name + " just hired " + teacher.name)
  }
  recruitStudent(student) {
    this.students.push(student)
    console.log(this.name + " just recruited " + student.name)
  }
  expelStudent(student) {
    this.students.splice(this.students.indexOf(student), 1)
    console.log(this.name + " have expelled " + student.name)
  }
  transferStudent(student, principal) {
    this.students.splice(this.students.indexOf(student), 1)
    principal.recruitStudent(student)
    console.log(
      student.name + " was transferred to " + principal.name + "'s school."
    )
  }
}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
