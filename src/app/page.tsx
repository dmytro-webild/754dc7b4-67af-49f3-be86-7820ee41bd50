"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Ultimate Auto Care"
      button={{
        text: "Book Service",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="Finally, an Auto Shop You Can Trust."
      description="Honest diagnostics. Skilled mechanics. A welcoming experience for everyone. Luxury-level care without the intimidation."
      buttons={[
        {
          text: "Book Your Service",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:5550123",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/advanced-diagnostic-lab-with-metallic-equipment-sterile-testing-environment_482257-124278.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Great Service",
          quote: "I’ve always been nervous going to auto shops, but here I felt respected and never pressured into anything.",
          name: "Sarah J.",
          role: "Verified Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-auto-repairman-his-colleague-communicating-while-working-together-workshop_637285-7662.jpg",
        },
        {
          id: "2",
          title: "Fast & Reliable",
          quote: "They handled my emergency fast and professionally. I knew I was in good hands immediately.",
          name: "Michael K.",
          role: "Long-Time Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-giving-keys-car-customer_329181-11862.jpg",
        },
        {
          id: "3",
          title: "Highly Recommend",
          quote: "Honest, knowledgeable, and willing to work on cars others won’t touch. Highly recommend.",
          name: "Emily R.",
          role: "Local Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-elegant-old-man-car-salon_1157-31895.jpg",
        },
        {
          id: "4",
          title: "Transparent",
          quote: "Clear communication and fair pricing. Finally found a place I trust.",
          name: "David W.",
          role: "Verified Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-customer-car-dealership_23-2149117120.jpg",
        },
        {
          id: "5",
          title: "Best Shop",
          quote: "Top-tier experts who treat you like family.",
          name: "Linda M.",
          role: "Long-Time Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-garage-fix-customers-car_482257-76174.jpg",
        },
      ]}
      title="People Don’t Just Come Here—They Stay."
      description="See why our community trusts us with their vehicles."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "No Pressure, Ever",
          description: "We explain what you need—and what you don't. No hidden agendas or unnecessary upselling.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-worker-uniform-pointing-present-box_176474-36017.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/mechanics-checking-planning-workshop_329181-11858.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/advanced-diagnostic-lab-with-metallic-equipment-sterile-testing-environment_482257-124278.jpg",
          imageAlt: "transparent honest auto mechanic discussion",
        },
        {
          title: "Inclusive & Respectful",
          description: "Everyone is welcome. No assumptions, no judgment. Just professional service for your vehicle.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/beautiful-teenagers-enjoying-amusement-park_23-2148624855.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/car-being-taking-care-workshop_23-2149580547.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3934.jpg",
          imageAlt: "transparent honest auto mechanic discussion",
        },
        {
          title: "True Expertise",
          description: "From modern vehicles to discontinued models—we handle it with precision and care.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/mechanics-holding-spanner-showing-thumbs-up_1170-1548.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/man-dark-gray-t-shirt-looks-cooler-he-took-out-computer-his-tools-front-him-table_346278-1221.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-checking-car_329181-11879.jpg",
          imageAlt: "transparent honest auto mechanic discussion",
        },
        {
          title: "Fast When It Matters",
          description: "Breakdowns don't wait, and neither do we. Rapid, reliable service to get you back on the road.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/happy-auto-repairman-his-colleague-communicating-while-working-together-workshop_637285-7662.jpg",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/auto-repairman-examining-undercarriage-car-workshop_637285-7632.jpg",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-giving-keys-car-customer_329181-11862.jpg",
          imageAlt: "transparent honest auto mechanic discussion",
        },
      ]}
      showStepNumbers={true}
      title="What Makes Ultimate Auto Care Different"
      description="We believe in transparency, respect, and skill above all else."
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Maintenance",
          name: "Oil Change",
          price: "Standard",
          rating: 5,
          reviewCount: "150+",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanics-repairing-car-workshop_329181-11816.jpg",
        },
        {
          id: "2",
          brand: "Repair",
          name: "Brake Service",
          price: "Standard",
          rating: 5,
          reviewCount: "200+",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-looking-clothes_23-2149726805.jpg",
        },
        {
          id: "3",
          brand: "Diagnostics",
          name: "Check Engine",
          price: "Standard",
          rating: 5,
          reviewCount: "180+",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-repairing-car_23-2150171266.jpg",
        },
        {
          id: "4",
          brand: "Repair",
          name: "Engine Work",
          price: "Custom",
          rating: 5,
          reviewCount: "90+",
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-examining-car_1170-1330.jpg",
        },
        {
          id: "5",
          brand: "Electrical",
          name: "Alternators",
          price: "Standard",
          rating: 5,
          reviewCount: "120+",
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-working-together_23-2148826968.jpg",
        },
        {
          id: "6",
          brand: "Maintenance",
          name: "Steering & Suspension",
          price: "Custom",
          rating: 5,
          reviewCount: "110+",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-woman-talking_23-2150171290.jpg",
        },
      ]}
      title="Complete Auto Care, Done Right"
      description="Our comprehensive suite of services keeps your car running at its absolute best."
    />
  </div>

  <div id="transparency" data-section="transparency">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Clear communication",
          content: "We explain everything in plain language so you always understand what's happening with your car.",
        },
        {
          id: "2",
          title: "No surprise charges",
          content: "You will receive an accurate, honest quote before we proceed with any repairs.",
        },
        {
          id: "3",
          title: "Honest recommendations",
          content: "We only recommend what you actually need to keep you safe and your car reliable.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-checking-car_329181-11879.jpg"
      title="You’ll Always Know What’s Happening"
      description="Transparency is our policy. We ensure you're fully informed before we start any work."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Built on Skill. Driven by Integrity."
      description="Ultimate Auto Care was built on a simple idea: People deserve an auto shop they don’t have to second-guess. Whether you’re dealing with a breakdown or routine maintenance, our goal is to make the experience straightforward, respectful, and stress-free."
      metrics={[
        {
          value: "100%",
          title: "Satisfaction Rate",
        },
        {
          value: "20+",
          title: "Years Experience",
        },
        {
          value: "5k+",
          title: "Happy Clients",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-automobile-mechanic-composition_23-2147881841.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="emergency" data-section="emergency">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Urgent Assistance"
      title="Car Trouble? We’ve Got You."
      description="Breakdowns are stressful. We act fast, communicate clearly, and get you back on the road without the runaround."
      buttons={[
        {
          text: "Call Now for Immediate Help",
          href: "tel:5550123",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Book Now"
      title="Ready for Auto Care You Can Trust?"
      description="No pressure. No surprises. Just honest work. Let's get your vehicle back in peak condition."
      buttons={[
        {
          text: "Book Appointment",
          href: "#",
        },
        {
          text: "Call Now",
          href: "tel:5550123",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Diagnostics",
              href: "#services",
            },
            {
              label: "Engine Repair",
              href: "#services",
            },
            {
              label: "Brake Service",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Google Reviews",
              href: "#",
            },
            {
              label: "Book Appointment",
              href: "#",
            },
            {
              label: "Emergency Call",
              href: "tel:5550123",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Ultimate Auto Care. All rights reserved."
      bottomRightText="Privacy Policy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
