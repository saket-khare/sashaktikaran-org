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
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "rural-education-initiative-maharashtra",
    title: "Rural Education Initiative in Maharashtra",
    metaTitle:
      "Transforming Rural Education in Maharashtra | Sashaktikaran Foundation",
    metaDescription:
      "How we're improving education access in rural Maharashtra through community engagement and innovative teaching methods.",
    date: "2024-01-15",
    location: {
      city: "Ahmednagar",
      state: "Maharashtra",
      coordinates: {
        lat: 19.0952,
        lng: 74.7496,
      },
    },
    image: {
      url: "/case-studies/maharashtra-initiative.jpg",
      alt: "Students in a rural school in Maharashtra",
    },
    summary:
      "A comprehensive initiative to improve education access and quality in rural Maharashtra through community engagement and innovative teaching methods.",
    content: "Detailed content about the initiative...",
    impact: {
      livesChanged: 500,
      amountDonated: 2500000,
      participants: 150,
    },
    tags: ["Education", "Rural Development", "Community Engagement"],
    status: "ongoing",
    duration: {
      start: "2023-06-01",
    },
    partners: ["Local Education Department", "Community Leaders"],
    challenges: [
      "Limited access to quality education",
      "Infrastructure constraints",
      "Teacher retention issues",
    ],
    solutions: [
      "Community-based learning centers",
      "Teacher training programs",
      "Digital learning integration",
    ],
    testimonials: [
      {
        quote:
          "The initiative has transformed our village's approach to education.",
        author: "Rajesh Patil",
        role: "Community Leader",
      },
    ],
    gallery: [
      {
        url: "/case-studies/maharashtra-1.jpg",
        alt: "Students in classroom",
        caption: "Students engaged in interactive learning",
      },
    ],
  },
  // Add more case studies here
];
