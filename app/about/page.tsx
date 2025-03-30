"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedText from "@/components/animated-text"

export default function AboutPage() {
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
    <div>
      {/* Hero Section */}
      <section className="bg-primary/90 text-white py-20 md:py-28 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/us.jpg"
            alt="About HAI Rwanda"
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
            <AnimatedText text="About Us" className="text-4xl font-bold tracking-tight md:text-5xl mb-6" delay={0.3} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg md:text-xl"
            >
              Learn about our mission, vision, values, and the dedicated team working to advance health equity in
              Rwanda.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Story</h2>
              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  Globally, at least 50% of the population lacks essential health services (WHO, 2023), and in
                  Sub-Saharan Africa, over 600 million people struggle to access basic healthcare (World Bank, 2022).
                  Despite the rapid growth of digital health technologies, only 25% of people in the region have access
                  to digital health services (GSMA, 2023), leaving millions behind due to internet limitations,
                  affordability challenges, and low digital literacy.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  These disparities have severe consequences. Maternal mortality rates remain alarmingly high at 533
                  deaths per 100,000 live births, and 35% of women experience gender-based violence (UN Women, 2022). In
                  Rwanda, 30% of young people lack comprehensive knowledge of sexual and reproductive health (DHS,
                  2020), contributing to a 5.2% teenage pregnancy rate and an increase in unsafe abortions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  Recognizing these urgent challenges, HAI was established to bridge the gap between communities and
                  essential health services. Through digital innovation, advocacy, and education, HAI empowers
                  individuals especially youth and women with the knowledge and tools needed to make informed health
                  decisions.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/our_story.jpg"
                alt="HAI Rwanda Story"
                width={800}
                height={600}
                className="rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-muted relative">
        <div className="absolute inset-0 z-0 opacity-4">
          <Image src="/story.JPG" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To leverage technology, education, and advocacy to empower communities in Rwanda, particularly women and
                youth, advancing health equity, gender equality, and sexual and reproductive health.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                A world where health equity is a right for all, not a privilege, and everyone has access to the
                information, resources, and support needed to lead a healthy and dignified life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Values: The HAI CIRCLE"
            subtitle="At HAI, our values are at the heart of everything we do. The CIRCLE represents our commitment to health equity, community empowerment, and innovation."
            backgroundImage="/placeholder.svg?height=300&width=1920"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16"
          >
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We work hand in hand with communities, partners, and stakeholders to create sustainable and impactful
                health solutions.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We uphold honesty, transparency, and ethical responsibility in all our initiatives to build trust and
                accountability.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">Resilience</h3>
              <p className="text-muted-foreground">
                We empower communities with the strength, knowledge, and resources to overcome health challenges and
                thrive.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">Compassion</h3>
              <p className="text-muted-foreground">
                We are driven by empathy and a deep commitment to ensuring that no one is left behind in the pursuit of
                health equity.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">Leadership</h3>
              <p className="text-muted-foreground">
                We inspire and support individuals to take initiative in advocating for better healthcare and social
                change.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-muted-foreground">
                We equip individuals and communities with the tools, education, and confidence to make informed health
                decisions and drive change.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-28 bg-muted relative">
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

          {/* Featured Team Member */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg mb-16 mt-16"
          >
            <div className="grid gap-8 md:grid-cols-[200px_1fr] items-start">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/sma.jpeg"
                  alt="Samuel Habimana"
                  width={200}
                  height={200}
                  className="rounded-xl object-cover shadow-md"
                />
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-1"
                >
                  Samuel Habimana, MSc
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-primary font-medium mb-4"
                >
                  Founder & Executive Chairperson
                </motion.p>
                <div className="space-y-4 text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Samuel Habimana, MSc is a global health professional, the driving force behind HAI, and an advocate
                    committed to advancing health equity and social justice. With over a decade of experience in health
                    advocacy, Operations, research, and community-driven solutions, Samuel leads efforts to tackle
                    critical health challenges using technology-driven advocacy, community-centered solutions, and
                    empowerment programs.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    He has successfully designed and implemented several community health projects focused on gender
                    equality, and reproductive health, using digital space, sports, and creative arts. His research
                    includes impactful studies on intergenerational dialogues aimed at reducing conflicts between teen
                    mothers and their families.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Samuel holds a Master of Science in Global Health Delivery (MSc-GHD) with a specialization in
                    Gender, Sexual, and Reproductive Health from the University of Global Health Equity (UGHE) and a
                    Bachelor of Arts in Healthcare Management from Southern New Hampshire University.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Team Member"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Team Member Name</h3>
                  <p className="text-primary text-sm">Position Title</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Brief description of the team member's background and expertise in the field of health advocacy.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Team Member"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Team Member Name</h3>
                  <p className="text-primary text-sm">Position Title</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Brief description of the team member's background and expertise in the field of health advocacy.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Team Member"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Team Member Name</h3>
                  <p className="text-primary text-sm">Position Title</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Brief description of the team member's background and expertise in the field of health advocacy.
              </p>
            </motion.div>
          </motion.div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="lg">
                <Link href="/get-involved#join-team">
                  Join Our Team
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

