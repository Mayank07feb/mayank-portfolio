// src/pages/api/projects-details.json.ts
export async function GET() {
  const projectsData = [
    {
      id: 1,
      slug: "fashion",
      title: "Élan Vital",
      category: "Fashion",
      categories: ["Fashion", "Brand Identity", "Campaign Design"],
      shortDescription: "Brand Identity & Social Media Design",
      description: "Sustainable luxury fashion brand focusing on timeless silhouettes with modern construction.",
      thumbnailImage: "/assets/img/portfolio/800/fashion.png",
      thumbnailAlt: "Fashion Brand Design",

      hero: {
        image: "/assets/img/portfolio/1920/portfolio-1.jpg",
        alt: "Fashion Collection Campaign"
      },

      details: {
        client: "Élan Vital",
        year: "2024",
        season: "FW24 Collection",
        services: "Campaign Design, Visual Identity, Lookbook, Digital Assets",
        location: "Paris, France"
      },

      story: [
        "Élan Vital is a sustainable luxury fashion brand based in Paris, focusing on timeless silhouettes with modern construction. The client sought a complete visual identity that would capture their philosophy of 'slow fashion' while appealing to contemporary luxury consumers.",
        "The creative challenge was to merge classic tailoring techniques with avant-garde design elements, creating a brand language that speaks to both heritage and innovation. The identity needed to communicate effortless elegance, sustainability, and artisanal quality through every touchpoint.",
        "From the custom-designed serif logotype to the natural fiber-inspired color palette, every element was curated to reflect the brand's commitment to craftsmanship and environmental consciousness. The photography direction emphasizes texture, movement, and organic forms."
      ],

      quote: "The campaign visual identity elevated our brand perception, resulting in a 75% increase in press coverage and a 60% rise in online engagement during launch week.",

      gallery: [
        {
          image: "/assets/img/portfolio/single-project/project-1/1200/project-1-2.png",
          largeImage: "/assets/img/portfolio/single-project/project-1/1920/project-1-2.png",
          alt: "Lookbook Spread Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-1/1200/project-1-3.png",
          largeImage: "/assets/img/portfolio/single-project/project-1/1920/project-1-3.png",
          alt: "Textile Detail Photography",
          caption: "Detail photography highlighting textile craftsmanship"
        },
        {
          image: "/assets/img/portfolio/single-project/project-1/1200/project-1-4.png",
          largeImage: "/assets/img/portfolio/single-project/project-1/1920/project-1-4.png",
          alt: "Brand Stationery Suite",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-1/1200/project-1-5.png",
          largeImage: "/assets/img/portfolio/single-project/project-1/1920/project-1-5.png",
          alt: "Social Media Campaign Assets",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-1/1200/project-1-6.png",
          largeImage: "/assets/img/portfolio/single-project/project-1/1920/project-1-6.png",
          alt: "E-commerce Website Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-1/1200/project-1-7.png",
          largeImage: "/assets/img/portfolio/single-project/project-1/1920/project-1-7.png",
          alt: "Print Advertisement Layout",
          caption: ""
        }
      ]
    },

    {
      id: 2,
      slug: "healthcare",
      title: "MediCare Plus",
      category: "Healthcare",
      categories: ["Healthcare", "Brand Identity", "Stationery Design"],
      shortDescription: "Brand Identity & Stationery Design",
      description: "Modern healthcare facility brand focused on patient-centered care and accessibility.",
      thumbnailImage: "/assets/img/portfolio/800/healthcare.png",
      thumbnailAlt: "Healthcare Branding",

      hero: {
        image: "/assets/img/portfolio/1920/portfolio-2.jpg",
        alt: "Healthcare Brand Identity"
      },

      details: {
        client: "MediCare Plus",
        year: "2024",
        season: "Q2 2024",
        services: "Brand Identity, Stationery Design, Signage, Patient Communication Materials",
        location: "Mumbai, India"
      },

      story: [
        "MediCare Plus approached us to create a warm, approachable brand identity that would differentiate them from traditional clinical healthcare providers. The challenge was to balance professionalism with empathy and modern medical expertise with human touch.",
        "We developed a comprehensive visual system including logo design, color palette inspired by wellness and healing, custom iconography for different medical departments, and a complete stationery suite. The design language emphasizes clarity, trust, and accessibility.",
        "The brand identity extends across all patient touchpoints - from appointment cards and prescription pads to digital interfaces and wayfinding signage. Every element was designed to reduce anxiety and create a welcoming healthcare experience."
      ],

      quote: "The new brand identity transformed patient perception. We've seen a 40% increase in positive feedback and our brand recall improved significantly in our community.",

      gallery: [
        {
          image: "/assets/img/portfolio/single-project/project-2/1200/project-2-1.png",
          largeImage: "/assets/img/portfolio/single-project/project-2/1920/project-2-1.png",
          alt: "Healthcare Logo Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-2/1200/project-2-2.png",
          largeImage: "/assets/img/portfolio/single-project/project-2/1920/project-2-2.png",
          alt: "Stationery Design System",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-2/1200/project-2-3.png",
          largeImage: "/assets/img/portfolio/single-project/project-2/1920/project-2-3.png",
          alt: "Patient Communication Materials",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-2/1200/project-2-4.png",
          largeImage: "/assets/img/portfolio/single-project/project-2/1920/project-2-4.png",
          alt: "Brand Guidelines",
          caption: ""
        }
      ]
    },

    {
      id: 3,
      slug: "automobiles",
      title: "AutoDrive Campaign",
      category: "Automobiles",
      categories: ["Automobiles", "Marketing Campaign", "Visual Design"],
      shortDescription: "Marketing Campaigns & Visual Creatives",
      description: "High-impact marketing campaign for premium automotive brand launch.",
      thumbnailImage: "/assets/img/portfolio/800/automobile.png",
      thumbnailAlt: "Automobiles Branding",

      hero: {
        image: "/assets/img/portfolio/1920/portfolio-3.jpg",
        alt: "Automobile Marketing Campaign"
      },

      details: {
        client: "AutoDrive Motors",
        year: "2023",
        season: "Launch Campaign 2023",
        services: "Campaign Strategy, Print Ads, Digital Creatives, Outdoor Advertising",
        location: "Delhi, India"
      },

      story: [
        "AutoDrive Motors needed a bold, memorable campaign for their new SUV launch targeting young urban professionals. The campaign had to communicate power, sophistication, and innovation while standing out in a competitive automotive market.",
        "We created a multi-channel campaign with a strong visual identity featuring dynamic photography, bold typography, and a color palette that emphasized the vehicle's premium positioning. The campaign tagline 'Drive Tomorrow' became central to all creative executions.",
        "The campaign rollout included print advertisements in leading publications, large-format outdoor billboards, social media content series, and experiential marketing materials for dealer showrooms. Each touchpoint was designed to create anticipation and desire."
      ],

      quote: "The campaign exceeded all our expectations. We achieved 150% of our launch month sales target and the creative assets continue to drive engagement across our marketing channels.",

      gallery: [
        {
          image: "/assets/img/portfolio/single-project/project-3/1200/project-3-1.png",
          largeImage: "/assets/img/portfolio/single-project/project-3/1920/project-3-1.png",
          alt: "Print Advertisement",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-3/1200/project-3-2.png",
          largeImage: "/assets/img/portfolio/single-project/project-3/1920/project-3-2.png",
          alt: "Outdoor Billboard Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-3/1200/project-3-3.png",
          largeImage: "/assets/img/portfolio/single-project/project-3/1920/project-3-3.png",
          alt: "Social Media Campaign",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-3/1200/project-3-4.png",
          largeImage: "/assets/img/portfolio/single-project/project-3/1920/project-3-4.png",
          alt: "Showroom Marketing Materials",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-3/1200/project-3-5.png",
          largeImage: "/assets/img/portfolio/single-project/project-3/1920/project-3-5.png",
          alt: "Digital Banner Ads",
          caption: ""
        }
      ]
    },

    {
      id: 4,
      slug: "events",
      title: "Vivid Events",
      category: "Events",
      categories: ["Events", "Brand Identity", "Promotional Design"],
      shortDescription: "Event Branding & Promotional Design",
      description: "Complete event branding and promotional materials for cultural festival series.",
      thumbnailImage: "/assets/img/portfolio/800/events.png",
      thumbnailAlt: "Event Branding",

      hero: {
        image: "/assets/img/portfolio/1920/portfolio-4.jpg",
        alt: "Event Branding Design"
      },

      details: {
        client: "Vivid Cultural Fest",
        year: "2024",
        season: "Annual Festival 2024",
        services: "Event Branding, Poster Design, Digital Promotions, Merchandise Design",
        location: "Bangalore, India"
      },

      story: [
        "Vivid Cultural Fest is an annual celebration of arts, music, and culture attracting thousands of attendees. The challenge was to create a vibrant, energetic brand identity that would appeal to diverse age groups while maintaining sophistication and cultural relevance.",
        "We developed a bold visual language featuring abstract geometric patterns inspired by traditional Indian art forms, a vibrant multi-color palette, and dynamic typography. The identity needed to work across various applications from large-scale banners to social media posts.",
        "The comprehensive branding package included event posters, digital promotion assets, venue signage, merchandise designs, and a complete brand guideline. The visual system was designed to be flexible enough to accommodate different event segments while maintaining overall cohesion."
      ],

      quote: "The branding created unprecedented buzz. Our advance ticket sales increased by 85% compared to previous years, and the visual identity became iconic in our community.",

      gallery: [
        {
          image: "/assets/img/portfolio/single-project/project-4/1200/project-4-1.png",
          largeImage: "/assets/img/portfolio/single-project/project-4/1920/project-4-1.png",
          alt: "Event Poster Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-4/1200/project-4-2.png",
          largeImage: "/assets/img/portfolio/single-project/project-4/1920/project-4-2.png",
          alt: "Social Media Promotions",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-4/1200/project-4-3.png",
          largeImage: "/assets/img/portfolio/single-project/project-4/1920/project-4-3.png",
          alt: "Merchandise Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-4/1200/project-4-4.png",
          largeImage: "/assets/img/portfolio/single-project/project-4/1920/project-4-4.png",
          alt: "Venue Signage",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-4/1200/project-4-5.png",
          largeImage: "/assets/img/portfolio/single-project/project-4/1920/project-4-5.png",
          alt: "Digital Banner Ads",
          caption: ""
        }
      ]
    },

    {
      id: 5,
      slug: "hospitality-food",
      title: "Artisan Bistro",
      category: "Hospitality & Food",
      categories: ["Hospitality & Food", "Packaging", "Brand Design"],
      shortDescription: "Packaging & Brand Visual Design",
      description: "Farm-to-table restaurant brand with sustainable packaging and visual identity.",
      thumbnailImage: "/assets/img/portfolio/800/hospitality-food.png",
      thumbnailAlt: "Hospitality & Food Branding",

      hero: {
        image: "/assets/img/portfolio/1920/portfolio-5.jpg",
        alt: "Restaurant Brand Design"
      },

      details: {
        client: "Artisan Bistro",
        year: "2024",
        season: "Brand Launch 2024",
        services: "Brand Identity, Menu Design, Packaging, Interior Graphics",
        location: "Goa, India"
      },

      story: [
        "Artisan Bistro is a farm-to-table restaurant celebrating local ingredients and traditional cooking methods. The owners wanted a brand that felt authentic, warm, and connected to the land, while appealing to both locals and tourists seeking genuine culinary experiences.",
        "We created an organic visual identity featuring hand-drawn illustrations of local produce, earthy color tones, and typography that balances rustic charm with modern legibility. The brand story emphasizes sustainability, community, and culinary craftsmanship.",
        "The design system includes comprehensive menu layouts, eco-friendly takeaway packaging, table settings, interior wall graphics, and social media templates. Every element reinforces the restaurant's commitment to quality ingredients and thoughtful preparation."
      ],

      quote: "The branding perfectly captures our philosophy. Customers frequently compliment our packaging and several have said the brand identity was why they chose to visit us.",

      gallery: [
        {
          image: "/assets/img/portfolio/single-project/project-5/1200/project-5-1.png",
          largeImage: "/assets/img/portfolio/single-project/project-5/1920/project-5-1.png",
          alt: "Restaurant Logo Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-5/1200/project-5-2.png",
          largeImage: "/assets/img/portfolio/single-project/project-5/1920/project-5-2.png",
          alt: "Menu Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-5/1200/project-5-3.png",
          largeImage: "/assets/img/portfolio/single-project/project-5/1920/project-5-3.png",
          alt: "Packaging Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-5/1200/project-5-4.png",
          largeImage: "/assets/img/portfolio/single-project/project-5/1920/project-5-4.png",
          alt: "Interior Graphics",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-5/1200/project-5-5.png",
          largeImage: "/assets/img/portfolio/single-project/project-5/1920/project-5-5.png",
          alt: "Social Media Templates",
          caption: ""
        }
      ]
    },

    {
      id: 6,
      slug: "fitness",
      title: "PowerFit Studio",
      category: "Fitness",
      categories: ["Fitness", "Brand Identity", "Digital Design"],
      shortDescription: "Brand Identity & Social Media Design",
      description: "High-energy fitness brand for boutique gym focused on strength training and community.",
      thumbnailImage: "/assets/img/portfolio/800/fitness.png",
      thumbnailAlt: "Fitness Branding",

      hero: {
        image: "/assets/img/portfolio/1920/portfolio-6.jpg",
        alt: "Fitness Brand Identity"
      },

      details: {
        client: "PowerFit Studio",
        year: "2023",
        season: "Brand Launch 2023",
        services: "Brand Identity, Social Media Design, Apparel Graphics, Membership Materials",
        location: "Pune, India"
      },

      story: [
        "PowerFit Studio wanted to stand out in the crowded fitness market by creating a brand that emphasized strength, determination, and community over vanity metrics. The target audience was serious fitness enthusiasts looking for a supportive, no-nonsense training environment.",
        "We developed a bold, energetic visual identity with strong geometric elements, a powerful color palette of blacks and vibrant accent colors, and typography that conveys strength and movement. The logo mark incorporates abstract representations of dumbbells and human forms in motion.",
        "The brand rollout included social media content templates, membership cards, apparel designs for trainers and merchandise, motivational wall graphics, and a complete digital presence. The visual language is designed to inspire and energize while maintaining professional credibility."
      ],

      quote: "The brand identity gave us instant credibility. Our membership grew 120% in the first six months, and members regularly share our social content because it resonates with their fitness journey.",

      gallery: [
        {
          image: "/assets/img/portfolio/single-project/project-6/1200/project-6-1.png",
          largeImage: "/assets/img/portfolio/single-project/project-6/1920/project-6-1.png",
          alt: "Fitness Logo Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-6/1200/project-6-2.png",
          largeImage: "/assets/img/portfolio/single-project/project-6/1920/project-6-2.png",
          alt: "Social Media Templates",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-6/1200/project-6-3.png",
          largeImage: "/assets/img/portfolio/single-project/project-6/1920/project-6-3.png",
          alt: "Apparel Design",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-6/1200/project-6-4.png",
          largeImage: "/assets/img/portfolio/single-project/project-6/1920/project-6-4.png",
          alt: "Membership Materials",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-6/1200/project-6-5.png",
          largeImage: "/assets/img/portfolio/single-project/project-6/1920/project-6-5.png",
          alt: "Wall Graphics",
          caption: ""
        },
        {
          image: "/assets/img/portfolio/single-project/project-6/1200/project-6-6.png",
          largeImage: "/assets/img/portfolio/single-project/project-6/1920/project-6-6.png",
          alt: "Digital Presence",
          caption: ""
        }
      ]
    }
  ];

  // Return FULL project data (including all details)
  return new Response(JSON.stringify(projectsData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

export const prerender = false;