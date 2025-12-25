import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Cpu, Network, Shield, Globe, Zap, Smartphone, X } from "lucide-react"
import { services } from "@/components/services/ServiceData"

function TypeTester() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.5 : 1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[80px]">
      <motion.div
        animate={{ scale }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-4xl font-bold text-orange-400"
      >
        Aa
      </motion.div>
    </div>
  )
}

function LayoutAnimation() {
  const [layout, setLayout] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"]

  return (
    <div className="relative flex items-center justify-center h-full min-h-[80px]">
      <motion.div
        layout
        className={`grid ${layouts[layout]} gap-1 w-full max-w-[60px]`}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            layout
            className="h-4 rounded bg-orange-400/60"
          />
        ))}
      </motion.div>
    </div>
  )
}

function SpeedIndicator() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500)
    const interval = setInterval(() => {
      setLoading(true)
      setTimeout(() => setLoading(false), 500)
    }, 3000)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[80px] gap-2">
      <div className="relative w-16 h-16">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: loading ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
        >
          {loading ? (
            <Zap className="h-8 w-8 text-orange-400 animate-pulse" />
          ) : (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-lg font-bold text-orange-400"
            >
              100ms
            </motion.span>
          )}
        </motion.div>
      </div>
      <span className="text-xs text-muted-foreground">Load Time</span>
    </div>
  )
}

function SecurityBadge() {
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
    <div className="flex items-center justify-center gap-2 h-full min-h-[80px]">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          animate={{ scale: shield.active ? 1.2 : 1, opacity: shield.active ? 1 : 0.4 }}
          transition={{ duration: 0.3 }}
        >
          <Shield className={`h-6 w-6 ${shield.active ? 'text-red-400' : 'text-muted-foreground'}`} />
        </motion.div>
      ))}
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

function MobileAnimation() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => !prev)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full min-h-[80px]">
      <motion.div
        animate={{ scale: active ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <Smartphone className={`h-10 w-10 ${active ? 'text-orange-400' : 'text-muted-foreground'}`} />
      </motion.div>
    </div>
  )
}

const serviceCardConfig = [
  { 
    serviceIndex: 0, // AGI Research
    title: "Research",
    animation: <TypeTester />,
    className: "md:col-span-1 md:row-span-2"
  },
  { 
    serviceIndex: 1, // AGI Infrastructure
    title: "Infrastructure",
    animation: <LayoutAnimation />,
    className: "md:col-span-1"
  },
  { 
    serviceIndex: null, // Global Network (hero card)
    title: "Global Reach",
    animation: <GlobalNetwork />,
    className: "md:col-span-1 md:row-span-2",
    isHero: true
  },
  { 
    serviceIndex: 2, // AGI Applications
    title: "Applications",
    animation: <SpeedIndicator />,
    className: "md:col-span-1"
  },
  { 
    serviceIndex: 3, // AGI Ethics
    title: "Safety",
    animation: <SecurityBadge />,
    className: "md:col-span-2"
  },
  { 
    serviceIndex: null, // Mobile Ready
    title: "Mobile Ready",
    animation: <MobileAnimation />,
    className: "md:col-span-1"
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

  const handleCardClick = (serviceIndex: number | null) => {
    if (serviceIndex !== null && services[serviceIndex]) {
      setSelectedService(selectedService?.title === services[serviceIndex].title ? null : services[serviceIndex])
    }
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
          {serviceCardConfig.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleCardClick(card.serviceIndex)}
              className={`rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-orange-950/10 p-5 ${card.className} ${
                card.serviceIndex !== null ? 'cursor-pointer hover:border-orange-400/40 transition-colors' : ''
              } ${
                selectedService && card.serviceIndex !== null && services[card.serviceIndex]?.title === selectedService.title
                  ? 'border-orange-400/50 ring-1 ring-orange-400/20'
                  : ''
              }`}
            >
              <div className="flex-1">
                {card.animation}
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-bold text-foreground">{card.title}</h3>
                {card.isHero ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    Building world-class AGI from India's innovation ecosystem 🇮🇳
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {card.serviceIndex !== null ? "Click to explore" : "Optimized for all devices"}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AGIBentoGrid
