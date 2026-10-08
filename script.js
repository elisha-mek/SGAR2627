const section = document.getElementById("cinemaExperience");

const room = document.getElementById("cinemaRoom");
const screen = document.getElementById("screenWrap");
const screenCopy = document.getElementById("screenCopy");

const curtainLeft = document.getElementById("curtainLeft");
const curtainRight = document.getElementById("curtainRight");

const backRow = document.getElementById("backRow");
const middleRow = document.getElementById("middleRow");
const frontRow = document.getElementById("frontRow");

const introCopy = document.getElementById("introCopy");
const scrollFill = document.getElementById("scrollFill");
const siteHeader = document.getElementById("siteHeader");

const clamp = (value, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const easeInOutQuad = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

const SGAR_INDEX_SCROLL_KEY = "sgarIndexScrollY";
const SGAR_RETURN_FLAG_KEY = "sgarRestoreFromUnit";
const SGAR_LAST_UNIT_KEY = "sgarLastUnitKey";

const sgarReturningFromUnit = (() => {
  try {
    return sessionStorage.getItem(SGAR_RETURN_FLAG_KEY) === "1";
  } catch (error) {
    return false;
  }
})();

function saveIndexReturnState(unitKey = "") {
  try {
    sessionStorage.setItem(SGAR_INDEX_SCROLL_KEY, String(window.scrollY || window.pageYOffset || 0));
    if (unitKey) sessionStorage.setItem(SGAR_LAST_UNIT_KEY, unitKey);
  } catch (error) {}
}

function restoreIndexReturnState() {
  if (!sgarReturningFromUnit) return;

  let y = 0;
  try {
    y = Number(sessionStorage.getItem(SGAR_INDEX_SCROLL_KEY) || 0);
  } catch (error) {}

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo(0, y);
  requestAnimationFrame(() => {
    window.scrollTo(0, y);

    requestAnimationFrame(() => {
      window.scrollTo(0, y);
      document.documentElement.classList.remove("sgar-restoring-index");

      try {
        sessionStorage.removeItem(SGAR_RETURN_FLAG_KEY);
      } catch (error) {}

      if (typeof requestRender === "function") requestRender();
      if (typeof requestTicketTear === "function") requestTicketTear();
    });
  });
}

window.addEventListener("pageshow", restoreIndexReturnState);

let ticking = false;
let lastProgress = -1;

function render() {
  const rect = section.getBoundingClientRect();
  const distance = section.offsetHeight - window.innerHeight;

  const raw = distance > 0 ? -rect.top / distance : 0;
  const p = clamp(raw);

  if (Math.abs(p - lastProgress) < 0.0008) {
    ticking = false;
    return;
  }

  lastProgress = p;

  const e = easeInOutQuad(p);

  const introOpacity = clamp(1 - p * 3.2);
  const headerOpacity = clamp(1 - p * 1.45);

  const seatOpacity = clamp(1 - Math.max(0, p - 0.58) * 2.45);

  const roomScale = 1 + e * 0.11;
  const roomY = -e * 4.5;

  room.style.transform =
    `translate3d(0, ${roomY}vh, 0) scale3d(${roomScale}, ${roomScale}, 1)`;

  const screenScale = 0.72 + e * 1.02;
  const screenY = e * 1.5;

  screen.style.transform =
    `translate3d(-50%, ${screenY}vh, 0) scale3d(${screenScale}, ${screenScale}, 1)`;

  curtainLeft.style.transform =
    `translate3d(${-e * 18}vw, 0, 0) skewY(-1deg)`;

  curtainRight.style.transform =
    `translate3d(${e * 18}vw, 0, 0) skewY(1deg)`;

  backRow.style.transform =
    `translate3d(-50%, ${e * 42}vh, 0) scale3d(${0.72 + e * 0.28}, ${0.72 + e * 0.28}, 1)`;

  middleRow.style.transform =
    `translate3d(-50%, ${e * 58}vh, 0) scale3d(${0.94 + e * 0.30}, ${0.94 + e * 0.30}, 1)`;

  frontRow.style.transform =
    `translate3d(-50%, ${e * 72}vh, 0) scale3d(${1.16 + e * 0.35}, ${1.16 + e * 0.35}, 1)`;

  backRow.style.opacity = seatOpacity;
  middleRow.style.opacity = seatOpacity;
  frontRow.style.opacity = seatOpacity;

  const copyScale = 0.97 + e * 0.03;
  screenCopy.style.transform =
    `translate3d(0, ${-1 + e * 1}%, 0) scale3d(${copyScale}, ${copyScale}, 1)`;

  introCopy.style.opacity = introOpacity;
  siteHeader.style.opacity = headerOpacity;

  scrollFill.style.transform = `scaleX(${p})`;

  ticking = false;
}

function requestRender() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(render);
  }
}

window.addEventListener("scroll", requestRender, { passive: true });
window.addEventListener("resize", requestRender, { passive: true });
window.addEventListener("load", requestRender);

render();

const ticketForEntrance = document.getElementById("sgarTicket");

if (ticketForEntrance) {
  const ticketEntranceObserver = new IntersectionObserver(
    (entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
        requestAnimationFrame(() => {
          ticketForEntrance.classList.add("ticket-entered");
        });

        observer.disconnect();
      }
    },
    {
      threshold: [0.28],
      rootMargin: "0px 0px -8% 0px"
    }
  );

  ticketEntranceObserver.observe(ticketForEntrance);
}

const aboutTicketSection = document.getElementById("about");
const sgarTicket = document.getElementById("sgarTicket");
const ticketStub = document.getElementById("ticketStub");
const ticketPerforation = document.querySelector(".ticket-perforation");

let ticketFramePending = false;

const clampTicket = (value, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

function updateTicketTear() {
  if (!aboutTicketSection || !ticketStub || !sgarTicket) {
    ticketFramePending = false;
    return;
  }

  const rect = aboutTicketSection.getBoundingClientRect();
  const travel = Math.max(1, aboutTicketSection.offsetHeight - window.innerHeight);
  const p = clampTicket(-rect.top / travel);

  const tension = clampTicket((p - 0.10) / 0.18);
  const rip = clampTicket((p - 0.28) / 0.48);
  const release = clampTicket((p - 0.76) / 0.24);

  const prePullX = tension * 7;
  const preRotate = tension * 1.2;
  const preSkew = tension * -0.8;

  const ripEase = 1 - Math.pow(1 - rip, 3);
  const ripX = ripEase * 108;
  const ripY = ripEase * 20;
  const ripRotate = ripEase * 8.5;
  const ripSkew = Math.sin(rip * Math.PI) * -2.6;

  const fallEase = release * release;
  const fallX = fallEase * 125;
  const fallY = fallEase * 95;
  const fallRotate = fallEase * 15;

  const x = prePullX + ripX + fallX;
  const y = ripY + fallY;
  const rotate = preRotate + ripRotate + fallRotate;
  const skew = preSkew + ripSkew;
  const opacity = 1 - release * 0.22;

  ticketStub.style.transform =
    `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) skewY(${skew}deg)`;
  ticketStub.style.opacity = opacity.toFixed(3);

  if (ticketPerforation) {
    ticketPerforation.style.opacity = String(1 - rip * 0.72);
  }

  sgarTicket.classList.toggle("is-tearing", p > 0.12 && p < 0.92);
  sgarTicket.classList.toggle("is-torn", p >= 0.76);

  ticketFramePending = false;
}

function requestTicketTear() {
  if (!ticketFramePending) {
    ticketFramePending = true;
    requestAnimationFrame(updateTicketTear);
  }
}

window.addEventListener("scroll", requestTicketTear, { passive: true });
window.addEventListener("resize", requestTicketTear, { passive: true });
window.addEventListener("load", requestTicketTear);

updateTicketTear();

const AUTO_DELAY = 3000;

function setupFeatureCarousel({
  carouselId,
  trackId,
  prevId,
  nextId,
  dotsId,
  currentId,
  unitPrefix
}) {
  const carousel = document.getElementById(carouselId);
  const track = document.getElementById(trackId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  const dotsWrap = document.getElementById(dotsId);
  const currentEl = document.getElementById(currentId);

  if (!carousel || !track || !prev || !next || !dotsWrap) return;

  const slides = Array.from(track.querySelectorAll(".featured-card"));
  const dots = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));

  let index = 0;

  if (sgarReturningFromUnit) {
    try {
      const lastUnitKey = sessionStorage.getItem(SGAR_LAST_UNIT_KEY) || "";
      const prefix = unitPrefix || "";
      if (lastUnitKey.startsWith(prefix)) {
        const savedIndex = Number(lastUnitKey.slice(prefix.length)) - 1;
        if (Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < slides.length) {
          index = savedIndex;
        }
      }
    } catch (error) {}
  }
  let autoTimer = null;
  let isVisible = false;
  let isPaused = false;
  let resizeFrame = null;

  function position(animate = true) {
    const active = slides[index];
    if (!active) return;

    if (!animate) track.style.transition = "none";

    const carouselCenter = carousel.clientWidth / 2;
    const slideCenter = active.offsetLeft + active.offsetWidth / 2;
    const target = slideCenter - carouselCenter;

    track.style.transform = `translate3d(${-target}px, 0, 0)`;

    slides.forEach((slide, slideIndex) => {
      const activeSlide = slideIndex === index;
      slide.classList.toggle("is-active", activeSlide);
      slide.setAttribute("aria-hidden", activeSlide ? "false" : "true");
    });

    dots.forEach((dot, dotIndex) => {
      const activeDot = dotIndex === index;
      dot.classList.toggle("is-active", activeDot);
      dot.setAttribute("aria-current", activeDot ? "true" : "false");
    });

    if (currentEl) {
      currentEl.textContent = String(index + 1).padStart(2, "0");
    }

    if (!animate) {
      requestAnimationFrame(() => {
        track.style.transition = "";
      });
    }
  }

  function stopAuto() {
    if (autoTimer) clearTimeout(autoTimer);
    autoTimer = null;
  }

  function startAuto() {
    stopAuto();

    if (
      !isVisible ||
      isPaused ||
      document.hidden ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    autoTimer = setTimeout(() => {
      index = (index + 1) % slides.length;
      position();
      startAuto();
    }, AUTO_DELAY);
  }

  function goTo(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    position();
    startAuto();
  }

  prev.addEventListener("click", () => goTo(index - 1));
  next.addEventListener("click", () => goTo(index + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => goTo(Number(dot.dataset.index)));
  });

  carousel.addEventListener("mouseenter", () => {
    isPaused = true;
    stopAuto();
  });

  carousel.addEventListener("mouseleave", () => {
    isPaused = false;
    startAuto();
  });

  carousel.addEventListener("focusin", () => {
    isPaused = true;
    stopAuto();
  });

  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      isPaused = false;
      startAuto();
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      isVisible = entries[0].isIntersecting;

      if (isVisible) {
        position(false);
        startAuto();
      } else {
        stopAuto();
      }
    },
    { threshold: 0.20 }
  );

  observer.observe(carousel);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAuto();
    else startAuto();
  });

  window.addEventListener(
    "resize",
    () => {
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => position(false));
    },
    { passive: true }
  );

  position(false);
}

setupFeatureCarousel({
  carouselId: "execCarousel",
  trackId: "execTrack",
  prevId: "execPrev",
  nextId: "execNext",
  dotsId: "execDots",
  currentId: "execCurrent",
  unitPrefix: "exec-"
});

setupFeatureCarousel({
  carouselId: "indCarousel",
  trackId: "indTrack",
  prevId: "indPrev",
  nextId: "indNext",
  dotsId: "indDots",
  currentId: "indCurrent",
  unitPrefix: "ind-"
});

setupFeatureCarousel({
  carouselId: "collegeCarousel",
  trackId: "collegeTrack",
  prevId: "collegePrev",
  nextId: "collegeNext",
  dotsId: "collegeDots",
  currentId: "collegeCurrent",
  unitPrefix: "college-"
});

setupFeatureCarousel({
  carouselId: "batchCarousel",
  trackId: "batchTrack",
  prevId: "batchPrev",
  nextId: "batchNext",
  dotsId: "batchDots",
  currentId: "batchCurrent",
  unitPrefix: "batch-"
});

document.querySelectorAll(".featured-card[data-unit-key]").forEach((card) => {
  const openUnitPage = () => {
    const key = card.dataset.unitKey;
    if (!key) return;
    saveIndexReturnState(key);
    window.location.href = `unit.html?unit=${encodeURIComponent(key)}`;
  };

  card.addEventListener("click", () => {
    openUnitPage();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openUnitPage();
    }
  });
});

(function () {
  const execSection = document.getElementById("organizations");
  const indSection = document.getElementById("independentBodies");
  const collegeSection = document.getElementById("collegeUnits");
  const batchSection = document.getElementById("batchUnits");

  if (!execSection || !indSection || !collegeSection || !batchSection) return;

  function docTop(el) {
    return el.getBoundingClientRect().top + window.scrollY;
  }

  function docBottom(el) {
    return el.getBoundingClientRect().bottom + window.scrollY;
  }

  function footerOf(section) {
    return section.querySelector(".featured-carousel-footer.featured-carousel-footer-bottom");
  }

  function panelOf(section) {
    return section.querySelector(".category-panel-from-old");
  }

  function setExactGap(previousSection, nextSection, desiredGap) {
    const previousFooter = footerOf(previousSection);
    const nextPanel = panelOf(nextSection);
    if (!previousFooter || !nextPanel) return;

    nextSection.style.removeProperty("margin-top");

    const currentGap = docTop(nextPanel) - docBottom(previousFooter);
    const baseMargin = parseFloat(getComputedStyle(nextSection).marginTop) || 0;
    const correctedMargin = baseMargin + (desiredGap - currentGap);

    nextSection.style.setProperty(
      "margin-top",
      `${correctedMargin}px`,
      "important"
    );
  }

  function syncCategoryGaps() {
    const execFooter = footerOf(execSection);
    const indPanel = panelOf(indSection);
    if (!execFooter || !indPanel) return;

    const referenceGap = docTop(indPanel) - docBottom(execFooter);

    setExactGap(indSection, collegeSection, referenceGap);

    requestAnimationFrame(() => {
      setExactGap(collegeSection, batchSection, referenceGap);
    });
  }

  window.addEventListener("load", () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(syncCategoryGaps);
    });
  });

  let resizeFrame = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(syncCategoryGaps);
  }, { passive: true });
})();

(function () {
  const batchSection = document.getElementById("batchUnits");
  const strip = batchSection?.querySelector(".transition-strip-bottom");
  const footer = document.querySelector(".site-footer");

  if (!batchSection || !strip || !footer) return;

  let lockedAtStrip = false;
  let releasedToFooter = false;
  let settleTimer = 0;
  let touchStartY = null;

  const absoluteTop = (el) =>
    el.getBoundingClientRect().top + window.scrollY;

  function stripTargetY() {
    const rect = strip.getBoundingClientRect();
    return Math.max(0, window.scrollY + rect.bottom - window.innerHeight);
  }

  function footerTargetY() {
    return Math.max(0, absoluteTop(footer));
  }

  function footerIsVisible() {
    const rect = footer.getBoundingClientRect();

    return rect.top < window.innerHeight - 8 && rect.bottom > 8;
  }

  function atStripTarget() {
    return Math.abs(window.scrollY - stripTargetY()) <= 5;
  }

  function settleAtStrip() {
    if (releasedToFooter || footerIsVisible()) {
      releasedToFooter = true;
      lockedAtStrip = false;
      return;
    }

    const current = window.scrollY;
    const target = stripTargetY();
    const batchTop = absoluteTop(batchSection);

    const nearFinalStrip =
      current >= batchTop + window.innerHeight * 0.18 &&
      current >= target - window.innerHeight * 0.34 &&
      current < footerTargetY() - 6;

    if (!nearFinalStrip) return;

    if (atStripTarget()) {
      lockedAtStrip = true;
      return;
    }

    lockedAtStrip = true;
    window.scrollTo({
      top: target,
      behavior: "smooth"
    });
  }

  function scheduleSettle() {
    clearTimeout(settleTimer);
    settleTimer = setTimeout(settleAtStrip, 105);
  }

  window.addEventListener("scroll", () => {

    if (footerIsVisible()) {
      releasedToFooter = true;
      lockedAtStrip = false;
      return;
    }

    if (window.scrollY < stripTargetY() - 48) {
      releasedToFooter = false;
      lockedAtStrip = false;
    }

    scheduleSettle();
  }, { passive: true });

  window.addEventListener("wheel", (event) => {
    if (event.deltaY <= 0 || !lockedAtStrip || releasedToFooter) return;

    event.preventDefault();

    releasedToFooter = true;
    lockedAtStrip = false;

    window.scrollTo({
      top: footerTargetY(),
      behavior: "smooth"
    });
  }, { passive: false });

  window.addEventListener("keydown", (event) => {
    if (!lockedAtStrip || releasedToFooter) return;

    const movesDown =
      event.key === "PageDown" ||
      event.key === "ArrowDown" ||
      event.key === "End" ||
      event.key === " ";

    if (!movesDown) return;

    event.preventDefault();
    releasedToFooter = true;
    lockedAtStrip = false;

    window.scrollTo({
      top: footerTargetY(),
      behavior: "smooth"
    });
  });

  window.addEventListener("touchstart", (event) => {
    touchStartY = event.touches?.[0]?.clientY ?? null;
  }, { passive: true });

  window.addEventListener("touchend", (event) => {
    if (!lockedAtStrip || releasedToFooter || touchStartY == null) return;

    const endY = event.changedTouches?.[0]?.clientY ?? touchStartY;
    const upwardSwipe = touchStartY - endY > 24;
    touchStartY = null;

    if (!upwardSwipe) return;

    releasedToFooter = true;
    lockedAtStrip = false;

    window.scrollTo({
      top: footerTargetY(),
      behavior: "smooth"
    });
  }, { passive: true });
})();
