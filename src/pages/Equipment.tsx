import { useState, useMemo } from "react";
import SEO from "@/components/SEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EquipmentCard } from "@/components/ui/EquipmentCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Equipment {
  name: string;
  capacity: string;
  capacityNum: number;
  image: string;
  features: string[];
  category: string;
}

const equipment: Equipment[] = [
  {
    name: "Zoomlion ZCC9800W",
    capacity: "800 TON",
    capacityNum: 800,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    features: [
      "Max hub height: 168m",
      "WTG erection specialist",
      "Advanced hydraulic system",
      "Remote operation capable",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Zoomlion ZCC4000V",
    capacity: "400 TON",
    capacityNum: 400,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
    features: [
      "Heavy duty lifting",
      "Versatile boom configurations",
      "High precision controls",
      "Excellent stability",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Zoomlion ZCC3200V",
    capacity: "320 TON",
    capacityNum: 320,
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop",
    features: [
      "Multi-purpose operations",
      "Quick assembly",
      "Strong lifting capacity",
      "Modern safety systems",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Hitachi Sumitomo SCX 2800",
    capacity: "275 TON",
    capacityNum: 275,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    features: [
      "Japanese precision engineering",
      "High reliability",
      "Smooth operation",
      "Excellent load charts",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Kobelco CK 2750G-2",
    capacity: "275 TON",
    capacityNum: 275,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
    features: [
      "G-series advancement",
      "Fuel efficient",
      "Enhanced safety features",
      "Compact design",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Kobelco CK 2500-2",
    capacity: "250 TON",
    capacityNum: 250,
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop",
    features: [
      "Proven performance",
      "Easy maintenance",
      "Strong boom system",
      "Versatile applications",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Kobelco CK 1600-2",
    capacity: "160 TON",
    capacityNum: 160,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    features: [
      "Medium capacity workhorse",
      "Quick setup time",
      "Reliable operation",
      "Cost effective",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Kobelco CK 1100G-2",
    capacity: "110 TON",
    capacityNum: 110,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop",
    features: [
      "G-series technology",
      "Compact footprint",
      "Efficient fuel consumption",
      "Urban project ready",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Kobelco CK 1000G-2",
    capacity: "100 TON",
    capacityNum: 100,
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop",
    features: [
      "Entry-level heavy crane",
      "Easy transportation",
      "Quick mobilization",
      "Versatile use cases",
    ],
    category: "Crawler Crane",
  },
  {
    name: "Axle Puller System",
    capacity: "SUPPORT",
    capacityNum: 0,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&auto=format&fit=crop",
    features: [
      "Girder transportation",
      "Heavy load movement",
      "Precision positioning",
      "Multi-axle configuration",
    ],
    category: "Support Equipment",
  },
];

const categories = ["All", "Crawler Crane", "Support Equipment"];
const capacityFilters = [
  { label: "All Capacities", min: 0, max: Infinity },
  { label: "100-200 Ton", min: 100, max: 200 },
  { label: "200-400 Ton", min: 200, max: 400 },
  { label: "400+ Ton", min: 400, max: Infinity },
];

export default function Equipment() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCapacity, setSelectedCapacity] = useState(capacityFilters[0]);

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;
      const capacityMatch =
        item.capacityNum >= selectedCapacity.min &&
        item.capacityNum < selectedCapacity.max;
      return categoryMatch && (selectedCapacity.label === "All Capacities" || capacityMatch);
    });
  }, [selectedCategory, selectedCapacity]);

  return (
    <div className="pt-20">
      <SEO
        title="Our Equipment Fleet"
        description="Explore our fleet of 10+ advanced crawler cranes from Zoomlion, Kobelco, and Hitachi with capacities from 100T to 800T for precision lifting."
        canonical="/equipment"
        keywords="crawler crane rental, Zoomlion crane, Kobelco crane, 800 ton crane, heavy equipment"
      />
      {/* Hero Banner */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop"
            alt="Heavy equipment fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.8)]" />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider animate-fade-up">
            OUR EQUIPMENT
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto animate-fade-up delay-100">
            State-of-the-art crawler cranes and support equipment for precision lifting
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-12 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                10+
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Advanced Cranes
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                800T
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Max Capacity
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                168m
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Max Hub Height
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="font-display text-3xl md:text-4xl text-primary dark:text-accent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid with Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Fleet"
            title="COMPLETE EQUIPMENT LIST"
            subtitle="Explore our comprehensive range of cranes and support equipment."
          />

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-start md:items-center justify-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    selectedCategory === category &&
                      "bg-accent text-accent-foreground hover:bg-yellow-hover"
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {capacityFilters.map((filter) => (
                <Button
                  key={filter.label}
                  variant={
                    selectedCapacity.label === filter.label ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCapacity(filter)}
                  className={cn(
                    selectedCapacity.label === filter.label &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEquipment.map((item, index) => (
              <EquipmentCard
                key={item.name}
                {...item}
                delay={(index % 4) * 100}
              />
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No equipment found matching your filters.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Equipment for Your Project?"
        subtitle="Contact us for crane rental inquiries and custom solutions."
      />
    </div>
  );
}
