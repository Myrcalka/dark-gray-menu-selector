
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface SiteCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

const SiteCard = ({ title, description, url, imageUrl }: SiteCardProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="glass-card hover-card group h-full p-6">
        <div className="flex flex-col gap-4">
          {imageUrl && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-content-subtle">{description}</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-content-subtle transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </Card>
    </a>
  );
};

export default SiteCard;
