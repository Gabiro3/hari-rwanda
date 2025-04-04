"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SectionTitleProps {
  title: string
  subtitle: string
  backgroundImage?: string
  light?: boolean
}

export default function SectionTitle({ title, subtitle, backgroundImage, light = false }: SectionTitleProps) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-3xl text-center py-8 bg-primary/10 rounded-lg px-2">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`text-3xl font-bold tracking-tight md:text-4xl mb-4 ${light ? "text-primary" : "text-primary"}`}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-lg ${light ? "text-primary/90" : "text-muted-foreground"}`}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  )
}
