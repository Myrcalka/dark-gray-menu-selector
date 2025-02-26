
import { motion } from "framer-motion";
import SiteCard from "@/components/SiteCard";

const sites = [
  {
    title: "Новости",
    description: "Актуальные новости и события",
    url: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Спорт",
    description: "Спортивные события и результаты",
    url: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Технологии",
    description: "Новости технологий и инноваций",
    url: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Культура",
    description: "Искусство, музыка и развлечения",
    url: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Бизнес",
    description: "Деловые новости и аналитика",
    url: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Наука",
    description: "Научные открытия и исследования",
    url: "#",
    imageUrl: "/placeholder.svg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Выберите раздел</h1>
          <p className="text-content-subtle text-lg">Откройте для себя интересующий вас контент</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sites.map((site, index) => (
            <motion.div
              key={site.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <SiteCard {...site} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
