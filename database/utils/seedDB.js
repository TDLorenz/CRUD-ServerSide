const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "New York, NY",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard Univeristy",
		address: "Cambridge, MA",
		description: "This is a school in MA."
	});
	const dummy_campus3 = await Campus.create({
		name: "York College",
		address: "Jamaica, NY",
		description: "This is a school in NYC."
	});
	const dummy_campus4 = await Campus.create({
		name: "Columbia University",
		address: "New York, NY",
		description: "This is a school in NYC."
	});
	const dummy_campus5 = await Campus.create({
		name: "Stanford University",
		address: "Stanford, CA",
		description: "This is a school in CA."
	});
	const dummy_campus6 = await Campus.create({
		name: "Princeton University",
		address: "Princeton, NJ",
		description: "This is a school in NJ."
	});
	const dummy_campus7 = await Campus.create({
		name: "University of Chicago",
		address: "Chicago, IL",
		description: "This is a school in Chicago."
	});
	const dummy_campus8 = await Campus.create({
		name: "California Institute of Technology",
		address: "Pasadena, CA",
		description: "This is a school in CA."
	});
	const dummy_campus9 = await Campus.create({
		name: "Yale University",
		address: "New Haven, CT",
		description: "This is a school in CT."
	});
	const dummy_campus10 = await Campus.create({
		name: "University of Pennsylvania",
		address: "Philadelphia, PA",
		description: "This is a school in PA."
	});
	const dummy_campus11 = await Campus.create({
		name: "Cornell University",
		address: "Ithaca, NY",
		description: "This is a school in NY."
	});
	const dummy_campus12 = await Campus.create({
		name: "Duke University",
		address: "Durham, NC",
		description: "This is a school in NC."
	});
	const dummy_campus13 = await Campus.create({
		name: "Northwestern University",
		address: "Evanston, IL",
		description: "This is a school in IL."
	});
	const dummy_campus14 = await Campus.create({
		name: "MIT",
		address: "Cambridge, MA",
		description: "This is a school in MA."
	});
	const dummy_campus15 = await Campus.create({
		name: "University of Notre Dame",
		address: "Notre Dame, IN",
		description: "This is a school in IN."
	});
	const dummy_campus16 = await Campus.create({
		name: "Darmouth College",
		address: "Hanover, NH",
		description: "This is a school in NH."
	});

	const dummy_student = await Student.create({
		firstname: "Vlad",
		lastname: "Andreev",
		email: "vlad@gmail.com",
		gpa: 4.0
	});
	const dummy_student2 = await Student.create({
		firstname: "Val",
		lastname: "Shidlovskiy",
		email: "Val@gmail.com",
		gpa: 4.0
	});
	const dummy_student3 = await Student.create({
		firstname: "Troy",
		lastname: "Daniello",
		email: "troy@gmail.com",
		gpa: 4.0
	});
	const dummy_student4 = await Student.create({
		firstname: "Saj",
		lastname: "Dider",
		email: "saj@gmail.com",
		gpa: 4.0
	});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;