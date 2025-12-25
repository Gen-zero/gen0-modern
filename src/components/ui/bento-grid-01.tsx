import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Cpu, Network, Shield, Globe, ChevronDown } from "lucide-react"
import { services } from "@/components/services/ServiceData"

const iconMap: Record<string, React.ReactNode> = {
  'AGI RESEARCH & DEVELOPMENT': <Brain className="h-6 w-6 text-orange-400" />,
  'AGI INFRASTRUCTURE & SCALING': <Cpu className="h-6 w-6 text-orange-400" />,
  'AGI APPLICATIONS & INTEGRATION': <Network className="h-6 w-6 text-orange-400" />,
  'AGI ETHICS & SAFETY': <Shield className="h-6 w-6 text-orange-400" />,
}

interface ExpandableCardProps {
  title: string
  description: string
  features: { title: string; description: string }[]
  icon: React.ReactNode
  className?: string
}

function ExpandableCard({ title, description, features, icon, className = "" }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }}
      className={`rounded-2xl border border-orange-400/20 bg-background/50 backdrop-blur-sm overflow-hidden ${className}`}
    >
      <motion.div 
        layout="position"
        className="p-5 cursor-pointer flex items-center justify-between gap-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wide">{title}</h3>
            {!isExpanded && (
              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{description}</p>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-5 pb-5"
          >
            <p className="text-xs text-muted-foreground mb-4">{description}</p>
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-orange-400/5 border border-orange-400/10"
                >
                  <h4 className="text-xs font-medium text-orange-400">{feature.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function AGIBentoGrid() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          
          {/* Hero Card */}
          <motion.div
            layout
            className="rounded-2xl border border-orange-400/20 bg-background/50 backdrop-blur-sm p-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-orange-400" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇮🇳</span>
                  <span className="text-lg font-semibold text-foreground">From Bharat</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Building AGI from India's innovation ecosystem
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Cards */}
          {services.map((service) => (
            <ExpandableCard
              key={service.title}
              title={service.title}
              description={service.description}
              features={service.detailedFeatures}
              icon={iconMap[service.title]}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default AGIBentoGrid
