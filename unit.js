const params = new URLSearchParams(window.location.search);
const unitKey = params.get("unit") || "exec-1";

const unitData = {
  "OSEC": {
    name: "Office of the Executive Secretary",
    category: "Executive Board and Cabinets",
    description: "The Office of the Executive Secretary (OSEC) serves as the operational, administrative, and communications backbone of the University Student Government (USG), providing the systems that help OPRES, OVPIA, OVPEA, and OTREAS, and their respective cabinets, turn their projects into reality. From processing documents and logistical needs, and producing publicity materials and media coverage, OSEC keeps projects moving while also supporting the USG’s internal operations through general assemblies, office reservations and management, officer training and development, and other administrative systems that help USG units and officers function effectively.",
    logo: "assets/usg-black-logo.png",
    applicationLink: "http://animo.li/SGAR2627T1_OSEC_ApplicationForms",
    socialLink: "https://www.facebook.com/dlsu.usg",
    timeline: {
      kicker: "T1 SGAR 2026",
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–10",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 10, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 12–17",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Results",
          date: "OCT 28",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    },
    orgStructureImage: "assets/OSEC_OrgChart.png",
    executiveBoard: [
      {
        name: "Elisha Nazario",
        role: "Executive Secretary, Office of the Executive Secretary",
        email: "maria_elisha_kaye_nazario@dlsu.edu.ph",
        telegram: "@elishaa_kayee",
        photo: "assets/osec-eli.jpg"
      }
    ],
committees: [
      {
        name: "Human Resources",
        positions: "5 Executives",
        description: "The Human Resources (HR) Committee under the Office of the Executive Secretary manages internal processes related to officer development, welfare, and governance. It oversees systems for communication, grievance resolution, and officer support while facilitating administrative functions such as documentation and compliance reporting. Through these initiatives, the HR Committee strives to cultivate a supportive, accountable, and productive environment for all officers.",
        requirements: "N/A"
      },
      {
        name: "Office Management",
        positions: "3 Directors, 10 Executives",
        description: "The Office Management Committee is responsible for maintaining the overall organization, functionality, and upkeep of the USG office. It oversees office reservations, ensures cleanliness and proper arrangement of the workspace, and develops systems for the efficient storage and accessibility of office materials and resources. The committee also handles initiatives related to office improvements, renovations, and enhancements. It aims to create a well-managed, welcoming, and productive environment that supports the daily operations of the USG and the needs of its officers and members.",
        requirements: "1. Organized and detail-oriented, particularly in managing office materials, supplies, reservations, and shared spaces.\n2. Reliable and accountable in completing assigned tasks and maintaining committee standards.\n3. Willing to perform both administrative and hands-on tasks, including organizing materials, monitoring office conditions, and assisting with office arrangements.\n4. Adaptable and responsive, especially when dealing with unexpected office concerns or urgent requests.\n5. Responsible in handling organizational property, equipment, and resources."
      },
      {
        name: "Officer Development",
        positions: "1 Director, 7 Executives",
        description: "The Officer Development Committee focuses on the personal and professional growth of USG officers. It develops and facilitates workshops, seminars, check-ins, and other initiatives that help officers strengthen their skills, improve their effectiveness, and grow in their roles. The committee also monitors and evaluates officer development to identify areas where additional support, training, or guidance may be needed.",
        requirements: "1. Open-minded and willing to learn\n2. Approachable and comfortable working with others\n3. Responsible, proactive, and willing to turn their time and energy into meaningful outcomes\n4. Willing to give and receive constructive feedback\n5. Previous org/student body experiences are highly welcomed, but not required"
      },
      {
        name: "Docu-  mentations",
        positions: "8-10 Executives",
        description: "The Documentations Committee serves as one of the backbones of every project by handling the essential requirements and documentation needed before, during, and after an event. The committee is responsible for preparing and processing pre-activity and post-activity requirements, coordinating necessary documents, and ensuring that projects comply with organizational requirements. They also provide event coverage and help keep track of important information, outputs, and supporting documents needed for successful project execution.",
        requirements: "1. Organized, responsible, and attentive to details.\n2. Able to manage deadlines and accomplish pre-activity and post-activity requirements on time.\n3. Has good written communication and documentation skills.\n4. Willing to coordinate with project heads, committees.\n5. Can work under pressure, especially when handling time-sensitive event requirements.\n6. Familiarity with Google Docs, Google Drive, and similar productivity tools is an advantage."
      },
      {
        name: "Project Resources",
        positions: "6-8 Executives",
        description: "The Project Resources Committee is responsible for ensuring that every project has the materials, equipment, manpower support, and other resources necessary for successful execution. The committee assists in sourcing, preparing, organizing, and monitoring project resources before, during, and after events. Members work closely with project heads and other committees to determine what resources are needed, keep track of available materials, and make sure everything is ready and accessible when required.",
        requirements: "1. Resourceful, organized, and dependable.\n2. Able to manage and keep track of materials, equipment, and other project needs.\n3. Has good coordination and communication skills.\n4. Willing to assist during event preparation, ingress, event proper, and egress when needed.\n5. Able to respond quickly to unexpected resource or logistical concerns.\n6. Can work collaboratively with different offices and project heads."
      },
      {
        name: "Publicity and Promotions",
        positions: "3 Directors, 20 Executives",
        description: "The Publicity and Promotions Committee strengthens the reach of DLSU USG’s initiatives by keeping the student body informed, engaged, and inspired. It is responsible for developing compelling captions, crafting event announcements, and managing social media content across DLSU USG platforms. As an essential part of the organization’s content planning, the committee ensures that materials are released consistently and on time while creating content that connects with and resonates with the Lasallian community.",
        requirements: "1. Proactive, creative and detail-oriented, particularly with grammar and tone.\n2. Has good copywriting and communication skills.\n3. Responsive and receptive to feedback and revisions.\n4. Able to manage tasks, handle urgent requests, and meet deadlines.\n5. Willing to collaborate with project heads and other committees.\n6. Experience or familiarity with developing engaging content for promotional materials is an advantage."
      },
      {
        name: "Creatives",
        positions: "3 Directors, 20 Executives",
        description: "The Creatives Committee is responsible for maintaining a consistent visual identity of DLSU USG. It handles publication materials in collaboration with various offices, transforming ideas into graphic storytelling and compelling visual concepts. The committee serves as a platform for visual communications, keeping the Lasallian community informed of relevant university events.",
        requirements: "1. Proficient in graphic design software.\n2. Creative eye for artistic vision.\n3. Ability to efficiently handle urgent requests.\n4. Strong communication skills and adaptability to feedback."
      },
      {
        name: "Media Coverage",
        positions: "5-6 Executives",
        description: "The Media Coverage Committee is responsible for documenting USG activities and events through photography and videography. It captures important moments, projects, and initiatives of the organization to create a clear and comprehensive visual record. Through its coverage, the committee helps keep the Lasallian community informed and connected with the different activities and accomplishments of the USG.",
        requirements: "1. Basic knowledge of photography and videography.\n2. Creative eye for composition, framing, and capturing important moments.\n3. Ability to operate cameras or mobile devices for event coverage.\n4. Good attention to detail when documenting events and activities.\n5. Ability to work well under pressure and in fast-paced environments.\n6. Willingness to learn, collaborate, and cover USG events when needed."
      },
      {
        name: "Productions",
        positions: "2 Directors, 4-5 Executives",
        description: "The Productions Committee focuses on creating engaging and high-quality video content that showcases and promotes the initiatives of the USG. Its responsibilities include filming events, developing original video materials, and editing footage into polished and meaningful content. The committee ensures that each production is visually engaging, well-presented, and consistent with the organization’s standards and overall message.",
        requirements: "1. Strong interest in video production, filmmaking, and creative storytelling.\n2. Basic knowledge of filming and video editing.\n3. Familiarity with editing software such as CapCut, Adobe Premiere Pro, or DaVinci Resolve.\n4. Creativity in producing engaging and visually appealing content.\n5. Ability to work well with a team and adapt to different production needs.\n6. Willingness to learn, meet deadlines, and take responsibility for assigned tasks."
      }
    ]
  },
  "DSW": {
    name: "Department of Student Welfare",
    category: "Executive Board and Cabinets",
    description: "The Department of Student Welfare (DSW) is dedicated to promoting the overall well-being of the student body through programs, services, and initiatives that address academic, financial, disciplinary, personal, and other student-related concerns. It works closely with the Executive Board, the Department of Policies, university offices, local authorities, and other relevant stakeholders to advocate for student needs and ensure that welfare considerations are integrated into programs, policies, and university processes. The department also provides students with guidance, resources, and information on available opportunities and support systems, including job expos, mental health services, emergency preparedness measures, and other forms of student assistance. Overall, DSW serves as a central body that safeguards student welfare and helps create a supportive environment where students can access the resources and assistance they need to thrive.",
    logo: "assets/usg-black-logo.png",
    executiveName: "Department of Student Welfare",
    applicationLink: "https://forms.gle/mZyoTEp47nGwVPwR9",
    socialLink: "https://www.facebook.com/dlsu.usg",
    timeline: {
      kicker: "T1 SGAR 2026",
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–17",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 17, 2026"
        },
        {
          title: "Release of Results",
          date: "OCT 20",
          tag: "AUDITIONS",
          color: "yellow"
        }
      ]
    },
    orgStructureImage: "assets/DSW_OrgChart.png",
    executiveBoard: [
      {
        name: "Sam Panganiban",
        role: "Cabinet Secretary, Department of Student Welfare",
        email: " ma_samantha_clare_panganiban@dlsu.edu.ph",
        telegram: "@samclaree",
        photo: "assets/dsw-sam.jpg"
      },
      {
        name: "Kate Ferrer",
        role: "Undersecretary for the Department of Student Welfare",
        email: "kate_christine_ferrer@dlsu.edu.ph",
        telegram: "@kateFERRER",
        photo: "assets/dsw-kate.PNG"
      },
      {
        name: "JM Daynos",
        role: "Undersecretary for the Department of Student Welfare",
        email: "john_michael_daynos@dlsu.edu.ph",
        telegram: "@nonjaylant",
        photo: "assets/dsw-jm.jpg"
      },
      {
        name: "Meg Pacleb",
        role: "Undersecretary for the Department of Student Welfare",
        email: "meg_pacleb@dlsu.edu.ph",
        telegram: "@megpacleb",
        photo: "assets/dsw-meg.JPG"
      }
    ],

    committees: [
      { 
        name: "Enlistment", 
        positions: "10 Executives, 2 Directors", 
        description: "The Enlistment Committee supports students before, during, and after the enlistment period by providing clear information and assistance on enlistment-related concerns and processes. These include class availability, adding or dropping courses, academic requirements, shifting, minors, graduation, leave of absence, tuition concerns, scholarships, and other enrollment matters. The committee also consolidates recurring concerns and coordinates with relevant offices to help make enlistment processes easier for students to understand and navigate.\n\nSample Projects: SS Central, post-enlistment and pre-enlistment concern consolidation, enlistment FAQs and information drives, and student concern coordinations.",
        requirements: "CV" 
      },
      { name: "Special Concerns", 
        positions: "10 Executives, 3 Directors", 
        description: "The Special Concerns Committee handles student welfare concerns that may require more individualized attention, closer coordination, or assistance beyond standard university processes. It helps assess concerns, identify appropriate forms of support, and connect students with the relevant offices and resources while ensuring that concerns are handled with sensitivity, responsiveness, and care.\n\n Sample Projects: INeedAssist, Scholar Pantry, individualized student concern handling, referral and support coordination, and welfare assistance initiatives.",
        requirements: "CV" 
      },
      { 
        name: "Well-Being Support", 
        positions: "10 Executives, 3 Directors", 
        description: "The Well-Being Support Committee promotes the mental, emotional, and overall well-being of students through programs, resources, and initiatives focused on wellness and personal growth. It develops responsive activities based on student needs and helps connect the student body with relevant mental health services, support systems, and well-being resources within and beyond the university.\n\n Sample Projects: Mindscape, SAS2000 modules, wellness workshops, mental health resource campaigns, and student well-being activities.",
        requirements: "CV" },
      { 
        name: "Welfare Watch", 
        positions: "10 Executives, 3 Directors", 
        description: "The Welfare Watch Committee monitors student welfare concerns and gathers data to identify recurring issues, needs, and areas for improvement within the university. Through constituency checks, surveys, reporting channels, and regular monitoring, the committee raises student concerns to the appropriate offices and follows through on their progress to help ensure that student feedback leads to meaningful and accountable action. \n\n Sample Projects: Constituency Check Surveys, Improvement of Facilities reporting, Price Check, Sulit Lasalyano, and welfare monitoring and feedback systems.",
        requirements: "CV" },
      { 
        name: "University Processes", 
        positions: "10 Executives, 3 Directors", 
        description: "The University Processes Committee assists students in understanding and navigating academic and administrative processes within the university. It provides clear information on requirements, procedures, relevant offices, and next steps while developing guides and resources that make university systems easier to access and understand. The committee also coordinates with relevant offices to address process-related concerns and improve the overall student experience. \n\n Sample Projects: Archers Post/Bulletin, university process guides, Certification Program, process explainer content, and feedback channels for administrative concerns",
        requirements: "CV" },
      { 
        name: "Student Resource Support", 
        positions: "10 Executives, 4 Directors", 
        description: "The Student Resources Support Committee works to make practical resources, opportunities, and forms of assistance more accessible to the student body. Its initiatives may include borrowing systems, food and basic-needs support, job and career opportunities, academic resources, and other student-centered services aimed at reducing everyday barriers and supporting students academically, financially, and personally.",
        requirements: "CV"
      }
    ]
  },
  "DLA": {
    name: "Department of Legal Affairs",
    category: "Executive Board and Cabinets",
    description: "The Department of Legal Affairs (DLA) serves as the legal and advisory arm of the University Student Government (USG), ensuring that the USG and its officers operate in accordance with the Constitution, laws, policies, and established rules of the organization. \n\n DLA provides legal representation, research, fact-finding, consultation, and advisory services to the President and other USG officers, while also assisting in matters involving legislation, policy formulation, investigations, and the implementation of Legislative Assembly decisions. \n\n Through its work in reviewing legal concerns, preparing rules and guidelines, facilitating compliance, and representing the USG or student body before appropriate courts, tribunals, bodies, or commissions, DLA safeguards the rights, powers, and interests of the USG and the students it serves.",
    logo: "assets/usg-black-logo.png",
    executiveName: "Department of Legal Affairs",
    applicationLink: "https://bit.ly/SGAR2627T1_DLA_ApplicationForms",
    socialLink: "https://www.facebook.com/dlsu.usg",
    timeline: {
      kicker: "T1 SGAR 2026",
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–9",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 10, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 12–16",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Results",
          date: "OCT 26",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    },
    orgStructureImage: "assets/DLA_OrgChart.png",
    executiveBoard: [
      {
        name: "Simon Gabriel “Sai” Kabiling",
        role: "Attorney General",
        email: "simon_kabiling@dlsu.edu.ph",
        telegram: "@saikabiling",
        photo: "assets/dla-sai.png"
      },
      {
        name: "Chriszette “Chi” Francia",
        role: "Deputy Attorney General",
        email: "chriszette_francia@dlsu.edu.ph",
        telegram: "@chifrancia",
        photo: "assets/dla-chi.png"
      }
    ],

    committees: [
      { 
        name: "Associate Attorney General", 
        positions: 1, 
        description: "Assists the Attorney General in matters concerning legislation, policy formulation, legal drafting, and the preparation of implementing rules and regulations. Oversees the department’s research, documentation, and policy-monitoring functions and performs other related duties delegated by the Attorney General.",
        requirements: "Application Form & Interview (CV optional)" 
      },
      { name: "Senior Associate for Documentation", 
        positions: 1, 
        description: "Manages the Department of Legal Affairs’ legal records, documents, and official issuances. Ensures that pleadings, memoranda, legal opinions, subpoenas, and other departmental documents are properly prepared, organized, recorded, and archived.",
        requirements: "Application Form & Interview (CV optional)" 
      },
      { 
        name: "Senior Associate for Research", 
        positions: 1, 
        description: "Conducts legal and factual research to support the Attorney General and the department in litigation, investigations, legislative matters, and advisory work. Assists in preparing legal research, case briefs, position papers, and other research materials necessary for the department’s functions.",
        requirements: "Application Form & Interview (CV optional)" 
      },
      { 
        name: "Senior Associate for Policy", 
        positions: 1,
        description: "Monitors legislation, executive issuances, university policies, and government-wide rules relevant to the USG and its units. Reviews their implementation and identifies potential inconsistencies, compliance issues, or policy gaps for the Attorney General and Associate Attorney General.",
        requirements: "Application Form & Interview (CV optional)"
      },
      { 
        name: "Legal Associates", 
        positions: 3, 
        description: "Serves as a junior legal officer and trainee within the Department of Legal Affairs, providing general legal, administrative, research, and operational support to the department. They may be assigned by the Deputy Attorney General to assist in any function of the department, including legal research, drafting, documentation, fact-finding, case preparation, and other tasks as may be necessary.",
        requirements: "Application Form & Interview (CV optional)"
      }
    ]
  },
  "DOP": {
    name: "Department of Policies",
    category: "Executive Board and Cabinets",
    description: "The Department of Policies serves as the primary research, advisory, and advocacy arm of the University Student Government (USG) concerning institutional policies. It is entrusted with the critical role of ensuring that University-wide policies are fair, effective, and beneficial to the student body.\n\nThe Department operates through three specialized committees: Campaign and Mobilizations, which facilitates student participation and collective action through campaigns, unity walks, petitions, and town halls; Advocacies, which develops and communicates the Department’s advocacies through publication content and public statements; and Proposal Development, which conducts research and data gathering and translates its findings into substantive proposals addressing student and institutional concerns. Together, these committees undertake the necessary research, engagement, and advocacy to comprehensively assess and contribute to the improvement of the University’s governing policies.",
    logo: "assets/usg-black-logo.png",
    executiveName: "Department of Policies",
    applicationLink: "https://bit.ly/SGAR2627T1_DPOL_ApplicationForms",
    socialLink: "https://www.facebook.com/dlsu.usg",
    timeline: {
      kicker: "T1 SGAR 2026",
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–9",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 9, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 12–16",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Results",
          date: "OCT 26",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    },
    orgStructureImage: "assets/DOP_OrgChart.png",
    executiveBoard: [
      {
        name: "Ethan Alvarez",
        role: "Officer-in-Charge Cabinet Secretary",
        email: "ethan_f_alvarez@dlsu.edu.ph",
        telegram: "@alvarez_ethan",
        photo: "assets/dop-ethan.png"
      },
    ],

    committees: [
      { 
        name: "Campaign and Mobilizations Committee", 
        positions: "5-10 Executives", 
        description: "Organizes campaigns and mobilization initiatives that facilitate student participation and collective action through unity walks, petitions, town halls, and related activities.",
        requirements: "N/A" 
      },
      { name: "Advocacies Committee", 
        positions: "7-8 Executives", 
        description: "Develops and communicates the Department’s advocacies through publication content, public statements, and other forms of issue-oriented communication.",
        requirements: "N/A" 
      },
      { 
        name: "Proposal Development Committee", 
        positions: "2 Executives", 
        description: "Conducts legal and factual research to support the Attorney General and the department in litigation, investigations, legislative matters, and advisory work. Assists in preparing legal research, case briefs, position papers, and other research materials necessary for the department’s functions.",
        requirements: "N/A" 
      }
    ]
  },
  "DFO": {
    name: "Department of Financial Operations",
    category: "Executive Board and Cabinets",
    description: "The Department of Financial Operations primarily oversees the management of financial documents required for the execution of projects and programs across all student government units. This committee not only processes the financial transactions but also takes a leadership role in handling all financial transactions within the USG Executive Board, and guides the College and Batch governments. Their responsibility extends to ensuring full transparency and proper allocation of monetary resources, and becoming the bridge of the USG to SLIFE and other offices.",
    logo: "assets/usg-black-logo.png",
    executiveName: "Department of Financial Operations",
    applicationLink: "https://forms.gle/nMJiRiaFmsFkLFL58",
    socialLink: "https://www.facebook.com/dlsu.usg",
    timeline: {
      kicker: "T1 SGAR 2026",
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 12–23",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 9, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 24–27",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Results",
          date: "OCT 28",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    },
    orgStructureImage: "assets/DFO_OrgChart.png",
    executiveBoard: [
      {
        name: "Zyrus Kelsea R. Nabong",
        role: "Cabinet Secretary for Financial Operations",
        email: "zyrus_nabong@dlsu.edu.ph",
        telegram: "@znnabon",
        photo: "assets/dfo-zy.jpg"
      },
      {
        name: "Francine Angela Dela Fuente",
        role: "Cabinet Undersecretary for Financial Operations",
        email: "francine_delafuente@dlsu.edu.ph",
        telegram: "@Francine_Dela_Fuente",
        photo: "assets/dfo-fran.png"
      }
    ],

    committees: [
      { 
        name: "Finance Committee", 
        positions: "20 Executives, 7 Directors", 
        description: "The Finance Committee is responsible for assisting in the management and monitoring of financial operations within the USG Executive Board. The committee oversees financial documentation, supports the processing of financial transactions, ensures proper coordination with different units regarding finance-related concerns, and promotes transparency, accountability, and proper allocation of resources in all financial activities.",
        requirements: "N/A" 
      }
    ]
  },
  "DFA": {
    name: "Department of Financial Assistance",
    category: "Executive Board and Cabinets",
    description: "This department is assigned to spearhead various financial grants and programs of the Office of the Executive Treasurer. They are responsible for ensuring that students in need of financial support have the opportunity to apply for grants. \n\nAdditionally, this department is tasked with conceptualizing and diversifying the financial assistance programs of the USG. \n\n They are also responsible for ensuring that all scholars (academic, needs-based, athletic, etc.) in the university are well-accommodated with their concerns.",
    logo: "assets/usg-black-logo.png",
    executiveName: "Department of Financial Operations",
    applicationLink: "https://bit.ly/SGAR2627T1_DFA_ApplicationForms",
    socialLink: "https://www.facebook.com/dlsu.usg",
    timeline: {
      kicker: "T1 SGAR 2026",
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–9",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 9, 2026"
        },
        {
          title: "Results",
          date: "OCT 12",
          tag: "AUDITIONS",
          color: "yellow"
        }
      ]
    },
    orgStructureImage: "assets/DFA_OrgChart.png",
    executiveBoard: [
      {
        name: "Gabrielle Aliyah Vitug",
        role: "Cabinet Secretary, DFA",
        email: "gabrielle_vitug@dlsu.edu.ph",
        telegram: "@gabvitug",
        photo: "assets/DFA_CABSEC.png"
      },
{
        name: "Aliyah Monica Acayan",
        role: "Undersecretary for Scholarships & Grants",
        email: "aliyah_monica_acayan@dlsu.edu.ph",
        telegram: "@lyhmnc",
        photo: "assets/dfa-aliyahmonica.png"
      },
      {
        name: "Alyanna Coleen Dacanay",
        role: "Undersecretary for Experience Programs & Other Opportunities",
        email: "alyanna_dacanay@dlsu.edu.ph",
        telegram: "@yannadacanay",
        photo: "assets/dfa-dacanay.jpg"
      },
      {
        name: "Christine Anna Marie Amora",
        role: "Undersecretary for Subsidies & Special Needs Assistance",
        email: "christine_amora@dlsu.edu.ph",
        telegram: "@chin_amr",
        photo: "assets/dfa-amora.png"
      }
    ],

    committees: [
      {
        name: "Scholarships & Grants",
        positions: "15 Executives, 1 Director",
        description: "The University Student Government provides scholarships to students on a termly basis, the Scholarships and Grants Committee serves as the primary point of contact for these US-led scholarships. The committee is in charge of garnering applicants and screening them. In addition, the committee is also dedicated to addressing any inquiries or concerns that current scholars may have regarding their scholarship status, ensuring a comprehensive support system for both prospective and existing recipients.",
        requirements: "N/A"
      },
      {
        name: "Subsidies & Special Needs Assistance",
        positions: "12 Executives, 2 Directors",
        description: "The committee holds responsibility for overseeing incentivized financial student programs on a termly basis. Specifically, they are in charge of garnering applicants for subsidies and special needs projects, conducting interviews, and screening candidates in collaboration with the administration and other partner organizations. Additionally, the committee actively manages efforts to enhance existing student welfare initiatives, ensuring they are tailored to meet the evolving needs of the students.",
        requirements: "N/A"
      },
      {
        name: "Experiences & Opportunities",
        positions: "10 Executives, 3 Directors",
        description: "The Experience Programs and Opportunities Committee was created to address the limitation of Likes providing scholarships solely through the organization's budget. This committee focuses on assisting students by linking them to external scholarships, student assistantship programs, and internship opportunities. Through these initiatives, the committee provides alternative avenues of financial relief and professional development, ensuring that students continue to receive meaningful support beyond internal grants.",
        requirements: "N/A"
      },
    ]
  },
  "DSC": {
    name: "Department of Socio-Civic Affairs",
    category: "Executive Board and Cabinets",
    description: "The Department of Socio-Civic Affairs serves as a platform for student-centered initiatives that promote well-being, social awareness, civic engagement, and meaningful participation within and beyond the university. Through programs, campaigns, partnerships, and community-based efforts, the department works to address concerns that affect students and the wider society. \n\n At its core, the department aims to empower Lasallians to become informed, compassionate, and socially responsible individuals by transforming advocacies into concrete action.",
    logo: "assets/usg-black-logo.png",
    applicationLink: "https://forms.gle/3Th6cg7qCcAKwZcp6",
    primerLink: "",
    socialLink: "https://www.facebook.com/dlsu.usg",
    executiveBoard: [
      {
        name: "Kristoff Cruz",
        role: "Cabinet Secretary for Socio-Civic Affairs",
        email: "kristoff_cruz@dlsu.edu.ph",
        telegram: "@kristoff_cruz",
        photo: "assets/DSCA_Cabinet Secretary_Cruz.png"
      },
      {
        name: "Elle Aguila",
        role: "Undersecretary for Socio-Civic Affairs",
        email: "acezhel_aguila@dlsu.edu.ph",
        telegram: "@elleaguila",
        photo: "assets/DSCA_Undersecretary_Aguila.png"
      }
    ],
    committees: [
      {
        name: "Health, Safety, and Empowerment",
        positions: "5 Executives",
        description: "The Health, Safety, and Empowerment Committee promotes a campus environment where students feel safe, supported, informed, and empowered. It develops initiatives centered on physical and mental well-being, health education, safety awareness, risk reduction, emergency preparedness, and student empowerment. Beyond responding to concerns, the committee encourages proactive care by equipping students with the knowledge, resources, and opportunities needed to make informed decisions for themselves and their communities.",
        requirements: "Application Forms"
      },
      {
        name: "National and Political Affairs",
        positions: "4 Executives",
        description: "The National and Political Affairs Committee creates opportunities for students to better understand national issues, governance, public policy, and the role of citizens in a democratic society. Through educational campaigns, discussions, forums, and civic initiatives, the committee encourages informed and meaningful engagement with issues that affect the country and its people by providing spaces for critical inquiry, respectful discussion, civic education, and responsible participation.",
        requirements: "Application Forms"
      },
      {
        name: "Social Advocacies",
        positions: "4 Executives",
        description: "The Social Advocacies Committee advances causes that promote inclusion, social responsibility, cultural awareness, human dignity, and community development. It develops campaigns, projects, and engagements that shed light on social realities while providing students with opportunities to participate in meaningful advocacy. By connecting awareness with action, the committee aims to foster empathy, solidarity, and a deeper understanding of diverse community challenges.",
        requirements: "Application Forms"
      }
    ],
    orgStructureImage: "assets/DSC_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–17",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-17T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 17, 2026"
        },
        {
          title: "Results",
          date: "OCT 26–28",
          tag: "PREMIERE",
          color: "yellow"
        }
      ]
    }
  },
  "DUE": {
    name: "Department of University Engagements",
    category: "Executive Board and Cabinets",
    description: 
    "The Department of University Engagements serves as the central events and coordination hub of the University Student Government (USG). It is entrusted with planning, executing, and supporting projects that embody Lasallian values while responding to the diverse interests of the student body.\n\nThrough its six committees namely, Community-Based Engagements (CBE), Admin-Based Engagements (ABE), Fundraising Activities (FRA), Logistics & Technology (LogiTech), Sports-Based Initiatives (SBI), and University Relations (UniRel). The department ensures that all USG initiatives are student-centered, inclusive, and well-executed.\n\nDUE also plays a crucial role in consolidating event execution across the Executive Board, ensuring that no idea or initiative goes to waste. By streamlining event management, amplifying student participation, and fostering collaboration among units, the department becomes a vital bridge between the USG, the student body, and the broader Lasallian community.",
    logo: "assets/usg-black-logo.png",
    applicationLink: "https://animo.li/SGAR2627T1_DUE_ApplicationForms",
    primerLink: "",
    socialLink: "https://www.facebook.com/dlsu.usg",
    executiveBoard: [
      {
        name: "Jewel Ann Nicole Magno",
        role: "Cabinet Secretary",
        email: "jewel_magno@dlsu.edu.ph",
        telegram: "@jewelanncl",
        photo: "assets/[DUE] MAGNO_Cabinet Secretary.JPG"
      },
      {
        name: "Adia Avendaño",
        role: "Undersecretary",
        email: "adia_avendano@dlsu.edu.ph",
        telegram: "@adiaavendano",
        photo: "assets/[DUE] AVENDAÑO_Undersecretary.JPG"
      },
      {
        name: "Lawrence Gio Cantimbuhan",
        role: "Undersecretary",
        email: "lawrence_cantimbuhan@dlsu.edu.ph",
        telegram: "@giocantimbuhan",
        photo: "assets/[DUE] CANTIMBUHAN_Undersecretary.JPG"
      }
    ],
    committees: [
      {
        name: "Community-Based Engagements",
        positions: "5 Executives",
        description: "The Community-Based Engagements Committee strengthens the connection of the University Student Government to the student body through advocacy-centered and interest-driven projects. It focuses on unifying sectors of the student population by creating activities that promote wellness, inclusivity, and shared Lasallian values.",
        requirements: "1. Experience in managing projects effectively.\n2. Communicates and collaborates well with others.\n3. Strong understanding of student needs and interests."
      },
      {
        name: "Sports-Based Initiatives",
        positions: "5 Executives",
        description: "The Sports-Based Initiatives sub-committee serves as the athletic and recreational arm of CBE, with a strong focus on UAAP-centered projects and student engagement. It leads initiatives such as UAAP watch parties, game-day events, and spirit-building activities that amplify school pride.",
        requirements: "1. Brings prior leadership and management experience in school events.\n2. Promotes unity and school spirit by initiating sport-based projects.\n3. Strong initiative and creativity in developing student-centered projects."
      },
      {
        name: "Admin-Based Engagements",
        positions: "5 Executives",
        description: "The Admin-Based Engagements Committee is tasked with spearheading institutionalized and tradition-based activities of the University. It ensures that programs are aligned with Lasallian values, culture, and mission, while serving as a bridge between the student government and university offices for events of institutional significance.",
        requirements: "1. Prior leadership or coordination roles in school offices.\n2. Ensures events are aligned with institutional values.\n3. Strong coordination skills in working with university offices and stakeholders."
      },
      {
        name: "Fundraising Activities",
        positions: "5 Executives",
        description: "The Fundraising Activities Committee manages initiatives that generate financial resources for the department and its projects. This includes conceptualizing creative fundraising ideas, reaching out to potential sponsors and partners, coordinating sponsorships and event logistics, and ensuring financial transparency and alignment with university policies.",
        requirements: "1. Supports fundraising projects with accountability and teamwork.\n2. Basic knowledge of budgeting and handling funds.\n3. Strong communication skills in reaching out to potential sponsors and partners."
      },
      {
        name: "Logistics and Technology",
        positions: "10 Executives",
        description: "The Logistics & Technology Committee handles the technical and operational backbone of events. This includes manpower pooling, acquisition of permits, logistical arrangements, and integration of technology to improve efficiency and execution in projects.",
        requirements: "1. Able to operate equipment and manage digital tools.\n2. Experience in stage management or behind-the-scenes event work.\n3. Proficient in coordinating permits, schedules, and logistical resources for smooth event execution."
      },
      {
        name: "University Relations",
        positions: "5 Executives",
        description: "The University Relations Committee strengthens coordination and communication between USG units, the Council of Student Organizations (CSO), and various student sectors. It facilitates the flow of information, gathers student feedback and insights, and supports collaboration to ensure that initiatives remain responsive and aligned with the needs of the student community.",
        requirements: "1. Familiar with student government structures, organizational cultures, and university systems.\n2. Strong information-gathering and coordination skills in understanding student needs and concerns.\n3. Ability to manage timelines, follow-ups, and collaboration across sectors."
      }
    ],
    orgStructureImage: "assets/DUE_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–12",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-12T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 12, 2026"
        },
        {
          title: "Results",
          date: "OCT 14",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "DEE": {
    name: "Department of External Engagements",
    category: "Executive Board and Cabinets",
    description: "The Department of External Engagements (DEE) serves as the primary bridge between the University Student Government (USG) and its external partners. It is responsible for cultivating and sustaining relationships with organizations, companies, and institutions beyond the University, ensuring meaningful collaborations that support student initiatives and advocacy. The department also works closely with the Office of the Vice President for External Affairs (OVPEA) and other Executive Boards (EBs) to enhance their projects and initiatives through strategic partnerships, external support, and collaborative opportunities — amplifying the reach, impact, and relevance of USG programs to better serve the Lasallian community.\n\nDEE oversees all external coordination, partnership negotiations, career opportunities, endorsement processing, and communication efforts with stakeholders. It also manages the administrative requirements related to external engagements such as Memorandum of Agreement (MOA), documentation, permits, correspondence, and partnership reports. The committees under the Department of External Engagements fulfill these responsibilities through their respective functions, working collaboratively to strengthen the USG’s presence and network outside the university.",
    logo: "assets/usg-black-logo.png",
    applicationLink: "https://bit.ly/SGAR2627T1_DEE_ApplicationForms",
    primerLink: "",
    socialLink: "https://www.facebook.com/dlsu.usg",
    executiveBoard: [
      {
        name: "Samantha Evangelista",
        role: "Cabinet Secretary",
        email: "sam_evangelista@dlsu.edu.ph",
        telegram: "@samssaammyy",
        photo: "assets/DEE_Cabinet Secretary.jpeg"
      },
      {
        name: "Tristan John Fino",
        role: "Director for Career Development",
        email: "tristan_fino@dlsu.edu.ph",
        telegram: "@teeejfino",
        photo: "assets/DEE_Director.jpeg"
      }
    ],
    committees: [
      {
        name: "Career Development Committee",
        positions: "7 Executives",
        description: "The Career Development Committee focuses on connecting students with career growth opportunities by building partnerships with companies, organizations, and industry leaders. It ensures that students gain access to internships, training, mentorship, and professional experiences that prepare them for life beyond the university.",
        requirements: "N/A"
      },
      {
        name: "Media and Public Relations",
        positions: "1 Director, 7 Executives",
        description: "The Media & Public Relations Committee is responsible for managing the department’s public image and communication with external audiences. It ensures that all messaging, content, and campaigns reflect the USG’s values and effectively promote the department’s initiatives and partnerships.",
        requirements: "N/A"
      }
    ],
    orgStructureImage: "assets/DEE_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–14",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-14T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 14, 2026"
        },
        {
          title: "Results",
          date: "OCT 16",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "LCSG":{
    name: "Laguna Campus Student Government",
    category: "Executive Board and Cabinets",
    description: "The Executive Board Campus Directorate (EB-CD) serves as the operational arm of the Laguna Campus Student Government (LCSG), operating under the Campus President, Secretary, and Treasurer. Its functions range from tending to student affairs and internal management to handling official communications for the LCSG. Within this structure, the Directors for College serve as executive leaders and liaisons for their respective academic colleges, driving college-specific initiatives, addressing student concerns, and facilitating direct communication between college student bodies and the executive board. Simultaneously, the Secretariats for the Campus Legislature provide administrative and operational support to the legislative branch by managing parliamentary documentation, recording session minutes, archiving passed resolutions, and coordinating legislative logistics.",
    logo: "assets/LCSG_Black Logo.png",
    applicationLink: "https://animo.li/7THLCSG_SGAR2026-2027ApplicationForm",
    primerLink: "",
    socialLink: "https://www.facebook.com/LCSGDLSU",
    executiveBoard: [
{
        name: "Amiel Anthony D. Pelobello",
        role: "Campus President",
        email: "amiel_pelobello@dlsu.edu.ph",
        telegram: "@amielpelo",
        photo: "assets/Pelobello_CP.jpg"
      },
      {
        name: "Sofia Andrea Linghap",
        role: "Campus Secretary",
        email: "sofia_andrea_c_linghap@dlsu.edu.ph",
        telegram: "@r0kuaiz",
        photo: "assets/Linghap_CSEC.png"
      },
      {
        name: "Vin Lorenzo Yap",
        role: "Campus Treasurer",
        email: "vin_lorenzo_a_yap@dlsu.edu.ph",
        telegram: "@vinyap313",
        photo: "assets/Yap_CTREAS.png"
      },
      {
        name: "Mathiena Aldousse M. Apacionado",
        role: "COS Representative",
        email: "mathiena_apacionado@dlsu.edu.ph",
        telegram: "@aldousse",
        photo: "assets/Apacionado_COSREP.png"
      },
      {
        name: "Carl Bien Angel D. Dela Cruz",
        role: "CLA Representative",
        email: "carl_bien_delacruz@dlsu.edu.ph",
        telegram: "@biensterz",
        photo: "assets/DelaCruz_CLAREP.png"
      },
      {
        name: "Lieanne Jamaica G. Relatores",
        role: "Campus Directorate for Human Resources",
        email: "lieanne_relatores@dlsu.edu.ph",
        telegram: "@jjjamaica_a",
        photo: "assets/Relatores_EB-CD_HR.jpg"
      },
      {
        name: "Aiquin L. Manansala",
        role: "Campus Directorate for Marketing and Community Partnerships",
        email: "aiquin_manansala@dlsu.edu.ph",
        telegram: "@akn_mnnslavi",
        photo: "assets/Manansala_EB-CD_MPR.jpg"
      },
      {
        name: "Timothy Luigi G. De Guzman",
        role: "Campus Directorate for Operations and Logistics",
        email: "timothy_deguzman@dlsu.edu.ph",
        telegram: "@wiwiwigi",
        photo: "assets/De Guzman_EB-CD_OPLOG.jpg"
      }
    ],
    committees: [
      {
        name: "Student Services",
        positions: "1 Director, 1 Deputy Director, Executives",
        description: "The Student Services Department addresses, documents, and forwards student welfare concerns and coordinating with University offices on student-related matters",
        requirements: ""
      },
      {
        name: "Finance and Records",
        positions: "1 Director*, 1 Deputy Director, Executives",
        description: "The Finance and Records Department oversees financial management, accounts, and records of the LCSG.",
        requirements: ""
      },
      {
        name: "Operations and Logistics",
        positions: "1 Deputy Director, Executives",
        description: "The Operations and Logistics Department provides logistical support for campus government projects, including venues, equipment, transportation, and manpower.",
        requirements: ""
      },
      {
        name: "Project Development and Management",
        positions: "1 Deputy Director, Executives",
        description: "The Project Development and Management Department oversees the development, consolidation, implementation, and evaluation of campus government projects.",
        requirements: ""
      },
      {
        name: "Human Resources",
        positions: "1 Deputy Director, Executives",
        description: "The Human Resources Department oversees the recruitment, screening, onboarding, and performance monitoring of campus government officers.",
        requirements: ""
      },
      {
        name: "Marketing and Community Partnerships",
        positions: "1 Deputy Director, Executives",
        description: "The Marketing and Community Partnerships Department manages external engagements, marketing strategies, sponsorships, and partnerships.",
        requirements: ""
      },
      {
        name: "Communica-tions and Multimedia",
        positions: "1 Deputy Director, Executives",
        description: "The Communications and Multimedia Department oversees campus government branding, multimedia content, publicity guidelines, and official communications and publications.",
        requirements: "Portfolio"
      }
    ],
    orgStructureImage: "assets/LCSG_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–12",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-12T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 12, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 13–21",
          tag: "INTERVIEW PERIOD",
          color: "yellow",
          start: "2026-10-13T00:00:00+08:00",
          end: "2026-10-21T23:59:59+08:00",
          openDateLabel: "OCTOBER 13, 2026",
          closeDateLabel: "OCTOBER 21, 2026"
        },
        {
          title: "Results",
          date: "OCT 31",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "OMB": {
    name: "Office of the Ombudsman",
    category: "Independent Bodies",
    description: "The Office of the Ombudsman serves as the primary investigative body that shall take positive and effective measures against graft and corruption within the University Student Government. It has the primary duty of enforcing the mandate of USG Officers found in the USG Constitution.",
    logo: "assets/OMB_Black Logo.png",
    applicationLink: "https://animo.li/SGAR2627T1_OMB_ApplicationForms",
    primerLink: "https://drive.google.com/open?id=1iM_B3RVVtsZSzeGKxq5kWAB6cifl75mp",
    socialLink: "https://facebook.com/dlsuombudsman",
    executiveBoard: [
      {
        name: "Andrei Miguel R. Alviar",
        role: "Ombudsman",
        email: "andrei_miguel_alviar@dlsu.edu.ph",
        telegram: "@atlasu_alviaru",
        photo: "assets/OMB_Ombudsman.png"
      },
      {
        name: "Tisha Denise M. Dorosan",
        role: "Deputy Ombudsman",
        email: "tisha_dorosan@dlsu.edu.ph",
        telegram: "@TDorosan",
        photo: "assets/OMB_DeputyOmbudsman_Dorosan.png"
      },
      {
        name: "Kristine Cunanan",
        role: "Deputy Ombudsman",
        email: "kristine_cunanan@dlsu.edu.ph",
        telegram: "@KrisCunanan",
        photo: "assets/OMB_DeputyOmbudsman_Cunanan.png"
      }
    ],
    committees: [
{
        name: "Ombudsman Council",
        positions: "N/A",
        description: "The Ombudsman Council is the highest governing body and authority of the Office of the Ombudsman. The Ombudsman represents a crucial pillar in maintaining integrity within the USG. As the head of the sole independent investigative body, the Ombudsman serves as a watchdog, ensuring accountability and transparency in student government operations.",
        requirements: "1. Must have passed the Legal and Judicial Training Program under DLSU USG Judiciary OR the Prosecutor Training Program under the Office of the Ombudsman"
      },
      {
        name: "USG Prosecutor Service",
        positions: "8 Prosecutor Trainees",
        description: "The USG Prosecution Service and its prosecutors is the prosecution arm of the Office of the Ombudsman. They serve as the representative in court or in any other body or unit which has jurisdiction over the case for the Office of the Ombudsman as stipulated in the Ombudsman Act and its by-laws.",
        requirements: "1. Must undergo the Legal and Judicial Training Program under DLSU USG Judiciary OR the Prosecutor Training Program under the Office of the Ombudsman"
      },
      {
        name: "Administration Committee",
        positions: "4-8 Apprentices",
        description: "The Administration Committee handles the administrative, operational, and human resource functions of the Office of the Ombudsman. It also supervises the administrative work of the supporting committees and regularly monitors the policy compliance of every member of the organization.",
        requirements: "N/A"
      },
      {
        name: "Fiscal Committee",
        positions: "4-8 Apprentices",
        description: "The Fiscal Committee ensures that the monetary funds of the Office of the Ombudsman are properly managed. They ensure that all financial obligations and transactions of the Office of the Ombudsman are monitored and kept. They are to review and monitor all receipts, and transactions of funds of the Central Committee and other Committees. Fiscal Officers are trained to be knowledgeable on the financial processes available to the Office of the Ombudsman, be able to handle all the necessary documents and proper use of funds.",
        requirements: "N/A"
      },
      {
        name: "Public Information Committee",
        positions: "4-8 Apprentices",
        description: "The Public Information Committee is in charge of managing the proper dissemination of information to the student body. They are also primarily responsible for creating publicity materials for the Office of the Ombudsman. They are also responsible for handling social media pages, public announcements, and publishing the memorandum of legal opinions.",
        requirements: "1. Portfolio"
      },
    ],
    orgStructureImage: "assets/omb-orgchart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–17",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 9, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 14–21",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Results",
          date: "OCT 27",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "COA": {
    name: "Commission on Audit",
    category: "Independent Bodies",
    description: "The Commission on Audit is an independent Constitutional Commission of the De La Salle University-Manila University Student Government, which has the duties and powers to examine and audit all accounts pertaining to the revenue and receipts of and to the expenses and disbursements of every USG unit.",
    logo: "assets/COA-BlackLogo.png",
    applicationLink: "https://bit.ly/SGAR2627T1_COA_ApplicationForms",
    primerLink: "https://drive.google.com/file/d/1Aaqwgvf62bgtIjrsXc0VjuZRh63KuRS_/view?usp=sharing",
    socialLink: "https://www.facebook.com/DLSUCommissionOnAudit",
    executiveBoard: [
      {
        name: "Macaila Ricci Taran",
        role: "Vice Chairperson for Administration",
        email: "macaila_taran@dlsu.edu.ph",
        telegram: "@cai_trn",
        photo: "assets/coa-cai.png"
      },
      {
        name: "Danica Mae M. Perez",
        role: "Chief Auditor",
        email: "danica_mae_perez@dlsu.edu.ph",
        telegram: "@kararumixx",
        photo: "assets/coa-danica.png"
      },
      {
        name: "Gerald S. Fernando",
        role: "Chief Auditor",
        email: "gerald_fernando@dlsu.edu.ph",
        telegram: "@Gerald_F0720",
        photo: "assets/coa-gerald.png"
      }
    ],
    committees: [
      {
        name: "Audit Committee",
        positions: "17 Auditors",
        description: "The Audit Committee ensures that the finances of the USG are secure and credible through its adherence to regulations and internal controls. Through such activities, the audit team encourages transparency and accountability within all sections of the USG.",
        requirements: "1. Audit Qualifying Exam"
      },
      {
        name: "Fin & Docu Committee",
        positions: "1 Managing Director, 1 Associate Director, 10 Associates",
        description: "The Finance and Documentation Committee is responsible for facilitating a smooth and efficient auditing process by collecting, reviewing, and monitoring the Term-End Reports submitted by designated USG units. This committee is further responsible for overseeing financial matters by handling money management and accounting of funds of the Commission.",
        requirements: "1. Finance and Documentations Qualifying Exam"
      },
      {
        name: "Human Resources Committee",
        positions: "1 Managing Director, 3 Associate Directors, 10 Associates",
        description: "The Human Resources Committee handles matters related to recruitment, member relations and organizational alignment. Human Resources also keeps attendance records and member databases and monitors member interactions for the preservation of organizational autonomy.",
        requirements: "1. Human Resources Qualifying Exam"
      },
      {
        name: "Publicity Committee",
        positions: "1 Managing Director, 2 Associate Directors, 5 Associates",
        description: "The Publicity Committee manages all publicity activities for the Commission. Its responsibilities include managing the Commission's branding initiatives, developing publicity materials, preparing and disseminating official announcements, and publishing approved content across COA's various social media platforms.",
        requirements: "1. Publicity Qualifying Exam\n2. Publicity Portfolio"
      }
    ],
    orgStructureImage: "assets/COA_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–10",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 10, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 12–17",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Qualifying Exams",
          date: "OCT 17 & 21",
          tag: "EVALUATION",
          color: "neutral"
        },
        {
          title: "Results",
          date: "OCT 28",
          tag: "PREMIERE",
          color: "blue"
        }
      ]
    }
  },
  "COMELEC": {
    name: "Commission on Elections",
    category: "Independent Bodies",
    description: "The Commission on Elections acts as the unit that facilitates and oversees elections at the undergraduate level. It is the body that enforces all regulations of election-related affairs within the University Student Government, ensuring that all registered candidates, coalitions, and political parties campaign fairly.",
    logo: "assets/comelec-logo.png",
    applicationLink: "https://tinyurl.com/t1comelecvrw",
    primerLink: "https://drive.google.com/file/d/1sMnwh9hiXU_q9wgKRKebnv-hByr0ZTtZ/view?usp=drive_link",
    socialLink: "https://facebook.com/DLSUCOMELEC",
    executiveBoard: [
      {
        name: "Ma. Samantha Therese S. Lambino",
        role: "Chairperson",
        email: "ma_samantha_lambino@dlsu.edu.ph",
        telegram: "@msthsam",
        photo: "assets/SGAR_Executive Board Icon.png"
      }
    ],
    committees: [
      {
        name: "Volunteer",
        positions: "N/A",
        description: "These are temporary officers within the Commission who assist in achieving the goals for the upcoming elections. Volunteers are expected to contribute and aid in all COMELEC events both internally and externally. They are encouraged to move forward with COMELEC to serve as a full-time associate once their time as a volunteer ends. Volunteers are also given the opportunity to work with its five Committees (Membership, Documentation and Logistics, Legal Affairs, Finance and Audit, Publicity and Creatives) to know what it is like to work with the Commission.",
        requirements: "1. Must not have been affiliated with a political party for at least 2 (two) terms.\n2. Must not have been a candidate or a member of any USG unit during their stay in the University.\n3. Must not have been a Campaign Officer Electorate Mobilization Coordinator or any higher position of any political party."
      }
    ],
    orgStructureImage: "assets/comelec-orgchart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "SEP 30–OCT 10",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-09-30T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "SEPTEMBER 30, 2026",
          closeDateLabel: "OCTOBER 10, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 5–16",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Results",
          date: "OCT 19",
          tag: "PREMIERE",
          color: "neutral"
        },
        {
          title: "Volunteer Seminar",
          date: "OCT 21",
          tag: "ORIENTATION",
          color: "blue"
        }
      ]
    }
  },
  "CSG": {
    name: "Computer Studies Government",
    category: "College Units",
    description: "The Computer Studies Government (CSG) serves as the college-wide student government for the College of Computer Studies, representing and advocating for the interests of CCS students within the University Student Government (USG).",
    logo: "assets/CSG BLACK.png",
    applicationLink: "https://animo.li/SGAR2627T1_CSG_ApplicationForms",
    primerLink: "",
    socialLink: "https://www.facebook.com/DLSU.CSG/",
    executiveBoard: [
      {
        name: "Vaughn Marick A. Sy",
        role: "College President",
        email: "vaughn_sy@dlsu.edu.ph",
        telegram: "@vaughn_sy",
        photo: "assets/CSG_CP.webp"
      },
      {
        name: "Francesca Anne Denise C. Catolico",
        role: "Chief Operating Officer",
        email: "kat_catolico@dlsu.edu.ph",
        telegram: "@francescaxann",
        photo: "assets/CSG_COO.webp"
      },
      {
        name: "Bullet Andre F. Fernandez",
        role: "Chief of Staff",
        email: "bullet_fernandez@dlsu.edu.ph",
        telegram: "@bulletfernandez",
        photo: "assets/FERNANDEZ 2X2.png"
      }
    ],
    committees: [
      {
        name: "Student Services",
        positions: "5-6 Executives",
        description: "The Student Services Committee is dedicated to addressing various academic, administrative, and general concerns of the student body. This includes assisting students in the enlistment process, promoting CSG and USG initiatives, coordinating with administrative units, and providing comprehensive support and responsiveness to the dynamic needs of the student body.",
        requirements: "N/A"
      },
      {
        name: "Research & Academics",
        positions: "5-6 Executives",
        description: "The Research & Academics committee oversees the implementation of information collection for the projects under CSG through surveys, policy-making, and resolutions. Their responsibilities include acquiring relevant data to ensure the viability of CSG's initiatives, aiding the Legislative Board in crafting resolutions and manifestos, and disseminating academic policies to the student body.",
        requirements: "N/A"
      },
      {
        name: "Human Resources",
        positions: "5-6 Executives",
        description: "The Human Resource Development Committee plays an essential role in fostering personal and professional growth of CSG officers. By overseeing and coordinating organizational-wide activities, routine check-ups, and various internal procedures, the committee addresses welfare concerns; enhancing camaraderie and ensuring that every officer is supported and well-adjusted in their roles.",
        requirements: "N/A"
      },
      {
        name: "Project Management",
        positions: "5-6 Executives, 1 Director",
        description: "The Project Management Committee oversees preparations, planning, and execution of projects under CSG ensuring they are within the scope, implemented on time, and fit the budget. The committee's responsibilities include preparing documentational and logistical needs, coordinating with different committees, tracking progress, and addressing risks and challenges to achieve the objectives of all projects.",
        requirements: "N/A"
      },
      {
        name: "Finance",
        positions: "3-4 Executives, 1 Director",
        description: "The Finance Committee is responsible for managing and processing all financial documents required for the activities and events of the CSG. It oversees all monetary transactions and is also responsible for other financial processes to ensure transparency and accountability within the organization.",
        requirements: "N/A"
      },
      {
        name: "IMC - Publicity",
        positions: "3-4 Executives, 1 Director",
        description: "The Integrated Marketing Communications (Publicity) Committee is responsible for overseeing the publications and social media management of the CSG. The committee ensures that every piece of publicity content is accurate, timely, and aligned with the CSG's goals and objectives. Through consistent postings and publications, the committee interacts, informs, and establishes deep relationships with the study body.",
        requirements: "N/A"
      },
      {
        name: "IMC - Creatives",
        positions: "5-6 Executives, 1 Director",
        description: "The Integrated Marketing Communications (Creatives) Committee is responsible for developing and executing the creative direction of the CSG. Through innovative design and branding strategies, the committee enhances the visibility of CSG projects, fosters greater student engagement, and upholds the identity of the organization across all platforms.",
        requirements: "N/A"
      },
      {
        name: "Relations",
        positions: "3-4 Executives, 1 Director",
        description: "The Relations Committee handles matters related to establishing and maintaining relationships both within and outside the university. Internally, it coordinates with the University Student Government (USG), the Council of Student Organizations (CSO), and other university departments. Externally, it engages with organizations from other universities, sponsors, and partner companies to build collaboration and encourage external participation.",
        requirements: "N/A"
      }
    ],
    orgStructureImage: "assets/CSG_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–10",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 10, 2026"
        },
        {
          title: "Results",
          date: "OCT 15",
          tag: "PREMIERE",
          color: "yellow"
        }
      ]
    }
  },
  "BCG": {
    name: "Business College Government",
   category: "College Units",
    description: "The Business College Government (BCG) serves as the student government of the Ramon V. del Rosario–College of Business, representing the student body and coordinating initiatives, programs, and services for its constituents. It facilitates communication between students, College administration, and relevant organizations, while supporting student participation and addressing student needs across academic, organizational, and community-related activities. Through its committees, BCG manages student concerns, implements projects, and provides platforms that contribute to student life and experience, holistic growth, and meaningful change within the College.",
    logo: "assets/[BGC] BLACK LOGO.png",
    applicationLink: "https://bit.ly/SGAR-BCG26",
    primerLink: "",
    socialLink: "https://www.facebook.com/DLSUBCG",
    /*
    executiveBoard: [
      //{
        //name: "Jan Aura Denise S. Dulce",
        //role: "RVR-COB College President - OIC",
        //email: "jan_dulce@dlsu.edu.ph",
        //telegram: "@aurasDULCE",
        //photo: "assets/BCG_RVR-COB College President - OIC.png"
      //},
      {
        name: "Jean Carla M. Villano",
        role: "Chief Communications Officer",
        email: "jean_villano@dlsu.edu.ph",
        telegram: "@jeancxlvillano",
        photo: "assets/BCG_Chief Communications Officer.png"
      },
      {
        name: "Gian Glendale S. Ventura",
        role: "Chief of Staff",
        email: "gian_glendale_ventura@dlsu.edu.ph",
        telegram: "@giangiangiangiang",
        photo: "assets/BCG_Chief of Staff.png"
      },
      {
        name: "Juliana Margarette C. Jervoso",
        role: "Chief Operating Officer",
        email: "juliana_jervoso@dlsu.edu.ph",
        telegram: "@julianajervoso",
        photo: "assets/BCG_Chief Operating Officer.png"
      }
    ],
    committees: [
      {
        name: "Student Support",
        positions: "1 Director, 5 Associates",
        description: "The Student Support Committee serves as the primary point of contact for Business College students, addressing their concerns, inquiries, and needs regarding college processes and student life. It aims to provide timely assistance, promote student well-being, and ensure that students feel heard, informed, and supported within the Business College community.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "College Legislative Board",
        positions: "5 Associates",
        description: "The College Legislative Board is responsible for reviewing, developing, and ensuring the proper implementation of policies and resolutions that uphold the interests of Business College students.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Docu- mentations",
        positions: "7 Associates",
        description: "The Documentations Committee serves as the official record-keeper of BCG, ensuring that projects, events, and initiatives are properly documented. They manage essential requirements, track compliance, and maintain accurate records to promote accountability, transparency, and continuity.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Finance",
        positions: "3 Associates",
        description: "The Finance Committee oversees BCG's financial matters by ensuring responsible budgeting, transparency, and accountability. They manage funding and expenses, promote financial sustainability, and prepare the necessary documents for BCG's financial activities.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Human Relations",
        positions: "4 Associates",
        description: "The Human Relations Committee focuses on the growth, well-being, and development of BCG officers. They foster an inclusive environment, support leadership and personal development, help resolve internal concerns, and provide additional manpower to committees when needed.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Project Management",
        positions: "7 Associates",
        description: "The Project Management Committee oversees all organizational projects and ensures the proper execution and success of all initiatives. This committee is in charge of holding seminars and in-university engagements that benefit the RVRCOB.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Academics",
        positions: "7 Associates",
        description: "The Academics Committee facilitates programs that involve the academic readiness and well-being of the RVRCOB. These involve initiatives like the provision of free school supplies, off-campus office tours, and such.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "University Relations",
        positions: "5 Associates",
        description: "The University Relations Committee handles strategic partnerships inside the institution with other organizations. This committee also ensures that the publicity of the events executed by the organization is supported properly through partnerships with different organizations.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Corporate Relations",
        positions: "5 Associates, 2 Vice Directors",
        description: "The Corporate Relations Committee is about fostering connections with brands and sponsors, so that the organization is supported appropriately. This committee also involves managing different brand activations, email blasting, and strategic communications.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Logistics and Technology",
        positions: "5 Associates",
        description: "The Logistics and Technology Committee is the backbone of the organization. This committee ensures that all operational aspects of the organization are appropriately supported by providing manpower, venue preparation, equipment reservations, and such.",
        requirements: "1. Completed Application Form"
      },
      {
        name: "Creatives",
        positions: "6 Associates",
        description: "The Creatives Committee creates visually engaging content for BCG's initiatives and events. The team designs graphics, videos, multimedia materials, and physical event materials that align with BCG's vision while using creativity and strategic messaging to engage the student body.",
        requirements: "1. Completed Application Form\n2. Portfolio (Min. 3 pubs)"
      },
      {
        name: "Public Relations",
        positions: "6 Associates",
        description: "The Public Relations Committee handles the creation of marketing spiels and strategies, overseeing the social media presence and promotional efforts for the Business College Government, with a focus on effective communication and audience engagement.",
        requirements: "1. Completed Application Form\n2. Sample Caption"
      },
      {
        name: "Media Coverage",
        positions: "6 Associates",
        description: "The Media Coverage Committee documents BCG's preparations, events, and behind-the-scenes from each event and project, capturing the key moments that shape each experience, preserving the stories and memories of the RVR-COB through photos and videos.",
        requirements: "1. Completed Application Form\n2. Portfolio (Min. 8 Photos and 3 Videos)"
      }
    ],
    */
    orgStructureImage: "assets/BCG_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–17",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-17T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 17, 2026"
        },
        {
          title: "Results",
          date: "OCT 19",
          tag: "PREMIERE",
          color: "yellow"
        }
      ]
    }
  },
  "ECG": {
    name: "Engineering College Government",
    category: "College Governments",
    description: "The Engineering College Government (ECG) serves as the primary student government of the Gokongwei College of Engineering (GCOE), representing and supporting the needs, interests, and development of its student body. Through its executive board, departments, units, and committees, ECG works to turn student needs into meaningful initiatives by providing academic support, student services, opportunities for professional and personal growth, and platforms that strengthen engagement within the engineering community. From organizing college-wide projects and advocacy efforts to coordinating partnerships, communications, and internal operations, ECG brings together student leaders and stakeholders to create an accessible, responsive, and enriching college experience for every GCOE student.",
    logo: "assets/ecg-black-logo.png",
    applicationLink: "https://animo.li/SGAR2627T1_17thECG_ApplicationForms",
    primerLink: "https://drive.google.com/file/d/1-HvRFx-IBqMbY6pL1f80RgYwwTQKP04h/view",
    socialLink: "https://www.facebook.com/ecgdlsu",
    /*
    executiveBoard: [
      //{
        //name: "Ystiphen Dela Cruz",
        //role: "OIC College President",
        //email: "ystiphen_lei_c_delacruz@dlsu.edu.ph",
        //telegram: "@tipdelacruz",
        //photo: "assets/ECG_CP.png"
      //},
      /*
      {
        name: "Andrea Nikole Veluz",
        role: "Chief of Staff",
        email: "andrea_veluz@dlsu.edu.ph",
        telegram: "@andiveluz",
        photo: "assets/ECG_COS.png"
      },
      {
        name: "Renzterbert Denzel Navarro",
        role: "Chief Operating Officer",
        email: "renzterbert_navarro@dlsu.edu.ph",
        telegram: "@renzterbert",
        photo: "assets/ECG_COO.jpg"
      },
      {
        name: "Isabella Marie Reyes",
        role: "Chief Communications Officer",
        email: "isabella_marie_s_reyes@dlsu.edu.ph",
        telegram: "@isabellareyes17",
        photo: "assets/ECG_CCO.png"
      },
      {
        name: "Samantha Kate Lacorte",
        role: "Deputy Chief of Staff",
        email: "samantha_kate_lacorte@dlsu.edu.ph",
        telegram: "@katelacorte",
        photo: "assets/ECG_DCOS.png"
      },
      {
        name: "Chloe Mithi Legaspi",
        role: "Deputy Chief Operating Officer",
        email: "chloe_legaspi@dlsu.edu.ph",
        telegram: "@chloe_legaspi",
        photo: "assets/ECG_DCOO.jpg"
      }
    ],
    */
    committees: [
      {
        name: "Academics",
        positions: "6–8 Executives",
        description: "The Academics Committee develops academic content and materials for the ECG activities and events. They aim to create platforms that strengthen the academic support system, oversee college-wide projects, and enrich the overall learning experience of the entire engineering student body.",
        requirements: "N/A"
      },
      {
        name: "Project Management",
        positions: "8–10 Executives",
        description: "The Project Management Committee oversees the conceptualization, planning, and implementation of major ECG projects and initiatives. They are responsible for managing event logistics, scheduling, and ensuring the seamless execution of all college-wide campaigns and activities."
        ,requirements: "N/A"
      },
      {
        name: "Student Services & Welfare",
        positions: "4–6 Executives",
        description: "The Student Services & Welfare Committee addresses student concerns related to pre-enlistment, enlistment, enrollment procedures, and important academic dates. They serve as a reliable bridge between the students and the administration, playing a vital role in providing academic support and ensuring accurate, timely information dissemination across the college."
        ,requirements: "N/A"
      },
      {
        name: "Human Resources",
        positions: "8–10 Executives",
        description: "The Human Resources Committee focuses on internal development by managing manpower, spearheading internal events such as the General Assembly, and ensuring smooth coordination among members and officers. They also play a key role in leading recruitment efforts, particularly during the Student Government Annual Recruitment (SGAR) for the ECG."
        ,requirements: "N/A"
      },
      {
        name: "Logistics",
        positions: "8–10 Executives",
        description: "The Logistics & Technology Committee secures venues, equipment, and materials, and runs all technical needs (e.g., PowerPoint, Zoom) for events. It also provides on-site logistics manpower, including venue setup and operations during activities."
        ,requirements: "N/A"
      },
      {
        name: "Docu            mentations",
        positions: "8–10 Executives",
        description: "The Documentations Committee coordinates with DAAM, SLIFE, and relevant offices/units to handle document approvals and ensure technical compliance with the office's guidelines. It ensures all submissions are complete, accurate, and polished before submission. The committee is also in charge of documenting live synchronous events of the batch government through photo documentation."
        ,requirements: "N/A"
      },
      {
        name: "Finance",
        positions: "6–8 Executives, 1 Vice Director",
        description: "The Finance Committee safeguards the Batch Student Government’s funds and assets, manages all finances, and handles procurement by receiving, recording, and preparing required financial documents. It compiles and submits timely financial reports and verifies all financial transactions within the ECG."
        ,requirements: "N/A"
      },
      {
        name: "Fundraising",
        positions: "6–8 Executives",
        description: "The Fundraising Committee spearheads income-generating projects and initiatives to financially support the batch government's events and advocacies. They are in charge of conceptualizing, organizing, and executing revenue streams, such as merchandise sales and fundraising events, to ensure the financial sustainability of ECG's endeavors."
        ,requirements: "N/A"
      },
      {
        name: "IMC: Creatives",
        positions: "6–9 Executives",
        description: "The IMC: Creatives leads the ECG’s visual branding, working with IMC (Publicity & Promotions) to conceptualize and produce marketing materials for projects and activities. They design and publish all publicity assets, including social media content for the college government."
      ,requirements: "N/A"
      },
      {
        name: "IMC: Publicity and Promotions",
        positions: "6–8 Executives",
        description: "The IMC: Publicity & Promotions leads the marketing strategy and content for the ECG BSG. They manage all social media, crafting captions and materials, and organizing timely releases for projects."
      ,requirements: "N/A"
      },
      {
        name: "IMC: Media",
        positions: "6–8 Executives",
        description: "The IMC: Media is responsible for the production of dynamic multimedia content that elevates the batch government's campaigns and activities. Working alongside other IMC committees, they specialize in videography, video editing, and audiovisual presentations to deliver engaging, high-quality media outputs for the batch."
      ,requirements: "N/A"
      },
      {
        name: "Linkages",
        positions: "6–8 Executives",
        description: "The Linkages Committee handles partnerships by connecting the batch government with both internal and external stakeholders. They reach out to speakers, sponsors, and organizations to build strong collaborations that enhance the batch’s initiatives."
      ,requirements: "N/A"
      }
    ],
    orgStructureImage: "assets/ECG_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–10",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 10, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 12–21",
          tag: "INTERVIEWS",
          color: "yellow",
          start: "2026-10-12T00:00:00+08:00",
          end: "2026-10-21T23:59:59+08:00"
        },
        {
          title: "Results",
          date: "OCT 26",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "SCG": {
    name: "Science College Government",
    category: "College Units",
    description: "The Science College Government (SCG) serves as the primary representative, operational, and communications body for the College of Science (COS), providing the systems and support necessary to champion student welfare and turn college-wide initiatives into reality. From managing student concerns such as issues with enlistment and slots, logistical filings, financial records, and creative multimedia, to conducting data-driven research and academic bridging, the SCG ensures all internal council operations function effectively. Beyond day-to-day administration, the SCG acts as a dedicated platform for broader social advocacy, creating support systems that ensure the concerns of minorities and unheard sectors of the student body are distinctly represented, addressed, and amplified.",
    logo: "assets/SCG_Logo (Black).png",
    applicationLink: "https://animo.li/SGAR2627T1_SGAR_ApplicationForms", 
    primerLink: "https://drive.google.com/file/d/1khckX1mqn-r2Uvmy4J2oUK25nH4pVAE1/view?usp=drive_link",
    socialLink: "https://www.facebook.com/DeLaSalleSCG/",
    executiveBoard: [
      {
        name: "Pauline S. Galias",
        role: "College President",
        email: "paulino_galias@dlsu.edu.ph",
        telegram: "@PaulineGalias07",
        photo: "assets/SCG_College President.png"
      },
      {
        name: "Trish Graciella A. Longboy",
        role: "Chief of Staff",
        email: "trish_longboy@dlsu.edu.ph",
        telegram: "@onetwo_trish",
        photo: "assets/SCG_Chief of Staff.png"
      },
      {
        name: "Acecarlo Joaquin F. Licuanan",
        role: "Chief Operating Officer",
        email: "acecarlo_licuanan@dlsu.edu.ph",
        telegram: "@acecarloo",
        photo: "assets/SCG_Chief Operating Officer.png"
      },
      {
        name: "Shirley Ann M. Farala",
        role: "Chief Communications Officer",
        email: "shirley_farala@dlsu.edu.ph",
        telegram: "@annfarala",
        photo: "assets/SCG_Chief Communications Officer.png"
      }
    ],
    committees: [
      {
        name: "Deputy Chief of Staff",
        positions: 1,
        description: "Works alongside the Chief of Staff to manage the internal operations of the directorates. This role assists in overseeing committee workflows, ensuring seamless cross-collaboration between offices, and executing strategic administrative initiatives when the Chief is unavailable.",
        requirements: "Strategic leadership, organized"
      },
      {
        name: "Academics",
        positions: "4 Executives, 1 Director",
        description: "Ensures that COS students have access to the resources, tools, and learning opportunities they need to thrive academically. This office acts as the academic bridge between the college and its students, from digital platforms to skills-based workshops.",
        requirements: "Academically driven, resource-oriented"
      },
      {
        name: "Research and Development",
        positions: "4 Executives, 1 Director",
        description: "The data and research arm of SCG. This office conducts the research and analysis that keeps council decisions and publications grounded in real information. They run surveys, analyze Google Form results, handle statistics for promotions and content, and develop tools that make COS student life easier.",
        requirements: "Analytical, data-driven"
      },
      {
        name: "Student Services",
        positions: "10 Executives, 1 Director",
        description: "The council's most direct point of contact with students. This office monitors and responds to student questions and messages across COS group chats, making sure that no concern goes unheard or unaddressed.",
        requirements: "Empathetic, highly responsive"
      },
      {
        name: "Student Welfare",
        positions: "4 Executives, 1 Director",
        description: "Looks after the holistic well-being of COS students, particularly those who may be experiencing difficulties beyond academics. This office creates spaces and systems that allow students to seek support with dignity.",
        requirements: "Compassionate and empathetic"
      },
      {
        name: "Deputy Chief of Operations",
        positions: 1,
        description: "Assists in steering the logistical, financial, and creative execution of SCG initiatives. This role ensures that day-to-day operational tasks run smoothly, providing secondary oversight on project compliance, resource allocation, and timeline management.",
        requirements: "Operationally agile, timeline-focused"
      },
      {
        name: "Docu-  mentations and Logistics",
        positions: "5 Executives, 1 Director",
        description: "Manages both the administrative foundation and physical execution of all SCG activities. Responsibilities include handling all pre-activity and post-activity filings required by DAAM and SLIFE to ensure accurate, timely compliance. For in-person events, this office coordinates all on-the-ground operations, including room reservations, equipment setups like microphones and projectors, booth management, and ingress and egress logistics.",
        requirements: "Meticulous, logistically reliable"
      },
      {
        name: "Finance",
        positions: "3 Executives, 1 Director",
        description: "Manages the council's funds and ensures that every SCG project and activity is properly budgeted and financially accounted for. They oversee all financial records and keep the council fiscally responsible throughout the academic year. They also keep the SCG portal updated for all money spent for transparency.",
        requirements: "Detail-oriented, high financial integrity"
      },
      {
        name: "Creatives",
        positions: "6 Executives, 1 Director",
        description: "Handles the visual identity of everything SCG puts out. This office designs and produces the pubmats, graphics, and layouts for every project and initiative across all directorates. They are the creative backbone of the council.",
        requirements: "Visually creative (Portfolio: 3–5 samples)"
      },
      {
        name: "Promotions",
        positions: "6 Executives, 1 Director",
        description: "Responsible for getting the word out on everything SCG does. From social media campaigns and reels to full-length documentaries, this office handles all forms of content aimed at amplifying the council's programs, events, and advocacies.",
        requirements: "Engaging storyteller, trend-aware"
      },
      {
        name: "External and Internal Affairs",
        positions: "3 Executives, 1 Director",
        description: "Manages SCG's official communications both within the university and with outside organizations. This office drafts and oversees formal emails, coordinates with partner offices and student organizations, and ensures that all of SCG's interactions are handled professionally.",
        requirements: "Diplomatic, professional communicator"
      },
      {
        name: "Advocacy",
        positions: "4 Executives, 1 Director",
        description: "Champions student causes that go beyond the classroom. This office leads initiatives that promote inclusion, representation, and student welfare on a broader social level.",
        requirements: "Socially conscious, cause-driven"
      }
    ],
    orgStructureImage: "assets/SCG_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–10",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-10T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 10, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 12–17",
          tag: "INTERVIEWS",
          color: "yellow",
          start: "2026-10-12T00:00:00+08:00",
          end: "2026-10-17T23:59:59+08:00"
        },
        {
          title: "Results",
          date: "OCT 28",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "ACG": {
name: "Arts College Government",
    category: "College Governments",
    description: "The Arts College Government (ACG) is the official student governance unit under the De La Salle University Student Government (USG), dedicated to serving the students of the College of Liberal Arts (CLA).",
    logo: "assets/[ACG] BLACK LOGO.png",
    applicationLink: "https://bit.ly/SGAR2627T1_ACG_ApplicationForms",
    primerLink: "https://drive.google.com/file/d/1eVxupt2e6sKy0HUADR3K695nJyMwZHJA/view?usp=sharing",
    socialLink: "https://www.facebook.com/dlsuacg",
    /*
    executiveBoard: [
     // {
        //name: "Louise Castillo",
        //role: "OIC College President",
        //email: "louise_angela_castillo@dlsu.edu.ph",
        //telegram: "@louisecastilloo",
        //photo: "assets/ACG CP.jpg"
      //},
      {
        name: "Yesha Gutierrez",
        role: "Chief of Staff",
        email: "yesha_gutierrez@dlsu.edu.ph",
        telegram: "@yeshagutierrez",
        photo: "assets/ACG COS.jpeg"
      },
      {
        name: "Javi Aquino",
        role: "Chief Operating Officer",
        email: "alisander_aquino@dlsu.edu.ph",
        telegram: "@cfcjavi",
        photo: "assets/ACG COO.jpeg"
      },
      {
        name: "Pauleen Samson",
        role: "Chief Communications Officer",
        email: "pauleen_samson@dlsu.edu.ph",
        telegram: "@paulykie",
        photo: "assets/ACG CCO 23_55_54.jpg"
      },
      {
        name: "Karlo Jaro",
        role: "Chief Financial and Administrative Officer",
        email: "juan_jaro@dlsu.edu.ph",
        telegram: "@JarJarKarl",
        photo: "assets/ACG CFAO.jpeg"
      }
    ],
    */
    committees: [
      {
        name: "Student Services",
        positions: "1 Chairperson, 10-12 Executives",
        description: "The Student Services committee handles all queries from the student body. This committee is in charge of updating and clarifying any and all confusions that learners under CLA may have.",
        requirements: "CV"
      },
      {
        name: "Program Represen-  tatives",
        positions: "18 Program Representatives",
        description: "The Program Representatives committee consists of learners chosen from their course’s respective home org or block. Members under this committee will work hand-in-hand with the Student Services in disseminating information to their respective programs under the guidance of the SS Chairpersons.",
        requirements: "CV"
      },
      {
        name: "Human Resources",
        positions: "5-7 Executives",
        description: "The Human Resources Committee handles the overall welfare of the office, being able to ensure that the officers are working efficiently; This committee also ensures proper management and the development and training of the officers through the HR Council.",
        requirements: "CV"
      },
      {
        name: "Internal Relations",
        positions: "1 Chairperson, 8-10 Executives",
        description: "The University Relations Committee builds and maintains connections between ACG and potential partner organizations within the university. It ensures effective communication, strengthens collaboration, and fosters positive relationships to support the team and the college's development and success.",
        requirements: "CV"
      },
      {
        name: "Linkages: External Relations",
        positions: "1 Chairperson, 8-10 Executives",
        description: "The External Relations Committee is assigned to communicate and collaborate with outside partner organizations. It focuses on promoting strong relationships between outside organizations and corporations in order to foster the growth and development of the external relations team. Lastly, this committee is involved in relaying important information and concerns with partner organizations, whilst being prepared to handle any sudden changes.",
        requirements: "CV"
      },
      {
        name: "IMC Creatives",
        positions: "8-10 Executives",
        description: "The Creative Committee is a vital part within the Integrated Marketing Committee of the ACG. This committee ensures that the organization’s initiatives are well-represented by carefully crafted resources and engaging publication materials. Collaboration between the various ACG committees enables aligned and high-quality outputs that contribute to the success of events, campaigns, and projects. Through its creative expertise, the creatives committee not only supports marketing strategies and promotional activities, but as well as strengthening the organization’s identity and presence within the university.",
        requirements: "CV, Portfolio"
      },
      {
        name: "IMC Public Relations",
        positions: "1 Vice Chairperson, 5-7 Executives",
        description: "The IMC Public Relations Committee is responsible for the conceptualization and curation of content and market strategies to be executed by the entirety of the IMC committee. This committee mainly handles scheduling, pitching, and copyreading content before it is published on the ACG social media accounts. Lastly, they are responsible for ensuring that every content being released by the IMC committee reaches its target audience.",
        requirements: "CV, Portfolio"
      },
      {
        name: "IMC Media",
        positions: "5-7 Executives",
        description: "The IMC Media Committee is responsible for the audio-visual materials used to document the ACG’s activities. Members of this committee will be in charge of covering events and scheduling productions within the organization. Lastly, members of this committee will need to have a background in both technical media and creative storytelling aspects.",
        requirements: "CV, Portfolio"
      },
      {
        name: "Project Management",
        positions: "1 Vice Chairperson, 8-10 Executives",
        description: "The Project Management Committee is responsible for the development, conceptualization, and execution of projects and initiatives that support the needs of all the batch’s advocacies. The committee is in charge of managing and overseeing all the projects in collaboration with different committees involved in the project. Additionally, it ensures constant alignment in all project deliverables and prepares a backup plan for all events during project day itself.",
        requirements: "CV"
      },
      {
        name: "Logistics",
        positions: "2 Chairpersons, 8-10 Executives",
        description: "The Logistics Committee is the backbone of all events and projects executed by ACG. It is made-up of two sub-committees: Logistics-Events and Logistics-Operations. The Logistics-Events committee plays the role of the main anchor for each event, whilst overseeing the comprehensive execution of events. They are assigned to hosting, performing, scriptwriting, and event management tasks. The Logistics-Operations Committee ensures that all permits, requirements, and resources needed for an event are ready and prepared before event day. Additionally, this committee collaborates with various administrative officers and other committees to ensure the seamless execution of tasks and successfully fulfill its responsibilities.",
        requirements: "CV"
      },
      {
        name: "Secretariat",
        positions: "1 Vice Chairperson, 8-10 Executives",
        description: "The Secretariat Committee is responsible for preparing and maintaining all essential documents and paperwork required by various offices. This committee ensures that all meetings are effectively organized, properly documented, and with the accurate preparation of the minutes. Additionally, it oversees the creation of a checklist for all the batch operations, ensuring tasks are completed efficiently.",
        requirements: "CV"
      },
      {
        name: "Finance",
        positions: "8-10 Executives",
        description: "The Finance Committee handles the budget and other funds given by the office of the executive treasurer. This committee also ensures proper budget allocation; promoting transparency to all of the financial transactions of the batch government with the evaluation of the financial performance of the entire college government.",
        requirements: "CV"
      }
    ],
    orgStructureImage: "assets/ACG_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–11",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-11T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 11, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 12–18",
          tag: "INTERVIEW PERIOD",
          color: "yellow",
          start: "2026-10-12T00:00:00+08:00",
          end: "2026-10-18T23:59:59+08:00",
          openDateLabel: "OCTOBER 12, 2026",
          closeDateLabel: "OCTOBER 18, 2026"
        },
        {
          title: "Results",
          date: "OCT 24",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "SEG": {
    name: "School of Economics Government",
    category: "College Governments",
    description: "The School of Economics Government (SEG) is your college government and the highest governing body and representative authority in SOE. We serve as your voice to the administration, making sure that your concerns, whether about enlistments, professors, or course offerings, are heard and addressed.\n\nBeyond representation, SEG is committed to ensuring that your overall experience in SOE is worthwhile and value-adding. We strive to provide you with opportunities that go beyond the four walls of your classroom.",
    logo: "assets/[SEG] LOGO - BLACK.png",
    applicationLink: "https://bit.ly/SGAR2627T1_SEG_ApplicationForms",
    primerLink: "",
    socialLink: "https://www.facebook.com/segdlsu",
    executiveBoard: [
      {
        name: "Micah Agatha",
        role: "College President",
        email: "micah_agatha_dimatulac@dlsu.edu.ph",
        telegram: "@micahagathad",
        photo: "assets/SEG_College President.png"
      },
      {
        name: "Jed Camacho",
        role: "Chief of Staff",
        email: "jed_danniel_camacho@dlsu.edu.ph",
        telegram: "@jedibolz",
        photo: "assets/SEG_Chief of Staff.png"
      },
      {
        name: "Danica Cayabyab",
        role: "Chief Operating Officer",
        email: "danica_cayabyab@dlsu.edu.ph",
        telegram: "@danicamaec",
        photo: "assets/SEG_Chief Operating Officer.png"
      }
    ],
    committees: [
      {
        name: "Student Services and Welfare",
        positions: "7 Executive",
        description: "The Student Services and Welfare Committee is responsible for spearheading all information dissemination efforts of the SEG, including important administrative announcements for the college. The committee is responsible for continuously assisting students who reach out through the SEG and providing support during enrollment, enlistment, and adjustment periods. Internally, the committee functions as the College Government Unit’s human resource committee, leading the unit’s general assemblies and overseeing member evaluations.",
        requirements: ""
      },
      {
        name: "Project Management - Events",
        positions: "7 Executives",
        description: "The Project Management – Events Committee takes the lead in bringing SEG’s projects to life by serving as the face of the event during execution. The committee is in charge of the program flow, scriptwriting, and hosting, ensuring that each activity is well-coordinated and engaging for the participants. Their work begins before the event, preparing all necessary details and aligning with other committees to guarantee smooth implementation on the day of the event. Through this committee, SEG could ensure that every project not only goes according to plan but leaves a meaningful and memorable impact to the SOE student body.",
        requirements: ""
      },
      {
        name: "Project Management - Logistics",
        positions: "7 Executives",
        description: "The Project Management – Logistics Committee works hand in hand with the Project Management – Events Committee by serving as the on-the-ground team that makes sure everything planned comes to life on the D-Day of the event. They handle the behind-the-scenes operations such as preparing venues, setting up materials, coordinating technical needs, and ensuring all resources are in place. By managing these moving parts and mobilizing what has been prepared, the committee ensures that SEG’s projects run seamlessly from start to finish.",
        requirements: ""
      },
      {
        name: "Academic and Research Services",
        positions: "7 Executives",
        description: "The Academic and Research Services Committee takes charge of SEG’s academic-related projects, providing initiatives that support students’ learning and overall academic experience. They could also extend direct academic assistance to their peers, fostering a stronger culture of collaboration and support within the college. Beyond this, the committee plays a key role in student representation by contributing to the 0% Tuition Fee Increase negotiations of the USG, as SEG is the only college with a seat in the Multi-Sectoral Consultative Committee on Tuition Fees (MSCCTF). This gives members a unique opportunity to take part in shaping policies that directly affect the whole DLSU student body.",
        requirements: ""
      },
      {
        name: "Integrated Marketing Committee",
        positions: "15 Executives (across sub-committees)",
        description: "The Integrated Marketing Communications Committee is responsible for ensuring that all marketing and promotional efforts of SEG are consistent, unified, and aligned with its goals. They handle the creative side of the organization by overseeing event campaign strategies, publicity outputs, and creative materials that highlight SEG’s projects to the student body. By bringing together advertising, social media, event promotions, and digital campaigns into a cohesive message, IMC helps shape and strengthen the identity of the student government.\n\nBelow are the subcommittees of IMC:\n- Creatives (Graphic Artists): Responsible for producing high-quality publicity materials\n- Social Media Executives: Responsible for managing social media accounts and making alluring captions to engage people in social media.\n- Media (Photogs and Videogs): Responsible for taking photos and videos of SEG-related events or other events.",
        requirements: "Portfolio"
      },
      {
        name: "Public Relations",
        positions: "7 Executives",
        description: "The Public Relations Committee is responsible for establishing and maintaining SEG’s internal and external connections both within and outside the university. They take the lead in pitching potential speakers, reaching out to organizations, universities, and institutions, and securing partnerships needed for SEG’s events and initiatives. The committee ensures that SEG’s goals and intentions are communicated in a professional manner while fostering partnerships that are meaningful and mutually beneficial. By handling relationship-building with potential partners, Public Relations strengthens SEG’s network and supports the success of its projects.",
        requirements: ""
      },
      {
        name: "Operations and Finance",
        positions: "7 Executives",
        description: "The Operations and Finance Committee is in charge of ensuring the internal documentation and compliance needed to implement SEG’s projects and activities. They are responsible for preparing and processing all required documents to bring initiatives to life, as well as overseeing the budgeting and financing of projects with the approval of the Chief Operating Officer and College President. In managing the unit’s funds, the committee is expected to uphold the highest standards of responsibility, transparency, and accountability, making sure that resources are used effectively to support SEG’s goals.",
        requirements: ""
      }
    ],
    orgStructureImage: "assets/SEG_OrgChart.jpg",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–17",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-17T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 17, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 19–23",
          tag: "INTERVIEW PERIOD",
          color: "yellow",
          start: "2026-10-19T00:00:00+08:00",
          end: "2026-10-23T23:59:59+08:00",
          openDateLabel: "OCTOBER 19, 2026",
          closeDateLabel: "OCTOBER 23, 2026"
        },
        {
          title: "Results",
          date: "OCT 28",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "FOCUS2024": {
    name: "FOCUS2024",
    category: "Batch Units",
    description: "FOCUS2024 (Frosh Organization for the Collegiate Union of Sciences 2024) serves as the batch government of COS124, the Senior Batch of the College of Science. Led by the Batch Representative and the Batch Legislator, FOCUS2024 operates through two main offices. The Office of the Batch Representative (OBR) addresses student needs through three departments: the Student Services Council, which handles enrollment, enlistment, and student welfare concerns; the Organization Development Department, which oversees internal capacity-building, project planning, and partnerships; and the Department of Administrative and Financial Affairs, which manages the batch's marketing and creatives, documentation and logistics, and finances. The Office of the Batch Legislator (OBL) drafts policies and resolutions through its Legislative Affairs, National Affairs, and Research and Development Committees, translating student concerns and research findings into concrete action at the university, college, or batch level.",
    logo: "assets/FOCUS2024_Logo.png",
    applicationLink: "https://animo.li/SGAR2627T1_FOCUS2024_ApplicationForms",
    primerLink: "https://drive.google.com/file/d/1n4JrCl3ZIgOxlyYmdmciJAX4OCQRYJuI/view?usp=drive_link",
    socialLink: "https://bit.ly/FBFOCUS2024",
    executiveBoard: [
      {
        name: "Jillian Tang",
        role: "Batch Representative",
        email: "jillian_tang@dlsu.edu.ph",
        telegram: "@sun_drae",
        photo: "assets/FOCUS2024_Batch Representative.png"
      },
      {
        name: "Janret Galvez",
        role: "Batch Legislator",
        email: "janret_galvez@dlsu.edu.ph",
        telegram: "@janretgalvez",
        photo: "assets/FOCUS2024_Batch Legislator.png"
      }
    ],
    committees: [
      {
        name: "Student Services Committee",
        positions: "10 Executives, 1 Director",
        description: "The Student Services Committee is the batch's main support during enlistment and enrollment, handling concerns such as tuition inquiries, document processing, and credential transfers. Members are made visible and accessible, with contact details shared for easy reach. Beyond enlistment, they remain approachable throughout the term to assist with ongoing concerns. They also form part of the Student Services Council—together with the Electeds, Student Welfare Committee, and Program Representatives—to ensure comprehensive student support.",
        requirements: "N/A"
      },
      {
        name: "Student Welfare Committee",
        positions: "10 Executives, 1 Director",
        description: "The Student Welfare Committee safeguards student well-being through welfare checks, grievance handling, feedback gathering, and mental health advocacy. Unlike the SS, which responds to student concerns, this committee proactively reaches out to ID124 students across programs, including those less engaged with student government. They also promote accountability by checking in on the performance of batch leaders in a friendly way. During enlistment, they support the SS to ensure students receive ample help during high-demand periods.",
        requirements: "N/A"
      },
      {
        name: "Program Reps",
        positions: "8 Program Reps",
        description: "Program Representatives serve as the voice of their programs, bringing forward concerns, suggestions, and ideas to ensure proper representation. Like the Student Services Committee, they handle student concerns but stand out by carrying their program's mandate, giving them a broader role in discussions, projects, and in supporting the Batch Legislator and President, especially during enlistment through program group chats.",
        requirements: "N/A"
      },
      {
        name: "Human Resources & Development Committee",
        positions: "10 Executives, 1 Director",
        description: "The Human Resource and Development Committee focuses on strengthening the internal capacity of the batch government. Their main responsibilities include managing and supporting major events such as General Assemblies, providing manpower during activities, and helping facilitate smooth implementation. Beyond event support, they are also responsible for training members, organizing team-building activities, and promoting leadership development within the organization. Additionally, they assist in monitoring member participation by keeping track of attendance and engagement across committees.",
        requirements: "N/A"
      },
      {
        name: "Projects & Advocacies Committee",
        positions: "10 Executives, 1 Director",
        description: "The Projects and Advocacies Committee serves as the core planning body for batch activities. They are primarily responsible for developing the concepts, structure, and flow of events, as well as identifying the resources and preparations needed. For every project, at least one committee member is assigned to guide the team, ensuring proper direction and support throughout implementation. By doing so, the committee not only leads in planning but also provides crucial hands-on assistance during execution, making them the backbone of project development and advocacy initiatives.",
        requirements: "N/A"
      },
      {
        name: "Linkages Committee",
        positions: "10 Executives, 1 Director",
        description: "The Linkages Committee builds and maintains partnerships to support the batch government's initiatives, with their work divided into two areas:\n\nInternal Linkages – Building collaborations within De La Salle University, such as with student organizations, university offices, and campus groups, to create opportunities for the batch.\n\nExternal Linkages – Partnering with review centers, companies, and other organizations outside DLSU to provide added support and opportunities for students.\n\nThe Linkages Committee also serves as the main contact with partner organizations, ensuring smooth coordination and lasting ties.",
        requirements: "N/A"
      },
      {
        name: "Docu & Logi Committee",
        positions: "10 Executives, 1 Director",
        description: "The Documentation and Logistics Committee is responsible for operating, archiving, and recording the official documents of the organization such as Pre-acts, Post-acts, and A-forms, ensuring that all internal processes and systems run smoothly and efficiently. Its main function is to maintain accurate and organized records that uphold compliance with university requirements by submitting paperwork on time. Members will have the opportunity to manage vital documents that keep the organization's operations systematic and transparent, while also ensuring that every activity and initiative is properly documented for accountability and continuity.",
        requirements: "N/A"
      },
      {
        name: "Integrated Marketing Committee",
        positions: "10 Executives, 1 Director",
        description: "The Integrated Marketing Committee is responsible for the publicity and branding of FOCUS, ensuring that the organization's branding and initiatives are effectively communicated to its audience. They have two main tasks: Marketing, which handles captions, promotions, and engagement strategies to reach and inform the community, and Creatives, which produces media outputs such as pubmats, videos, animations, and other visual materials that bring the organization's projects to life. Members will have the opportunity to shape the image of FOCUS through compelling content and creative outputs that highlight its events, advocacies, and overall mission.",
        requirements: "N/A"
      },
      {
        name: "Finance Committee",
        positions: "10 Executives, 1 Director",
        description: "The Finance Committee is responsible for overseeing the financial responsibilities of the organization, ensuring that its budget is properly tracked, allocated, and spent wisely. Its main function is to manage financial records by preparing reports and statements that reflect accurate and transparent use of funds, which are then submitted to the Commission on Audit (COA) as part of the organization's transparency requirements. Members will have the opportunity to safeguard the organization's resources, promote accountability, and ensure that every project and initiative is financially sustainable.",
        requirements: "N/A"
      },
      {
        name: "Legislative Affairs Committee",
        positions: "10 Executives, 1 Director",
        description: "The Legislative Affairs Committee is responsible for coordinating with the Batch Legislator in drafting and writing resolutions, policies, and other relevant documents that will address the needs of the student body. The committee's main function is to transform the research findings from the Research and Development Committee and the student concerns gathered by the Student Welfare Committee into practical, attainable, and written policies. Members will have the opportunity to help craft policies at the university, college, or batch level, and they are also responsible for attending and taking minutes during sessions of the Legislative Assembly and the College Legislative Board.",
        requirements: "N/A"
      },
      {
        name: "National Affairs Committee",
        positions: "10 Executives, 1 Director",
        description: "The National Affairs Committee is responsible for making sure that the batch government's projects and advocacies are always aligned with national conversations and events. The committee's primary role is to conduct all research related to national and sociocivic affairs and to take the lead in the projects of the batch government that aim to increase students' awareness of the importance of these issues, especially within the field of science.",
        requirements: "N/A"
      },
      {
        name: "Research & Development Committee",
        positions: "10 Executives, 1 Director",
        description: "The Research and Development Committee is responsible for finding and providing the data and research needed by the batch and college government. The committee's main function is to conduct research to address the needs and concerns of the student body. The committee is also in charge of acquiring data to ensure that all of the batch government's projects and advocacies are relevant and feasible. Essentially, the Research and Development Committee provides the factual foundation for all of the government's projects, policies, and advocacies.",
        requirements: "N/A"
      }
    ],
    orgStructureImage: "assets/FOCUS2024_OrgChart.png",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–17",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-17T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 17, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 17–23",
          tag: "AUDITIONS",
          color: "yellow"
        },
        {
          title: "Results",
          date: "OCT 28",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  },
  "FOCUS2025": {
    name: "FOCUS2025",
    category: "Batch Units",
    description: "The Frosh Organization for the Collegiate Union of Sciences 2025 (FOCUS2025) serves as the batch government unit for ID125 College of Science students. It serves to represent the needs of this batch to the USG, SCG, and the administration. It also rolls out the initiatives of the SCG and USG as a whole as well as implementing its own independent and autonomous projects, programs, and initiatives.",
    logo: "assets/[FOCUS2025] BLACK LOGO.png",
    applicationLink: "https://docs.google.com/forms/d/e/1FAIpQLSedYlLs9soNsyIlyo6fOv9z7pNCnQFm_aZJprtgNc8RO9NRnQ/viewform?usp=header",
    primerLink: "",
    socialLink: "https://animo.li/FOCUS2025",
    executiveBoard: [
      {
        name: "Crystal Jean A. Erandio",
        role: "Batch Representative",
        email: "crystal_erandio@dlsu.edu.ph",
        telegram: "@crystalaERANDIO",
        photo: "assets/FOCUS2025_BatchRep.png"
      },
      {
        name: "Jerard F. Benitez",
        role: "Batch Legislator",
        email: "jerard_benitez@dlsu.edu.ph",
        telegram: "@jerard_benitez",
        photo: "assets/FOCUS2025_BatchLeg.png"
      }
    ],
    committees: [
      {
        name: "Project Management & Operations",
        positions: "Director (1), Dep. Director (1), Executives (3)",
        description: "Under the Organizational Development Department (ODD). In charge of executing projects and programs legislated by the batch and college government and Legislative Assembly for FOCUS2025 as well as handle the general operations and manpower of the unit. They are to spearhead projects, defend and execute legislation, and provide means and plans of enacting such operations.",
        requirements: "1. Strong organizational and time-management skills\n2. Ability to coordinate multiple tasks and projects\n3. Willingness to take initiative and handle operational concerns\n4. Ability to work under pressure and meet deadlines\n5. Basic project planning and coordination skills"
      },
      {
        name: "Finance",
        positions: "Director (1), Dep. Director (1), Executives (3)",
        description: "Under the ODD. Entrusted to keep records of, account for, raise, and allocate funds for batch projects and general operations. They are to form budgets, find means to fundraise, and audit the use of funds across different projects and departments under the batch unit.",
        requirements: "1. Basic knowledge of budgeting and financial management\n2. Strong attention to detail and accuracy\n3. Ability to maintain organized financial records\n4. Trustworthiness and accountability in handling funds\n5. Basic proficiency in spreadsheets or financial tools"
      },
      {
        name: "Docu-  mentations",
        positions: "Director (1), Dep. Director (1), Executives (3)",
        description: "Under the ODD. Responsible for batch unit documents, files, and videos meant for the government’s social media. They are to provide access to and store information, documents such as bills, resolution, memoranda, and other pertinent records, as well as take photos and videos of meetings.",
        requirements: "1. Strong writing and documentation skills\n2. Attention to detail and proper file organization\n3. Basic knowledge of photo/video documentation"
      },
      {
        name: "Linkages",
        positions: "Director (1), Internal Dep. Director (1), External Dep. Director (1), Executives (4)",
        description: "The Linkages Committee handles internal coordination and external communications through official correspondence with the batch government, organizations, offices, and stakeholders. It facilitates partnerships and ensures clear, timely communication for projects and initiatives. Through effective engagement, this committee strengthens collaboration beyond the office.",
        requirements: "1. Strong written and verbal communication skills\n2. Professional and courteous communication\n3. Ability to coordinate with different offices, organizations, and stakeholders\n4. Strong interpersonal and networking skills\n5. Ability to draft formal correspondence and partnership communications"
      },
      {
        name: "Integrated Marketing & Creatives",
        positions: "Director (1), Dep. Director (1), Executives (3)",
        description: "The Marketing and Creatives Committee develops publicity strategies to promote batch initiatives, events, and announcements. It creates content and materials that effectively inform and engage students. Through strategic promotions, the committee enhances visibility and participation in office activities.",
        requirements: "1. Creativity and willingness to develop promotional ideas\n2. Basic graphic design, photo/video editing, or content creation skills\n3. Knowledge of social media platforms\n4. Strong sense of visual communication and branding"
      },
      {
        name: "Student Services",
        positions: 14,
        description: "The Student Services Subcommittee assists students in navigating academic and university-related concerns, including enlistment, course-specific inquiries, and institutional processes. It serves as a support point for questions, clarifications, and student concerns, coordinating with departments offices when necessary. Through guidance and responsive assistance, the committee helps students better understand university systems and access the support they need. The Student Welfare Subcommittee addresses student grievances and academic-related concerns that affect overall student well-being. It provides a space for students to raise issues, documents and escalates concerns when necessary, and advocates for fair and timely resolutions. Through active communication, the committee works to protect student interests and promote a supportive academic environment.\n\nPositions Open: Director (1), Dep. Director for Student Services (1), Dep. Director for Student Welfare (1), Executives (6), Program Representatives (1 for HUMBIO, 1 for ANIBIO, 1 for BIOLOGY, 1 for CHEMISTRY, 1 for PHYSICS)",
        requirements: "1. Strong communication and active listening skills\n2. Patience and willingness to assist students\n3. Ability to handle student inquiries and concerns responsibly\n4. Familiarity with university academic and administrative processes is an advantage\n5. Ability to coordinate with university offices and program representatives"
      },
      {
        name: "Legislative Affairs",
        positions: "Director (1), Dep. Director (1), Executives (2)",
        description: "Under the Office of the Batch Legislator. The Legislative Affairs Committee is responsible for drafting, reviewing, and refining resolutions, policies, and formal documents of the office. It works closely with the Batch Legislator to translate concerns and findings into clear, actionable legislation. This committee ensures that all documents are well-structured, legally sound, and reflective of the collective voice of the batch.",
        requirements: "1. Strong writing and critical-thinking skills\n2. Ability to draft and review resolutions, policies, and formal documents\n3. Attention to detail and proper documentation\n4. Ability to analyze student concerns and translate them into actionable proposals\n5. Familiarity with formal legislative or organizational procedures is an advantage"
      },
      {
        name: "Human Resource",
        positions: "Director (1), Dep. Director (1), Executives (2)",
        description: "Under the Office of the Batch Legislator. The Human Resources Committee focuses on upholding student rights, ethical standards, and fair processes within the batch government. It assists in handling internal concerns, conduct, and interpersonal issues through proper documentation, consultation, and referral.",
        requirements: "1. Strong interpersonal and communication skills\n2. Professionalism and discretion when handling concerns\n3. Ability to remain objective and fair when addressing internal matters\n4. Good documentation and organizational skills\n5. Ability to handle sensitive information responsibly"
      },
      {
        name: "Research and Development",
        positions: "Director (1), Dep. Director (1), Executives (2)",
        description: "Under the Office of the Batch Legislator. The Research and Development Committee conducts data gathering, surveys, consultations, and analysis to support evidence-based policymaking. It ensures that legislative proposals are grounded in student experiences, factual information, and relevant studies. By strengthening the research backbone of the office, this committee enables the OBL to craft informed, practical, and responsive policies.",
        requirements: "1. Strong research and analytical skills\n2. Ability to gather, organize, and interpret data\n3. Basic knowledge of surveys and data collection\n4. Strong attention to detail and fact-checking\n5. Ability to translate research findings into practical recommendations"
      }
    ],
    orgStructureImage: "assets/FOCUS2025_OrgChart.jpg",
    timeline: {
      title: "TIMELINE SCHEDULE",
      phases: [
        {
          title: "Applications",
          date: "OCT 5–11",
          tag: "OPENING ACT",
          color: "blue",
          start: "2026-10-05T00:00:00+08:00",
          end: "2026-10-11T23:59:59+08:00",
          openDateLabel: "OCTOBER 5, 2026",
          closeDateLabel: "OCTOBER 11, 2026"
        },
        {
          title: "Interviews",
          date: "OCT 15–22",
          tag: "INTERVIEWS",
          color: "yellow",
          start: "2026-10-15T00:00:00+08:00",
          end: "2026-10-22T23:59:59+08:00"
        },
        {
          title: "Results",
          date: "OCT 28",
          tag: "PREMIERE",
          color: "neutral"
        }
      ]
    }
  }
};

const unitTemplate = {
  name: "Unit Name",
  category: "Executive Board and Cabinets",
  description: "Replace this with the unit description.",
  logo: "",
  applicationLink: "",
  primerLink: "",
  socialLink: "",
  executiveName: "Executive Board Name",
  executiveEmail: "email@dlsu.edu.ph",
  executiveBoard: [],
  committees: [],
  orgStructureImage: "",
  timeline: {
    kicker: "T1 SGAR 2026",
    title: "TIMELINE SCHEDULE",
    phases: [
      { title: "Applications", date: "TBA", tag: "OPENING ACT", color: "blue" },
      { title: "Interviews", date: "TBA", tag: "AUDITIONS", color: "yellow" },
      { title: "Results", date: "TBA", tag: "PREMIERE", color: "neutral" }
    ]
  }
};

const data = {
  ...unitTemplate,
  ...(unitData[unitKey] || unitData["exec-1"])
};

document.getElementById("unitName").textContent = data.name;
document.getElementById("unitCategory").textContent = data.category;
document.getElementById("unitDescription").textContent = data.description;

const unitLogo = document.getElementById("unitLogo");
if (unitLogo && data.logo) {
  unitLogo.src = data.logo;
  unitLogo.alt = `${data.name} logo`;
  unitLogo.hidden = false;
}

document.body.classList.toggle("has-long-unit-name", data.name.length > 24);
document.body.classList.toggle(
  "is-independent-body",
  data.category === "Independent Bodies"
);
document.body.classList.toggle(
  "is-executive-cabinet",
  data.category === "Executive Board and Cabinets"
);
document.body.classList.toggle(
  "is-college-unit",
  data.category === "College Units"
);
document.body.classList.toggle(
  "is-batch-unit",
  data.category === "Batch Units"
);
document.title = `SGAR 2026 — ${data.name}`;

const orgStructurePreview = document.getElementById("orgStructurePreview");
const orgStructureModalImg = document.getElementById("orgStructureModalImg");
const orgStructureSection = document.querySelector(".org-structure-section");

if (data.orgStructureImage && data.orgStructureImage.trim() !== "") {
  if (orgStructurePreview) {
    orgStructurePreview.src = data.orgStructureImage;
    orgStructurePreview.alt = `${data.name} Organization Structure`;
  }
  if (orgStructureModalImg) {
    orgStructureModalImg.src = data.orgStructureImage;
    orgStructureModalImg.alt = `${data.name} Organization Structure Full`;
  }
  if (orgStructureSection) {
    orgStructureSection.style.display = ""; // Show section if image exists
  }
} else {
  if (orgStructureSection) {
    orgStructureSection.style.display = "none";
  }
}

const applicationLink = document.getElementById("applicationLink");
if (applicationLink) {
  applicationLink.href = data.applicationLink || "#";
}

const primerLink = document.getElementById("primerLink");
if (primerLink) {
  if (data.primerLink && data.primerLink.trim() !== "" && data.primerLink !== "#") {
    primerLink.href = data.primerLink;
    primerLink.style.display = ""; 
    primerLink.hidden = false;
  } else {
    primerLink.hidden = true;
    primerLink.style.display = "none"; 
  }
}

const socialLink = document.getElementById("socialLink");
if (socialLink) {
  if (data.socialLink && data.socialLink.trim() !== "" && data.socialLink !== "#") {
    socialLink.href = data.socialLink;
    socialLink.style.display = ""; 
    socialLink.hidden = false;
  } else {
    socialLink.hidden = true;
    socialLink.style.display = "none"; 
  }
}

const executiveTrack = document.getElementById("executiveTrack");
const executiveDots = document.getElementById("executiveReelDots");
const executiveCarousel = document.getElementById("executiveCarousel");

const executiveBoard = (
  Array.isArray(data.executiveBoard) && data.executiveBoard.length
    ? data.executiveBoard
    : [{
      name: data.executiveName || "Executive Board Name",
      role: "UNIT HEAD / EXECUTIVE BOARD",
      email: data.executiveEmail || "email@dlsu.edu.ph"
    }]
).slice(0, 10);

let executiveIndex = 0;

function renderExecutiveBoard() {
  if (!executiveTrack || !executiveDots) return;

  executiveTrack.innerHTML = executiveBoard.map((member, index) => `
    <article class="executive-slide" aria-hidden="${index === 0 ? "false" : "true"}">
      <div class="executive-card">
        <div class="executive-photo-placeholder${member.photo ? " has-photo" : ""}">
          ${member.photo
      ? `<img src="${member.photo}" alt="${member.name}" />`
      : `<span>EXECUTIVE BOARD PICTURE</span>`}
        </div>

        <div class="executive-info">
          <p class="credit-label">${member.role || "EXECUTIVE BOARD"}</p>
          <h3>${member.name}</h3>
          <a class="executive-email" href="mailto:${member.email}">
            <i class="bi bi-envelope-fill" aria-hidden="true"></i>
            <span>${member.email}</span>
          </a>
          ${member.telegram ? `<span class="executive-telegram"><i class="bi bi-telegram" aria-hidden="true"></i><span>${member.telegram}</span></span>` : ""}
        </div>
      </div>
    </article>
  `).join("");

  executiveDots.innerHTML = executiveBoard.map((_, index) => `
    <button
      class="executive-reel-dot${index === 0 ? " is-active" : ""}"
      type="button"
      aria-label="Show executive board member ${index + 1}"
      aria-current="${index === 0 ? "true" : "false"}"
      data-executive-index="${index}"
    ></button>
  `).join("");

  if (executiveBoard.length <= 1) {
    executiveCarousel?.classList.add("is-single");
  }
}

function setExecutiveSlide(index) {
  if (!executiveTrack || !executiveDots || !executiveBoard.length) return;

  executiveIndex = (index + executiveBoard.length) % executiveBoard.length;
  executiveTrack.style.transform = `translateX(-${executiveIndex * 100}%)`;

  executiveTrack.querySelectorAll(".executive-slide").forEach((slide, i) => {
    slide.setAttribute("aria-hidden", i === executiveIndex ? "false" : "true");
  });

  executiveDots.querySelectorAll(".executive-reel-dot").forEach((dot, i) => {
    const active = i === executiveIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });
}

renderExecutiveBoard();

executiveCarousel?.querySelector(".executive-arrow-prev")?.addEventListener("click", () => {
  setExecutiveSlide(executiveIndex - 1);
});

executiveCarousel?.querySelector(".executive-arrow-next")?.addEventListener("click", () => {
  setExecutiveSlide(executiveIndex + 1);
});

executiveDots?.addEventListener("click", (event) => {
  const button = event.target.closest(".executive-reel-dot");
  if (!button) return;
  setExecutiveSlide(Number(button.dataset.executiveIndex));
});

const committeeBody = document.getElementById("committeeBody");

if (committeeBody && Array.isArray(data.committees) && data.committees.length) {
  committeeBody.innerHTML = data.committees.map((committee) => {
    const safeName = String(committee.name || "Committee");
    const safeDescription = String(committee.description || "No description provided.");
    const safeRequirements = String(
      committee.requirements || "N/A"
    );
    const rawPositions = committee.positions !== undefined && committee.positions !== null 
  ? String(committee.positions) 
  : "0";

  const displayTag = /^\d+$/.test(rawPositions.trim())
  ? `${rawPositions.padStart(2, "0")} OPEN`
  : rawPositions;

    const escapeAttribute = (value) =>
      value
        .replaceAll("&", "&amp;")
        .replaceAll('"', "&quot;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

    return `
      <button
        class="committee-chair-trigger"
        type="button"
        data-committee-name="${escapeAttribute(safeName)}"
        data-description="${escapeAttribute(safeDescription)}"
        data-requirements="${escapeAttribute(safeRequirements)}"
        data-positions="${escapeAttribute(rawPositions)}"
      >
        <div class="director-chair" aria-hidden="true">
          <div class="director-chair-back">
            <h3>${safeName}</h3>
            <span class="chair-open-tag">${escapeAttribute(displayTag)}</span>
          </div>
          <div class="director-chair-seat"></div>
          <span class="chair-arm chair-arm-left"></span>
          <span class="chair-arm chair-arm-right"></span>
          <span class="chair-leg chair-leg-left"></span>
          <span class="chair-leg chair-leg-right"></span>
        </div>
      </button>
    `;
  }).join("");
}

const committeeModal = document.getElementById("committeeModal");
const committeeModalTitle = document.getElementById("committeeModalTitle");
const committeeModalDescription = document.getElementById("committeeModalDescription");
const committeeModalRequirements = document.getElementById("committeeModalRequirements");
const committeeModalOpenTag = document.getElementById("committeeModalOpenTag");
let committeeModalLastTrigger = null;

function openCommitteeModal(trigger) {
  if (!committeeModal || !trigger) return;

  committeeModalLastTrigger = trigger;

  committeeModalTitle.textContent =
    trigger.dataset.committeeName || "Committee";
  committeeModalDescription.textContent =
    trigger.dataset.description || "No description provided.";
  committeeModalRequirements.textContent =
    trigger.dataset.requirements || "None specified.";

  if (committeeModalOpenTag) {
    const rawPositions = (trigger.dataset.positions || "0").trim();
    const displayTag = /^\d+$/.test(rawPositions)
      ? `${rawPositions.padStart(2, "0")} OPEN`
      : rawPositions;

    committeeModalOpenTag.textContent = displayTag;
  }

  committeeModal.classList.add("is-open");
  committeeModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    const closeButton = committeeModal.querySelector(".committee-modal-close");
    if (closeButton) closeButton.focus();
  });
}

function closeCommitteeModal() {
  if (!committeeModal) return;

  committeeModal.classList.remove("is-open");
  committeeModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (committeeModalLastTrigger) {
    committeeModalLastTrigger.focus();
    committeeModalLastTrigger = null;
  }
}

document.querySelectorAll(".committee-chair-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => openCommitteeModal(trigger));
});

document.querySelectorAll("[data-modal-close]").forEach((control) => {
  control.addEventListener("click", closeCommitteeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && committeeModal?.classList.contains("is-open")) {
    closeCommitteeModal();
  }
});

(function () {
  const clapper = document.querySelector(".unit-clapperboard");
  if (!clapper) return;

  let closed = false;

  const updateClapper = () => {
    const shouldClose = window.scrollY > 12;

    if (shouldClose !== closed) {
      closed = shouldClose;
      clapper.classList.toggle("is-closed", closed);
    }
  };

  updateClapper();
  window.addEventListener("scroll", updateClapper, { passive: true });
})();

const orgStructureModal = document.getElementById("orgStructureModal");
const orgStructureOpen = document.getElementById("orgStructureOpen");
let orgStructureLastFocus = null;

function openOrgStructureModal() {
  if (!orgStructureModal) return;
  orgStructureLastFocus = document.activeElement;
  orgStructureModal.classList.add("is-open");
  orgStructureModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    orgStructureModal.querySelector(".org-structure-modal-close")?.focus();
  });
}

function closeOrgStructureModal() {
  if (!orgStructureModal) return;
  orgStructureModal.classList.remove("is-open");
  orgStructureModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  orgStructureLastFocus?.focus?.();
  orgStructureLastFocus = null;
}

orgStructureOpen?.addEventListener("click", openOrgStructureModal);

document.querySelectorAll("[data-org-modal-close]").forEach((control) => {
  control.addEventListener("click", closeOrgStructureModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && orgStructureModal?.classList.contains("is-open")) {
    closeOrgStructureModal();
  }
});

const unitBackLink = document.getElementById("unitBackLink");

unitBackLink?.addEventListener("click", (event) => {
  event.preventDefault();

  try {
    sessionStorage.setItem("sgarRestoreFromUnit", "1");
  } catch (error) { }

  const cameFromIndex =
    document.referrer &&
    new URL(document.referrer, window.location.href).pathname
      .toLowerCase()
      .endsWith("/index.html");

  if (cameFromIndex && history.length > 1) {
    history.back();
    return;
  }

  window.location.href = "index.html?restore=1";
});

const timelineSection = document.getElementById("timeline");
const unitTimelineTrack = document.getElementById("unitTimelineTrack");
const unitTimelineKicker = document.getElementById("unitTimelineKicker");
const unitTimelineTitle = document.getElementById("unitTimelineTitle");

const timelineData =
  data.timeline &&
    Array.isArray(data.timeline.phases) &&
    data.timeline.phases.length
    ? data.timeline
    : unitTemplate.timeline;

const timelineColorClass = (color) => {
  const allowed = {
    blue: "timeline-card-blue",
    yellow: "timeline-card-yellow",
    neutral: "timeline-card-neutral",
    grey: "timeline-card-neutral",
    gray: "timeline-card-neutral",
    pink: "timeline-card-pink"
  };

  return allowed[String(color || "").toLowerCase()] || "timeline-card-neutral";
};

if (timelineSection) {
  timelineSection.hidden = false;
  timelineSection.setAttribute("aria-hidden", "false");
}

if (unitTimelineKicker) {
  unitTimelineKicker.textContent = timelineData.kicker || "T1 SGAR 2026";
}

if (unitTimelineTitle) {
  unitTimelineTitle.textContent = timelineData.title || "TIMELINE SCHEDULE";
}

if (unitTimelineTrack) {
  unitTimelineTrack.innerHTML = timelineData.phases.map((phase, index) => `
    <article class="timeline-card ${timelineColorClass(phase.color)}">
      <span class="timeline-no">${String(index + 1).padStart(2, "0")}</span>
      <p class="timeline-date">${phase.date || "TBA"}</p>
      <h3>${phase.title || `Phase ${index + 1}`}</h3>
      ${phase.tag ? `<span class="timeline-card-tag">${phase.tag}</span>` : ""}
    </article>
  `).join("");

  unitTimelineTrack.style.gridTemplateColumns =
    `repeat(${timelineData.phases.length}, minmax(0, 1fr))`;
}

const countdownDays = document.getElementById("countdownDays");
const countdownHours = document.getElementById("countdownHours");
const countdownMinutes = document.getElementById("countdownMinutes");
const countdownSeconds = document.getElementById("countdownSeconds");
const countdownEyebrow = document.getElementById("countdownEyebrow");
const countdownDate = document.getElementById("countdownDate");
const sgarCountdown = document.getElementById("sgarCountdown");

const applicationPhase =
  timelineData?.phases?.find((phase) => phase.start && phase.end) || null;

if (!applicationPhase) {
  if (countdownEyebrow) countdownEyebrow.textContent = "APPLICATION SCHEDULE";
  if (countdownDate) countdownDate.textContent = "TBA";
  if (sgarCountdown) sgarCountdown.hidden = true;
} else if (sgarCountdown) {
  sgarCountdown.hidden = false;
}

const unitApplicationsOpen =
  applicationPhase ? new Date(applicationPhase.start).getTime() : null;

const unitApplicationsClose =
  applicationPhase ? new Date(applicationPhase.end).getTime() : null;

function setCountdownValues(remaining) {
  const safeRemaining = Math.max(0, remaining);
  const totalSeconds = Math.floor(safeRemaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (countdownDays) countdownDays.textContent = String(days).padStart(2, "0");
  if (countdownHours) countdownHours.textContent = String(hours).padStart(2, "0");
  if (countdownMinutes) countdownMinutes.textContent = String(minutes).padStart(2, "0");
  if (countdownSeconds) countdownSeconds.textContent = String(seconds).padStart(2, "0");
}

function updateSgarCountdown() {
  if (!sgarCountdown || !timelineData || !applicationPhase) return;

  const now = Date.now();

  if (now < unitApplicationsOpen) {
    sgarCountdown.classList.remove("is-live");
    if (countdownEyebrow) countdownEyebrow.textContent = "APPLICATIONS PREMIERE IN";
    if (countdownDate) {
      countdownDate.textContent =
        applicationPhase.openDateLabel || applicationPhase.date || "APPLICATION OPENING";
    }
    setCountdownValues(unitApplicationsOpen - now);
    return;
  }

  if (now <= unitApplicationsClose) {
    sgarCountdown.classList.add("is-live");
    if (countdownEyebrow) countdownEyebrow.textContent = "APPLICATIONS CLOSE IN";
    if (countdownDate) {
      countdownDate.textContent =
        applicationPhase.closeDateLabel || applicationPhase.date || "APPLICATION CLOSING";
    }
    setCountdownValues(unitApplicationsClose - now);
    return;
  }

  sgarCountdown.classList.add("is-live");
  if (countdownEyebrow) countdownEyebrow.textContent = "APPLICATIONS CLOSED";
  if (countdownDate) {
    countdownDate.textContent =
      applicationPhase.closeDateLabel || applicationPhase.date || "APPLICATION CLOSED";
  }
  setCountdownValues(0);
}

if (timelineData && applicationPhase) {
  updateSgarCountdown();
  setInterval(updateSgarCountdown, 1000);
}

const popcornLayer = document.getElementById("timelinePopcornLayer");
let popcornReady = true;

function burstTimelinePopcorn() {
  if (!popcornLayer) return;

  popcornLayer.replaceChildren();

  const count = 30;

  for (let i = 0; i < count; i += 1) {
    const kernel = document.createElement("span");
    kernel.className = "popcorn-kernel";

    const side = i % 2 === 0 ? -1 : 1;
    const spread = 70 + ((i * 37) % 430);
    const x = side * spread;
    const y = -90 - ((i * 53) % 330);
    const xEnd = x + side * (20 + ((i * 17) % 85));
    const yEnd = y + 150 + ((i * 29) % 190);
    const rot = `${side * (80 + ((i * 43) % 320))}deg`;
    const size = `${14 + ((i * 7) % 18)}px`;
    const scale = (0.82 + ((i * 11) % 48) / 100).toFixed(2);
    const delay = `${(i % 12) * 42}ms`;
    const duration = `${2350 + ((i * 53) % 1150)}ms`;
    const originY = `${43 + ((i * 13) % 10)}%`;

    kernel.style.setProperty("--x", `${x}px`);
    kernel.style.setProperty("--y", `${y}px`);
    kernel.style.setProperty("--x-end", `${xEnd}px`);
    kernel.style.setProperty("--y-end", `${yEnd}px`);
    kernel.style.setProperty("--rot", rot);
    kernel.style.setProperty("--size", size);
    kernel.style.setProperty("--scale", scale);
    kernel.style.setProperty("--delay", delay);
    kernel.style.setProperty("--dur", duration);
    kernel.style.setProperty("--origin-y", originY);

    popcornLayer.appendChild(kernel);
  }

  window.setTimeout(() => {
    popcornLayer.replaceChildren();
  }, 3900);
}

if (timelineSection && popcornLayer) {
  const popcornObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && entry.intersectionRatio >= 0.24 && popcornReady) {
        popcornReady = false;
        burstTimelinePopcorn();
      }

      if (!entry.isIntersecting) {
        window.setTimeout(() => {
          popcornReady = true;
        }, 600);
      }
    },
    { threshold: [0, 0.24] }
  );

  popcornObserver.observe(timelineSection);
}

(function () {
  const reel = document.getElementById("timelineReelControl");
  const strip = document.getElementById("timelineInteractiveStrip");
  if (!reel || !strip) return;

  let shift = 0;
  let rotation = 0;
  let dragging = false;
  let lastX = 0;
  let framePending = false;

  function bounds() {
    const stage = reel.closest(".timeline-reel-stage");
    if (!stage) return { min: -220, max: 70 };

    const stageWidth = stage.clientWidth;
    const stripWidth = strip.scrollWidth;
    const visibleWidth = Math.max(0, stageWidth - 112);
    const overflow = Math.max(0, stripWidth - visibleWidth);

    return {
      min: -(overflow + 140),
      max: 70
    };
  }

  function render() {
    framePending = false;
    strip.style.setProperty("--timeline-shift", `${shift}px`);
    reel.style.setProperty("--reel-rotation", `${rotation}deg`);
  }

  function scheduleRender() {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(render);
  }

  function apply(delta) {
    const { min, max } = bounds();
    shift = Math.max(min, Math.min(max, shift + delta));
    rotation += delta * 1.1;
    scheduleRender();
  }

  reel.addEventListener("wheel", (event) => {
    const horizontalIntent =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey;

    if (!horizontalIntent) return;

    event.preventDefault();

    const amount = event.shiftKey && Math.abs(event.deltaY) >= Math.abs(event.deltaX)
      ? -event.deltaY
      : -event.deltaX;

    apply(amount * 0.55);
  }, { passive: false });

  reel.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    reel.classList.add("is-dragging");
    reel.setPointerCapture?.(event.pointerId);
  });

  reel.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const delta = event.clientX - lastX;
    lastX = event.clientX;
    apply(delta);
  });

  const stopDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    reel.classList.remove("is-dragging");

    try {
      reel.releasePointerCapture?.(event.pointerId);
    } catch (error) { }
  };

  reel.addEventListener("pointerup", stopDrag);
  reel.addEventListener("pointercancel", stopDrag);

  reel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      apply(35);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      apply(-35);
    }
  });

  window.addEventListener("resize", () => {
    const { min, max } = bounds();
    shift = Math.max(min, Math.min(max, shift));
    scheduleRender();
  }, { passive: true });
})();

(function () {
  const timeline = document.getElementById("timeline");
  const topbar = document.querySelector(".unit-topbar");
  if (!timeline || !topbar) return;

  let settleTimer = 0;
  let snapping = false;

  function timelineTargetY() {
    const navHeight = Math.ceil(topbar.getBoundingClientRect().height);
    return Math.max(
      0,
      timeline.getBoundingClientRect().top + window.scrollY - navHeight
    );
  }

  function maybeAlignTimeline() {
    if (snapping) return;

    const target = timelineTargetY();
    const current = window.scrollY;
    const viewport = window.innerHeight;

    const nearTimeline =
      current >= target - viewport * 0.38 &&
      current <= target + viewport * 0.20;

    if (!nearTimeline || Math.abs(current - target) < 2) return;

    snapping = true;
    window.scrollTo({
      top: target,
      behavior: "smooth"
    });

    window.setTimeout(() => {
      snapping = false;
    }, 420);
  }

  function scheduleAlignment() {
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(maybeAlignTimeline, 110);
  }

  window.addEventListener("scroll", scheduleAlignment, { passive: true });

  if ("onscrollend" in window) {
    window.addEventListener("scrollend", maybeAlignTimeline, { passive: true });
  }
})();
