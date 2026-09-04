import { PestService, PricingPlan, GalleryItem, HouseZone } from '../types';

export const CLOUDINARY_IMAGES = {
  logo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788551695/LOGO1236748.jpg',
  banner: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788551731/gpt567.png',
  pricing: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788551784/dfsmnfkjshfiushdf.jpg',
  field: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788551893/brwegrew_uiewyrwrb.jpg',
  horizontalLogo: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788551894/bhbhbhbjuu.jpg',
  promo120: 'https://res.cloudinary.com/fzobzdco/image/upload/v1788551897/asdsadqewrwfdsafdsf.jpg',
};

export const BUSINESS_INFO = {
  name: 'Venez Pest Control',
  tagline: 'Protecting Homes • Protecting Families',
  founder: 'John Rincon',
  phone: '+1 (713) 298-4210',
  phoneRaw: '7132984210',
  whatsappUrl: 'https://wa.me/17132984210?text=Hello%20Venez%20Pest%20Control%2C%20I%20would%20like%20to%20request%20an%20inspection%20in%20Houston.',
  facebookUrl: 'https://www.facebook.com/Venez01',
  instagramUrl: 'https://www.instagram.com/venez_control_plagas/',
  website: 'www.venezpestcontrol.com',
  city: 'Houston',
  state: 'Texas',
  serviceArea: 'Greater Houston Metropolitan Area & Harris County',
  hours: 'Mon - Sat: 7:00 AM - 8:00 PM | Emergency Dispatch: 24/7',
  licenseBadge: 'Texas Licensed & Insured Pest Control Technicians',
  status: 'AVAILABLE NOW FOR DISPATCH',
};

export const CORE_PILLARS = [
  {
    title: 'Licensed & Insured',
    desc: 'Fully certified and insured operators for residential and commercial spaces in Texas.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Experienced Professionals',
    desc: 'Led by technician John Rincon with specialized field eradication methods.',
    icon: 'Award',
  },
  {
    title: 'Fast & Reliable Service',
    desc: 'Rapid Houston dispatch with same-day emergency inspection availability.',
    icon: 'Clock',
  },
  {
    title: 'Eco Friendly Solutions',
    desc: 'Targeted botanical and synthetic formulas safe for children, pets, and landscaping.',
    icon: 'Leaf',
  },
];

export const PEST_SERVICES: PestService[] = [
  {
    id: 'regular',
    name: 'Regular Pest Control',
    spanishName: 'Control Regular de Plagas',
    tagline: 'Complete Indoor & Exterior Perimeter Barrier Defense',
    description: 'Comprehensive barrier protection around foundation perimeters, windows, doors, and indoor baseboards. Eliminates roaches, ants, spiders, and silverfish.',
    startingPrice: '$120',
    frequency: 'Bimonthly or Quarterly',
    popular: true,
    iconName: 'Shield',
    targetPests: ['German Cockroaches', 'American Roaches', 'Sugar Ants', 'Spiders', 'Centipedes', 'Silverfish'],
    treatmentSteps: [
      'Visual exterior perimeter and foundation inspection',
      'High-pressure liquid barrier along foundation and weep holes',
      'Targeted indoor baseboard treatment and plumbing access sealing',
      'De-webbing of exterior eaves, entryways, and window trim'
    ],
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs Extermination',
    spanishName: 'Exterminación de Chinches',
    tagline: 'Deep Structural Eradication & Residual Protection',
    description: 'Specialized multi-stage extermination targeting bed bugs at all life stages including eggs, nymphs, and adults within mattresses, furniture, and wall voids.',
    startingPrice: 'Custom Assessment',
    frequency: 'Multi-Stage Eradication',
    iconName: 'Sparkles',
    targetPests: ['Bed Bugs (Cimex lectularius)', 'Bed Bug Nymphs & Eggs'],
    treatmentSteps: [
      'Microscopic inspection of seams, baseboards, and frame joints',
      'Direct contact thermal & insect growth regulator (IGR) application',
      'Aerosol flush of deep electrical outlets and baseboard gaps',
      'Follow-up verification guarantee'
    ],
  },
  {
    id: 'termites',
    name: 'Termites Extermination',
    spanishName: 'Exterminación de Termitas',
    tagline: 'Subterranean & Drywood Foundation Protection',
    description: 'Heavy-duty structural termite barriers and trench treatments to stop subterranean termites from destroying wooden framing, slabs, and drywall.',
    startingPrice: '$1000+',
    frequency: 'Long-term Barrier Warranty',
    popular: true,
    iconName: 'Building2',
    targetPests: ['Subterranean Termites', 'Drywood Termites', 'Formosan Termites'],
    treatmentSteps: [
      'Comprehensive slab, pier, beam, and crawlspace probe',
      'Trenching and foundation chemical termiticide barrier injection',
      'Foam treatment for interior infested wall cavities',
      'Continuous monitoring stations along exterior perimeter'
    ],
  },
  {
    id: 'yard-pest',
    name: 'Yard Pest Control',
    spanishName: 'Control de Plagas en Jardines',
    tagline: 'Lawn, Patio & Landscape Turf Protection',
    description: 'Lawn and shrubbery defense against lawn-destroying grubs, fire ants, ticks, and chiggers so children and pets can safely enjoy outdoor spaces.',
    startingPrice: '$120',
    frequency: 'Seasonal',
    iconName: 'TreePine',
    targetPests: ['Red Imported Fire Ants', 'Ticks', 'Fleas', 'Armyworms', 'Grubs', 'Chiggers'],
    treatmentSteps: [
      'Full yard broadcast treatment with granular soil barriers',
      'Direct drenching of active fire ant mounds and nesting zones',
      'Fence-line and mulch bed perimeter misting',
      'Pet and family re-entry guidance once dry'
    ],
  },
  {
    id: 'mosquitoes',
    name: 'Mosquitoes Control',
    spanishName: 'Control de Mosquitos',
    tagline: 'Barrier Mist & Standing Water Abatement',
    description: 'Ultra-low volume (ULV) fogging and residual foliage misting to dramatically knock down mosquito populations around Houston patios, decks, and trees.',
    startingPrice: 'Seasonal Packages',
    frequency: 'Monthly (March - November)',
    iconName: 'Wind',
    targetPests: ['Aedes Mosquitoes', 'Culex Mosquitoes', 'Biting Midges', 'Gnats'],
    treatmentSteps: [
      'Inspection and treatment of standing water reservoirs with larvicide',
      'Foliage misting underside of shrubs, ivy, and shaded rest zones',
      'Eaves and breezeway barrier treatment',
      'Special event single-spray service available'
    ],
  },
  {
    id: 'rodents',
    name: 'Rodents Control & Prevention',
    spanishName: 'Control y Prevención de Roedores',
    tagline: 'Exclusion, Trapping & Entry Sealing',
    description: 'Complete rodent eviction and prevention for Houston homes and commercial buildings. Includes trapping, sanitization, and sealing of rooflines and weep holes.',
    startingPrice: '$400',
    frequency: 'Full Exclusion Plan',
    popular: true,
    iconName: 'Rat',
    targetPests: ['Norway Rats', 'Roof Rats', 'House Mice', 'Field Mice'],
    treatmentSteps: [
      'Attic, crawlspace, and exterior perimeter entry point audit',
      'Installation of tamper-proof exterior bait stations & interior traps',
      'Complete structural exclusion (copper mesh, hardware cloth, foam sealant)',
      'Attic sanitization and scent trail disruption'
    ],
  },
  {
    id: 'animal-control',
    name: 'Animal Control (Wildlife)',
    spanishName: 'Control de Animales Silvestres',
    tagline: 'Humane Removal: Snakes, Opossums & Raccoons',
    description: 'Safe, humane extraction and relocation of nuisance wildlife invading Houston crawlspaces, attics, sheds, and yards.',
    startingPrice: 'Free Assessment',
    frequency: 'As-Needed Dispatch',
    iconName: 'Compass',
    targetPests: ['Snakes (Copperheads, Water Moccasins, Garter)', 'Opossums', 'Raccoons', 'Armadillos'],
    treatmentSteps: [
      'Immediate safe capture using humane cage traps and snake tongs',
      'Off-site relocation according to Texas wildlife regulations',
      'Decontamination of nesting areas and entry exclusion',
      'Preventative repellent application around property perimeter'
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial & Restaurant Pest Control',
    spanishName: 'Control Comercial para Negocios',
    tagline: 'Health Code Compliance & Zero-Tolerance Defense',
    description: 'Customized pest management programs for Houston restaurants, food storage facilities, warehouses, and medical clinics to maintain flawless health inspections.',
    startingPrice: 'Monthly Contract',
    frequency: 'Weekly or Bi-Weekly',
    iconName: 'Building',
    targetPests: ['Drain Flies', 'Cockroaches', 'Rodents', 'Stored Product Pests', 'Flies'],
    treatmentSteps: [
      'Detailed floor drain enzymatic bio-treatment',
      'Kitchen line, grease trap, and prep table perimeter baiting',
      'Logbook compliance documentation for Houston health inspectors',
      'Discreet off-hours scheduled treatments'
    ],
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'bimonthly',
    title: 'Bimonthly Pest Control',
    price: '$120',
    cadence: 'Every 2 Months',
    billingText: 'Billed per service treatment',
    description: 'Our most popular preventative maintenance schedule for Houston residential properties. Keeps chemical barriers active year-round.',
    popularBadge: 'MOST POPULAR',
    highlight: true,
    features: [
      'Full exterior foundation barrier treatment',
      'Indoor baseboard & plumbing void treatment',
      'Weep hole and entry point dust protection',
      'Window, door, and patio overhang de-webbing',
      'Guaranteed re-spray warranty between visits',
      'Protection against roaches, ants, spiders, and silverfish'
    ],
  },
  {
    id: 'quarterly',
    title: 'Quarterly Pest Control',
    price: '$190',
    cadence: 'Every 3 Months',
    billingText: '4 treatments per year',
    description: 'Seasonal pest barrier aligned with Texas weather shifts (Spring awakening, Summer heat, Fall nesting, Winter shelter).',
    features: [
      'Full perimeter 10-ft exterior barrier spray',
      'Complete interior treatment (kitchen, bathrooms, garage)',
      'Attic access threshold treatment',
      'Exterior spider web and wasp nest removal',
      'Seasonal pest rotation formulas',
      'Free re-treatment guarantee between scheduled visits'
    ],
  },
  {
    id: 'annual',
    title: 'Annual Pest Control',
    price: '$400',
    cadence: 'Annual Package',
    billingText: 'Single annual fee with maintenance',
    description: 'Comprehensive annual preventative package covering comprehensive interior and exterior defense for peace of mind.',
    features: [
      'Intensive deep-clean initial barrier application',
      'Full exterior and garage protection perimeter',
      'Interior baseboard crack & crevice sealing',
      'Targeted rodent & pest risk audit',
      'Attic inspection and preventative baiting',
      'Priority scheduling for warranty checkups'
    ],
  },
  {
    id: 'rodent',
    title: 'Rodent Prevention & Exclusion',
    price: '$400',
    cadence: 'Complete Package',
    billingText: 'Inspection, exclusion & trapping',
    description: 'Dedicated rodent eviction system for attic and structural spaces. Stops rats and mice from chewing wiring and insulation.',
    features: [
      'Full exterior building envelope audit for entry gaps',
      'Exclusion sealing of weep holes, AC chases, and roof returns',
      'Heavy-duty interior snap traps & tamper-proof exterior bait boxes',
      'Attic inspection and droppings cleanup guidance',
      'Follow-up trap monitoring and carcass removal',
      'Guaranteed rodent-free structural seal'
    ],
  },
  {
    id: 'termites',
    title: 'Termites Extermination',
    price: '$1000+',
    cadence: 'Structural Treatment',
    billingText: 'Customized based on linear footage',
    description: 'Heavy structural barrier eradicating active subterranean and drywood termite colonies with multi-year structural warranty.',
    features: [
      'Complete structural foundation drilling and trenching',
      'Premium liquid termiticide continuous ground barrier',
      'Wall void foam injection behind baths and kitchens',
      'Exterior monitoring stations installed',
      'Official Texas WDI real estate inspection certification available',
      'Long-term colony elimination warranty'
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'banner',
    title: 'Venez Certified Protection Master Showcase',
    category: 'Branding',
    fileName: 'gpt567.png',
    imageUrl: CLOUDINARY_IMAGES.banner,
    svgFallback: 'gpt567.svg',
    aspectRatio: '16:9',
    caption: 'Official Certified Protection Banner: Safe, Effective & Eco-Friendly',
    description: 'Master banner showcasing our core brand values: "Protecting What Matters". Highlights our eco-friendly solutions, licensed & insured credentials, certified technician with backpack sprayer, and 4 major pest defense categories.',
    highlights: [
      'Houston, Texas Local Hub (713-298-4210)',
      'General Pest, Rodent, Termite, Residential & Commercial Badges',
      'Licensed & Insured • Experienced Professionals • Fast & Reliable'
    ],
  },
  {
    id: 'tech-field',
    title: 'Field Operations & Service Card',
    category: 'Field Work',
    fileName: 'brwegrew uiewyrwrb.jpg',
    imageUrl: CLOUDINARY_IMAGES.field,
    svgFallback: 'brwegrew uiewyrwrb.svg',
    aspectRatio: '1:1',
    caption: 'John Rincon Field Services: Exterior Perimeter & Indoor Baseboards',
    description: 'Official promotional card showing technician John Rincon delivering perimeter lawn treatments and delicate indoor baseboard spray barriers, with our complete bilingual service lineup and direct dispatch numbers.',
    highlights: [
      'Full 8-service pest control & wildlife removal menu',
      'John Rincon Direct Line: +1 (713) 298-4210',
      'Exterior foundation spray and interior baseboard barriers'
    ],
  },
  {
    id: 'pricing-sheet',
    title: 'Official Verified Pricing Sheet',
    category: 'Pricing',
    fileName: 'dfsmnfkjshfiushdf.jpg',
    imageUrl: CLOUDINARY_IMAGES.pricing,
    svgFallback: 'dfsmnfkjshfiushdf.svg',
    aspectRatio: '3:4',
    caption: 'Verified Transparent Service Pricing Sheet ($120 - $1000+)',
    description: 'Our authentic official price list featuring clear green checkmarks for Bimonthly ($120), Quarterly ($190), Annual ($400), Rodent Prevention ($400), and Termites ($1000+).',
    highlights: [
      'Bimonthly Pest Control: $120',
      'Quarterly Pest Control: $190',
      'Annual Pest Control: $400',
      'Rodent Prevention: $400 • Termites: $1000+'
    ],
  },
  {
    id: 'promo-120',
    title: '$120 Indoor/Outdoor Special Feature',
    category: 'Promotions',
    fileName: 'asdsadqewrwfdsafdsf.jpg',
    imageUrl: CLOUDINARY_IMAGES.promo120,
    svgFallback: 'asdsadqewrwfdsafdsf.svg',
    aspectRatio: '3:4',
    caption: '$120 Indoor / Outdoor Pest Control Service Special',
    description: 'High-impact special promotion card highlighting our flagship $120 indoor/outdoor treatment covering both perimeter exterior and interior rooms, directing to www.venezpestcontrol.com.',
    highlights: [
      'Complete Indoor & Outdoor combined service',
      'Flagship $120 pricing tier',
      'Official Web Reference: www.venezpestcontrol.com'
    ],
  },
  {
    id: 'logo-square',
    title: 'Official 3D Brand Logo Seal',
    category: 'Branding',
    fileName: 'LOGO1236748.jpg',
    imageUrl: CLOUDINARY_IMAGES.logo,
    svgFallback: 'LOGO1236748.svg',
    aspectRatio: '1:1',
    caption: 'Venez Pest Control Official 3D Emblem',
    description: 'The single source of truth for the Venez brand identity. Features the neon green stylized arachnid claw insignia, sharp angular lettering, and spider-web detail.',
    highlights: [
      'Official Brand Trademark & Seal',
      'Neon Green & Deep Obsidian Theme Base',
      'Displayed on vehicle fleets, uniforms, and certifications'
    ],
  },
  {
    id: 'logo-wide',
    title: 'Horizontal Brand Identity Mark',
    category: 'Branding',
    fileName: 'bhbhbhbjuu.jpg',
    imageUrl: CLOUDINARY_IMAGES.horizontalLogo,
    svgFallback: 'bhbhbhbjuu.svg',
    aspectRatio: '16:9',
    caption: 'Official Horizontal Header & Fleet Emblem',
    description: 'Horizontal arrangement of the official logo used across our service trucks, uniform headers, and commercial documentation.',
    highlights: [
      'Proportional Header & Navbar Asset',
      'Precision Arachnid Vector Geometry',
      'High-contrast readability against dark backgrounds'
    ],
  },
];

export const HOUSE_ZONES: HouseZone[] = [
  {
    id: 'perimeter',
    name: 'Exterior Foundation & Weep Holes',
    pests: ['American Roaches', 'Fire Ants', 'Subterranean Termites', 'Centipedes'],
    treatment: '10-foot liquid perimeter chemical barrier + weep hole insecticidal dust buffer.',
    equipment: 'Commercial Backpack Pressure Sprayer & B&G Duster',
    frequency: 'Bimonthly ($120) or Quarterly ($190)',
    status: 'Protected',
    riskLevel: 'High',
  },
  {
    id: 'indoor',
    name: 'Indoor Living Areas & Baseboards',
    pests: ['German Roaches', 'Bed Bugs', 'Spiders', 'Silverfish'],
    treatment: 'Micro-encapsulated liquid crack & crevice treatment along baseboards, door saddles, and plumbing access.',
    equipment: 'Stainless Steel Canister Sprayer with Fine Pin-Stream Nozzle',
    frequency: 'Included in all standard maintenance visits',
    status: 'Treated',
    riskLevel: 'Medium',
  },
  {
    id: 'kitchen',
    name: 'Kitchen, Pantry & Plumbing Voids',
    pests: ['German Roaches', 'Drain Flies', 'Sugar Ants', 'Mice'],
    treatment: 'Targeted gel baiting inside cabinet hinges, void dusting, and drain enzyme cleaners.',
    equipment: 'Precision Gel Bait Guns & Low-Pressure Void Injectors',
    frequency: 'Inspected and replenished on every cycle',
    status: 'Protected',
    riskLevel: 'High',
  },
  {
    id: 'attic',
    name: 'Attic & Roofline Entry Returns',
    pests: ['Roof Rats', 'Mice', 'Wasps', 'Snakes', 'Opossums'],
    treatment: 'Full rodent exclusion, structural wire mesh sealing, tamper-proof interior snap traps, and residual dust.',
    equipment: 'Hardware Cloth, Galvanized Mesh, Heavy-duty Snaps',
    frequency: 'Part of $400 Rodent Prevention Package',
    status: 'At Risk',
    riskLevel: 'High',
  },
  {
    id: 'yard',
    name: 'Lawn, Patio & Landscape Shrubbery',
    pests: ['Mosquitoes', 'Fleas', 'Ticks', 'Fire Ants', 'Armyworms'],
    treatment: 'Lawn broadcast granule spreader for surface pests and mist blower for mosquito shaded foliage.',
    equipment: 'Rotary Granular Spreader & Stihl Gas Mist Blower',
    frequency: 'Seasonal or monthly during Houston warm season',
    status: 'Protected',
    riskLevel: 'Medium',
  },
];

export const REVIEWS = [
  {
    name: 'Carlos Mendoza',
    neighborhood: 'Spring Branch, Houston, TX',
    service: 'Bimonthly Pest Control ($120)',
    rating: 5,
    date: 'Verified Customer',
    comment: 'John Rincon came out within 2 hours of my call to WhatsApp. We had German roaches after moving into our new house and within 48 hours of his baseboard and kitchen treatment they were completely gone. The $120 bimonthly plan is worth every penny in Houston heat!',
  },
  {
    name: 'Amanda Sterling',
    neighborhood: 'The Heights, Houston, TX',
    service: 'Rodent Prevention ($400)',
    rating: 5,
    date: 'Verified Customer',
    comment: 'We heard scratching in our attic and John identified the exact spot where roof rats were entering behind the AC line. He sealed everything up with steel mesh, placed traps, and came back to verify. Super professional, polite, and great price compared to big national chains.',
  },
  {
    name: 'David & Sofia Reynolds',
    neighborhood: 'Katy / West Houston, TX',
    service: 'Termite Foundation Treatment ($1000+)',
    rating: 5,
    date: 'Verified Customer',
    comment: 'Venez Pest Control provided a full termite inspection and trenching around our slab foundation. John explained the whole chemical barrier process thoroughly. Honest, transparent pricing, and we love supporting local Houston family businesses!',
  },
  {
    name: 'Elena Garza',
    neighborhood: 'Memorial, Houston, TX',
    service: 'Indoor/Outdoor $120 Special',
    rating: 5,
    date: 'Verified Customer',
    comment: 'Excellent work! Safe around our two dogs and very clean. John sprayed the entire backyard lawn for fleas and treated the inside baseboards. 100% recommended to all Houston homeowners.',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'What is included in the $120 Bimonthly Pest Control service?',
    a: 'The $120 plan covers both full interior and exterior perimeter treatments. John treats the entire exterior foundation (up to 10 feet out), window sills, door frames, weep holes, and patio eaves, plus interior baseboards, kitchen cabinet kick-plates, and bathroom plumbing voids.',
  },
  {
    q: 'Are your pest control treatments safe for children and pets?',
    a: 'Yes. We use EPA-approved, eco-friendly formulations that dry quickly. Once dry (typically 30–45 minutes), the treated surfaces are completely safe for dogs, cats, and toddlers.',
  },
  {
    q: 'How fast can you respond to emergencies in Houston?',
    a: 'We offer rapid Houston dispatch. You can call or message via WhatsApp at 713-298-4210, and we frequently accommodate same-day or next-morning service appointments across Harris County.',
  },
  {
    q: 'What is your warranty if pests return between scheduled treatments?',
    a: 'All our bimonthly and quarterly maintenance subscribers receive our Re-Spray Guarantee. If you notice target pests between scheduled cycles, we return and re-treat at zero additional charge.',
  },
  {
    q: 'Do you handle wildlife such as snakes, raccoons, and opossums?',
    a: 'Yes. As shown on our official service list, we provide humane wildlife capture and removal for snakes, raccoons, and opossums in Houston crawlspaces, attics, and yards.',
  },
];
