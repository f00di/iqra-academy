export type PricingPlan = {
  id: string;
  level: string;
  monthlyFee: number;
  description: string;
  category: "main" | "addon";
  highlight?: boolean;
};

export type RelatedPricing = {
  planIds: string[];
  addOnPlanIds?: string[];
  activityIds?: string[];
  note: string;
};

export type Program = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  suitableFor: string[];
  whatStudentsLearn: string[];
  learningOutcomes: string[];
  availableLevels: string[];
  relatedPricing: RelatedPricing;
  duration: string;
  mode: string;
  ctaText: string;
};

export type Activity = {
  id: string;
  title: string;
  shortDescription: string;
  monthlyFee: number;
  icon: string;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  focus: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "junior-classes",
    level: "Junior Classes",
    monthlyFee: 1000,
    description: "Early learners and beginner-level students.",
    category: "main"
  },
  {
    id: "class-1-to-5",
    level: "Class 1 to 5",
    monthlyFee: 1500,
    description: "Primary-level students.",
    category: "main"
  },
  {
    id: "class-6-to-8",
    level: "Class 6 to 8",
    monthlyFee: 2000,
    description: "Middle-level students.",
    category: "main",
    highlight: true
  },
  {
    id: "class-9-and-10",
    level: "Class 9 & 10",
    monthlyFee: 6000,
    description: "Matric-level students requiring focused academic support.",
    category: "main"
  },
  {
    id: "first-and-second-year",
    level: "1st Year & 2nd Year",
    monthlyFee: 8000,
    description: "Intermediate-level students requiring advanced academic support.",
    category: "main"
  },
  {
    id: "extra-curricular-skilled-activities",
    level: "Extra Curricular & Skilled Activities",
    monthlyFee: 500,
    description: "Optional monthly activity add-on for creative, practical, and skill-based learning.",
    category: "addon"
  }
];

export const activities: Activity[] = [
  {
    id: "art-craft",
    title: "Art & Craft",
    shortDescription: "Creative sessions that build focus, imagination, fine motor skills, and confidence.",
    monthlyFee: 500,
    icon: "palette"
  },
  {
    id: "computer-activities",
    title: "Computer Activities",
    shortDescription: "Practical computer tasks that develop digital confidence and safe technology habits.",
    monthlyFee: 500,
    icon: "monitor"
  },
  {
    id: "cooking-skills",
    title: "Cooking Skills",
    shortDescription: "Guided beginner activities that introduce responsibility, sequencing, and practical skills.",
    monthlyFee: 500,
    icon: "utensils"
  },
  {
    id: "play-area-activities",
    title: "Play Area Activities",
    shortDescription: "Structured play for social confidence, movement, sharing, and joyful learning routines.",
    monthlyFee: 500,
    icon: "blocks"
  },
  {
    id: "creative-learning-sessions",
    title: "Creative Learning Sessions",
    shortDescription: "Interactive learning through games, memory activities, storytelling, and hands-on practice.",
    monthlyFee: 500,
    icon: "sparkles"
  }
];

const allMainPlanIds = [
  "junior-classes",
  "class-1-to-5",
  "class-6-to-8",
  "class-9-and-10",
  "first-and-second-year"
];

export const programs: Program[] = [
  {
    id: "quranic-arabic",
    slug: "quranic-arabic-classes",
    title: "Quranic Arabic Classes",
    shortDescription: "Build Quranic vocabulary, pronunciation, and understanding through faith-based learning.",
    longDescription:
      "Quranic Arabic Classes help students understand basic Quranic words, improve pronunciation, learn correct Makhraj, and build confidence in reading and understanding Quranic Arabic in a structured and respectful environment.",
    icon: "book-open",
    suitableFor: [
      "Junior Classes",
      "Class 1 to 5",
      "Class 6 to 8",
      "Class 9 & 10",
      "1st Year & 2nd Year"
    ],
    whatStudentsLearn: [
      "Quranic vocabulary",
      "Correct pronunciation and Makhraj",
      "Basic Arabic grammar",
      "Quranic word meanings",
      "Reading confidence",
      "Respectful Islamic learning habits"
    ],
    learningOutcomes: [
      "Improved Quranic reading confidence",
      "Better understanding of common Quranic words",
      "Stronger pronunciation",
      "Increased interest in Islamic learning"
    ],
    availableLevels: ["Beginner", "Intermediate", "Advanced"],
    relatedPricing: {
      planIds: allMainPlanIds,
      note: "Uses the main class-level monthly fee structure."
    },
    duration: "Monthly enrollment",
    mode: "On-site guided classes",
    ctaText: "Enroll in Quranic Arabic"
  },
  {
    id: "language",
    slug: "language-classes",
    title: "Language Classes",
    shortDescription: "Improve grammar, tenses, vocabulary, writing, and speaking confidence.",
    longDescription:
      "Language Classes are designed to help students strengthen English language foundations through grammar, tenses, vocabulary building, sentence structure, reading, writing, speaking, and comprehension practice.",
    icon: "languages",
    suitableFor: ["Class 1 to 5", "Class 6 to 8", "Class 9 & 10", "1st Year & 2nd Year"],
    whatStudentsLearn: [
      "Grammar",
      "Tenses",
      "Vocabulary",
      "Sentence structure",
      "Reading comprehension",
      "Writing practice",
      "Speaking confidence"
    ],
    learningOutcomes: [
      "Better grammar accuracy",
      "Improved writing skills",
      "Stronger communication",
      "Better academic performance"
    ],
    availableLevels: ["Foundation", "School Support", "Advanced English"],
    relatedPricing: {
      planIds: ["class-1-to-5", "class-6-to-8", "class-9-and-10", "first-and-second-year"],
      note: "Uses the main class-level monthly fee structure."
    },
    duration: "Monthly enrollment",
    mode: "On-site guided classes",
    ctaText: "Enroll in Language Classes"
  },
  {
    id: "computer-ai",
    slug: "computer-ai-classes",
    title: "Computer & AI Classes",
    shortDescription: "Hands-on computer activities, digital skills, beginner AI concepts, and creative projects.",
    longDescription:
      "Computer & AI Classes introduce students to modern digital learning through computer basics, creative activities, problem-solving, safe technology use, and beginner-friendly AI concepts.",
    icon: "brain-circuit",
    suitableFor: ["Class 1 to 5", "Class 6 to 8", "Class 9 & 10", "1st Year & 2nd Year"],
    whatStudentsLearn: [
      "Computer basics",
      "Typing and digital confidence",
      "Creative computer activities",
      "Safe technology use",
      "Basic problem-solving",
      "Beginner AI concepts",
      "Simple digital projects"
    ],
    learningOutcomes: [
      "Improved computer confidence",
      "Better digital literacy",
      "Understanding of basic AI ideas",
      "Creative and logical thinking"
    ],
    availableLevels: ["Computer Basics", "Creative Computer Activities", "Beginner AI", "Project-Based Learning"],
    relatedPricing: {
      planIds: ["class-1-to-5", "class-6-to-8", "class-9-and-10", "first-and-second-year"],
      activityIds: ["computer-activities"],
      note: "Uses the main class-level monthly fee structure. Computer Activities can be added for Rs. 500 monthly."
    },
    duration: "Monthly enrollment",
    mode: "Hands-on on-site classes",
    ctaText: "Enroll in Computer & AI"
  },
  {
    id: "fitness-skills",
    slug: "fitness-skills-classes",
    title: "Fitness & Skills Classes",
    shortDescription: "Physical activity, teamwork, confidence-building, and creative skill development.",
    longDescription:
      "Fitness & Skills Classes support students' physical, social, and personal development through guided activities, teamwork, confidence-building exercises, and skill-based sessions.",
    icon: "dumbbell",
    suitableFor: ["Junior Classes", "Class 1 to 5", "Class 6 to 8"],
    whatStudentsLearn: ["Basic fitness", "Teamwork", "Discipline", "Confidence", "Motor skills", "Social interaction"],
    learningOutcomes: [
      "Improved confidence",
      "Better teamwork",
      "Healthier activity habits",
      "Stronger social skills"
    ],
    availableLevels: ["Junior", "Primary", "Middle"],
    relatedPricing: {
      planIds: ["junior-classes", "class-1-to-5", "class-6-to-8"],
      addOnPlanIds: ["extra-curricular-skilled-activities"],
      note: "Uses the main class-level monthly fee structure. Extra Curricular & Skilled Activities are available for Rs. 500 monthly."
    },
    duration: "Monthly enrollment",
    mode: "On-site guided activities",
    ctaText: "Enroll in Fitness & Skills"
  },
  {
    id: "learn-play",
    slug: "learn-and-play",
    title: "Learn & Play",
    shortDescription: "A joyful program combining structured learning with creative play.",
    longDescription:
      "Learn & Play is designed for young learners who benefit from interactive learning, play-area activities, creativity, memory development, and social interaction in a caring environment.",
    icon: "blocks",
    suitableFor: ["Junior Classes", "Class 1 to 5"],
    whatStudentsLearn: [
      "Early learning habits",
      "Social skills",
      "Creative thinking",
      "Memory development",
      "Confidence",
      "Play-based learning"
    ],
    learningOutcomes: [
      "Improved attention",
      "Better social confidence",
      "Joyful learning routine",
      "Stronger classroom readiness"
    ],
    availableLevels: ["Junior", "Early Primary"],
    relatedPricing: {
      planIds: ["junior-classes", "class-1-to-5"],
      activityIds: ["play-area-activities"],
      note: "Junior Classes are Rs. 1000 monthly and Class 1 to 5 is Rs. 1500 monthly. Play Area Activities can be added for Rs. 500 monthly."
    },
    duration: "Monthly enrollment",
    mode: "Interactive on-site learning",
    ctaText: "Enroll in Learn & Play"
  },
  {
    id: "advanced-english",
    slug: "poetic-devices-advanced-english",
    title: "Poetic Devices & Advanced English",
    shortDescription: "Learn literary devices, expression, comprehension, and advanced communication skills.",
    longDescription:
      "Poetic Devices & Advanced English helps older students improve literary understanding, comprehension, expression, essay writing, grammar accuracy, and communication confidence.",
    icon: "pen-tool",
    suitableFor: ["Class 6 to 8", "Class 9 & 10", "1st Year & 2nd Year"],
    whatStudentsLearn: [
      "Poetic devices",
      "Advanced grammar",
      "Essay writing",
      "Comprehension",
      "Expression",
      "Literature basics",
      "Communication skills"
    ],
    learningOutcomes: [
      "Stronger English understanding",
      "Better academic writing",
      "Improved exam preparation",
      "Clearer expression"
    ],
    availableLevels: ["Middle School English", "Matric English Support", "Intermediate English Support"],
    relatedPricing: {
      planIds: ["class-6-to-8", "class-9-and-10", "first-and-second-year"],
      note: "Uses the main class-level monthly fee structure."
    },
    duration: "Monthly enrollment",
    mode: "On-site academic support",
    ctaText: "Enroll in Advanced English"
  }
];

export const benefits: Benefit[] = [
  {
    id: "faith-and-care",
    title: "Faith-Based Care",
    description: "Students learn in a respectful environment that values manners, confidence, and Islamic learning habits.",
    icon: "heart-handshake"
  },
  {
    id: "clear-levels",
    title: "Clear Class Levels",
    description: "Programs and fees are organized by class level, helping parents choose the right support quickly.",
    icon: "list-checks"
  },
  {
    id: "modern-skills",
    title: "Modern Skills",
    description: "Computer, AI, language, and creative sessions help students build useful skills for today and tomorrow.",
    icon: "sparkles"
  },
  {
    id: "parent-friendly",
    title: "Easy Parent Communication",
    description: "Parents can ask about programs, fees, activities, and enrollment directly through WhatsApp.",
    icon: "message-circle"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "guided-learning",
    title: "Guided Learning",
    description: "A caring classroom environment for reading, writing, and focused academic support.",
    image: "/images/academy-hero.png",
    alt: "Students learning in a bright classroom at Iqra Angels Learning Academy",
    focus: "object-center"
  },
  {
    id: "creative-activities",
    title: "Creative Activities",
    description: "Hands-on activities that make learning joyful, practical, and confidence-building.",
    image: "/images/academy-hero.png",
    alt: "Children taking part in creative classroom activities",
    focus: "object-right"
  },
  {
    id: "digital-confidence",
    title: "Digital Confidence",
    description: "Computer and beginner AI activities designed for safe, age-appropriate learning.",
    image: "/images/academy-hero.png",
    alt: "Students practicing digital learning activities in a modern classroom",
    focus: "object-[65%_center]"
  }
];

export const getMainPricingPlans = () => pricingPlans.filter((plan) => plan.category === "main");

export const getAddOnPricingPlans = () => pricingPlans.filter((plan) => plan.category === "addon");

export const getProgramBySlug = (slug: string) => programs.find((program) => program.slug === slug);

export const getPricingPlanById = (id: string) => pricingPlans.find((plan) => plan.id === id);

export const getActivityById = (id: string) => activities.find((activity) => activity.id === id);
