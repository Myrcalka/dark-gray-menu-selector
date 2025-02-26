
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface SiteCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

const SiteCard = ({ title, description, url, imageUrl }: SiteCardProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card className="glass-card group h-full p-8 relative overflow-hidden border-2 border-white/10 hover:border-white/20">
        <div className="flex flex-col gap-6">
          {imageUrl && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-video rounded-lg overflow-hidden"
            >
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-700"
              />
            </motion.div>
          )}
          <div className="flex items-start justify-between gap-4">
            <div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
              >
                {title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-content-subtle text-lg"
              >
                {description}
              </motion.p>
            </div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="w-6 h-6 text-white/70 transition-colors group-hover:text-white" />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          whileHover={{ scale: 1.05 }}
        />
      </Card>
    </a>
  );
};

export default SiteCard;
