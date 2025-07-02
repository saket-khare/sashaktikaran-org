export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  location: {
    city: string;
    state: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  image: {
    url: string;
    alt: string;
  };
  summary: string;
  content: string;
  impact: {
    livesChanged: number;
    amountDonated: number;
    participants: number;
  };
  tags: string[];
  status: "completed" | "ongoing" | "planned";
  duration: {
    start: string;
    end?: string;
  };
  partners?: string[];
  challenges: string[];
  solutions: string[];
  testimonials?: {
    quote: string;
    author: string;
    role: string;
  }[];
  gallery?: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  budget?: {
    total: number;
    raised: number;
    needed: number;
  };
  features?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "project-neev",
    slug: "project-neev",
    title: "Project Neev: Building Strong Foundations",
    metaTitle:
      "Project Neev - Foundational Education Initiative | Sashaktikaran Foundation",
    metaDescription:
      "Transforming rural education through local women educators, focusing on foundational literacy and numeracy for children aged 5-10 in Madhya Pradesh.",
    date: "2023-06-01",
    location: {
      city: "Dewas, Tikamgarh, Narmadapuram",
      state: "Madhya Pradesh",
      coordinates: {
        lat: 22.7526,
        lng: 76.0555,
      },
    },
    image: {
      url: "/neev.jpeg",
      alt: "Project Neev - Children learning with local women educators",
    },
    summary:
      "Leveraging technology and local women educators to provide foundational literacy and numeracy education to rural children aged 5-10, promoting self-directed learning habits.",
    content: `
      <div class="space-y-6">
        <section>
          <h3 class="text-2xl font-bold text-moss mb-4">The Challenge</h3>
          <p class="text-gray-700 mb-4">India houses the world's largest youth population (66% under 35 years). However, only 51.25% of this population is deemed employable, primarily due to a lack of essential modern job skills. Foundational Literacy and Numeracy (FLN) and Self-Directed Learning are crucial to developing adaptability and essential 21st-century skills.</p>
          
          <p class="text-gray-700 mb-4">Rural India, comprising 63.4% of the population, faces severe educational infrastructure challenges:</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>More than 50% of Grade V students cannot read Grade II texts</li>
            <li>Two-thirds of Grade III students cannot perform basic subtraction</li>
            <li>High prevalence of multigrade classrooms and significant teacher time devoted to non-teaching activities</li>
            <li>Predominant traditional and passive teaching methods</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-moss mb-4">The Opportunity</h3>
          <p class="text-gray-700 mb-4">High penetration of technology in rural areas presents unique opportunities:</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>89.1% families have smartphones</li>
            <li>95.15% villages have high-speed internet access</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-moss mb-4">Our Solution</h3>
          <p class="text-gray-700 mb-4">Project Neev leverages internet access to implement a scalable, cost-effective, and democratized ed-tech learning model targeting rural children aged 5-10. The initiative focuses on:</p>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Building strong Foundational Literacy and Numeracy (FLN)</li>
            <li>Encouraging Self-Directed Learning habits</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-moss mb-4">Implementation Model</h3>
          <ul class="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Provision of digital tablets to facilitate personalized, gamified learning</li>
            <li>Recruitment and training of local women ('Shiksha Saathis') proficient in basic literacy and numeracy</li>
            <li>Structured sessions of 30 minutes/day for each child, monitored through app-based real-time data tracking</li>
            <li>Regular standardized assessments to evaluate progress</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-bold text-moss mb-4">Impact & Vision</h3>
          <p class="text-gray-700">Project Neev aims to bridge educational gaps in rural India, empowering children with foundational skills crucial for adapting to future job markets and improving the employability rate of the nation's youth.</p>
        </section>
      </div>
    `,
    impact: {
      livesChanged: 650,
      amountDonated: 1000000,
      participants: 20,
    },
    tags: [
      "Education",
      "Rural Development",
      "Women Empowerment",
      "Technology",
      "Foundational Learning",
    ],
    status: "ongoing",
    duration: {
      start: "2023-06-01",
    },
    partners: [
      "Department of Denotified Communities",
      "Rajya Shiksha Kendra (RSK)",
      "Department of Tribal Affairs",
    ],
    challenges: [
      "Limited access to quality education in rural areas",
      "Lack of trained educators in remote villages",
      "Poor foundational literacy and numeracy skills",
      "Traditional and passive teaching methods",
      "Infrastructure constraints in rural schools",
    ],
    solutions: [
      "Training local women as Shiksha Saathis",
      "Digital tablets for personalized learning",
      "Gamified learning experiences",
      "Real-time progress monitoring through apps",
      "Community-based education model",
    ],
    budget: {
      total: 5326650,
      raised: 1000000,
      needed: 5326650,
    },
    features: [
      "Women Empowerment: Creating local employment opportunities for rural women",
      "Democratization & Scalability: Minimal educational requirements and short training (2 days) for facilitators",
      "Robust Monitoring: Real-time data analytics for detailed monitoring",
      "Promoting Self-Learning: Cultivating self-paced learning habits critical for future adaptability",
      "Responsible Ed-Tech Adoption: Controlled and confidence-building tech integration in education",
    ],
    gallery: [
      {
        url: "/neev.jpeg",
        alt: "Children learning with Shiksha Saathis",
        caption: "Local women educators conducting learning sessions",
      },
      {
        url: "/mission1.jpeg",
        alt: "Digital learning in rural classroom",
        caption: "Children engaged with digital learning tablets",
      },
      {
        url: "/mission2.jpg",
        alt: "Community engagement session",
        caption: "Community meeting discussing Project Neev",
      },
      {
        url: "/mission3.jpg",
        alt: "Training session for Shiksha Saathis",
        caption: "Training local women as education facilitators",
      },
    ],
    testimonials: [
      {
        quote:
          "The initiative has transformed how our children approach learning. They are more engaged and confident now.",
        author: "Sunita Devi",
        role: "Shiksha Saathi",
      },
      {
        quote:
          "Project Neev has brought hope to our village. Our children now have access to quality education.",
        author: "Ravi Kumar",
        role: "Village Head, Dewas",
      },
    ],
  },
  // {
  //   id: "1",
  //   slug: "rural-education-initiative-maharashtra",
  //   title: "Rural Education Initiative in Maharashtra",
  //   metaTitle:
  //     "Transforming Rural Education in Maharashtra | Sashaktikaran Foundation",
  //   metaDescription:
  //     "How we're improving education access in rural Maharashtra through community engagement and innovative teaching methods.",
  //   date: "2024-01-15",
  //   location: {
  //     city: "Ahmednagar",
  //     state: "Maharashtra",
  //     coordinates: {
  //       lat: 19.0952,
  //       lng: 74.7496,
  //     },
  //   },
  //   image: {
  //     url: "/case-studies/maharashtra-initiative.jpg",
  //     alt: "Students in a rural school in Maharashtra",
  //   },
  //   summary:
  //     "A comprehensive initiative to improve education access and quality in rural Maharashtra through community engagement and innovative teaching methods.",
  //   content: "Detailed content about the initiative...",
  //   impact: {
  //     livesChanged: 500,
  //     amountDonated: 2500000,
  //     participants: 150,
  //   },
  //   tags: ["Education", "Rural Development", "Community Engagement"],
  //   status: "ongoing",
  //   duration: {
  //     start: "2023-06-01",
  //   },
  //   partners: ["Local Education Department", "Community Leaders"],
  //   challenges: [
  //     "Limited access to quality education",
  //     "Infrastructure constraints",
  //     "Teacher retention issues",
  //   ],
  //   solutions: [
  //     "Community-based learning centers",
  //     "Teacher training programs",
  //     "Digital learning integration",
  //   ],
  //   testimonials: [
  //     {
  //       quote:
  //         "The initiative has transformed our village's approach to education.",
  //       author: "Rajesh Patil",
  //       role: "Community Leader",
  //     },
  //   ],
  //   gallery: [
  //     {
  //       url: "/case-studies/maharashtra-1.jpg",
  //       alt: "Students in classroom",
  //       caption: "Students engaged in interactive learning",
  //     },
  //   ],
  // },
  // Add more case studies here
];
