import Job from "../components/Job";
const JobExperience = () => (
    <section id="experience" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">Job Experience</h2>
        <div className="space-y-6">
            <Job 
            title={"Full Stack Developer"}
            headline={"Kunca | Jan 2024 – Sep 2024 | Peru"}
            tasks={[
                "Developed and maintained REST APIs for e-commerce inventory and order management using Spring Boot.",
                "Created dynamic Next.js views with data tables, filters, and pagination using Ant Design.",
                "Integrated the front-end (Next.js) with back-end (Spring Boot) services.",
                "Deployed and managed the application on Ubuntu virtual machines using Nginx."
            ]}
            />
            <Job 
            title={"Full Stack Developer Volunteer"}
            headline={"Kunca | Mar 2023 – Dec 2023 | Peru"}
            tasks={[
                "Created and modified React user interfaces with Ant Design.",
                "Established data connections between the UI and Firestore databases.",
                "Developed PostgreSQL database endpoints for CRUD operations in a Spring Boot backend.",
                "Diagnosed and resolved front-end and back-end application issues."
            ]}
            />
            <Job 
            title={"Helpdesk Agent level 2 POS systems support"}
            headline={"TTESLA | Oct 2018 – Jun 2022 | Colombia"}
            tasks={[
                "Provide technical support and assistance to customers via telephone, solving hardware and software problems in a timely and effective manner.",
                "Diagnose and provide support to resolve network connection errors.",
                "Collaborate with other technical support teams to identify and resolve technical issues, escalating the handling of these issues to higher levels of support when necessary.",
                "Maintain accurate records of customer interactions and technical support incidents documenting solutions and procedures for future reference.",
                "Assist in the development and maintenance of technical support documentation including procedure guides and user manuals.",
                "Keep up to date with changes in client systems and IT infrastructure through workshops and training sessions."
            ]}
            />
        </div>
      </div>
    </section>
);

export default JobExperience;