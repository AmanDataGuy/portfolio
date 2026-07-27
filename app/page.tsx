import Image from "next/image";
import Reveal from "@/components/Reveal";

const STACK = [
  "LangGraph",
  "Google ADK",
  "MCP",
  "GraphRAG",
  "Hybrid Search",
  "GRPO/RLVR",
  "litellm",
  "QLoRA",
  "Qwen2-VL",
  "Qdrant",
  "Neo4j",
  "AWS",
  "GCP",
  "Terraform",
];

const PROJECTS = [
  {
    name: "WealthOS",
    tagline: "Personal financial intelligence platform.",
    body: "8-agent LangGraph state machine orchestrating 45 tools across 7 MCP servers; hybrid dense+sparse RAG over SEC 10-K filings (Qdrant, Cohere rerank).",
    result: "Generates a full investment memo in 60–90s.",
    stack: ["LangGraph", "FastAPI", "Qdrant", "DSPy"],
    repo: "https://github.com/AmanDataGuy/WealthOS",
    demo: "http://13.203.227.73:8501",
    screenshot: "/wealthos.png",
  },
  {
    name: "Resolv",
    tagline: "Guardrail refund agent & pass³ reliability benchmark.",
    body: "Harness-first refund agent on Google ADK + litellm — 2 LLM stages (extract, resolve) only propose; 7 first-match policy rules in deterministic Python are the sole write path, vetoing every payout before money moves. Refund caps derive from the order record, not the customer's claim.",
    result:
      "τ-bench-style eval vs an adversarial LLM customer: pass³ 0.96, 0 unauthorized refunds across 200 runs — harness off leaked $2,120, harness on leaked $0.",
    stack: ["Google ADK", "litellm", "GRPO/RLVR", "Qwen2.5"],
    repo: "https://github.com/AmanDataGuy/Resolv",
    demo: "http://13.206.104.244:8501",
    screenshot: "/resolv.png",
  },
  {
    name: "RetailGraph",
    tagline: "Grocery intelligence platform.",
    body: "Fine-tuned Qwen2-VL-7B (QLoRA) for entity extraction across 11 fields; benchmarked GraphRAG against vector-only search on constraint queries.",
    result:
      "94.2% exact-match extraction; vector-only search scored 0/20 on constraint queries.",
    stack: ["Qwen2-VL", "QLoRA", "Neo4j", "GraphRAG"],
    repo: "https://github.com/AmanDataGuy/RetailGraph",
    demo: "http://13.204.65.185:8501/",
    screenshot: "/retailgraph.png",
  },
];

const EXPERIENCE = [
  {
    role: "AI Agent Developer Intern",
    org: "Genotek Global · Remote",
    dates: "May 2026 – Present",
    body: "Built a Telegram field-sales bot on AWS EC2 with GPS anti-cheat verification, and an LLM meeting-debrief pipeline (Whisper → Groq LLaMA 3.1 70B → HubSpot) on a 15-state FSM.",
  },
  {
    role: "Data Science Intern",
    org: "Climate Resilience Observatory, IIIT Lucknow",
    dates: "Sep 2025 – Nov 2025",
    body: "Modeled rainfall forecasts across 72 Uttar Pradesh districts from NASA POWER and ECMWF ERA5 data with the Office of the Relief Commissioner, Govt. of UP.",
  },
];

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 7 9-7" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    title: "Multi-Agent Orchestration",
    body: "LangGraph and Google ADK state machines, tool routing across MCP servers, human-in-the-loop escalation.",
  },
  {
    title: "Agentic RAG & Knowledge Systems",
    body: "Hybrid dense+sparse retrieval, GraphRAG over Qdrant and Neo4j, reranking pipelines grounded in real documents.",
  },
  {
    title: "LLM Fine-Tuning & Evaluation",
    body: "QLoRA and DPO fine-tune loops gated by LLM-as-judge eval harnesses before anything ships.",
  },
  {
    title: "Production Deployment",
    body: "Terraform-provisioned infra on AWS and GCP Cloud Run — agents that run as services, not scripts.",
  },
];

const LINKS = {
  github: "https://github.com/AmanDataGuy",
  linkedin: "https://www.linkedin.com/in/aman-dataguy/",
  email: "mailto:amands.5153@gmail.com",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 sm:px-10">
      {/* ---------- Nav ---------- */}
      <nav className="flex items-center justify-between py-6">
        <span className="font-display text-lg text-green-dark">
          Aman Sharma
        </span>
        <div className="flex items-center gap-6 text-sm text-grey">
          <a
            href="#projects"
            className="transition-colors hover:text-green-mid"
          >
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-green-mid">
            Contact
          </a>
        </div>
      </nav>

      {/* ---------- Section 1: Hero ---------- */}
      <section className="grid items-center gap-10 pt-10 pb-14 sm:pt-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-grey-muted">
            — Who I Am
          </p>
          <h1 className="font-display mt-4 text-5xl text-green-dark sm:text-6xl">
            Aman <em className="italic font-light">Sharma</em>
          </h1>
          <p className="mt-4 text-lg font-medium text-ink">
            Agentic AI engineer — building multi-agent systems engineered like
            products, not demos.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-grey">
            I build multi-agent systems with LangGraph, Google ADK, and MCP —
            shipped across domains like finance, retail, and voice — deployed
            on AWS and GCP with eval gates and Terraform, not notebooks.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-md bg-green-dark px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-green-mid"
            >
              View projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-green-dark px-5 py-2.5 text-sm font-medium text-green-dark transition-colors hover:border-green-mid hover:text-green-mid"
            >
              Resume
            </a>
          </div>

          <div className="mt-7 flex items-center gap-5 text-sm text-grey">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-green-mid"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-green-mid"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href={LINKS.email}
              className="flex items-center gap-2 transition-colors hover:text-green-mid"
            >
              <MailIcon />
              Email
            </a>
          </div>
        </div>

        <div className="portrait mx-auto aspect-square w-80 sm:w-[25rem]">
          <Image
            src="/photo.jpg"
            alt="Aman Sharma, outdoors in natural daylight"
            width={640}
            height={640}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Stat row */}
      <div className="flex flex-wrap gap-x-10 gap-y-3 pb-12 text-sm text-grey">
        <span>
          IIT JAM Math Statistics{" "}
          <strong className="font-medium text-green-dark">AIR 219</strong>
        </span>
        <span>
          <strong className="font-medium text-green-dark">IIIT Lucknow</strong>{" "}
          — M.Sc. Data Science
        </span>
      </div>

      {/* Marquee */}
      <div className="marquee border-y border-surface py-4">
        <div className="marquee-track text-sm text-grey-muted">
          {[0, 1].map((copy) => (
            <span
              key={copy}
              aria-hidden={copy === 1}
              className="whitespace-nowrap"
            >
              {STACK.map((tech) => (
                <span key={tech} className="mx-4">
                  {tech}
                  <span className="ml-8">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* What I Build */}
      <section className="py-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-grey-muted">
          — Where I&apos;m Headed
        </p>
        <h2 className="font-display mt-3 text-3xl text-green-dark">
          What I Build
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl bg-surface p-6 sm:p-7"
            >
              <h3 className="font-display text-lg text-green-dark">
                {cap.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-grey">
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Section 2: Projects ---------- */}
      <section id="projects" className="scroll-mt-10 py-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-grey-muted">
          — Selected Work
        </p>
        <h2 className="font-display mt-3 text-3xl text-green-dark">Projects</h2>

        <div className="mt-8 flex flex-col gap-5">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <div className="rounded-xl bg-surface p-6 sm:p-8">
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={`${project.name} UI screenshot`}
                    width={1200}
                    height={675}
                    className="mb-5 w-full rounded-lg border border-grey-muted/20 object-cover"
                  />
                ) : (
                  <div className="mb-5 flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-grey-muted/40 text-xs text-grey-muted">
                    Screenshot coming soon
                  </div>
                )}

                <h3 className="font-display text-xl text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-grey">{project.tagline}</p>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-grey">
                  {project.body}
                </p>
                <p className="mt-2 text-[15px] font-semibold text-ink">
                  {project.result}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-grey-muted/40 px-3 py-1 text-xs text-grey"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-medium">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-green-dark px-4 py-2 text-bg transition-colors hover:bg-green-mid"
                    >
                      Try ↗
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-dark underline-offset-4 transition-colors hover:text-green-mid hover:underline"
                  >
                    Code ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-grey-muted">
          — Experience
        </p>
        <h2 className="font-display mt-3 text-3xl text-green-dark">
          Experience
        </h2>

        <div className="mt-8 flex flex-col gap-6">
          {EXPERIENCE.map((job) => (
            <div key={job.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg text-ink">{job.role}</h3>
                <span className="text-xs text-grey-muted">{job.dates}</span>
              </div>
              <p className="text-sm text-grey">{job.org}</p>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-grey">
                {job.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Section 3: Contact / footer ---------- */}
      <footer
        id="contact"
        className="scroll-mt-10 border-t border-surface py-14 text-center"
      >
        <p className="font-display text-2xl text-green-dark">
          Want to talk agents? Get in touch.
        </p>
        <div className="mt-5 flex justify-center gap-6 text-grey">
          <a
            href={LINKS.email}
            aria-label="Email"
            className="transition-colors hover:text-green-mid"
          >
            <MailIcon />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-green-mid"
          >
            <LinkedInIcon />
          </a>
        </div>
      </footer>
    </main>
  );
}
