"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowDown, ArrowUpRight, Camera, ChevronLeft, ChevronRight, Pause, Play, Plus, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cafe } from "@/data/cafe";
import { Motif } from "@/components/Motif";
import { LanternMark } from "@/components/LanternMark";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

const photographs = cafe.gallery;
const heroLines = cafe.copy.heroTitle.split("\n");
const roomLines = cafe.copy.roomTitle.split("\n");
const drinksLines = cafe.copy.drinksTitle.split("\n");
const eveningLines = cafe.copy.eveningTitle.split("\n");
const visitLines = cafe.copy.visitTitle.split("\n");

function Photo({ file, alt, className, priority = false, eager = false }: { file: string; alt: string; className?: string; priority?: boolean; eager?: boolean }) {
  return <Image src={`/images/${file}`} alt={alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 60vw, 650px" className={className} preload={priority} loading={priority ? undefined : eager ? "eager" : "lazy"} />;
}

export function CafeExperience() {
  const experience = useRef<HTMLDivElement>(null);
  const galleryTrigger = useRef<HTMLElement | null>(null);
  const [paused, setPaused] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  function openGallery(index: number, event: MouseEvent<HTMLButtonElement>) {
    galleryTrigger.current = event.currentTarget;
    setPhotoIndex(index);
    setGalleryOpen(true);
  }

  function changePhoto(direction: number) {
    setPhotoIndex(index => (index + direction + photographs.length) % photographs.length);
  }

  useEffect(() => {
    const root = experience.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add({ all: "(min-width: 0px)", desktop: "(min-width: 900px)", reduced: "(prefers-reduced-motion: reduce)" }, context => {
      if (context.conditions?.reduced || paused) return;
      const desktop = context.conditions?.desktop;
      gsap.from(".hero-title .line-inner", { y: 24, rotation: -1, duration: 1, stagger: 0.12, ease: "power3.out" });
      gsap.from(".hero-main-photo", { rotation: -5, y: 18, duration: 1.2, ease: "power3.out" });
      const heroTimeline = gsap.timeline({ scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 } });
      heroTimeline.to(".hero-scroll-layer", { y: desktop ? -50 : -20, ease: "none" }, 0)
        .to(".hero-pattern-scroll", { rotation: 35, y: 45, ease: "none" }, 0)
        .to(".hero-title", { y: -20, ease: "none" }, 0);
      const roomTimeline = gsap.timeline({ scrollTrigger: { trigger: ".room-scene", start: desktop ? "top top" : "top bottom", end: desktop ? "bottom bottom" : "bottom top", scrub: 1.1 } });
      roomTimeline.to(".room-photo-main", { y: desktop ? -35 : -12, rotation: -2, ease: "none" }, 0)
        .to(".room-photo-textile", { x: desktop ? 35 : 8, y: desktop ? -20 : -8, rotation: 8, ease: "none" }, 0)
        .to(".room-photo-detail", { x: desktop ? -30 : -8, y: desktop ? 35 : 12, rotation: -6, ease: "none" }, 0)
        .to(".room-pattern-scroll", { rotation: 65, ease: "none" }, 0);
      gsap.fromTo(".arrival-image", { y: 24, rotation: -2 }, { y: -18, rotation: 1, ease: "none", scrollTrigger: { trigger: ".visit", start: "top bottom", end: "bottom top", scrub: 1 } });
      gsap.utils.toArray<HTMLElement>(".reveal-line").forEach(element => {
        gsap.from(element, { y: 25, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 92%", toggleActions: "play none none reverse" } });
      });
      return () => ScrollTrigger.refresh();
    }, root);
    return () => media.revert();
  }, [paused]);

  useEffect(() => {
    const target = experience.current?.querySelector<HTMLElement>(".hero-collage");
    const layer = target?.querySelector<HTMLElement>(".pointer-layer");
    if (!target || !layer || paused || !window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    function move(event: globalThis.MouseEvent) {
      const bounds = target!.getBoundingClientRect();
      layer!.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 12}px`);
      layer!.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height - 0.5) * 12}px`);
    }
    function reset() { layer!.style.setProperty("--pointer-x", "0px"); layer!.style.setProperty("--pointer-y", "0px"); }
    target.addEventListener("mousemove", move);
    target.addEventListener("mouseleave", reset);
    return () => { target.removeEventListener("mousemove", move); target.removeEventListener("mouseleave", reset); reset(); };
  }, [paused]);

  return (
    <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
      <div ref={experience} className="experience" data-motion={paused ? "paused" : "running"}>
        <a className="skip-link" href="#continut">Mergi la conținut</a>
        <header className="site-header">
          <a className="wordmark" href="#acasa" aria-label="Twenty Eight Caffee — început">twenty eight<span>CAFFEE · BUCUREȘTI</span></a>
          <nav className="main-nav" aria-label="Navigație principală"><a href="#locul">Locul</a><a href="#bauturi">Băuturi</a><a href="#vizita">Ne vedem aici</a></nav>
          <div className="header-actions"><button className="motion-toggle" type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? "Pornește animațiile" : "Oprește animațiile"} aria-pressed={paused} title={paused ? "Pornește animațiile" : "Oprește animațiile"}>{paused ? <Play size={15} /> : <Pause size={15} />}</button><a className="header-directions" href={cafe.maps} target="_blank" rel="noreferrer">Cum ajungi <ArrowUpRight size={17} /></a></div>
        </header>

        <main id="continut">
          <section className="hero paper" id="acasa" aria-labelledby="hero-heading">
            <div className="hero-wall" aria-hidden="true" />
            <div className="hero-pattern-scroll decorative"><Motif className="hero-flower" /></div>
            <div className="hero-small-pattern decorative"><Motif variant="rosette" /></div>
            <div className="hero-copy"><p className="eyebrow"><LanternMark className="brand-lantern" /> {cafe.tagline}</p><h1 id="hero-heading" className="hero-title">{heroLines.map((line, index) => <span className={`line${index === heroLines.length - 1 ? " hero-location-line" : ""}`} key={line}><span className="line-inner">{index === heroLines.length - 1 ? <em>{line}</em> : line}</span></span>)}</h1><p className="hero-intro">{cafe.copy.heroIntro}</p><a className="text-link" href="#locul">{cafe.copy.heroLink} <ArrowDown size={17} /></a></div>
            <div className="hero-collage"><div className="hero-scroll-layer"><div className="pointer-layer"><button className="photo-button hero-main-photo" onClick={event => openGallery(0, event)} aria-label="Privește interiorul cafenelei"><Photo file="doorway.jpg" alt={photographs[0].alt} priority /><span className="photo-open"><Plus size={18} /></span></button><div className="hero-photo-tape" aria-hidden="true" /><span className="handwritten hero-note">{cafe.copy.heroNote[0]}<br />{cafe.copy.heroNote[1]}</span></div></div><button className="photo-button hero-lamp-photo" onClick={event => openGallery(1, event)} aria-label="Descoperă felinarele din interior"><Photo file="lanterns.jpg" alt={photographs[1].alt} eager /><span className="photo-open"><Plus size={17} /></span></button><span className="hero-image-caption">{cafe.copy.heroCaption}</span></div>
            <div className="hero-bottom"><a href={cafe.maps} target="_blank" rel="noreferrer"><span className="eyebrow">{cafe.copy.heroAddressLabel}</span>Ion Câmpineanu 23 <ArrowUpRight size={16} /></a><span className="hero-bottom-middle">{cafe.copy.heroStripNote[0]}<br />{cafe.copy.heroStripNote[1]}</span><a href="#bauturi" className="circle-link" aria-label="Explorează băuturile"><span>Băuturile</span><ArrowDown size={23} /></a></div>
          </section>

          <section className="room-scene" id="locul" aria-labelledby="room-heading">
            <div className="room-sticky">
              <div className="room-texture" aria-hidden="true" />
              <div className="room-pattern-scroll decorative"><Motif variant="rosette" className="room-flower" /></div>
              <div className="room-heading"><span className="eyebrow">{cafe.copy.roomEyebrow}</span><h2 id="room-heading">{roomLines[0]}<br /><em>{roomLines[1]}</em></h2><p>{cafe.copy.roomBody}</p><span className="room-scroll-note"><ArrowDown size={16} /> {cafe.copy.roomScrollNote}</span></div>
              <div className="room-collage">
                <button className="photo-button room-photo-main" onClick={event => openGallery(1, event)} aria-label="Privește lumina felinarelor"><Photo file="lanterns.jpg" alt={photographs[1].alt} /><span className="photo-open"><Plus size={19} /></span></button>
                <button className="photo-button room-photo-textile" onClick={event => openGallery(3, event)} aria-label="Privește de aproape broderia florală"><Photo file="embroidery.jpg" alt={photographs[3].alt} /><span className="photo-open"><Plus size={17} /></span></button>
                <button className="photo-button room-photo-detail" onClick={event => openGallery(2, event)} aria-label="Descoperă detaliile felinarului argintiu"><Photo file="silver-lamp.jpg" alt={photographs[2].alt} /><span className="photo-open"><Plus size={17} /></span></button>
                <span className="room-caption handwritten">{cafe.copy.roomCaption[0]}<br />{cafe.copy.roomCaption[1]}</span>
              </div>
              <div className="room-floor-line" aria-hidden="true"><span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span /></div>
            </div>
          </section>

          <section className="drinks paper" id="bauturi" aria-labelledby="drinks-heading">
            <div className="drinks-intro"><div><p className="eyebrow">{cafe.copy.drinksEyebrow}</p><h2 id="drinks-heading" className="reveal-line">{drinksLines[0]}<br /><em>{drinksLines[1]}</em></h2></div><div className="drinks-intro-aside"><Motif variant="rosette" className="drinks-flower decorative" /><p>{cafe.copy.drinksIntro}</p></div></div>
            <div className="drinks-ledger">{cafe.drinks.map(drink => <article className="drink-row" key={drink.id}><div className="drink-name"><span className="eyebrow">{drink.subtitle}</span><h3>{drink.title}</h3></div><p>{drink.description}</p><span className="drink-items">{drink.items.join(" · ")}</span><LanternMark className="drink-lantern" /></article>)}</div>
            <div className="drinks-tail"><span>{cafe.copy.drinksContact}</span><a className="text-link" href={cafe.tel}>{cafe.phone} <ArrowUpRight size={17} /></a></div>
          </section>

          <section className="interlude" aria-label="Culoare și lumină"><div className="interlude-pattern decorative"><Motif /></div><p>{eveningLines[0]}<br /><em>{eveningLines[1]}</em></p><span className="eyebrow">TWENTY EIGHT · CAFFEE & MORE</span><div className="interlude-small decorative"><Motif variant="rosette" /></div></section>

          <section className="visit paper" id="vizita" aria-labelledby="visit-heading">
            <div className="arrival-art"><div className="arrival-pattern decorative"><Motif /></div><div className="arrival-image"><button className="photo-button arrival-main" onClick={event => openGallery(4, event)} aria-label="Privește fațada și Vespa vișinie"><Photo file="vespa-burgundy.jpg" alt={photographs[4].alt} /><span className="photo-open"><Plus size={18} /></span></button><span className="arrival-caption">{cafe.copy.arrivalCaption}</span></div><button className="photo-button arrival-pink" onClick={event => openGallery(5, event)} aria-label="Privește Vespa roz de la terasă"><Photo file="vespa-pink.jpg" alt={photographs[5].alt} /><span className="photo-open"><Plus size={17} /></span></button><span className="handwritten arrival-note">{cafe.copy.arrivalNote[0]}<br />{cafe.copy.arrivalNote[1]}</span></div>
            <div className="visit-copy"><p className="eyebrow">{cafe.copy.visitEyebrow}</p><h2 id="visit-heading" className="reveal-line">{visitLines[0]}<br /><em>{visitLines[1]}</em></h2><address>{cafe.address}</address><a className="primary-link" href={cafe.maps} target="_blank" rel="noreferrer">Vezi cum ajungi <ArrowUpRight size={20} /></a><div className="visit-details"><div><span className="eyebrow">{cafe.copy.hoursLabel}</span>{cafe.hours.map(hours => <p key={hours.days}><span>{hours.days}</span><strong>{hours.opens}–{hours.closes}</strong></p>)}</div><div className="visit-phone"><span className="eyebrow">{cafe.copy.contactLabel}</span><a href={cafe.tel}>{cafe.phone} <ArrowUpRight size={16} /></a></div></div></div>
          </section>
        </main>

        <footer className="site-footer"><div className="footer-top"><a href={cafe.instagram} target="_blank" rel="noreferrer"><Camera size={18} /> {cafe.copy.instagramLabel} <ArrowUpRight size={17} /></a><a href={cafe.mailto}>{cafe.email} <ArrowUpRight size={17} /></a></div><div className="footer-brand" aria-label="Twenty Eight Caffee"><span>twenty eight</span><Motif variant="rosette" className="footer-flower decorative" /></div><div className="footer-bottom"><span>{cafe.name} · București</span><span>{cafe.tagline}</span><a href={cafe.facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a href="#acasa">Înapoi sus ↑</a></div></footer>
      </div>

      <DialogContent onCloseAutoFocus={event => { event.preventDefault(); galleryTrigger.current?.focus(); }} onKeyDown={event => { if (event.key === "ArrowRight") { event.preventDefault(); changePhoto(1); } if (event.key === "ArrowLeft") { event.preventDefault(); changePhoto(-1); } }}>
        <div className="gallery-top"><span className="eyebrow">{cafe.copy.galleryLabel}</span><DialogClose asChild><button className="gallery-close" aria-label="Închide galeria"><X size={23} /></button></DialogClose></div>
        <div className="gallery-photo"><Image key={photoIndex} src={`/images/${photographs[photoIndex].file}`} alt={photographs[photoIndex].alt} fill sizes="(max-width: 700px) 95vw, 1000px" /></div>
        <div className="gallery-bottom"><div aria-live="polite"><DialogTitle>{photographs[photoIndex].title}</DialogTitle><DialogDescription>{photographs[photoIndex].caption}</DialogDescription></div><div className="gallery-controls"><button aria-label="Fotografia anterioară" onClick={() => changePhoto(-1)}><ChevronLeft size={23} /></button><span>{photoIndex + 1} / {photographs.length}</span><button aria-label="Fotografia următoare" onClick={() => changePhoto(1)}><ChevronRight size={23} /></button></div></div>
      </DialogContent>
    </Dialog>
  );
}
