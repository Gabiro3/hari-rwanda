"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Heart, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"

export default function ProgramsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/90 text-white py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/prog_3.jpg"
            alt="HAI Rwanda Programs"
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
              text="Our Programs"
              className="text-4xl font-bold tracking-tight md:text-5xl mb-6"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              At Health Affairs Initiative (HAI), we drive impact through four core program areas designed to address
              critical health challenges in Rwanda.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Program 1: Health Education & Awareness */}
      <section id="education" className="py-20 md:py-28 bg-white">
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Health Education & Awareness</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Empowering communities with knowledge and resources to make informed health decisions.
              </p>
              <div className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Digital Health Literacy for All</h3>
                  <p className="text-muted-foreground">
                    SRH, maternal health, and disease prevention education via SMS, e-learning, podcasts, and radio.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">My Health, My Rights</h3>
                  <p className="text-muted-foreground">
                    Raising awareness on health rights, GBV prevention, and reproductive health through workshops,
                    training, sports, creative arts competitions, and digital platforms.
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
                alt="Health Education Program"
                width={800}
                height={600}
                className="rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program 2: Digital Health Solutions */}
      <section id="digital" className="py-20 md:py-28 bg-muted relative">
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
                alt="Digital Health Solutions"
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Digital Health Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Leveraging technology to improve access to health information and services.
              </p>
              <div className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Smart Health Connect</h3>
                  <p className="text-muted-foreground">
                    A mobile-friendly platform offering health resources, telemedicine, and emergency contacts.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">GBV Digital Reporting & Response</h3>
                  <p className="text-muted-foreground">
                    A confidential reporting tool via WhatsApp/SMS & Website portal, connecting survivors to support
                    services.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Tech4Health Innovation Lab</h3>
                  <p className="text-muted-foreground">
                    Fostering digital health innovations through hackathons, startup incubation, and pilot projects.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program 3: Advocacy & Leadership Development */}
      <section id="advocacy" className="py-20 md:py-28 bg-white">
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Advocacy & Leadership Development</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Building a movement of health advocates and leaders to drive policy change and community action.
              </p>
              <div className="space-y-4 px-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Voices for Change</h3>
                  <p className="text-muted-foreground">
                    Youth-led storytelling, social media campaigns, and policy petitions for health rights and equity.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Men as Partners in Health</h3>
                  <p className="text-muted-foreground">
                    Engaging men in SRH education, GBV prevention, and family health advocacy.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Young Health Advocates Fellowship</h3>
                  <p className="text-muted-foreground">
                    A leadership program training youth in policy engagement, public health, and advocacy.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Women in Health Leadership (WiHL)</h3>
                  <p className="text-muted-foreground">Empowering women in health leadership and policy dialogue.</p>
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
                alt="Advocacy & Leadership Program"
                width={800}
                height={600}
                className="rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program 4: Sustainable Health Impact */}
      <section id="sustainable" className="py-20 md:py-28 bg-muted relative">
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
                alt="Sustainable Health Impact"
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
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Sustainable Health Impact & Funding
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ensuring lasting impact and sustainability in global health through innovative strategies.
              </p>
              <div className="space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Paid Health Education & Training</h3>
                  <p className="text-muted-foreground">
                    Expert-led courses and workshops in Sexual and Reproductive Health (SRH), Gender-Based Violence
                    (GBV), and Health Advocacy.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium">Consulting & Advisory Services</h3>
                  <p className="text-muted-foreground">
                    Comprehensive research support, manuscript writing, and data analysis tailored to health-focused
                    projects. Expertise in health workforce development and health policy consulting.
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
            Support Our Programs
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Your support can help us expand our programs and reach more communities in need. Join us in our mission to
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

