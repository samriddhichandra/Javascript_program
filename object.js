let professor = {
    name: "Dr. Samriddhi",
    age: 25,
    department: "Computer Science",
    college: "ABC Institute of Technology",
    isPhD: true,

    // Step 2: Nested object 'degrees'
    degrees: {
        engineering: "CSC",
        masters: "Computer Engineering",
        phd: "Adv Computing",
        diploma: "AI & ML"
    },
    // Step 3: Add array 'certificates'
    certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};
// Step 5: Add new property totalExperience
professor.totalExperience = "14 years";
console.log("After adding totalExperience:", professor);

// Step 6: Modify any existing property (e.g., name)
professor.name = "Dr. Samriddhi Sr";
console.log("After modifying name:", professor);
// Step 7: Add "Oracle Certified" at 2nd index of certificates
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("After adding new certificate at index 2:", professor.certificates);
// Step 8: Log last element of certificates array
let lastCert = professor.certificates[professor.certificates.length - 1];
console.log("Last certificate:", lastCert);

// Step 9: Log complete object using for-in loop
console.log("Logging professor object properties:");
for (let key in professor) {
    console.log(`${key} →`, professor[key]);
}