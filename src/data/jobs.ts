const jobs = [
  {
    id: "job-1",
    title: "Experienced Carpenter",
    company: "Creative Woodworks",
    description: `We're looking for an experienced carpenter to join our team for residential and commercial projects.

Requirements:
- 3+ years of experience in carpentry
- Knowledge of various woodworking techniques and materials
- Ability to read and interpret blueprints and drawings
- Experience with both hand tools and power tools
- Basic math skills for measurements and calculations

Responsibilities:
- Build, repair, and install wooden structures and fixtures
- Measure and cut materials according to specifications
- Install doors, windows, trim, and hardware
- Collaborate with other construction professionals
- Maintain a clean and safe work environment

Benefits:
- Competitive hourly rate (AED 90-130 based on experience)
- Opportunity for overtime
- Tool allowance
- Flexible schedule options`,
    shortDescription: "Join our team of skilled carpenters for residential and commercial woodworking projects.",
    location: "Abu Dhabi, UAE",
    salary: "AED 90 - 130 per hour",
    tags: ["Construction", "Carpentry", "Full-time", "Skilled Trade"],
    createdAt: "2025-05-01T12:00:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-2",
    title: "Professional House Painter",
    company: "Premium Painting Services",
    description: `Premium Painting Services is seeking experienced painters for residential and commercial painting projects.

Key Responsibilities:
- Prepare surfaces for painting by sanding, scraping, and filling holes
- Apply primer, paint, and other finishes to interior and exterior surfaces
- Select and mix paints to match desired colors
- Protect surrounding areas from paint splatter and debris
- Clean up work areas and equipment after job completion

Requirements:
- 2+ years of experience in residential or commercial painting
- Knowledge of different paint types and application methods
- Ability to use ladders and scaffolding safely
- Detail-oriented with an eye for quality
- Reliable transportation to job sites`,
    shortDescription: "Paint residential and commercial properties with our growing painting company.",
    location: "Dubai, UAE",
    salary: "AED 80 - 100 per hour",
    tags: ["Painting", "Construction", "Full-time", "Part-time"],
    createdAt: "2025-05-02T10:30:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-3",
    title: "Licensed Plumber",
    company: "Flow Masters Plumbing",
    description: `Flow Masters Plumbing is hiring licensed plumbers to serve our growing customer base.

Key Responsibilities:
- Install, repair, and maintain plumbing systems in residential and commercial buildings
- Diagnose and troubleshoot plumbing issues
- Replace or repair pipes, fixtures, and appliances
- Respond to emergency plumbing situations
- Provide estimates for plumbing work
- Maintain accurate records of work performed

Requirements:
- Valid plumber's license
- 3+ years of experience in plumbing
- Knowledge of local plumbing codes and regulations
- Ability to operate power tools and equipment
- Strong problem-solving skills
- Clean driving record and reliable transportation`,
    shortDescription: "Apply your plumbing expertise to solve residential and commercial plumbing problems.",
    location: "Sharjah, UAE",
    salary: "AED 110 - 160 per hour",
    tags: ["Plumbing", "Skilled Trade", "Full-time", "Licensed"],
    createdAt: "2025-05-03T08:45:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-4",
    title: "HVAC Technician",
    company: "Cool Comfort Systems",
    description: `Cool Comfort Systems is seeking experienced HVAC technicians to install, maintain, and repair heating, ventilation, and air conditioning systems.

Key Responsibilities:
- Install, maintain, and repair HVAC systems
- Diagnose electrical and mechanical problems
- Replace defective components and parts
- Test HVAC systems for proper functioning
- Perform preventative maintenance
- Explain system operations and maintenance to customers

Requirements:
- HVAC certification
- 2+ years of experience in HVAC service
- Knowledge of refrigeration systems and EPA regulations
- Ability to read schematics and blueprints
- Strong customer service skills
- Valid driver's license and clean driving record`,
    shortDescription: "Keep homes and businesses comfortable by installing and servicing HVAC systems.",
    location: "Abu Dhabi, UAE",
    salary: "AED 100 - 140 per hour",
    tags: ["HVAC", "Skilled Trade", "Technician", "Full-time"],
    createdAt: "2025-05-04T14:20:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-5",
    title: "Electrician",
    company: "Bright Spark Electrical",
    description: `Bright Spark Electrical is looking for licensed electricians to join our growing team.

Key Responsibilities:
- Install, maintain, and repair electrical systems and components
- Read and interpret electrical blueprints and drawings
- Inspect electrical systems for safety and code compliance
- Troubleshoot electrical problems using testing devices
- Install wiring, lighting fixtures, and electrical controls
- Work collaboratively with other construction professionals

Requirements:
- Journeyman or Master Electrician license
- 3+ years of experience in residential and commercial electrical work
- Knowledge of National Electrical Code (NEC)
- Experience with both low and high voltage systems
- Strong problem-solving skills
- Valid driver's license and clean driving record`,
    shortDescription: "Apply your electrical expertise to residential and commercial projects with our growing company.",
    location: "Dubai, UAE",
    salary: "AED 110 - 145 per hour",
    tags: ["Electrical", "Skilled Trade", "Licensed", "Full-time"],
    createdAt: "2025-05-05T09:15:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-6",
    title: "Landscaper",
    company: "Green Thumb Landscaping",
    description: `Green Thumb Landscaping is seeking hardworking individuals to join our landscaping team.

Key Responsibilities:
- Plant and maintain lawns, trees, and flower beds
- Operate lawn care equipment such as mowers, trimmers, and blowers
- Apply fertilizers, herbicides, and pesticides as needed
- Install irrigation systems and hardscape features
- Prune trees and shrubs for health and appearance
- Perform seasonal clean-up and lawn renovation

Requirements:
- 1+ year of experience in landscaping or grounds maintenance
- Knowledge of lawn care practices and plant identification
- Ability to operate and maintain landscaping equipment
- Physical stamina for outdoor work in various weather conditions
- Valid driver's license
- Herbicide/pesticide certification preferred but not required`,
    shortDescription: "Create and maintain beautiful outdoor spaces with our established landscaping company.",
    location: "Abu Dhabi, UAE",
    salary: "AED 65 - 90 per hour",
    tags: ["Landscaping", "Outdoor", "Seasonal", "Full-time"],
    createdAt: "2025-05-06T11:30:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-7",
    title: "Handyman/Maintenance Technician",
    company: "Fix-It-All Services",
    description: `Fix-It-All Services is looking for versatile handymen/maintenance technicians for residential and commercial repairs.

Key Responsibilities:
- Perform a variety of repair and maintenance tasks
- Diagnose and fix plumbing, electrical, and HVAC issues
- Complete carpentry work such as drywall repair and trim installation
- Install and repair appliances and fixtures
- Respond to maintenance requests from property managers and homeowners
- Maintain inventory of tools and materials

Requirements:
- 2+ years of experience in maintenance or repair work
- Broad knowledge of building systems and repair techniques
- Basic skills in plumbing, electrical, and carpentry
- Ability to troubleshoot and solve problems efficiently
- Strong customer service skills
- Valid driver's license and reliable transportation`,
    shortDescription: "Use your diverse maintenance skills to solve a variety of repair challenges.",
    location: "Sharjah, UAE",
    salary: "AED 80 - 110 per hour",
    tags: ["Maintenance", "Handyman", "Repair", "Full-time"],
    createdAt: "2025-05-07T13:45:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-8",
    title: "Flooring Installer",
    company: "Premier Flooring Solutions",
    description: `Premier Flooring Solutions is hiring experienced flooring installers for residential and commercial projects.

Key Responsibilities:
- Install various flooring materials including carpet, hardwood, laminate, vinyl, and tile
- Prepare subfloors for installation
- Measure and cut flooring materials to fit spaces
- Remove old flooring when necessary
- Ensure proper alignment and finish of installed flooring
- Clean up work areas after completion

Requirements:
- 2+ years of experience in flooring installation
- Knowledge of different flooring materials and installation techniques
- Ability to use hand and power tools specific to flooring installation
- Physical stamina for kneeling, bending, and lifting
- Attention to detail for proper alignment and finish
- Reliable transportation to job sites`,
    shortDescription: "Install beautiful flooring solutions for residential and commercial spaces.",
    location: "Dubai, UAE",
    salary: "AED 85 - 115 per hour",
    tags: ["Flooring", "Installation", "Construction", "Full-time"],
    createdAt: "2025-05-08T10:00:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-9",
    title: "Roofing Specialist",
    company: "Reliable Roofing",
    description: `Reliable Roofing is seeking experienced roofers for residential and commercial roofing projects.

Key Responsibilities:
- Install, repair, and replace various types of roofing systems
- Apply roofing materials such as shingles, metal, or flat roof coverings
- Inspect roofs for damage and identify necessary repairs
- Install flashing, gutters, and downspouts
- Ensure proper water drainage and ventilation
- Follow safety protocols for working at heights

Requirements:
- 2+ years of experience in roofing
- Knowledge of different roofing materials and installation techniques
- Ability to work at heights and in various weather conditions
- Physical stamina for climbing, bending, and lifting heavy materials
- Basic carpentry skills for roof deck repair
- Valid driver's license and reliable transportation`,
    shortDescription: "Join our team of roofing professionals installing and repairing quality roof systems.",
    location: "Abu Dhabi, UAE",
    salary: "AED 90 - 125 per hour",
    tags: ["Roofing", "Construction", "Skilled Trade", "Full-time"],
    createdAt: "2025-05-09T08:30:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-10",
    title: "Appliance Repair Technician",
    company: "Swift Appliance Services",
    description: `Swift Appliance Services is looking for skilled technicians to diagnose and repair household appliances.

Key Responsibilities:
- Diagnose and repair malfunctioning appliances such as refrigerators, washing machines, dryers, dishwashers, and ovens
- Install new appliances and ensure proper functioning
- Order and replace defective parts
- Explain issues and solutions to customers
- Maintain service records and inventory of parts
- Follow scheduled service routes and respond to emergency calls

Requirements:
- 2+ years of experience in appliance repair
- Knowledge of various appliance brands and models
- Ability to read and interpret technical manuals and schematics
- Basic electrical troubleshooting skills
- Strong customer service skills
- Valid driver's license and clean driving record`,
    shortDescription: "Fix household appliances and provide excellent service to residential customers.",
    location: "Dubai, UAE",
    salary: "AED 85 - 115 per hour",
    tags: ["Appliance Repair", "Technician", "Service", "Full-time"],
    createdAt: "2025-05-10T12:15:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-11",
    title: "General Construction Laborer",
    company: "Build Right Construction",
    description: `Build Right Construction is seeking hardworking construction laborers to assist with various building projects.

Key Responsibilities:
- Assist skilled tradespeople with construction tasks
- Load and unload building materials
- Operate basic construction equipment and tools
- Set up and take down scaffolding and temporary structures
- Clean and prepare construction sites
- Remove debris and waste materials

Requirements:
- Previous construction experience preferred but not required
- Ability to follow instructions and safety protocols
- Physical stamina for lifting, carrying, and standing for long periods
- Basic knowledge of construction tools and materials
- Reliable transportation to job sites
- Willingness to work outdoors in various weather conditions`,
    shortDescription: "Join our construction team helping build and renovate residential and commercial properties.",
    location: "Sharjah, UAE",
    salary: "AED 60 - 75 per hour",
    tags: ["Construction", "Labor", "Entry-Level", "Full-time"],
    createdAt: "2025-05-11T09:45:00Z",
    postedBy: "admin-1"
  },
  {
    id: "job-12",
    title: "Tile Setter",
    company: "Precision Tile & Stone",
    description: `Precision Tile & Stone is hiring experienced tile setters for residential and commercial projects.

Key Responsibilities:
- Install tile on floors, walls, countertops, and other surfaces
- Prepare surfaces for tile installation
- Measure and mark surfaces for tile layout
- Cut and shape tiles to fit around obstacles and into corners
- Mix and apply mortar, adhesives, and grout
- Ensure proper alignment and appearance of finished work

Requirements:
- 2+ years of experience in tile installation
- Knowledge of different tile materials and installation techniques
- Ability to use tile cutters, wet saws, and other specialty tools
- Strong attention to detail and precision
- Physical stamina for kneeling, bending, and lifting
- Reliable transportation to job sites`,
    shortDescription: "Create beautiful tile installations in kitchens, bathrooms, and other spaces.",
    location: "Dubai, UAE",
    salary: "AED 90 - 125 per hour",
    tags: ["Tile", "Installation", "Construction", "Skilled Trade"],
    createdAt: "2025-05-12T14:00:00Z",
    postedBy: "admin-1"
  }
];
