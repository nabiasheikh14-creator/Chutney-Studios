import Image from "next/image";
import { HomePageAnimations } from "@/components/HomePageAnimations";
import { Navigation } from "@/components/Navigation";

const heroWords = ["Darling,", "zero", "never", "looked", "this", "good."];

const services = [
  {
    title: "Brand Identity & Strategy",
    description: "Names, positioning, voice, visuals, and the belief system underneath it all.",
    tone: "ivory",
  },
  {
    title: "Marketing & Campaigns",
    description: "Launch energy, campaign ideas, and the kind of messaging people repeat.",
    tone: "crimson",
  },
  {
    title: "Web & Digital Presence",
    description: "Websites and digital touchpoints that make your first impression feel expensive.",
    tone: "black",
  },
  {
    title: "Social Media & Content",
    description: "Content systems with taste, rhythm, and a reason to keep watching.",
    tone: "sage",
  },
  {
    title: "Events & Experiences",
    description: "Real-world brand moments for launches, communities, and main-character memories.",
    tone: "sand",
  },
  {
    title: "Google Ads",
    description: "Intent-led campaigns that turn search demand into actual momentum.",
    tone: "ivory",
  },
];

const audience = ["Startups", "Small businesses", "Personal brands", "Creators"];

const proofItems = [
  {
    name: "SpurSol",
    description: "Technology partner with a sharper digital presence.",
    logo: "/assets/clients/spursol-logo.svg",
  },
  {
    name: "Cartel",
    description: "Brand world in progress.",
  },
  {
    name: "Zero Club",
    description: "Placeholder for the next founder story.",
  },
  {
    name: "Lala Land Co.",
    description: "Placeholder for a dream turning real.",
  },
];

export default function Home() {
  return (
    <HomePageAnimations>
      <Navigation />
      <main id="top">
        <section className="hero section-dark" aria-labelledby="hero-title">
          <div className="grain-overlay" aria-hidden="true" />
          <Image
            className="hero__mark"
            src="/assets/logos/sifarr-submark.svg"
            alt=""
            width={620}
            height={620}
            priority
          />
          <div className="hero__content">
            <p className="eyebrow eyebrow--sand">Sifarr Creative Studio</p>
            <h1 id="hero-title" className="hero__title">
              {heroWords.map((word) => (
                <span
                  className={`hero-word ${word === "zero" ? "hero-word--accent" : ""}`}
                  key={word}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero__lede reveal">
              We build brands from the ground up, and make sure everyone notices.
            </p>
            <a className="button button--hero reveal" href="#connect">
              Start from sifar <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </section>

        <section className="intro section-dark" id="about" aria-labelledby="intro-title">
          <div className="grain-overlay" aria-hidden="true" />
          <Image
            className="intro__watermark"
            src="/assets/logos/sifarr-primary.svg"
            alt=""
            width={900}
            height={450}
          />
          <div className="section-index" aria-hidden="true">
            01
          </div>
          <div className="intro__copy">
            <p className="eyebrow eyebrow--sand reveal">The zero story</p>
            <h2 id="intro-title" className="section-title reveal">
              Sifar <bdi dir="rtl">(صفر)</bdi> is where the whole thing starts.
            </h2>
            <div className="intro__body reveal">
              <p>
                Sifar is derived from the Urdu word for zero. For us, Sifarr is our
                baby creative brand-building studio for the ones starting from scratch.
              </p>
              <p>
                We have been at zero too. We know exactly how you feel, and trust me,
                you will be seen.
              </p>
            </div>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">What we build.</p>
            <h2 id="services-title" className="section-title reveal">
              Brand worlds with bite.
            </h2>
          </div>
          <div className="services__rail" aria-label="Sifarr services">
            {services.map((service, index) => (
              <article
                className={`service-card service-card--${service.tone}`}
                key={service.title}
              >
                <span className="service-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="audience" aria-labelledby="audience-title">
          <div className="audience__inner">
            <p className="eyebrow reveal">Who we are for</p>
            <h2 id="audience-title" className="audience__title wipe-copy">
              Built for the ones who start with nothing but a vision.
            </h2>
            <div className="audience__list" aria-label="Ideal clients">
              {audience.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="audience__copy wipe-copy">
              If you are building from sifar, we are here for you. Your lala land will
              be real one day, trust us.
            </p>
          </div>
          <div className="marquee" aria-hidden="true">
            <div className="marquee__track">
              startups / creators / personal brands / small businesses / startups /
              creators / personal brands / small businesses /
            </div>
          </div>
        </section>

        <section className="value section-dark" aria-labelledby="value-title">
          <div className="grain-overlay" aria-hidden="true" />
          <div className="rule-line" aria-hidden="true" />
          <h2 id="value-title" className="value__title reveal">
            We do not just build brands. We build belief.
          </h2>
          <p className="value__copy reveal">
            Most agencies show up when you already have something. We show up at zero.
          </p>
          <div className="rule-line" aria-hidden="true" />
        </section>

        <section className="proof" id="work" aria-labelledby="proof-title">
          <div className="section-heading">
            <p className="eyebrow">Proof, not noise</p>
            <h2 id="proof-title" className="section-title reveal">
              Brands that started at zero.
            </h2>
          </div>
          <div className="proof__grid">
            {proofItems.map((item) => (
              <article className="proof-card" key={item.name}>
                <div className="proof-card__logo">
                  {item.logo ? (
                    <Image src={item.logo} alt={`${item.name} logo`} width={260} height={75} />
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta section-dark" id="connect" aria-labelledby="cta-title">
          <div className="grain-overlay" aria-hidden="true" />
          <Image
            className="final-cta__submark"
            src="/assets/logos/sifarr-submark.svg"
            alt=""
            width={520}
            height={520}
          />
          <div className="final-cta__copy">
            <p className="eyebrow eyebrow--sand reveal">From zero to seen</p>
            <h2 id="cta-title" className="final-cta__title reveal">
              Ready to make zero look good?
            </h2>
            <a className="button button--light reveal" href="mailto:hello@sifarr.co">
              Let&apos;s Build <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </section>
      </main>
    </HomePageAnimations>
  );
}
