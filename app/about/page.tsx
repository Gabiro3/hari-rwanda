"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/section-title"
import AnimatedText from "@/components/animated-text"
import { teamMembers } from "@/lib/constants"

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
            <AnimatedText text="About  Us" className="text-4xl font-bold tracking-tight md:text-5xl mb-6" delay={0.3} />
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
                  Imagine a mother in a rural village, miles away from the nearest clinic, health center, or hospital, struggling to get lifesaving maternal care. Picture a young girl, desperate for answers about her body, yet surrounded by silence and misinformation. Think of a survivor of gender-based violence, isolated and afraid, with nowhere to turn for support.
                  This is not just their reality—it’s the reality of millions. At least half the world’s population lacks access to essential healthcare (WHO, 2023). In Sub-Saharan Africa, over
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-primary mx-1"
                  >
                    600 million people
                  </motion.span>
                  face a broken health system where affordability, digital exclusion, and low health literacy widen the gap. Despite the promise of technology, only 1 in 4 people in the region can access digital health services (GSMA, 2023). The rest? Left behind.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold"
                  >The Consequences are heartbreaking</motion.p>
                  533 mothers die for every 100,000 births—lives that could be saved with better care.
                  35% of women endure gender-based violence with little access to help.
                  30% of Rwandan youth lack crucial sexual and reproductive health knowledge, fueling a 5.2% teenage pregnancy rate and unsafe abortions.
                  But here’s the truth: It’s not a lack of solutions—it’s a lack of access.
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold my-2"
                  >Why HAI Exists</motion.p>
                  At the Health Affairs Initiative (HAI), we refuse to accept this as normal. We were founded on the belief that health equity is a right, not a privilege. We saw how communities were suffering—not because solutions didn’t exist, but because they weren’t reaching those who needed them most.
                  Through digital innovation, education, and advocacy, we are breaking down barriers, ensuring that women, youths, and marginalized communities are empowered with the knowledge and tools to make informed health decisions.

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
              Advancing health equity and gender equality by empowering women, adolescents, and underserved communities through education, advocacy, and technology-driven solutions.
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
              A healthy, informed, and empowered society where every individual—regardless of gender, age, or background—has the knowledge, resources, and voice to achieve their full potential in health and well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Values: MOVEMENT"
            subtitle="At HAI, MOVEMENT represents our commitment to action, advocacy, and lasting social impact. Each letter embodies a key principle that drives our work and defines how we create change."
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
              <h3 className="text-xl font-bold mb-3">M – Mission-Driven</h3>
              <p className="text-muted-foreground">
              We are committed to creating lasting social impact by staying true to our purpose.

              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">O – Opportunity for All</h3>
              <p className="text-muted-foreground">
              We believe in equity, ensuring everyone has access to health, resources, and opportunities
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">V – Voice & Advocacy</h3>
              <p className="text-muted-foreground">
              We empower communities to speak up, influence change, and drive policy action.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">E – Empowerment</h3>
              <p className="text-muted-foreground">
              We equip individuals—especially women, youth, and underserved communities—with knowledge and tools to take charge of their health and future.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">M – Mentorship</h3>
              <p className="text-muted-foreground">
              We nurture leadership and knowledge-sharing to build a future of informed and empowered individuals.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">E – Excellence & Innovation</h3>
              <p className="text-muted-foreground">
              We use creativity, technology, and data-driven solutions to ensure quality and effectiveness in all we do.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">N – Nurturing Collaboration</h3>
              <p className="text-muted-foreground">
              We believe in partnerships and shared efforts to build sustainable solutions and stronger communities.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-3">T – Transformation</h3>
              <p className="text-muted-foreground">
              We work toward long-lasting social and health improvements that uplift individuals and communities.
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
                    With over a decade of experience in health advocacy, Operations, research, and community-driven solutions, Samuel leads efforts to tackle critical health challenges using technology-driven advocacy, community-centered solutions, and empowerment programs. He has successfully designed and implemented several community health projects focused on gender equality and reproductive health using digital space, sports, and creative arts. His research includes impactful studies on intergenerational dialogues aimed at reducing conflicts between teen mothers and their families.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Samuel holds a Master of Science in Global Health Delivery (MSc-GHD) with a specialization in Gender, Sexual, and Reproductive Health from the University of Global Health Equity (UGHE) and a Bachelor of Arts in Healthcare Management from Southern New Hampshire University. His expertise spans advocacy, operations, health program development, and leadership in global health. In addition to his work with HAI, Samuel has partnered with international and regional organizations to empower youth, promote gender equality, and enhance healthcare access across Rwanda and beyond. A passionate innovator and dynamic leader, Samuel believes in the power of collaboration and creative solutions to drive lasting health impact.
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
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -10 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-primary text-sm">{member.title}</p>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            {member.description1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm mt-2"
          >
            {member.description2}
          </motion.p>
        </motion.div>
      ))}
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

