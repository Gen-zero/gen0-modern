import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Cpu, Network, Shield, X, Zap } from "lucide-react"
import { services } from "@/components/services/ServiceData"

// AGI Research - Neural network visualization
function ResearchAnimation() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[100px]">
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
      {/* Neural connections */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-orange-400/60"
          animate={{
            x: [0, Math.cos(i * 2.1) * 30, 0],
            y: [0, Math.sin(i * 2.1) * 30, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  )
}

// AGI Infrastructure - Scaling/grid visualization
function InfrastructureAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center h-full min-h-[100px] gap-3">
      <Cpu className="h-8 w-8 text-yellow-400" />
      <motion.div
        layout
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${layout + 2}, 1fr)` }}
      >
        {Array.from({ length: (layout + 2) * 2 }).map((_, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-3 h-3 rounded bg-yellow-400/60"
          />
        ))}
      </motion.div>
    </div>
  )
}

// AGI Applications - Integration/connection visualization
function ApplicationsAnimation() {
  const [connections, setConnections] = useState([false, false, false, false])

  useEffect(() => {
    const interval = setInterval(() => {
      setConnections(prev => {
        const nextIndex = prev.findIndex(c => !c)
        if (nextIndex === -1) return [false, false, false, false]
        return prev.map((c, i) => i === nextIndex ? true : c)
      })
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[100px]">
      <Network className="h-10 w-10 text-orange-400 z-10" />
      {connections.map((active, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: i < 2 ? '10%' : '70%',
            left: i % 2 === 0 ? '15%' : '70%'
          }}
          animate={{ 
            scale: active ? 1 : 0.5, 
            opacity: active ? 1 : 0.3 
          }}
        >
          <Zap className={`h-4 w-4 ${active ? 'text-orange-400' : 'text-muted-foreground'}`} />
        </motion.div>
      ))}
    </div>
  )
}

// AGI Ethics & Safety - Shield protection visualization
function SafetyAnimation() {
  const [shields, setShields] = useState([
    { id: 1, active: false },
    { id: 2, active: false },
    { id: 3, active: false }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setShields(prev => {
        const nextIndex = prev.findIndex(s => !s.active)
        if (nextIndex === -1) {
          return prev.map(() => ({ id: Math.random(), active: false }))
        }
        return prev.map((s, i) => i === nextIndex ? { ...s, active: true } : s)
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-3 h-full min-h-[100px]">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          animate={{ scale: shield.active ? 1.2 : 1, opacity: shield.active ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <Shield className={`h-8 w-8 ${shield.active ? 'text-red-400' : 'text-muted-foreground'}`} />
        </motion.div>
      ))}
    </div>
  )
}

const serviceCardConfig = [
  { 
    serviceIndex: 0,
    animation: <ResearchAnimation />,
    className: "md:col-span-1 md:row-span-2"
  },
  { 
    serviceIndex: 1,
    animation: <InfrastructureAnimation />,
    className: "md:col-span-1"
  },
  { 
    serviceIndex: 2,
    animation: <ApplicationsAnimation />,
    className: "md:col-span-1"
  },
  { 
    serviceIndex: 3,
    animation: <SafetyAnimation />,
    className: "md:col-span-2"
  }
]

interface DetailCardProps {
  service: typeof services[0]
  onClose: () => void
}

function DetailCard({ service, onClose }: DetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="mb-6 rounded-2xl border border-orange-400/30 bg-gradient-to-br from-background via-background to-orange-950/20 p-6 relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-1 rounded-full bg-orange-400/10 hover:bg-orange-400/20 transition-colors"
      >
        <X className="h-4 w-4 text-orange-400" />
      </button>
      
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-orange-400/10 to-yellow-400/10">
          {service.icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {service.detailedFeatures.map((feature, idx) => (
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
    </motion.div>
  )
}

export function AGIBentoGrid() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null)

  const handleCardClick = (serviceIndex: number) => {
    setSelectedService(selectedService?.title === services[serviceIndex].title ? null : services[serviceIndex])
  }

  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-4">
        {/* Detail Card */}
        <AnimatePresence>
          {selectedService && (
            <DetailCard 
              service={selectedService} 
              onClose={() => setSelectedService(null)} 
            />
          )}
        </AnimatePresence>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {serviceCardConfig.map((card, idx) => {
            const service = services[card.serviceIndex]
            const isSelected = selectedService?.title === service.title
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleCardClick(card.serviceIndex)}
                className={`rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-orange-950/10 p-5 cursor-pointer hover:border-orange-400/40 transition-colors ${card.className} ${
                  isSelected ? 'border-orange-400/50 ring-1 ring-orange-400/20' : ''
                }`}
              >
                <div className="flex-1">
                  {card.animation}
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-bold text-foreground">{service.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AGIBentoGrid
