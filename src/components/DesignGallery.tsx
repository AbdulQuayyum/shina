
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ImageModal from './ImageModal';

interface DesignWork {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

const designWorks = [
  {
    id: 1,
    title: "60th Birthday Celebration Invitation",
    category: "Event Design",
    description: "Elegant birthday and retirement thanksgiving invitation design featuring traditional Nigerian aesthetics with golden accents and floral patterns.",
    image: "/works/01.jpg",
    tags: ["Event Design", "Print", "Nigerian Culture", "Typography"],
    year: "2024"
  },
  {
    id: 2,
    title: "Konfirm Tech Africa Brand Campaign",
    category: "Brand Design",
    description: "Modern brand campaign design emphasizing the power of branding with contemporary layout and engaging copy for social media management services.",
    image: "/works/02.jpg",
    tags: ["Brand Identity", "Social Media", "Marketing", "Tech"],
    year: "2024"
  },
  {
    id: 3,
    title: "Mount Zion Youth Society Event",
    category: "Religious Design",
    description: "Spiritual event poster with dramatic imagery and elegant typography for 'A Living Sacrifice' themed religious gathering.",
    image: "/works/03.jpg",
    tags: ["Religious", "Event", "Typography", "Spiritual"],
    year: "2025"
  },
  {
    id: 4,
    title: "LSUBEB Retirement Ceremony",
    category: "Event Design",
    description: "Official retirement ceremony invitation for Lagos State education authority with formal design elements and institutional branding.",
    image: "/works/04.jpg",
    tags: ["Official", "Education", "Ceremony", "Government"],
    year: "2024"
  },
  {
    id: 5,
    title: "Gang Star Logo Design",
    category: "Brand Design",
    description: "Modern logo design with geometric patterns and gradient effects, featuring bold typography and contemporary aesthetic.",
    image: "/works/05.jpg",
    tags: ["Logo Design", "Brand Identity", "Modern", "Geometric"],
    year: "2024"
  },
  {
    id: 6,
    title: "Basketball League Registration",
    category: "Sports Design",
    description: "Dynamic sports poster design for youth basketball league featuring flame effects and energetic typography with registration details.",
    image: "/works/06.jpg",
    tags: ["Sports", "Youth", "Registration", "Dynamic"],
    year: "2025"
  },
  {
    id: 7,
    title: "Car Security Marketing Campaign",
    category: "Marketing Design",
    description: "Engaging 'Would You Rather' marketing concept for vehicle security services with clear call-to-action and modern design.",
    image: "/works/07.jpg",
    tags: ["Marketing", "Security", "Campaign", "Interactive"],
    year: "2024"
  },
  {
    id: 8,
    title: "Stairway Corporate Polo Design",
    category: "Product Design",
    description: "Professional corporate apparel design featuring brand colors and geometric patterns for company uniforms.",
    image: "/works/08.jpg",
    tags: ["Apparel", "Corporate", "Brand", "Uniform"],
    year: "2024"
  },
  {
    id: 9,
    title: "Vivo City Real Estate",
    category: "Marketing Design",
    description: "Real estate marketing material showcasing property investment opportunities with clear pricing and location information.",
    image: "/works/09.jpg",
    tags: ["Real Estate", "Investment", "Marketing", "Property"],
    year: "2024"
  },
  {
    id: 10,
    title: "Allo Innoware Product Catalog",
    category: "Product Design",
    description: "Product showcase design for kitchenware brand featuring eco-friendly products with pricing and specifications.",
    image: "/works/10.jpg",
    tags: ["Product", "Catalog", "Eco-friendly", "Kitchenware"],
    year: "2024"
  },
  {
    id: 11,
    title: "AY Beauty Salon",
    category: "Brand Design",
    description: "Luxury beauty salon branding with elegant golden accents, floral elements, and service portfolio showcase.",
    image: "/works/11.jpg",
    tags: ["Brand Identity", "Beauty", "Luxury", "Service Design"],
    year: "2024",
    color: "#FFD700"
  },
  {
    id: 12,
    title: "Mount Zion Youth Society - Quarterly Impact",
    category: "Religious Design",
    description: "Spiritual event poster featuring 'Throne of Grace' theme with dramatic typography and biblical imagery.",
    image: "/works/12.jpg",
    tags: ["Religious", "Event", "Typography", "Youth Ministry"],
    year: "2024",
    color: "#4A90E2"
  },
  {
    id: 13,
    title: "Minimalist Logo Design",
    category: "Brand Design",
    description: "Clean, modern logo design with geometric elements and contemporary aesthetic.",
    image: "/works/13.jpg",
    tags: ["Logo Design", "Minimalist", "Modern"],
    year: "2024",
    color: "#2ECC71"
  },
  {
    id: 14,
    title: "Ifunanya Real Estate",
    category: "Marketing Design",
    description: "Real estate marketing campaign featuring property showcase with compelling pricing and location details.",
    image: "/works/14.jpg",
    tags: ["Real Estate", "Marketing", "Campaign", "Property"],
    year: "2024",
    color: "#E74C3C"
  },
  {
    id: 15,
    title: "Children Adoption Seminar",
    category: "Religious Design",
    description: "Community service poster for children adoption awareness with warm, family-oriented design elements.",
    image: "/works/15.jpg",
    tags: ["Community", "Religious", "Seminar", "Children"],
    year: "2024",
    color: "#27AE60"
  },
  {
    id: 16,
    title: "Aure's Collection Brand Identity",
    category: "Brand Design",
    description: "Fashion brand logo variations showcasing versatility across different backgrounds and color schemes.",
    image: "/works/16.jpg",
    tags: ["Fashion", "Brand Identity", "Logo Variations"],
    year: "2024",
    color: "#8E44AD"
  },
  {
    id: 17,
    title: "Gideon House of Prayer",
    category: "Religious Design",
    description: "Church event poster with 'Go Forward' theme featuring modern religious typography and symbolic elements.",
    image: "/works/17.jpg",
    tags: ["Church", "Event", "Religious", "Typography"],
    year: "2023",
    color: "#34495E"
  },
  {
    id: 18,
    title: "Streetwear T-Shirt Design",
    category: "Product Design",
    description: "Edgy streetwear design featuring bold graphics and contemporary urban aesthetic.",
    image: "/works/18.jpg",
    tags: ["Streetwear", "T-Shirt", "Urban", "Graphic Design"],
    year: "2024",
    color: "#E67E22"
  },
  {
    id: 19,
    title: "TAJ Suites Hospitality",
    category: "Marketing Design",
    description: "Luxury hospitality marketing material showcasing premium accommodations and amenities.",
    image: "/works/19.jpg",
    tags: ["Hospitality", "Luxury", "Marketing", "Real Estate"],
    year: "2024",
    color: "#D35400"
  },
  {
    id: 20,
    title: "Konfirm Tech Africa Birthday",
    category: "Corporate Design",
    description: "Corporate birthday celebration design with professional branding and personalized messaging.",
    image: "/works/20.jpg",
    tags: ["Corporate", "Birthday", "Professional", "Tech"],
    year: "2024",
    color: "#3498DB"
  },
  {
    id: 21,
    title: "Aure's Collection Lifestyle",
    category: "Brand Design",
    description: "Fashion brand lifestyle photography and branding application across shopping bags and merchandise.",
    image: "/works/21.jpg",
    tags: ["Fashion", "Lifestyle", "Photography", "Brand Application"],
    year: "2024",
    color: "#9B59B6"
  },
  {
    id: 22,
    title: "CredVest Investment Seminar",
    category: "Event Design",
    description: "Professional investment seminar poster for young Nigerians featuring speaker Temi Adekunle, focused on smart wealth building in the digital age.",
    image: "/works/22.jpg",
    tags: ["Event Design", "Investment", "Nigerian Market", "Professional"],
    year: "2025"
  },
  {
    id: 23,
    title: "Foreign Exchange Crypto Brand",
    category: "Digital Design",
    description: "Dynamic crypto trading platform branding with purple gradients and modern typography, promoting BTC and ETH trading services.",
    image: "/works/23.jpg",
    tags: ["Crypto", "Finance", "Digital", "Trading"],
    year: "2025"
  },
  {
    id: 24,
    title: "NESA Logo Design",
    category: "Brand Design",
    description: "Clean academic logo design for Nigerian Economics Students' Association featuring geometric elements and professional typography.",
    image: "/works/24.jpg",
    tags: ["Logo Design", "Academic", "Student Organization", "Nigeria"],
    year: "2025"
  },
  {
    id: 25,
    title: "NESA Brand Identity System",
    category: "Brand Design",
    description: "Complete brand identity system featuring the NESA logo with consistent color scheme and professional layout design.",
    image: "/works/25.jpg",
    tags: ["Brand Identity", "Logo System", "Academic", "Design System"],
    year: "2025"
  },
  {
    id: 26,
    title: "Freshers Orientation Program",
    category: "Event Design",
    description: "University orientation poster design with 'The Launchpad' theme, featuring elegant typography and academic branding for new students.",
    image: "/works/26.jpg",
    tags: ["Event Design", "University", "Orientation", "Student Life"],
    year: "2025"
  },
  {
    id: 27,
    title: "496dsgns Graphics Portfolio",
    category: "Digital Design",
    description: "Modern graphic design service promotion featuring 3D elements and contemporary layout for professional design services.",
    image: "/works/27.jpg",
    tags: ["Portfolio", "Graphics", "Professional Services", "3D Design"],
    year: "2025"
  },
  {
    id: 28,
    title: "EezDra Job Recruitment",
    category: "Marketing Design",
    description: "Clean job recruitment poster for creative positions including content creation, video editing, and HR roles with modern green branding.",
    image: "/works/28.jpg",
    tags: ["Recruitment", "Job Posting", "Corporate", "HR"],
    year: "2025"
  },
  {
    id: 29,
    title: "Planted Value Beauty Spa",
    category: "Brand Design",
    description: "Elegant beauty and spa branding featuring natural elements and soft aesthetics with service showcase photography.",
    image: "/works/29.jpg",
    tags: ["Beauty", "Spa", "Natural", "Wellness"],
    year: "2025"
  },
  {
    id: 30,
    title: "Birthday Celebration Design",
    category: "Event Design",
    description: "Luxurious birthday celebration graphic with golden elements, balloons, and elegant typography for special occasion branding.",
    image: "/works/30.jpg",
    tags: ["Birthday", "Celebration", "Luxury", "Personal Branding"],
    year: "2025"
  },
  {
    id: 31,
    title: "Bobby Brazzo Music Branding",
    category: "Entertainment Design",
    description: "Dynamic music artist branding with bold typography and rhythm-themed design elements for cultural music promotion.",
    image: "/works/31.jpg",
    tags: ["Music", "Artist Branding", "Entertainment", "Culture"],
    year: "2025"
  }
];

const categories = [
  "All",
  "Brand Design",
  "Digital Design",
  "Event Design",
  "Print Design",
  "UI/UX Design",
  "Product Design",
  "Marketing Design",
  "Religious Design",
  "Sports Design"
];


const DesignGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const filteredWorks = selectedCategory === "All"
    ? designWorks
    : designWorks.filter(work => work.category === selectedCategory);

  const handleImageClick = (work: DesignWork) => {
    setSelectedImage({
      src: work.image,
      title: work.title,
      description: work.description
    });
  };

  return (
    <section className="py-20 bg-[#f9f6f1]">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection animation="slide-up">
          <h2 className="text-5xl font-bold text-center mb-8 text-[#141414]">
            Design Portfolio
          </h2>
          <p className="text-xl text-[#141414]/70 text-center mb-16 max-w-3xl mx-auto">
            A comprehensive collection of creative works spanning multiple design disciplines and visual communication solutions
          </p>
        </AnimatedSection>
        <AnimatedSection animation="scale-in" delay={300}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category, index) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 text-sm rounded-full font-semibold transition-all duration-300 hover:scale-105 ${selectedCategory === category ? 'bg-[#b8860b] text-[#f9f6f1] shadow-lg transform scale-105' : 'bg-[#f9f6f1] text-[#141414] hover:bg-[#141414]/5 shadow-md hover:shadow-lg border border-[#141414]/20'}`}>
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 items-stretch lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <AnimatedSection key={work.id} className='h-full flex-1' animation="scale-in" delay={index * 100}>
              <div className="group relative overflow-hidden h-full flex-1 rounded-2xl bg-[#f9f6f1] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer border border-[#141414]/10" onMouseEnter={() => setHoveredWork(work.id)} onMouseLeave={() => setHoveredWork(null)} onClick={() => handleImageClick(work)}>
                <div className="relative h-64 overflow-hidden">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 filter group-hover:brightness-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/80 via-[#141414]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b]/20 to-[#b8860b]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-[#f9f6f1]/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#141414] font-semibold transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      Click to view
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#f9f6f1]/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#141414] transform translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
                    {work.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#b8860b] bg-[#b8860b]/10 px-3 py-1 rounded-full transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      {work.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141414] mb-3 group-hover:text-[#b8860b] transition-colors duration-300 transform translate-y-1 group-hover:translate-y-0">
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-[#141414]/5 text-[#141414]/70 px-2 py-1 rounded-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300" style={{ transitionDelay: `${tagIndex * 50}ms` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-full bg-[#141414]/10 rounded-full h-1 overflow-hidden">
                    <div className={`h-full bg-[#b8860b] transition-all duration-1000 ease-out ${hoveredWork === work.id ? 'w-full' : 'w-0'}`} ></div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-[#b8860b] rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform scale-0 group-hover:scale-100 blur-xl animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-[#b8860b] rounded-full opacity-0 group-hover:opacity-15 transition-all duration-700 transform scale-0 group-hover:scale-100 blur-xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#b8860b] rounded-full opacity-0 group-hover:opacity-5 transition-all duration-1000 transform scale-0 group-hover:scale-100 blur-lg animate-ping"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage} />
      )}
    </section>
  );
};

export default DesignGallery;
