export type Service = {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  hero: string;
  image: string;
  bullets: string[];
  category: "Gas Piping" | "Outdoor Living" | "Mechanical";
};

export type Area = {
  city: string;
  slug: string;
  summary: string;
};

export const serviceAreaSentence =
  "Proudly serving homeowners and businesses throughout Treasure Valley and Valley County, including Boise, Meridian, Nampa, Eagle, Star, Middleton, Kuna, Cascade, Donnelly, McCall, and surrounding communities.";

export const seoServiceAreaSentence =
  "C&B provides HVAC, heating, cooling, gas line installation, propane service, and mechanical work throughout Treasure Valley and Valley County, including Boise, Meridian, Nampa, Eagle, Star, Middleton, Kuna, Cascade, Donnelly, McCall, and surrounding Idaho communities.";

export const googleReviewUrl = "https://www.google.com/search?q=c+%26+be+mechincal+nampa";

export const trustedBrands = [
  { name: "Ruud", logo: "/images/brands/ruud.png" },
  { name: "Rheem", logo: "/images/brands/rheem.svg" },
  { name: "ecobee", logo: "/images/brands/ecobee.svg" },
  { name: "Payne" },
  { name: "Navien", logo: "/images/brands/navien.png" },
  { name: "Samsung", logo: "/images/brands/samsung.svg" },
  { name: "Honeywell", logo: "/images/brands/honeywell.svg" },
  { name: "Gastite" },
  { name: "Viega", logo: "/images/brands/viega.svg" },
];

export const whyGary = [
  "Honest recommendations",
  "Quality craftsmanship",
  "Reliable communication",
  "Start-to-finish project support",
  "Experienced gas line and HVAC expertise",
  "Trusted local service",
  "Attention to detail",
  "Customer-first approach",
];

export const projectImages = [
  { src: "/images/projects/gas-meter-black-iron-regulator.jpg", alt: "Black iron gas piping and regulator at a gas meter", category: "Gas Piping" },
  { src: "/images/projects/gas-meter-regulator-valves.webp", alt: "Natural gas meter with regulator, shutoffs, and labeled gas piping", category: "Gas Piping" },
  { src: "/images/projects/underground-gas-line-risers.webp", alt: "Underground gas line risers and utility piping prepared for connection", category: "Underground Lines" },
  { src: "/images/projects/pool-equipment-pad-piping.webp", alt: "Pool equipment pad with gas and mechanical piping", category: "Outdoor Living" },
  { src: "/images/projects/furnace-water-heater-mechanical-room.webp", alt: "Furnace and water heater mechanical room with gas piping", category: "HVAC" },
  { src: "/images/projects/shop-sheet-metal-ductwork.webp", alt: "Custom sheet metal ductwork in a large shop space", category: "Sheet Metal" },
  { src: "/images/projects/two-psi-gas-manifold.jpg", alt: "Two PSI gas manifold with labeled black iron piping", category: "Gas Piping" },
  { src: "/images/projects/underground-pool-gas-line.jpg", alt: "Underground gas line trench serving pool equipment", category: "Underground Lines" },
  { src: "/images/projects/pool-heater-gas-system.jpg", alt: "Pool heater gas piping and equipment pad", category: "Outdoor Living" },
  { src: "/images/projects/outdoor-fire-pit.jpg", alt: "Outdoor gas fire pit burning on a concrete patio", category: "Outdoor Living" },
  { src: "/images/projects/tankless-water-filtration.jpg", alt: "Tankless water and filtration piping installation", category: "Water Heaters" },
  { src: "/images/projects/gas-meter-black-iron-service.webp", alt: "Black iron gas piping service at a residential gas meter", category: "Gas Piping" },
  { src: "/images/projects/pool-heater-gas-line.webp", alt: "Gas line connection serving a pool heater", category: "Outdoor Living" },
  { src: "/images/projects/pool-heater-black-iron-piping.webp", alt: "Black iron gas piping routed beside pool heater equipment", category: "Outdoor Living" },
  { src: "/images/projects/stone-wall-gas-line.webp", alt: "Gas line routed through a stone wall for outdoor equipment", category: "Gas Piping" },
  { src: "/images/projects/outdoor-hvac-equipment.webp", alt: "Outdoor HVAC equipment installed beside a home", category: "HVAC" },
  { src: "/images/projects/outdoor-condensers-service-area.webp", alt: "Outdoor air conditioning condensers in a service area", category: "HVAC" },
  { src: "/images/projects/rooftop-hvac-unit.webp", alt: "Rooftop HVAC unit installed on a commercial roof", category: "HVAC" },
  { src: "/images/projects/furnace-closet-installation.webp", alt: "Vertical furnace installation in an interior closet", category: "HVAC" },
  { src: "/images/projects/interior-furnace-gas-piping.webp", alt: "Interior furnace installation with gas piping and venting", category: "HVAC" },
  { src: "/images/projects/dual-furnace-mechanical-closet.webp", alt: "Dual furnace mechanical closet installation", category: "HVAC" },
  { src: "/images/projects/water-heater-mechanical-piping.webp", alt: "Water heater and mechanical piping installation", category: "Water Heaters" },
  { src: "/images/projects/custom-ductwork-framing.webp", alt: "Custom sheet metal ductwork installed between framing", category: "Sheet Metal" },
  { src: "/images/projects/shop-ductwork-installation.webp", alt: "Sheet metal ductwork installed in a shop ceiling", category: "Sheet Metal" },
  { src: "/images/projects/garage-mechanical-system.webp", alt: "Garage mechanical system with ductwork and equipment", category: "Mechanical" },
  { src: "/images/projects/commercial-equipment-delivery.webp", alt: "Commercial HVAC equipment delivery with crane and service truck", category: "Mechanical" },
  { src: "/images/projects/furnace-gas-piping.jpg", alt: "Furnace with gas piping and venting", category: "HVAC" },
  { src: "/images/projects/dual-furnace-installation.jpg", alt: "Dual furnace mechanical installation", category: "HVAC" },
  { src: "/images/projects/garage-mini-split.jpg", alt: "Garage mini split system in a finished workspace", category: "Mini Splits" },
  { src: "/images/projects/sheet-metal-ductwork.jpg", alt: "Custom sheet metal ductwork in new construction", category: "Sheet Metal" },
  { src: "/images/projects/residential-gas-line-relocation.jpg", alt: "Residential gas line relocation along siding", category: "Gas Piping" },
  { src: "/images/projects/gas-meter-code-correction.jpg", alt: "Gas meter piping correction with regulator and shutoff", category: "Gas Piping" },
];

export const services: Service[] = [
  {
    title: "Natural & Propane Gas Lines",
    slug: "natural-propane-gas-lines",
    eyebrow: "Gas piping specialist",
    summary: "New and upgraded gas lines for propane and natural gas systems across residential, builder, and light commercial projects.",
    hero: "Safe, clean fuel lines for the equipment that keeps your property running.",
    image: "/images/projects/gas-meter-black-iron-regulator.jpg",
    bullets: ["Natural gas line installation", "Propane tank to building piping", "Equipment hookups", "Pressure testing", "Repairs and relocations"],
    category: "Gas Piping",
  },
  {
    title: "Complete Home Gas Systems",
    slug: "complete-home-gas-systems",
    eyebrow: "Complete home gas design",
    summary: "Gas piping layouts for custom homes, remodels, additions, and electric to gas conversions.",
    hero: "Gas piping planned from the source to every appliance.",
    image: "/images/projects/gas-meter-black-iron-service.webp",
    bullets: ["Complete home gas layouts", "Meter and regulator planning", "Gas appliance drops", "Builder coordination", "Final testing"],
    category: "Gas Piping",
  },
  {
    title: "Underground Gas Lines",
    slug: "underground-gas-lines",
    eyebrow: "Buried gas piping",
    summary: "Underground propane and natural gas lines for pools, detached shops, outdoor kitchens, generators, and equipment pads.",
    hero: "Buried lines installed with the right route, protection, and test.",
    image: "/images/projects/underground-gas-line-risers.webp",
    bullets: ["Trench route planning", "Pool equipment lines", "Detached garage and shop lines", "Outdoor kitchen fuel lines", "Generator gas supply"],
    category: "Gas Piping",
  },
  {
    title: "Residential Gas Line Relocation",
    slug: "residential-gas-line-relocation",
    eyebrow: "Move or correct existing gas lines",
    summary: "Gas line relocation and rerouting for remodels, siding projects, additions, equipment changes, and code corrections.",
    hero: "Reroute gas piping cleanly when a project changes the plan.",
    image: "/images/projects/residential-gas-line-relocation.jpg",
    bullets: ["Meter area updates", "Exterior reroutes", "Appliance relocation", "Shutoff corrections", "Pressure testing after work is complete"],
    category: "Gas Piping",
  },
  {
    title: "Fire Pits",
    slug: "fire-pits",
    eyebrow: "Outdoor fire features",
    summary: "Gas piping for custom fire pits, fire bowls, and patio fire features using propane or natural gas.",
    hero: "Outdoor fire features with dependable fuel supply.",
    image: "/images/projects/outdoor-fire-pit.jpg",
    bullets: ["Fire pit gas lines", "Fire table hookups", "Outdoor shutoffs", "Propane or natural gas", "Piping ready for startup"],
    category: "Outdoor Living",
  },
  {
    title: "Outdoor BBQs & Kitchens",
    slug: "outdoor-bbqs-kitchens",
    eyebrow: "Backyard fuel lines",
    summary: "Gas lines for built-in grills, outdoor kitchens, patio appliances, and backyard entertainment areas.",
    hero: "Permanent fuel lines for outdoor cooking and gathering.",
    image: "/images/projects/pool-equipment-pad-piping.webp",
    bullets: ["Built in grill lines", "Outdoor kitchen piping", "Patio appliance hookups", "Buried fuel routes", "Serviceable shutoff locations"],
    category: "Outdoor Living",
  },
  {
    title: "Patio Heaters",
    slug: "patio-heaters",
    eyebrow: "Outdoor comfort",
    summary: "Gas piping for wall mounted, ceiling mounted, and freestanding patio heater systems.",
    hero: "Extend patio season with properly supplied gas heaters.",
    image: "/images/projects/stone-wall-gas-line.webp",
    bullets: ["Patio heater supply lines", "Regulator and shutoff planning", "Outdoor routing", "Natural gas or propane", "Pressure testing"],
    category: "Outdoor Living",
  },
  {
    title: "Pool & Hot Tub Heaters",
    slug: "pool-hot-tub-heaters",
    eyebrow: "Pool equipment gas lines",
    summary: "Gas piping for pool heaters, hot tub heaters, and equipment pads where fuel volume and clean routing matter.",
    hero: "Gas piping sized and routed for pool and spa heat.",
    image: "/images/projects/pool-heater-gas-line.webp",
    bullets: ["Pool heater lines", "Hot tub heater lines", "Equipment-pad piping", "Underground fuel routes", "Pressure testing"],
    category: "Outdoor Living",
  },
  {
    title: "Electric to Gas Conversions",
    slug: "electric-to-gas-conversions",
    eyebrow: "Fuel conversion support",
    summary: "Gas piping for homeowners switching appliances, heat, water heating, outdoor cooking, or equipment from electric to gas.",
    hero: "Bring gas service to the appliances you want to upgrade.",
    image: "/images/projects/water-heater-furnace-system.jpg",
    bullets: ["Range conversions", "Water heater conversions", "Pool heater conversions", "Gas appliance drops", "System capacity review"],
    category: "Gas Piping",
  },
  {
    title: "Tank & Tankless Water Heaters",
    slug: "tank-tankless-water-heaters",
    eyebrow: "Water heating",
    summary: "Tank and tankless water heater installation support with clean fuel, venting, and mechanical piping coordination.",
    hero: "Reliable hot water starts with clean mechanical work.",
    image: "/images/projects/water-heater-mechanical-piping.webp",
    bullets: ["Tank water heaters", "Tankless water heaters", "Gas supply piping", "Water treatment coordination", "Replacement planning"],
    category: "Mechanical",
  },
  {
    title: "HVAC Systems",
    slug: "hvac-systems",
    eyebrow: "Heating and cooling",
    summary: "HVAC system work backed by decades of mechanical experience in custom homes, remodels, and service projects.",
    hero: "Mechanical systems built with detail and future service in mind.",
    image: "/images/projects/dual-furnace-mechanical-closet.webp",
    bullets: ["Furnace systems", "Gas supply coordination", "Mechanical rooms", "Builder projects", "Replacement support"],
    category: "Mechanical",
  },
  {
    title: "Mini Splits",
    slug: "mini-splits",
    eyebrow: "Efficient comfort",
    summary: "Mini split systems for garages, ADUs, shops, additions, and spaces that need efficient zoned heating and cooling.",
    hero: "Targeted comfort for the spaces your main system does not serve well.",
    image: "/images/projects/garage-mini-split.jpg",
    bullets: ["Garage mini splits", "ADU systems", "Shop comfort", "Additions and remodels", "Single zone solutions"],
    category: "Mechanical",
  },
  {
    title: "Sheet Metal Fabrication",
    slug: "sheet-metal-fabrication",
    eyebrow: "Custom ductwork",
    summary: "Sheet metal fabrication and ductwork experience for custom residential and mechanical projects.",
    hero: "Clean ductwork and fabricated details for custom projects.",
    image: "/images/projects/shop-sheet-metal-ductwork.webp",
    bullets: ["Custom ductwork", "Mechanical transitions", "New construction", "Remodel support", "Detail focused fabrication"],
    category: "Mechanical",
  },
  {
    title: "Custom Homes, Remodels & ADUs",
    slug: "custom-homes-remodels-adus",
    eyebrow: "Builder ready mechanical work",
    summary: "Mechanical and gas piping support for custom homes, remodels, accessory dwelling units, and specialty residential projects.",
    hero: "Dependable mechanical craftsmanship for serious residential projects.",
    image: "/images/projects/furnace-water-heater-mechanical-room.webp",
    bullets: ["Custom homes", "ADUs", "Remodels and additions", "Gas piping layouts", "HVAC and water heater coordination"],
    category: "Mechanical",
  },
];

export const serviceAreas: Area[] = [
  { city: "Boise", slug: "boise", summary: "HVAC contractor, gas piping, water heater, heating, cooling, and mechanical service for Boise homes, remodels, and builder projects." },
  { city: "Meridian", slug: "meridian", summary: "Propane and natural gas piping, HVAC, outdoor gas lines, and mechanical work for Meridian properties." },
  { city: "Nampa", slug: "nampa", summary: "Gas line installation, underground fuel lines, HVAC support, cooling service, heating service, and water heater work in Nampa." },
  { city: "Caldwell", slug: "caldwell", summary: "Gas piping, propane service, HVAC, and mechanical services for Caldwell homes, shops, ADUs, and remodels." },
  { city: "Eagle", slug: "eagle", summary: "Premium gas piping, outdoor living gas lines, HVAC, and mechanical work for Eagle homes and custom projects." },
  { city: "Kuna", slug: "kuna", summary: "Natural gas, propane, HVAC, heating, cooling, and water heater support for Kuna residential and builder projects." },
  { city: "Star", slug: "star", summary: "Gas piping installations, relocations, HVAC, propane service, and mechanical work for Star homes and growing neighborhoods." },
  { city: "Middleton", slug: "middleton", summary: "Gas line, propane, HVAC, heating, cooling, and mechanical services for Middleton homes, shops, and outbuildings." },
  { city: "Cascade", slug: "cascade", summary: "Heating services, cooling services, propane service, gas line installation, and HVAC contractor support for Cascade homes, cabins, and Valley County projects." },
  { city: "Donnelly", slug: "donnelly", summary: "HVAC, heating, cooling, gas line installation, propane service, and home comfort projects for Donnelly homeowners and Valley County properties." },
  { city: "McCall", slug: "mccall", summary: "HVAC contractor service, heating services, cooling services, propane systems, and gas line installation for McCall homes, cabins, remodels, and mechanical projects." },
  { city: "Surrounding Treasure Valley", slug: "surrounding-treasure-valley", summary: "Service for surrounding Treasure Valley and Valley County communities based on project type, schedule, and location." },
];

export const whyChoose = [
  "Over 27 years of experience",
  "Established in 2017",
  "Locally owned and operated",
  "Licensed, bonded, and insured",
  "Honest and dependable",
  "Professional service",
  "Attention to detail",
  "Free estimates",
];
