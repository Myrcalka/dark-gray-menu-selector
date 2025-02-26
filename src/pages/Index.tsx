
import { motion } from "framer-motion";
import SiteCard from "@/components/SiteCard";

const sites = [
  {
    title: "ТГ Канал",
    description: "Присоединяйтесь к нашему Telegram каналу",
    url: "#",
    imageUrl: "/placeholder.svg"
  },
  {
    title: "Подбер",
    description: "Специальный подбер контента",
    url: "#",
    imageUrl: "/placeholder.svg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 bg-gradient-to-b from-surface-dark to-surface-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring",
            bounce: 0.4 
          }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Выберите раздел
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-content-subtle text-xl"
          >
            Откройте для себя интересующий вас контент
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sites.map((site) => (
            <motion.div
              key={site.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
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
