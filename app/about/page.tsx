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
                  Born out of a bold vision to bridge gaps in Africa’s health systems, <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-primary mx-1"
                  >
                    HASO Group (Health Affairs & Social Opportunities)
                  </motion.span> was founded to offer smart, scalable, and sustainable non-clinical solutions that strengthen healthcare delivery and promote social impact.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  Our journey began with a deep belief: that health is not just about hospitals and treatments—it's about systems, people, and the invisible backbone of operations that keeps care running effectively. From navigating complex health operations to driving digital innovation and advocating for equity, HASO Group was created to fill critical gaps in healthcare management, research, and workforce development.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground"
                >
                  Today, we operate at the intersection of health, business, and social innovation—providing expert non-clinical services, outsourcing solutions, medical tourism support, and strategic advisory for both public and private sector health actors. Our social impact arm, the
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold"
                  > Health Affairs Initiative</motion.span>, leads programs in health education, youth empowerment, digital health advocacy, and leadership development.
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
              HASO Group exists to bridge the gap between institutional needs and underutilized talent by delivering expert-led, non clinical health services and professional outsourcing solutions. We support institutions and empower individuals through quality service delivery, workforce development, and access to meaningful work. 
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
              To be a leading Network that connects healthcare professionals with impactful career opportunities, while empowering institutions with the tools, and services they need to excel in health and social sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
<section className="py-20 md:py-28 bg-white">
  <div className="container mx-auto px-4">
    <SectionTitle
      title="Our Values"
      subtitle="At HASO Group, our core values reflect our dedication to impactful, inclusive, and innovative work. These principles guide every aspect of our mission and shape the way we serve communities."
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
        <h3 className="text-xl font-bold mb-3">Excellence</h3>
        <p className="text-muted-foreground">
          We strive for the highest standards in everything we do, ensuring impactful, sustainable outcomes.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Empowerment</h3>
        <p className="text-muted-foreground">
          We equip individuals and communities with the tools, knowledge, and confidence to shape their own futures.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Innovation</h3>
        <p className="text-muted-foreground">
          We embrace creative problem-solving, leveraging technology and new ideas to tackle complex challenges.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Collaboration</h3>
        <p className="text-muted-foreground">
          We build strong partnerships and inclusive teams, recognizing that shared goals lead to stronger impact.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Equity</h3>
        <p className="text-muted-foreground">
          We champion fairness and justice, ensuring every individual has access to the resources and opportunities they need.
        </p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="bg-muted/50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <h3 className="text-xl font-bold mb-3">Accountability</h3>
        <p className="text-muted-foreground">
          We are responsible stewards of our mission, resources, and relationships, committed to transparency and trust.
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

