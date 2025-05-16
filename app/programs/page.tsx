"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Heart, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"

export default function SolutionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/90 text-white py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prog_3.jpg"
            alt="HAI Rwanda Solutions"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <AnimatedText
              text="Our  Solutions"
              className="text-4xl font-bold tracking-tight md:text-5xl mb-6"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              At HASO Group, we offer integrated, non-clinical solutions that strengthen health systems, empower professionals, and accelerate impact across Africa and beyond.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solution 1: Workforce Solutions */}
<section id="workforce" className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Workforce Solutions</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We recruit, deploy, and manage skilled non-clinical healthcare professionals—ranging from project managers to health informatics experts.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Outsourcing & Staffing</h3>
            <p className="text-muted-foreground">
              We offer flexible hiring models for non-clinical healthcare roles across various specialties and regions.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Managed Services</h3>
            <p className="text-muted-foreground">
              End-to-end talent management and team operations to help health systems scale effectively.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/prog_1.jpg"
          alt="Workforce Solutions"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>
{/* Solution 2: Healthcare BPO */}
<section id="bpo" className="py-20 md:py-28 bg-muted relative">
  <div className="absolute inset-0 z-0 opacity-10">
    <Image src="/edut.JPG" alt="Background texture" fill className="object-cover" />
  </div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <Image
          src="/edut.JPG"
          alt="Healthcare BPO"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <Heart className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Healthcare BPO</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We streamline non-clinical operations like customer support, admin tasks, and data management so healthcare providers can focus on care.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Revenue Cycle & Claims Management</h3>
            <p className="text-muted-foreground">
              From billing to collections, we manage healthcare finance workflows to improve performance and ROI.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Customer & Admin Support</h3>
            <p className="text-muted-foreground">
              We handle high-volume patient communication and scheduling through omni-channel support teams.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* Solution 3: Research, Advisory & Innovation */}
<section id="research" className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Research, Advisory & Innovation</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We help public and private health organizations design, test, and scale evidence-based solutions through expert research and advisory.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Health Systems Research</h3>
            <p className="text-muted-foreground">
              We conduct operational and implementation research to drive better policies and outcomes.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Innovation Pilots</h3>
            <p className="text-muted-foreground">
              From tech prototypes to service delivery models, we support ideation and pilot testing.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/prog_2.jpg"
          alt="Research & Innovation"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>
{/* Solution 4: Medical Tourism Facilitation */}
<section id="tourism" className="py-20 md:py-28 bg-muted relative">
  <div className="absolute inset-0 z-0 opacity-10">
    <Image src="/sustain.jpg" alt="Background texture" fill className="object-cover" />
  </div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-2 lg:order-1"
      >
        <Image
          src="/sustain.jpg"
          alt="Medical Tourism"
          width={800}
          height={600}
          className="rounded-xl object-cover shadow-lg"
        />
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-6">
          <Award className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Medical Tourism Facilitation</h2>
        <p className="text-lg text-muted-foreground mb-6">
          We connect international patients with top-tier African healthcare providers, managing travel and treatment logistics.
        </p>
        <div className="space-y-6">
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Cross-Border Coordination</h3>
            <p className="text-muted-foreground">
              We handle scheduling, travel, translation, and pre/post care to ensure a seamless medical journey.
            </p>
          </motion.div>
          <motion.div className="space-y-2">
            <h3 className="text-xl font-medium">Trusted Provider Network</h3>
            <p className="text-muted-foreground">
              We partner with accredited hospitals and specialists across Africa to guarantee high-quality care.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Background pattern" fill className="object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary z-0"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight md:text-4xl mb-6"
          >
            Support Our Solutions
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Your support can help us expand our Solutions and reach more communities in need. Join us in our mission to
            advance health equity in Rwanda.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" variant="secondary">
              <Link href="/get-involved#donate">
                Donate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-primary hover:bg-primary/10">
              <Link href="/get-involved#partner">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

