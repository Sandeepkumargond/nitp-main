import DepartmentCounter from "@/components/department/DeptCounter";
import React from "react";

const about = `The Department of Electrical Engineering in National Institute of Technology Patna (Formerly known as Bihar College of Engineering) was established in 1945 under Patna University with an intake of 45 students leading to a Bachelor of Science (Engineering) degree of four-year duration. In the year 1978 AICTE approved Post Graduate (PG) course leading to M.Sc. (Engg.) Degree in two specializations: (i) Power System Engineering and (ii) Control System Engineering. The department is also offering the Ph.D. research program since 2009.

The Electrical Engineering department has well-qualified faculty with specializations in the field of electrical power systems, electrical machines and drives, power electronics, renewable energy devices, control & robotics, and sensors & instrumentation. The department has an excellent laboratory infrastructure with 10 UG-PG labs, and three state of art research labs to provide good academic lab setup and high-end research facilities. The number of Ph. D. students working in the department is approximately 150. The faculty members of the department published more than 500 research reports, filed more than 20 patents and have 8 patents granted.

The Department of Electrical Engineering carries out research and consultancy projects from Government and private organizations. In the last five years, the faculty members of the department completed sponsored research projects of total value 427 lacs. Research projects of approximately 212 lacs is running in the department. Apart from that, the department also completed consultancy projects amounting to approximately 53 lacs. The Department of Electrical Engineering, NIT Patna has been awarded with the DST-FIST project for improving research facilities in the domain of power systems, power electronics and Industrial drives, and Control systems on 31.10.2023 for a period of five years. The sanctioned amount of 82 Lacs will facilitate teaching and research activities in the state of art technologies in power transmission and distribution systems, active power filters, multilevel inverters, advanced fault tolerant control techniques, renewable energies, and electric vehicles. The Department envisages to develop new courses, patentable technologies, training programs, quality publications, and extend the developed facilities to the researchers of other institutes with the received support. The department also contributes in the upbringing of society and other educational institutes by providing training, workshops, faculty development program, and awareness programs. The department organizes the “International conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)” regularly to deliberate, exchange ideas, and produce research collaborations for the technologies those have the potential to significantly impact the domains of Power system, Power Converters, Control systems, Machine Drives, Embedded systems, Measurement and instrumentation technologies.`;

const counts = [
  {
    name: "Undergraduate Students",
    icon: "/students_icon.png",
    count: 456,
    color: "#FFCDD2", // Soft Red
  },
  {
    name: "Postgraduate Students",
    icon: "/students_icon.png",
    count: 123,
    color: "#BBDEFB", // Soft Blue
  },
  {
    name: "Ph.D. Students",
    icon: "/students_icon.png",
    count: 49,
    color: "#D1C4E9", // Soft Purple
  },
  {
    name: "Faculty",
    icon: "/faculty_icon.png",
    count: 25,
    color: "#FFECB3", // Soft Yellow
  },
  {
    name: "Journal",
    icon: "/journal_icon.png",
    count: 25,
    color: "#C8E6C9", // Soft Green
  },
  {
    name: "Conferences",
    icon: "/conference_icon.png",
    count: 78,
    color: "#FFCCBC", // Soft Orange
  },
  {
    name: "Projects",
    icon: "/projects_icon.png",
    count: 49,
    color: "#D7CCC8", // Soft Brown
  },
  {
    name: "Research",
    icon: "/research_icon.png",
    count: 123,
    color: "#B2DFDB", // Soft Teal
  },
  {
    name: "Patents",
    icon: "/patents_icon.png",
    count: 123,
    color: "#F8BBD0", // Soft Pink
  },
];

const Aboutpage = () => {
  return (
    <div className="">
      {/* About the department */}
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] lg:w-[80%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              About The Department
            </h2>
            <div className="w-[100%] mx-auto px-2 py-5 text-justify text-black">
              {about.split("\n").map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <DepartmentCounter counts={counts} />
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
