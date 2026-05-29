"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  SiAntdesign,
  SiBootstrap,
  SiCloudflare,
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiShopify,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCloud,
  HiOutlineCube,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineShoppingBag,
  HiOutlineTruck,
} from "react-icons/hi2";
import { FaBuilding, FaLaptopCode } from "react-icons/fa";

type Skill = { name: string; icon?: React.ComponentType<{ className?: string }> };

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Zustand" },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Ant Design", icon: SiAntdesign },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: ".NET" },
      { name: "REST APIs" },
      { name: "SignalR" },
      { name: "MQTT" },
      { name: "Pusher" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Supabase" },
    ],
  },
  {
    title: "CMS, Cloud, Tools",
    skills: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Shopify", icon: SiShopify },
      { name: "Elementor" },
      { name: "Azure Services" },
      { name: "Azure Pipelines" },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "Git", icon: SiGit },
      { name: "Jira", icon: SiJira },
      { name: "Linux", icon: SiLinux },
      { name: "ChatGPT" },
      { name: "OpenCode" },
      { name: "Claude Code" },
      { name: "Cursor" },
    ],
  },
];

const experience = [
  {
    company: "QADWorks",
    role: "Full Stack Developer",
    period: "March 2022 - Present",
    icon: FaBuilding,
    bullets: [
      "Built responsive, API-connected frontend features for Odfjell and Quantem projects from business requirements and design specifications.",
      "Worked with designers and backend developers to connect user interfaces with APIs and databases.",
      "Developed and launched Shopify and WordPress projects, including e-commerce features and client websites.",
      "Supported multiple client projects as an additional development resource, helping reduce team workload and keep project deliverables on schedule.",
    ],
    projects: [
      "Breeze: Frontend development and API integration for a student engagement platform used for extracurricular tracking, event management, attendance, and soft skills development.",
      "Quantem SOF and Odfjell SOF: Frontend work and API integration for Statement of Facts systems used to digitize vessel cargo terminal operations and documentation.",
      "Odfjell Customer Portal: Built frontend features and integrated APIs for a customer-facing web app that lets customers monitor stock levels, track product movements, manage orders, view shipments, and see throughput analytics.",
      "Banter App: Real-time chat application; built backend features using MQTT and SignalR.",
    ],
  },
  {
    company: "Freelance Software Developer",
    role: "Freelance",
    period: "2025 - Present",
    icon: FaLaptopCode,
    bullets: [
      "Developed tools to extract and display Trading Economics data, including CPI and PPI data.",
      "Built integrations between Microsoft Dynamics 365 CRM and SharePoint Lists using internal APIs.",
      "Created an internal app to make CRM and SharePoint data easier to access and modify.",
      "Built a SharePoint-embeddable interface for viewing extracted economic data.",
      "Implemented Azure MSAL authentication for secure Microsoft account login.",
    ],
  },
  {
    company: "MindNation",
    role: "Front-End Developer",
    period: "2023 - 2025 | Freelance",
    icon: HiOutlineChatBubbleLeftRight,
    bullets: [
      "Added new features, improved existing screens, and fixed UI/application bugs.",
      "Integrated Agora web conferencing and built micro-break reminders.",
      "Built dashboards, charts, landing pages, and other interactive UI components.",
      "Developed a WordPress website using Elementor for moniqueong.com.",
    ],
  },
  {
    company: "Duke Software Development Center",
    role: "Software Engineer II",
    period: "January 2020 - March 2022",
    icon: HiOutlineCube,
    bullets: [
      "Worked on Duke Connected Equipment Platform, a dashboard used to monitor equipment data from IoT devices.",
      "Built dashboard screens for equipment status, readings, and related device information.",
      "Connected frontend screens with backend services and REST APIs.",
      "Wrote automated tests using BDD and worked in an Agile environment.",
    ],
  },
  {
    company: "Coursebank.ph",
    role: "Front-End Developer",
    period: "February 2023 - October 2024 | Freelance",
    icon: HiOutlineAcademicCap,
    bullets: [
      "Developed a pixel-perfect Coursebank theme from mockup designs.",
      "Applied and customized the Coursebank theme for the Open edX platform.",
      "Worked with designers and developers to apply UI consistently across the learning platform.",
    ],
  },
  {
    company: "KKK Turbo",
    role: "Full Stack Developer",
    period: "November 2019 - February 2020 | Freelance",
    icon: HiOutlineDocumentText,
    bullets: [
      "Gathered requirements with business owners, end users, and management.",
      "Developed a custom ticketing system for operational request tracking.",
      "Developed inventory management features for stock tracking and records.",
    ],
  },
  {
    company: "The Marketing Group",
    role: "Full Stack Developer",
    period: "August 2017 - January 2020",
    icon: HiOutlineGlobeAlt,
    bullets: [
      "Built responsive websites from design requirements and client specifications.",
      "Developed custom WordPress themes, reusable sections, and frontend styling.",
      "Created HTML email templates and handled ongoing maintenance and enhancements.",
    ],
  },
  {
    company: "Ecell Global",
    role: "Software Engineer",
    period: "September 2017 - August 2018",
    icon: HiOutlineShoppingBag,
    bullets: [
      "Developed tools to automate manual processes.",
      "Customized Shopify themes and enhanced e-commerce store features.",
    ],
  },
  {
    company: "JDEV I.T Business Solutions",
    role: "Junior Programmer",
    period: "July 2016 - September 2017",
    icon: HiOutlineCloud,
    bullets: [
      "Developed web applications based on client requirements.",
      "Built HRIS modules and payroll system features for business operations.",
    ],
  },
];

const projects: { name: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { name: "Breeze", icon: HiOutlineAcademicCap },
  { name: "Quantem SOF & Odfjell SOF", icon: HiOutlineTruck },
  { name: "Odfjell Customer Portal", icon: HiOutlineChartBar },
  { name: "Banter App", icon: HiOutlineChatBubbleLeftRight },
  { name: "Trading Economics + Dynamics CRM Integration", icon: HiOutlineDocumentText },
  { name: "MindNation Web App", icon: HiOutlineGlobeAlt },
  { name: "Duke Connected Equipment Platform", icon: HiOutlineCube },
  { name: "Ticketing and Inventory Management System", icon: HiOutlineDocumentText },
  { name: "HRIS and Payroll System", icon: HiOutlineCloud },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored ? stored === "dark" : prefersDark;
    setDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(37,99,235,0.2),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.12),transparent_30%)]" />

      <main className="relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-16 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              Portfolio
            </p>
            <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Jan Brian Villamayor
            </h1>
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-black/30 md:p-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
            Software Engineer | Full Stack Developer | Front-End Developer
          </p>
          <h2 className="max-w-4xl text-3xl font-bold leading-tight text-slate-900 dark:text-slate-100 md:text-5xl">
            Full Stack Developer building reliable web applications, dashboards,
            customer portals, and API-integrated business systems.
          </h2>
          <p className="mt-5 max-w-3xl text-slate-600 dark:text-slate-300 md:text-lg">
            9+ years of experience across frontend development, backend services,
            CMS/e-commerce solutions, internal tools, and remote software delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/Jan-Brian-Villamayor-Resume-ATS.pdf"
              className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-500"
              download
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              View Projects
            </a>
            <a
              href="https://github.com/iamjbpv"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              GitHub
            </a>
          </div>
        </motion.section>

        <section className="mb-20" id="skills">
          <SectionTitle
            title="Technical Skills"
            subtitle="Core technologies and tools used across frontend, backend, cloud, and delivery workflows."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, groupIdx) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: groupIdx * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80"
              >
                <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={`${group.title}-${skill.name}`}
                        className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:bg-slate-700"
                      >
                        {Icon ? <Icon className="text-base text-sky-600 dark:text-sky-400" /> : null}
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="relative mb-20" id="experience">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-sky-100/60 via-transparent to-blue-100/60 dark:from-sky-950/40 dark:via-transparent dark:to-blue-950/40" />
          <SectionTitle title="Professional Experience" subtitle="Full timeline of relevant software engineering and product delivery work." />
          <div className="space-y-6">
            {experience.map((item, idx) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="mb-2 flex items-center gap-3">
                  <item.icon className="text-xl text-sky-600 dark:text-sky-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.company}</h3>
                </div>
                <p className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {item.role} | {item.period}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200 md:text-base">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {item.projects ? (
                  <>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                      Projects
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200 md:text-base">
                      {item.projects.map((project) => (
                        <li key={project}>{project}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </motion.article>
            ))}
          </div>
        </section>

        <section className="relative mb-20" id="projects">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-violet-100/50 via-transparent to-sky-100/50 dark:from-indigo-950/30 dark:via-transparent dark:to-sky-950/30" />
          <SectionTitle title="Featured Project Portfolio" subtitle="Selected projects delivered across logistics, education, healthcare, and business systems." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-500"
              >
                <div className="flex items-center gap-3">
                  <project.icon className="text-xl text-sky-600 dark:text-sky-400" />
                  <span>{project.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-20 rounded-3xl border border-sky-300 bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-white shadow-xl shadow-sky-900/30 md:p-10"
        >
          <h3 className="text-2xl font-bold md:text-3xl">Need the full details?</h3>
          <p className="mt-2 max-w-3xl text-sky-100">
            Download my latest resume to see complete experience, project
            breakdowns, and technical background.
          </p>
          <a
            href="/Jan-Brian-Villamayor-Resume-ATS.pdf"
            className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-sky-700 transition hover:-translate-y-0.5 hover:bg-sky-50"
            download
          >
            Download Resume (PDF)
          </a>
        </motion.section>

        <section id="contact" className="mb-8">
          <SectionTitle title="Contact" subtitle="Available for remote/WFH software engineering opportunities." />
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200">
            <p>Email: janbrian.villamayor@outlook.com</p>
            <p>
              LinkedIn: <a className="text-sky-600 hover:underline dark:text-sky-400" href="https://www.linkedin.com/in/jbvillamayor/" target="_blank" rel="noreferrer">linkedin.com/in/jbvillamayor</a>
            </p>
            <p>
              GitHub: <a className="text-sky-600 hover:underline dark:text-sky-400" href="https://github.com/iamjbpv" target="_blank" rel="noreferrer">github.com/iamjbpv</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
