import { useState, useEffect, useCallback } from "react";
import SEO from "@/components/SEO";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/ui/CTASection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, ZoomIn, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface GalleryProject {
  id: string;
  title: string;
  category: string;
  images: string[];
}

const galleryProjects: GalleryProject[] = [
  {
    id: "1",
    title: "Aditya Birla Cement Plant",
    category: "Industrial",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200",
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1200",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200",
    ],
  },
  {
    id: "2",
    title: "NTPC Power Station",
    category: "Power & Energy",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200",
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200",
    ],
  },
  {
    id: "3",
    title: "Metro Rail Bridge",
    category: "Infrastructure",
    images: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200",
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
    ],
  },
  {
    id: "4",
    title: "Petrochemical Complex",
    category: "Oil & Gas",
    images: [
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200",
      "https://images.unsplash.com/photo-1586953135231-bea68ce78065?w=1200",
      "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=1200",
    ],
  },
  {
    id: "5",
    title: "Steel Manufacturing Unit",
    category: "Industrial",
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200",
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200",
    ],
  },
  {
    id: "6",
    title: "Highway Overpass Construction",
    category: "Infrastructure",
    images: [
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=1200",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200",
    ],
  },
];

const categories = ["All", "Industrial", "Power & Energy", "Infrastructure", "Oil & Gas"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<GalleryProject | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const filteredProjects =
    selectedCategory === "All"
      ? galleryProjects
      : galleryProjects.filter((p) => p.category === selectedCategory);

  const openLightbox = (project: GalleryProject, imageIndex: number) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [currentProject]);

  const prevImage = useCallback(() => {
    if (currentProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  }, [currentProject]);

  const handleDownload = async () => {
    if (!currentProject) return;
    const imageUrl = currentProject.images[currentImageIndex];
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${currentProject.title}-${currentImageIndex + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback: open image in new tab
      window.open(imageUrl, "_blank");
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <SEO
        title="Project Gallery | ALTECH Equipments"
        description="Explore our extensive project gallery showcasing crane operations, heavy lifting, and infrastructure projects across India."
        keywords="crane gallery, project photos, heavy lifting images, infrastructure gallery, ALTECH projects"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container-custom px-4">
          <div
            ref={headerRef}
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge className="mb-3 md:mb-4 bg-accent/20 text-accent border-accent/30">
              Our Work
            </Badge>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6 tracking-wide">
              Project Gallery
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Visual showcase of our expertise in crane operations, heavy lifting,
              and infrastructure development across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 md:py-8 border-b border-border bg-muted/30">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground hover:bg-yellow-hover"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 md:py-16 lg:py-24">
        <div className="container-custom px-4">
          <div className="space-y-10 md:space-y-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="space-y-4 md:space-y-6">
                <div className="flex flex-wrap items-center gap-2 md:gap-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs md:text-sm">
                    {project.category}
                  </Badge>
                  <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground">
                    {project.title}
                  </h2>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                        index === 0 ? "col-span-2 row-span-2" : ""
                      }`}
                      onClick={() => openLightbox(project, index)}
                    >
                      <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden">
          <div className="relative w-full h-full flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between">
              <div>
                <h3 className="text-white font-display text-xl">
                  {currentProject?.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {currentImageIndex + 1} / {currentProject?.images.length}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDownload}
                  className="text-white hover:bg-white/20"
                  title="Download image"
                >
                  <Download className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeLightbox}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Image Container */}
            <div 
              className="flex-1 flex items-center justify-center p-4 pt-20 pb-4"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {currentProject && (
                <img
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg select-none"
                  draggable={false}
                />
              )}
            </div>

            {/* Navigation Arrows */}
            {currentProject && currentProject.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}

            {/* Thumbnail Strip */}
            {currentProject && (
              <div className="p-4 bg-black/80 flex justify-center gap-2 overflow-x-auto">
                {currentProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-accent"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <CTASection />
    </>
  );
}