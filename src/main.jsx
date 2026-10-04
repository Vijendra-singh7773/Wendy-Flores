import React from "react";

import { createRoot } from "react-dom/client";

import { motion, useScroll, useTransform } from "framer-motion";

import {

  ArrowDownRight, ArrowUpRight, Check, ChevronRight, Globe2, Home,

  Instagram, Mail, MapPin, Menu, Phone, Search, Sparkles, X

} from "lucide-react";

import "./styles.css";



const whatsapp = "https://wa.me/12895017712?text=" + encodeURIComponent(

  "Hi Wendy! I came across your profile and would love to talk about buying, selling, or renting in Niagara."

);

const phone = "tel:+12895017712";

const email = "mailto:wendy@example.com?subject=Real Estate Inquiry";



const reveal = {

  hidden: { opacity: 0, y: 45 },

  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }

};



function App() {

  const [open, setOpen] = React.useState(false);

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 150]);

  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.07]);



  const go = (id) => {

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);

  };



  return (

    <div className="site">

      <motion.div className="progress" style={{ scaleX: scrollYProgress }} />



      <header className="nav">

        <button className="brand" onClick={() => go("home")} aria-label="Wendy Flores home">

          <span className="brandMark">WF</span>

          <span><b>Wendy Flores</b><small>NIAGARA REALTOR®</small></span>

        </button>



        <nav className={open ? "navLinks open" : "navLinks"}>

          <button onClick={() => go("about")}>About</button>

          <button onClick={() => go("services")}>Services</button>

          <button onClick={() => go("niagara")}>Niagara</button>

          <button onClick={() => go("contact")}>Contact</button>

          <a className="navCta" href={whatsapp} target="_blank" rel="noreferrer">Let's Talk <ArrowUpRight size={16}/></a>

        </nav>



        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">

          {open ? <X/> : <Menu/>}

        </button>

      </header>



      <main>

        <section id="home" className="hero">

          <div className="heroGlow one" />

          <div className="heroGlow two" />

          <div className="heroGrid" />

          <motion.div className="heroImageWrap" style={{ y: heroY, scale: heroScale }}>

            <img src="/wendy-flores.png" alt="Wendy Flores" className="heroImage"/>

          </motion.div>

          <div className="heroShade" />



          <div className="heroContent">

            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:.15,duration:.7}} className="eyebrow">

              <span className="dot"/> NIAGARA • ONTARIO

            </motion.div>

            <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.85}}>

              Find a place<br/><em>to call home.</em>

            </motion.h1>

            <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.4,duration:.7}}>

              Bilingual real estate guidance with a detail-first approach.

              Buy, sell or rent with confidence — in English or Español.

            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.52,duration:.7}} className="heroActions">

              <a href={whatsapp} target="_blank" rel="noreferrer" className="btn primary">

                Start a conversation <ArrowUpRight size={18}/>

              </a>

              <button className="btn ghost" onClick={() => go("services")}>Explore services <ArrowDownRight size={18}/></button>

            </motion.div>

          </div>



          <div className="heroSide">

            <span>EN</span><i></i><span>ES</span>

          </div>



          <button className="scrollCue" onClick={() => go("about")}>

            <span>Scroll to explore</span><ArrowDownRight size={17}/>

          </button>



          <div className="heroBadge">

            <Sparkles size={17}/>

            <span>DETAIL-ORIENTED<br/><b>REAL ESTATE SERVICE</b></span>

          </div>

        </section>



        <section className="ticker">

          <div className="tickerTrack">

            {["BUY", "SELL", "RENT", "NIAGARA", "ENGLISH", "ESPAÑOL", "BUY", "SELL", "RENT", "NIAGARA"].map((x,i)=>

              <span key={i}>{x}<b>✦</b></span>

            )}

          </div>

        </section>



        <section id="about" className="about section">

          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="sectionLabel">01 / ABOUT</motion.div>

          <div className="aboutGrid">

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="aboutTitle">

              <p className="kicker">A more thoughtful way to move.</p>

              <h2>Numbers matter.<br/><span>People matter more.</span></h2>

            </motion.div>

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="aboutCopy">

              <p>

                With an accounting background and a detail-oriented mindset, Wendy brings

                clarity to one of life's biggest decisions. Her goal is simple: make every

                step feel informed, personal and confident.

              </p>

              <p>

                Whether you're buying your first home, selling a property or looking for

                the right rental, you'll get straightforward guidance in English or Español.

              </p>

              <a href={whatsapp} target="_blank" rel="noreferrer" className="textLink">Let's talk about your next move <ArrowUpRight size={17}/></a>

            </motion.div>

          </div>

        </section>



        <section id="services" className="services section">

          <div className="servicesHead">

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>

              <div className="sectionLabel light">02 / SERVICES</div>

              <h2>From first search<br/><i>to final signature.</i></h2>

            </motion.div>

            <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>

              A personal, organized approach built around what you need — not a one-size-fits-all process.

            </motion.p>

          </div>



          <div className="serviceGrid">

            {[

              ["01","BUY","Find the right property with a strategy that fits your lifestyle, budget and goals.","Start your search"],

              ["02","SELL","Position your property to stand out, attract attention and move toward the right offer.","Talk about selling"],

              ["03","RENT","Take the stress out of the rental search with clear guidance from shortlist to move-in.","Find a rental"]

            ].map(([n,title,desc,cta],i)=>(

              <motion.a

                href={whatsapp} target="_blank" rel="noreferrer" key={title}

                variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}

               transition={{delay:i * 0.08}} className="serviceCard"

              >

                <div className="serviceTop"><span>{n}</span><ArrowUpRight/></div>

                <div className="serviceIcon">{title==="BUY"?<Search/>:title==="SELL"?<Home/>:<MapPin/>}</div>

                <h3>{title}</h3>

                <p>{desc}</p>

                <span className="serviceLink">{cta} <ChevronRight size={16}/></span>

              </motion.a>

            ))}

          </div>

        </section>



        <section id="niagara" className="niagara section">

          <div className="niagaraVisual">

            <div className="mapLines" />

            <div className="locationCard">

              <MapPin size={18}/>

              <div><small>LOCAL FOCUS</small><strong>NIAGARA, ON</strong></div>

            </div>

            <div className="circleText">NIAGARA • HOME • COMMUNITY • NIAGARA • HOME • COMMUNITY •</div>

          </div>

          <div className="niagaraCopy">

            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="sectionLabel">03 / LOCAL KNOWLEDGE</motion.div>

            <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>Local insight<br/><i>changes everything.</i></motion.h2>

            <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>

              Your next address is more than a pin on a map. It's a neighbourhood,

              a commute, a routine and a community. Let's find the fit that makes sense for you.

            </motion.p>

            <div className="miniStats">

              <div><b>EN</b><span>English service</span></div>

              <div><b>ES</b><span>Servicio en Español</span></div>

              <div><b>24/7</b><span>Easy to reach</span></div>

            </div>

            <a className="btn dark" href={whatsapp} target="_blank" rel="noreferrer">Ask about Niagara <ArrowUpRight size={18}/></a>

          </div>

        </section>



        <section className="quoteBand">

          <div className="quoteMark">“</div>

          <motion.blockquote variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>

            Your next chapter deserves<br/><em>a better beginning.</em>

          </motion.blockquote>

        </section>



        <section id="contact" className="contact section">

          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="sectionLabel">04 / CONTACT</motion.div>

          <div className="contactGrid">

            <div>

              <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>

                Ready when<br/><i>you are.</i>

              </motion.h2>

              <p className="contactIntro">Tell Wendy what you're looking for and start the conversation today.</p>

              <div className="contactLinks">

                <a href={phone}><Phone/><span><small>CALL</small>289-501-7712</span></a>

                <a href={whatsapp} target="_blank" rel="noreferrer"><span className="wa">WA</span><span><small>WHATSAPP</small>Message Wendy</span></a>

              </div>

            </div>



            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}} className="contactCard">

              <div className="contactCardTop">

                <span>LET'S TALK</span><Globe2 size={19}/>

              </div>

              <h3>What can I help<br/>you with?</h3>

              <div className="choiceRow">

                <a href={whatsapp} target="_blank" rel="noreferrer">I'm buying <ArrowUpRight size={15}/></a>

                <a href={whatsapp} target="_blank" rel="noreferrer">I'm selling <ArrowUpRight size={15}/></a>

                <a href={whatsapp} target="_blank" rel="noreferrer">I'm renting <ArrowUpRight size={15}/></a>

              </div>

              <a className="bigContact" href={whatsapp} target="_blank" rel="noreferrer">

                <span>Send a message</span><ArrowUpRight/>

              </a>

            </motion.div>

          </div>

        </section>

      </main>



      <footer>

        <div className="footerBrand"><span className="brandMark">WF</span><div><b>Wendy Flores</b><small>NIAGARA REALTOR®</small></div></div>

        <div className="footerCenter">ENGLISH · ESPAÑOL · NIAGARA</div>

        <div className="footerRight"><a href={phone}><Phone size={15}/></a><a href={whatsapp} target="_blank" rel="noreferrer"><span>WA</span></a></div>

      </footer>

    </div>

  );

}



createRoot(document.getElementById("root")).render(<App />);
