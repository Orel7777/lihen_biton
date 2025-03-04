
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  details: string;
  isSold?: boolean;
  isRented?: boolean;
  isExclusive?: boolean;
}

export const PropertyCard = ({
  image,
  title,
  price,
  location,
  details,
  isSold = false,
  isRented = false,
  isExclusive = false
}: PropertyCardProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <div className="group/card w-full h-full [perspective:1000px]">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-up relative [transform-style:preserve-3d] hover:[transform:rotateY(5deg)_rotateX(5deg)]">
          <div className="relative [transform-style:preserve-3d]">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={image} 
                alt={title} 
                className={`object-cover w-full h-full transition-transform duration-300 group-hover/card:scale-105 ${isSold || isRented ? 'opacity-70' : ''} cursor-pointer`}
                onClick={() => setIsImageOpen(true)}
              />
            </AspectRatio>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full [transform:translateZ(20px)]">
              <span className="text-primary font-medium">{price}</span>
            </div>
            {isExclusive && <div className="absolute top-3 right-3 [transform:translateZ(20px)]">
              <Badge variant="secondary" className="bg-primary/90 text-white hover:bg-primary">
                בלעדיות
              </Badge>
            </div>}
            {(isSold || isRented) && <div className="absolute inset-0 flex items-center justify-center pointer-events-none [transform:translateZ(20px)]">
              <div className="bg-[#ea384c]/60 text-white px-6 py-2 rounded-full text-xl font-bold transform -rotate-12">
                {isRented ? 'הושכר' : 'נמכר'}
              </div>
            </div>}
          </div>
          <div className="p-4 bg-white [transform:translateZ(10px)]">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{location}</p>
            <p className="text-sm text-gray-500">{details}</p>
          </div>
        </Card>
      </div>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
