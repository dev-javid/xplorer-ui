export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  department: string;
  hireDate: Date;
  salary: number;
  isFullTime: boolean;
}

export const employees: Employee[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "Engineering",
    hireDate: new Date("2020-01-15"),
    salary: 80000,
    isFullTime: true,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    position: "Product Manager",
    department: "Product",
    hireDate: new Date("2019-03-22"),
    salary: 95000,
    isFullTime: true,
  },
  {
    id: 3,
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.johnson@example.com",
    position: "UX Designer",
    department: "Design",
    hireDate: new Date("2021-07-08"),
    salary: 70000,
    isFullTime: true,
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Williams",
    email: "michael.williams@example.com",
    position: "Marketing Specialist",
    department: "Marketing",
    hireDate: new Date("2018-11-30"),
    salary: 75000,
    isFullTime: true,
  },
  {
    id: 5,
    firstName: "Sarah",
    lastName: "Brown",
    email: "sarah.brown@example.com",
    position: "Sales Representative",
    department: "Sales",
    hireDate: new Date("2022-05-14"),
    salary: 60000,
    isFullTime: true,
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Davis",
    email: "david.davis@example.com",
    position: "HR Manager",
    department: "Human Resources",
    hireDate: new Date("2021-09-17"),
    salary: 85000,
    isFullTime: true,
  },
  {
    id: 7,
    firstName: "Laura",
    lastName: "Miller",
    email: "laura.miller@example.com",
    position: "Finance Analyst",
    department: "Finance",
    hireDate: new Date("2017-06-24"),
    salary: 78000,
    isFullTime: true,
  },
  {
    id: 8,
    firstName: "Chris",
    lastName: "Wilson",
    email: "chris.wilson@example.com",
    position: "Customer Support",
    department: "Support",
    hireDate: new Date("2023-01-11"),
    salary: 55000,
    isFullTime: false,
  },
  {
    id: 9,
    firstName: "Olivia",
    lastName: "Moore",
    email: "olivia.moore@example.com",
    position: "Graphic Designer",
    department: "Design",
    hireDate: new Date("2016-04-05"),
    salary: 72000,
    isFullTime: true,
  },
  {
    id: 10,
    firstName: "James",
    lastName: "Taylor",
    email: "james.taylor@example.com",
    position: "Data Scientist",
    department: "Engineering",
    hireDate: new Date("2020-12-19"),
    salary: 90000,
    isFullTime: true,
  },
  {
    id: 11,
    firstName: "Emma",
    lastName: "Anderson",
    email: "emma.anderson@example.com",
    position: "Business Analyst",
    department: "Business",
    hireDate: new Date("2019-08-30"),
    salary: 77000,
    isFullTime: true,
  },
  {
    id: 12,
    firstName: "Liam",
    lastName: "Thomas",
    email: "liam.thomas@example.com",
    position: "Web Developer",
    department: "Engineering",
    hireDate: new Date("2022-03-03"),
    salary: 82000,
    isFullTime: true,
  },
  {
    id: 13,
    firstName: "Ava",
    lastName: "Jackson",
    email: "ava.jackson@example.com",
    position: "Content Writer",
    department: "Marketing",
    hireDate: new Date("2021-12-10"),
    salary: 65000,
    isFullTime: true,
  },
  {
    id: 14,
    firstName: "Noah",
    lastName: "White",
    email: "noah.white@example.com",
    position: "Project Manager",
    department: "Project",
    hireDate: new Date("2018-07-14"),
    salary: 95000,
    isFullTime: true,
  },
  {
    id: 15,
    firstName: "Sophia",
    lastName: "Harris",
    email: "sophia.harris@example.com",
    position: "Recruiter",
    department: "Human Resources",
    hireDate: new Date("2020-02-25"),
    salary: 70000,
    isFullTime: true,
  },
  {
    id: 16,
    firstName: "Mason",
    lastName: "Martin",
    email: "mason.martin@example.com",
    position: "DevOps Engineer",
    department: "Engineering",
    hireDate: new Date("2021-10-29"),
    salary: 85000,
    isFullTime: true,
  },
  {
    id: 17,
    firstName: "Isabella",
    lastName: "Lee",
    email: "isabella.lee@example.com",
    position: "Administrative Assistant",
    department: "Administration",
    hireDate: new Date("2017-05-16"),
    salary: 58000,
    isFullTime: true,
  },
  {
    id: 18,
    firstName: "Ethan",
    lastName: "Garcia",
    email: "ethan.garcia@example.com",
    position: "Legal Advisor",
    department: "Legal",
    hireDate: new Date("2022-09-23"),
    salary: 92000,
    isFullTime: true,
  },
  {
    id: 19,
    firstName: "Charlotte",
    lastName: "Martinez",
    email: "charlotte.martinez@example.com",
    position: "Operations Manager",
    department: "Operations",
    hireDate: new Date("2018-12-04"),
    salary: 88000,
    isFullTime: true,
  },
  {
    id: 20,
    firstName: "Benjamin",
    lastName: "Rodriguez",
    email: "benjamin.rodriguez@example.com",
    position: "IT Support Specialist",
    department: "IT",
    hireDate: new Date("2023-02-19"),
    salary: 60000,
    isFullTime: true,
  },
];
