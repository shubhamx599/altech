import SEO from "@/components/SEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Equipment {
  name: string;
  capacity: string;
  capacityNum: number;
  features: string[];
  category: string;
}

const equipment: Equipment[] = [
  {
    name: "Zoomlion ZCC9800W",
    capacity: "800 TON",
    capacityNum: 800,
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
    features: [
      "Girder transportation",
      "Heavy load movement",
      "Precision positioning",
      "Multi-axle configuration",
    ],
    category: "Support Equipment",
  },
];

export default function Equipment() {

  return (
    <div className="pt-20">
      <SEO
        title="Our Equipment Fleet"
        description="Explore our fleet of 10+ advanced crawler cranes from Zoomlion, Kobelco, and Hitachi with capacities from 100T to 800T for precision lifting."
        canonical="/equipment"
        keywords="crawler crane rental, Zoomlion crane, Kobelco crane, 800 ton crane, heavy equipment"
      />
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&auto=format&fit=crop"
            alt="Heavy equipment fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark)/0.95)] to-[hsl(var(--navy)/0.8)]" />
        </div>
        <div className="relative z-10 container-custom text-center text-white px-4">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider animate-fade-up">
            OUR EQUIPMENT
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto animate-fade-up delay-100">
            State-of-the-art crawler cranes and support equipment for precision lifting
          </p>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-8 md:py-12 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 md:gap-4 text-center">
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-accent">
                10+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                Advanced Cranes
              </div>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-accent">
                800T
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                Max Capacity
              </div>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-accent">
                168m
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                Max Hub Height
              </div>
            </div>
            <div className="bg-card p-4 md:p-6 rounded-xl border border-border">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl text-accent">
                24/7
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Table with Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Our Fleet"
            title="COMPLETE EQUIPMENT LIST"
            subtitle="Explore our comprehensive range of cranes and support equipment."
          />

          {/* Equipment Table */}
          <div className="rounded-xl border border-border bg-card overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50 hover:bg-muted/50">
                  <TableHead className="font-display text-sm md:text-base tracking-wide whitespace-nowrap">S.No.</TableHead>
                  <TableHead className="font-display text-sm md:text-base tracking-wide">Equipment Name</TableHead>
                  <TableHead className="font-display text-sm md:text-base tracking-wide whitespace-nowrap">Capacity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipment.map((item, index) => (
                  <TableRow 
                    key={item.name}
                    className={cn(
                      "transition-colors",
                      index % 2 === 0 ? "bg-background" : "bg-muted/30"
                    )}
                  >
                    <TableCell className="font-display text-base md:text-lg text-muted-foreground">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium text-sm md:font-semibold md:text-base text-foreground">
                      {item.name}
                    </TableCell>
                    <TableCell>
                      <span className="font-display text-base md:text-lg text-accent whitespace-nowrap">
                        {item.capacity}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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
