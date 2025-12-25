import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Cpu, Network, Shield, Globe, ChevronDown, ChevronUp, Zap } from "lucide-react"
import { services } from "@/components/services/ServiceData"

function BrainAnimation() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[80px]">
      <motion.div
        animate={{ scale: pulse ? 1.15 : 1, opacity: pulse ? 1 : 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative"
      >
        <Brain className="h-12 w-12 text-orange-400" />
        <motion.div
          className="absolute inset-0 rounded-full bg-orange-400/20"
          animate={{ scale: pulse ? 1.8 : 1, opacity: pulse ? 0 : 0.5 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    </div>
  )
}

function GlobalNetwork() {
  const [pulses] = useState([0, 1, 2, 3, 4])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[80px]">
      <Globe className="h-10 w-10 text-orange-400 z-10" />
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-12 h-12 rounded-full border border-orange-400/30"
          animate={{
            scale: [1, 2],
            opacity: [0.6, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: pulse * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

const iconMap: Record<string, React.ReactNode> = {
  'AGI RESEARCH & DEVELOPMENT': <Brain className="h-8 w-8 text-orange-400" />,
  'AGI INFRASTRUCTURE & SCALING': <Cpu className="h-8 w-8 text-yellow-400" />,
  'AGI APPLICATIONS & INTEGRATION': <Network className="h-8 w-8 text-orange-400" />,
  'AGI ETHICS & SAFETY': <Shield className="h-8 w-8 text-red-400" />,
}

interface ExpandableCardProps {
  title: string
  description: string
  features: { title: string; description: string }[]
  icon: React.ReactNode
  className?: string
  delay?: number
}

function ExpandableCard({ title, description, features, icon, className = "", delay = 0 }: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-orange-950/10 overflow-hidden ${className}`}
    >
      <div 
        className="p-5 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-br from-orange-400/10 to-yellow-400/10">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">{title}</h3>
              <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{description}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 p-1 rounded-full bg-orange-400/10"
          >
            <ChevronDown className="h-4 w-4 text-orange-400" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-2 border-t border-orange-400/10">
              <div className="grid gap-3">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-3 rounded-xl bg-orange-400/5 border border-orange-400/10"
                  >
                    <h4 className="text-sm font-semibold text-orange-400">{feature.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
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
      <div className="mx-auto max-w-6xl px-4">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Hero Card - From India */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-red-950/10 p-6 flex flex-col justify-between min-h-[280px]"
          >
            <div className="flex-1 flex items-center justify-center">
              <GlobalNetwork />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-xl font-bold text-foreground">From Bharat</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Building world-class Aligned General Intelligence from India's innovation ecosystem, for global impact.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-orange-400">
                <Zap className="h-3 w-3" />
                <span>Pioneering the future of AI</span>
              </div>
            </div>
          </motion.div>

          {/* Service Cards - Expandable */}
          {services.map((service, idx) => (
            <ExpandableCard
              key={service.title}
              title={service.title}
              description={service.description}
              features={service.detailedFeatures}
              icon={iconMap[service.title]}
              delay={0.2 + idx * 0.1}
              className={idx === 0 ? "lg:col-span-2" : ""}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default AGIBentoGrid
