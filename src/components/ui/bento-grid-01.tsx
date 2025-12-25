import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Smartphone, Globe, Brain, Cpu, Zap, Shield, Network, Code } from "lucide-react"

function BrainAnimation() {
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[120px]">
      <motion.div
        animate={{ scale: pulse ? 1.2 : 1, opacity: pulse ? 1 : 0.7 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative"
      >
        <Brain className="h-16 w-16 text-orange-400" />
        <motion.div
          className="absolute inset-0 rounded-full bg-orange-400/20"
          animate={{ scale: pulse ? 2 : 1, opacity: pulse ? 0 : 0.5 }}
          transition={{ duration: 0.8 }}
        />
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
        className={`grid ${layouts[layout]} gap-2 w-full max-w-[100px]`}
        layout
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            layout
            className="h-6 rounded bg-gradient-to-r from-orange-400/60 to-yellow-400/60"
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
    <div className="relative flex flex-col items-center justify-center h-full min-h-[80px] gap-2">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-400/20 to-yellow-400/20">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              className="w-5 h-5 border-2 border-orange-400 border-t-transparent rounded-full animate-spin"
            />
          ) : (
            <motion.span
              key="speed"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-xs font-bold text-orange-400"
            >
              10x
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className="text-xs text-muted-foreground">Faster Training</span>
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
    <div className="relative flex items-center justify-center h-full min-h-[80px] gap-3">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          animate={{ scale: shield.active ? 1.1 : 1, opacity: shield.active ? 1 : 0.4 }}
          className="p-2 rounded-lg bg-gradient-to-r from-orange-400/20 to-red-400/20"
        >
          <Shield className={`h-5 w-5 ${shield.active ? 'text-orange-400' : 'text-muted-foreground'}`} />
        </motion.div>
      ))}
    </div>
  )
}

function GlobalNetwork() {
  const [pulses] = useState([0, 1, 2, 3, 4])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[120px]">
      <Globe className="h-12 w-12 text-orange-400 z-10" />
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-16 h-16 rounded-full border border-orange-400/30"
          animate={{
            scale: [1, 2.5],
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

function NeuralNetworkAnimation() {
  const [activeNode, setActiveNode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex items-center justify-center h-full min-h-[80px]">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((node) => (
          <motion.div
            key={node}
            animate={{
              scale: activeNode === node ? 1.3 : 1,
              backgroundColor: activeNode === node ? "rgb(251, 146, 60)" : "rgba(251, 146, 60, 0.2)"
            }}
            className="w-4 h-4 rounded-full"
          />
        ))}
      </div>
    </div>
  )
}

export function AGIBentoGrid() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-4">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[minmax(140px,auto)]">
          
          {/* 1. AGI Research - Tall (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-orange-950/10 p-6 flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center">
              <BrainAnimation />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-foreground">AGI Research</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pioneering cognitive architectures that learn, reason, and adapt like the human mind.
              </p>
            </div>
          </motion.div>

          {/* 2. Infrastructure - Standard (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-yellow-950/10 p-6 flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center">
              <LayoutAnimation />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-foreground">Infrastructure</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Scalable systems for AGI deployment.
              </p>
            </div>
          </motion.div>

          {/* 3. Global Reach - Tall (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-red-950/10 p-6 flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center">
              <GlobalNetwork />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇮🇳</span>
                <span className="text-xl font-semibold text-foreground">From India</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Building world-class AI from Bharat's innovation ecosystem, for global impact.
              </p>
            </div>
          </motion.div>

          {/* 4. Speed - Standard (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-orange-950/10 p-6 flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center">
              <SpeedIndicator />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-foreground">Performance</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Blazing fast model training and inference.
              </p>
            </div>
          </motion.div>

          {/* 5. Safety & Ethics - Wide (3x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="md:col-span-3 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-yellow-950/10 p-6 flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="flex-shrink-0">
              <SecurityBadge />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-400" />
                <h3 className="text-lg font-semibold text-foreground">Safety First</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Aligned General Intelligence with built-in ethical frameworks and safety constraints.
              </p>
            </div>
          </motion.div>

          {/* 6. Applications - Wide (3x1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-3 rounded-2xl border border-orange-400/20 bg-gradient-to-br from-background via-background to-red-950/10 p-6 flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="flex-shrink-0">
              <NeuralNetworkAnimation />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Real-World Applications</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                From healthcare to climate science — AGI solutions that matter.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default AGIBentoGrid
