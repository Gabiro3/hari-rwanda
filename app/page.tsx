"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, ChevronRight, Heart, BookOpen, Users, Award, Mail, Phone, MapPin, FlaskConical, Binoculars, BinocularsIcon, LucideBinoculars } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SectionTitle from "@/components/section-title"
import AnimatedText from "@/components/animated-text"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary/90 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_bg.jpg"
            alt="Healthcare workers in Rwanda"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <AnimatedText
              text="Empowering  Communities,  Advancing  Health  Equity  through  Digital  Innovation."
              className="mb-6 text-3xl font-bold tracking-tight md:text-5xl lg:text-5xl uppercase"
              delay={0.5}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-8 text-lg md:text-xl"
            >
              Driving positive change in global health by empowering communities, advancing health equity, and
              leveraging technology for impact in Rwanda.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center"
            >
              <Button asChild size="lg" className="gradient-bg text-white hover:bg-secondary/90">
                <Link href="/about">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-primary hover:bg-primary/10 hover:text-white">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Welcome to HASO Group"
            subtitle="Empowering non-clinical healthcare professionals and institutions through innovative solutions for health affairs and social opportunities. Join us in transforming healthcare workforces, enabling talent, and providing quality support services to drive impact."
            backgroundImage="/placeholder.svg?height=300&width=1920"
          />

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Workforce Solutions</h3>
              <p className="text-muted-foreground">
              We provide skilled non-clinical healthcare professionals through staffing, outsourcing, and managed services to help organizations scale efficiently.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Healthcare BPO</h3>
              <p className="text-muted-foreground">
              We optimize non-clinical operations like admin, customer service, and revenue cycle management, improving efficiency and allowing providers to focus on care.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Research, Advisory & Innovation</h3>
              <p className="text-muted-foreground">
              We deliver strategic insights and implementation support for health programs through research, advisory services, and innovation for governments and organizations.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-muted/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <LucideBinoculars className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Medical Tourism Facilitation</h3>
              <p className="text-muted-foreground">
              We manage comprehensive medical tourism services, linking international patients with African healthcare providers for seamless, high-quality care experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-28 bg-muted relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Impact"
            subtitle="Through our Health Affairs Initivative, we have already transformed thousands of lives across Rwanda and beyond."
            backgroundImage="/placeholder.svg?height=300&width=1920"
            light
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold gradient-text mb-3"
              >
                1,000+
              </motion.p>
              <p className="text-muted-foreground">
                Individuals reached with health education on GBV, maternal health, and SRH
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold gradient-text mb-3"
              >
                100+
              </motion.p>
              <p className="text-muted-foreground">
                Youth leaders empowered to become health advocates in their communities
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold gradient-text mb-3"
              >
                200+
              </motion.p>
              <p className="text-muted-foreground">
                Youth engaged in gender justice campaigns with resources and counseling.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-5xl font-bold gradient-text mb-3"
              >
                10+
              </motion.p>
              <p className="text-muted-foreground">
                Safe spaces facilitated for intergenerational dialogues on health rights
              </p>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                <Link href="/impact">
                  Learn More About Our Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/edut.JPG"
                alt="Digital Health Education Program"
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
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Health Education & Awareness</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our flagship program focuses on providing accessible health education through digital platforms and
                community engagement.
              </p>
              <ul className="space-y-6 mb-8">
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <ChevronRight className="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Digital Health Literacy for All</span> – SRH, maternal health, and
                    disease prevention education via SMS, e-learning, podcasts, and radio.
                  </div>
                </motion.li>
                <motion.li
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <ChevronRight className="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">My Health, My Rights</span> – Raising awareness on health rights, GBV
                    prevention, and reproductive health through workshops, training, sports, and creative arts.
                  </div>
                </motion.li>
              </ul>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                  <Link href="/programs">
                    Discover All Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 md:py-28 bg-muted relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Meet Our Team"
            subtitle="Our team is composed of passionate, dedicated professionals from diverse backgrounds, united by a common goal: advancing health equity."
            backgroundImage="/placeholder.svg?height=300&width=1920"
            light
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/sma.jpeg"
                  alt="Samuel Habimana"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-medium">Samuel Habimana, MSc</h3>
              <p className="mb-4 text-secondary">Founder & Executive Chairperson</p>
              <p className="text-muted-foreground text-sm mb-6">
              Samuel holds a Master of Science in Global Health Delivery (MSc-GHD) with a specialization in Gender, Sexual, and Reproductive Health from the University of Global Health Equity (UGHE) and a Bachelor of Arts in Healthcare Management from Southern New Hampshire University.
              </p>
              <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/about#team">Read Full Bio</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/Rachel Murekatete, MSc.JPG"
                  alt="Rachel Murekatete"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-medium">Rachel Murekatete, MSc</h3>
              <p className="mb-4 text-secondary">Deputy Executive Director</p>
              <p className="text-muted-foreground text-sm mb-6">
              Rachel Murekatete is a seasoned public health professional with a strong background in global health, gender equity, and sexual and reproductive health and rights (SRHR). She holds a Master of Science in Global Health Delivery with a focus on Gender and SRHR from UGHE and a Bachelor of Science in Public Health from MKU.
              </p>
              <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/about#team">Read Full Bio</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20">
                <Image
                  src="/Dr. Alexandre Dukundane, MD, MSc.JPG"
                  alt="Dukundane Alexandre"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-medium">Dr Dukundane Alexandre, MD, MSc</h3>
              <p className="mb-4 text-secondary">Director of  Sustainable Health Impact & Funding</p>
              <p className="text-muted-foreground text-sm mb-6">
              Dr Dukundane Alexandre is a medical doctor and co-founder of Health Affairs Initiatives (HAI), dedicated to enhancing healthcare delivery with a specific focus on maternal, child, neonatal, adolescent, and reproductive health.
              </p>
              <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/about#team">Read Full Bio</Link>
              </Button>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                <Link href="/about#team">
                  Meet the Full Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.h2
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight md:text-4xl mb-4"
            >
              Get Involved
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg opacity-90"
            >
              At HAI, we believe in the power of collaboration to achieve our mission. There are several ways you can
              contribute to our work.
            </motion.p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-medium">Donate</h3>
              <p className="mb-6 opacity-90">
                Your contributions help fund critical programs that improve health and well-being.
              </p>
              <Button asChild variant="secondary" className="mt-auto gradient-bg">
                <Link href="/get-involved#donate">Donate Now</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-medium">Volunteer</h3>
              <p className="mb-6 opacity-90">Become part of our team and help us implement our health initiatives.</p>
              <Button asChild variant="secondary" className="mt-auto gradient-bg">
                <Link href="/get-involved#volunteer">Join Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-medium">Partner</h3>
              <p className="mb-6 opacity-90">Join forces with us to create lasting solutions in global health.</p>
              <Button asChild variant="secondary" className="mt-auto gradient-bg">
                <Link href="/get-involved#partner">Partner With Us</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-medium">Spread the Word</h3>
              <p className="mb-6 opacity-90">
                Share our mission on social media and help raise awareness about health equity.
              </p>
              <Button asChild variant="secondary" className="mt-auto gradient-bg">
                <Link href="/get-involved#share">Share Now</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center bg-muted/30 p-12 rounded-2xl border border-muted"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to receive updates on our programs, events, and impact.
            </p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" className="gradient-bg text-white">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-muted relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Contact Us"
            subtitle="We would love to hear from you! Whether you have a question, suggestion, or are interested in collaborating with us, please reach out."
            backgroundImage="/placeholder.svg?height=300&width=1920"
            light
          />

          <div className="grid gap-8 md:grid-cols-3 mt-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Email</h3>
              <p className="text-muted-foreground">socialimpact@hasogroup.com</p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Phone</h3>
              <p className="text-muted-foreground">+250 788 123 456</p>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-white shadow-md"
            >
              <div className="mb-6 rounded-full bg-primary/10 p-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-medium">Address</h3>
              <p className="text-muted-foreground">Kigali, Rwanda</p>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                <Link href="/contact">
                  Send Us a Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
