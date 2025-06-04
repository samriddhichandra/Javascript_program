class College {
  constructor(name, location, establishedYear, courses) {
    this.name = name;
    this.location = location;
    this.establishedYear = establishedYear;
    this.courses = courses; // Should be an array
  }

  display() {
    console.log(`College Name: ${this.name}`);
    console.log(`Location: ${this.location}`);
    console.log(`Established Year: ${this.establishedYear}`);
    console.log(`Courses Offered: ${this.courses.join(', ')}`);
    console.log('-------------------------');
  }
}

// Create objects with courses as arrays
const college1 = new College("IIT Bombay", "Mumbai", "1976", ["Engineering", "Science"]);
const college2 = new College("RV College", "Bangalore", "1989", ["Engineering", "Architecture"]);

college1.display();
college2.display();
