import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import LogoImage from "@/public/logo.webp";
import Image from "next/image";
import Field from "./Field";

const Fields = () => {
  const fields = [
    {
      name: "Training and Development Consultation",
      image: LogoImage,
      content: `
      • Talent development is an essential part of any organization that aims 
to achieve sustainable success and is no longer an add-on
• As long as employees are the main driver of any organizational 
performance, developing the competencies and skills of employees 
gives organizations the competitive advantage they need to meet the 
challenges of the present and the future .
• Successful companies realize the importance of continuing to train 
their employees to enable them to carry out their roles and 
responsibilities more effectively. However, some companies provide 
training and professional qualification to employees in isolation from 
the actual needs of the company or the employee or those that bridge 
the gap in their skills and experience .
• Hence, the analysis of training needs has become a challenge facing 
companies that want to excel to determine where there are skills 
gaps, what training is required, and how to ensure that training 
achieves the planned goals at the lowest possible cost and achieve 
the best return on investment .
• Education and development services include, but are not limited to:
• Competency Gap Analysis
• Development of building training curricula
• experiential learning .
• Practical workshops to develop personnel and systems .
• Develop administrative and practical skills 
      `,
    },
    {
      name: "Strategic Consultation",
      image: LogoImage,
      content: `
      • We provide our clients with strategic advice in all work activities, 
starting from analyzing the internal elements of the organization and the 
external elements affecting the performance of the institution
• Determining the appropriate type of strategy for the organization and 
defining the company's general goals, detailed goals and action plans 
that achieve strategic, tactical and operational goals
• We offer to provide our customers with innovative solutions that work 
on developing the institution, raising performance and creating an added 
value.
• We work in cooperation with our clients to allocate resources effectively 
in order to provide the best investment opportunities for our clients, 
which improves institutional performance and improves the competitive 
position
• Management of multi-activities business and investment strategies
      `,
    },
    {
      name: "Operations Research Consultation",
      image: LogoImage,
      content: `
        Operations management is one of the main lists on which the
 company is based to achieve its goals, so we study the efficiency of
the company&apos;s work systems and keep pace with the strategic and
 operational challenges it faces in various departments, and these
services include, for example
 
Strategic planning using Development of programs
Balanced Score card and operational plans 
 
 Develop executive action plans Evaluate and develop institutional 
 Performance by Using 
 Competencies Management
 
 Re-Engineering Process Analyze and Measure Productivity
 and Develop Strategies for its Development
 By using OEE Methodologies 
 
 
 Measure, analyze and control Waste analysis and elimination
 operating cost By using Lean manufacturing
 
 Preparing the Operations Manual 
 (Operation Manual )
      `,
    },
    {
      name: "Corporate Finance Consultation",
      image: LogoImage,
      content: `
        We support our clients with a package of management consultancy services in the 
field of financial management and help them overcome the financial obstacles they 
may encounter by providing appropriate integrated solutions, after conducting 
specialized studies in this regard, analyzing the company’s financial statements, 
evaluating the work system in its various sectors, and how to manage its resources 
on All levels, including contributing to identifying deficiencies in the work system 
and developing appropriate ways to deal with them. These services include, for 
example :
• We assist our clients in planning and budgeting in order to help the company 
implement the prevailing rules, regulations and laws
• We collect data and information to prepare, advise and project accurate future 
operations and financial plans
• We analyze and interpret financial information to study multiple variables, 
review them, and manage them, with the aim of facilitating the decision-making 
process.
• We work on complex projects, which require complex interpretation and 
analysis.
• We are working on the issuance of effective reports and the development of 
operations, in line with established policies and regulations
• We guide and advise on investments, asset rental, money saving, tax planning
• We analyze the financial risks that the entrepreneurial business is likely to 
undergo
• We develop financial strategies, and direct the setting of goals
• We monitor the economic situation based on monitoring changes in the budget
      `,
    },
    {
      name: "Supply Chain Consultation",
      image: LogoImage,
      content: `
        We work to make our customers' supply chains a source of competitive advantage to 
achieve short and long-term goals and fundamentally rethink traditional ways of working, 
where the greatest threat is to overcome the disruptions to act with the logic of yesterday.
We help customers build resilient, rapid and sustainable supply chains for the future. Our 
results-based approach, market-leading technologies, and integration capabilities help you 
develop your supply chain workflows, make decisions highly automated, and empower 
your employees.
We contribute to supporting our clients, partners of success, with a package of higher 
management consultancy services in the field of supply chains and helping them to 
overcome logistical obstacles that they may encounter by providing appropriate integrated 
solutions, after conducting specialized studies in this regard, analyzing data for the 
company, and evaluating the work system in its various sectors, And how to manage its 
resources at all levels, which contributes to identifying deficiencies in the work system 
and developing appropriate ways to deal with them. These services include, for example:
.• Redesigning business policies and procedures.
• Improving supply chain functionality.
• Contracting, planning, warehousing and logistics.
• Improving manufacturing and optimizing production capacities
      `,
    },
    {
      name: "Corporate Governance Consultation",
      image: LogoImage,
      content: `
        Corporate governance is the rules, practices, and processes by which a 
company is directed and controlled. Corporate governance basically involves 
balancing the interests of the many stakeholders in a company, such as 
shareholders, management, customers, suppliers, financiers, government, and 
society.
As corporate governance also provides a framework for achieving corporate 
goals, it encompasses practically every area of management, from business 
plans and internal controls to performance measurement and corporate 
disclosure, we help our clients take a disciplined approach to governance and 
compliance management through a range of assessments and process and 
model improvement. Create, review and verify.
Governance Consulting:
• Building and implementing a corporate governance framework.
• Building and implementing corporate governance manuals and procedures.
• Building and implementing board committees and committees a.
• Building and implementing the charters of board committees and board 
committees.
• Build and implement business & job controls roles.
• Assisting the family or partners in building the family management system or 
partner group agreement.
We believe that human resources are the core and strength of any 
business. By achieving excellence in human resource 
management
We help our clients achieve their strategic goals by establishing, 
managing and developing a human resource function. These 
services include, but are not limited to :
• Organizational structure, restructuring and job description 
for employees .
• The system of attraction, selection and appointment .
• Compensation and benefits system .
• Managing, evaluating and evaluating performance
• Building and consolidating the organization's culture and 
core values .
• Archiving of human resources and information technology 
system .
• HR systems, policies and procedures .
• Strategic management of human resources
Human resource
      `,
    },
    {
      name: "Human Resources Consultation",
      image: LogoImage,
      content: `
        Corporate governance is the rules, practices, and processes by which a 
company is directed and controlled. Corporate governance basically involves 
balancing the interests of the many stakeholders in a company, such as 
shareholders, management, customers, suppliers, financiers, government, and 
society.
As corporate governance also provides a framework for achieving corporate 
goals, it encompasses practically every area of management, from business 
plans and internal controls to performance measurement and corporate 
disclosure, we help our clients take a disciplined approach to governance and 
compliance management through a range of assessments and process and 
model improvement. Create, review and verify.
Governance Consulting:
• Building and implementing a corporate governance framework.
• Building and implementing corporate governance manuals and procedures.
• Building and implementing board committees and committees a.
• Building and implementing the charters of board committees and board 
committees.
• Build and implement business & job controls roles.
• Assisting the family or partners in building the family management system or 
partner group agreement.
We believe that human resources are the core and strength of any 
business. By achieving excellence in human resource 
management
We help our clients achieve their strategic goals by establishing, 
managing and developing a human resource function. These 
services include, but are not limited to :
• Organizational structure, restructuring and job description 
for employees .
• The system of attraction, selection and appointment .
• Compensation and benefits system .
• Managing, evaluating and evaluating performance
• Building and consolidating the organization's culture and 
core values .
• Archiving of human resources and information technology 
system .
• HR systems, policies and procedures .
• Strategic management of human resources
Human resource
        `,
    },
    {
      name: "Digital Transformational Consultation",
      image: LogoImage,
      content: `
        • The speed of changes surrounding the business environment 
requires business entities to find a way to obtain information 
in a timely manner, as mechanization and digital 
transformation are the way to do more work with less effort 
and money and achieve better results.
• What is the added value to business entities of digital 
transformation consultancy?
- Achieving a competitive advantage.
- Reaching excellence in performance, increasing 
productivity and reducing errors.
- Achieving more efficiency, transparency and insight 
into the business entity.
- Cost reduction.
• The services we provide for example:
- Automation of any system such as accounting systems, 
customer relationship management and enterprise 
resource planning
- Cloud Computing
- Design of virtual systems
- Design of data centers
      `,
    },
    {
      name: "Sales and Marketing Consultation",
      image: LogoImage,
      content: `
      • Our consultants will provide a set of consultations, which includes a 
comprehensive study of the company to understand all its advantages and 
disadvantages, as well as understand the possibilities and opportunities 
available, as well as provide marketing and sales management services 
for the product, and provide the appropriate marketing method
• In addition to providing services to solve the most important obstacles 
and major obstacles faced by customers, their companies and their 
products in the field of marketing, it also provides advertising campaigns 
and advertising campaigns to stimulate the sales trends of their 
companies or activities
• The services we provide for example :
• Strategic Consultations for Marketing Management .
• Consultations for the design and development of marketing and sales 
management systems .
• Consulting for the development and restructuring of the sales department .
• Consultations for converting the traditional marketing management into a 
CRM customer relationship management system .
• Digital and electronic marketing consultancy .
• Marketing research consultancy .
• Consultations for the design and implementation of advertising and 
promotional campaigns for companies .
• Consultations to convert the traditional systems of marketing and sales to 
modern cloud computing systems . 
        `,
    },
    {
      name: "Safety and Health Consultation",
      image: LogoImage,
      content: `
        The development and complexity of the business environment requires 
the presence of modern systems to prevent the occurrence of any risks or 
accidents that lead to the loss of any of the company&apos;s assets and stop the 
wheel of production .
Therefore, we work to provide the best solutions in the field of 
occupational safety and health through:
• Study the work environment and determine the gap between what 
should be and what is
• Determine occupational safety and health policies and procedures
• Design safe work systems
• Applying the latest specifications for occupational safety and 
health systems
• Applying the latest specifications for environmental systems
• Determine the work&apos;s needs for occupational safety and health 
methods
• Establishing systems for evacuation and emergency procedures
• Training scientists on the use of occupational safety and health 
methods
    `,
    },
  ];

  return (
    <section>
      <div className="flex flex-col gap-4 bg-[#191919] py-12 text-center text-white">
        <h2 className="h1">Our Fields</h2>
        <h3 className="h3">Unlock Your true Business Potential</h3>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col border">
            <Image
              src={field.image}
              alt={field.name}
              className="h-[30rem] w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-8">
              <h3 className="h3">{field.name}</h3>
              <Separator />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-40">Learn More</Button>
                </DialogTrigger>
                <DialogContent>
                  <Field
                    name={field.name}
                    image={field.image}
                    content={field.content}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fields;
