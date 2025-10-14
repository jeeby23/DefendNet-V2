<template>
  <div>
    <Hero
      :heroImage="defendCareer"
      title="Career"
      titleClass="text-white font-bold text-4xl"
      titleChild="Discover What Drives Business with DefendNet"
      childClass="text-white font-light text-2xl  leading-relaxed"
      heroClass=" md:h-[70vh] min-w-screen overflow-hidden object-cover object-top"
      context="text-center flex flex-col item-center justify-center mx-auto h-64 md:h-99"
    >
      <Navbar />
      <div class="border-b-[.5px] border-slate-100"></div>
    </Hero>
    <container>
      <div class="-translate-y-5 bg-black px-4">
        <h1 class="text-[18px] md:text-2xl font-bold font-mono py-4 dark:text-white">
          Discover What Drives Business with DefendNet
        </h1>
        <p class="font-serif dark:text-white">
          At DefendNet, auditing opens the door to some of the UK’s most exciting and influential
          organisations. To deliver real value, we delve into how companies operate — how they earn
          revenue, control expenditure, and plan for the future. This means our team builds a strong
          foundation across diverse industries and business models. The unique insight and broad
          exposure you gain at DefendNet help you grow your capabilities and explore what you’re
          truly capable of achieving.
        </p>
      </div>
      <div class="px-4 bg-gray-600 py-4 mt-10">
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div class="md:w-[80%] md:mr-6 text-white">
            <h2 class="text-2xl font-serif pb-5">Our Commitment to Quality.</h2>
            <p class="">
              At DefendNet, quality is the cornerstone of our work. It guides every audit we perform
              and informs every interaction we have. This unwavering focus on excellence is embedded
              in our processes,our team, and the way we serve our clients. Our Transparency Report
              highlights the robust quality control systems we employ, the challenges we face in
              today’s dynamic environment, and the proactive measures we’re taking to continuously
              improve and uphold the highest standards..
            </p>
            <button class="bg-blue-500 px-4 py-4 rounded-full my-3 text-white">About Us</button>
          </div>
          <div>
            <span class="w-[60%]"><img :src="qualityDefend" alt="" /></span>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <div>
          <div>
            <div class="bg-blue-400 h-[6px] md:h-2 my-4 px-6" style="width: 48px"></div>
          </div>
          <div class="flex flex-col md:flex-row gap-5">
            <div class="">
              <h1 class="font-mono text-xl">Building Trust Through Transparent Auditing.</h1>
              <p class="pb-5">
                At DefendNet, our Audit team plays a vital role in verifying the integrity of the
                UK’s leading organisations. We examine financial reports, regulatory disclosures,
                and sustainability practices to ensure they are accurate, fair, and transparent.
                Boards of directors, investors, stakeholders, and the wider market depend on our
                insights to make informed decisions.
              </p>
              <p class="mb-10">
                Trust is the foundation of a healthy economy. Without it, investments falter, credit
                is withheld, consumers lose confidence, and uncertainty disrupts progress. That’s
                why every audit we conduct at DefendNet carries deep significance — it helps keep
                the business world moving with confidence and clarity.
              </p>
            </div>
            <div class="mb-12">
              <img :src="defendNetJob" alt="defend-job" />
            </div>
          </div>

          <div class="flex flex-col-reverse md:flex-row gap-10">
            <div>
              <img :src="DefendSecJob" alt="" />
            </div>
            <div>
              <div class="bg-blue-400 h-[6px] md:h-2 my-4 px-6" style="width: 48px"></div>
              <h1 class="font-mono text-2xl">Driven by Expertise, Enhanced by Technology.</h1>
              <p>
                At DefendNet, we harness cutting-edge technology to elevate every aspect of our
                audit services. As innovation reshapes the industry, we remain at the
                forefront—leveraging smart solutions to deliver deeper insights and greater value to
                our clients. Since 2018, we’ve integrated advanced tools like drones into our
                inventory audits, improving accuracy, efficiency, and assurance every step of the
                way.
              </p>
            </div>
          </div>
          <CeoCard/>
          <div>
            <div class="my-5">
              <h2 class="font-mono text-xl">Still Curious ?</h2>
              <p class="text-gray-400">Check out our other services</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-8">
              <ul v-for="(listService, index) in listServices" :key="index">
                <div class="flex items-center justify-between border p-1.5  mb-1.5 w-full">
                  <li class="">{{ listService.list }}</li>
                  <span>
                    <font-awesome-icon icon="fa-solid fa-greater-than" />
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </container>
    <Footer />
  </div>
</template>

<script setup>
import container from '@/components/Layouts/container.vue'
import defendCareer from '@/assets/defendCareer.jpeg'
import qualityDefend from '@/assets/qualityDefend.jpeg'
import defendNetJob from '@/assets/defendNetJob.jpeg'
import DefendSecJob from '@/assets/DefendSecJob.jpeg'
import Navbar from '@/components/Layouts/Navbar.vue'
import Hero from '@/components/Layouts/Hero.vue'
import CeoCard from '@/components/Layouts/CeoCard.vue'
import Footer from '@/components/Layouts/Footer.vue'

const listServices = [
  { id: 1, list: 'IT Auditing',route:"routeAudit" },
  { id: 2, list: 'Cloud Security Adviosry',route:"routeCloud" },
  { id: 3, list: 'Cybersecurity Advisory',route: "routeCyber" },
  { id: 4, list: 'Policy Development & Governance Advisory',route: "routePolicy"},
  { id: 5, list: 'SOX Compliance Support',route: "routeSox"},
  { id: 6, list: 'IT Support & Operational Readiness',route: "routeIt"},
  { id: 7, list: 'Third-Party Risk Assessment Strategy',route: "routeThird"},
  { id: 7, list: 'Business Continuity & Incident Management Advisory',route: "routeBusiness"},
]

</script>
