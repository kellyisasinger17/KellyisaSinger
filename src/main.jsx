const { useMemo, useState } = React;
const { createRoot } = ReactDOM;

const imageUrl = (fileName) => `images/${fileName}`;

const navItems = [
  { label: "Home", page: "home" },
  { label: "Resumé", page: "resume" },
  { label: "Gallery", page: "gallery" },
  { label: "Reviews", page: "reviews" },
];

const resumeSections = [
  {
    title: "Roles Performed",
    items: [
      "Lauretta - Gianni Schicchi - Opera Mississippi - 2022",
      "Monica - The Medium - Opera Mississippi - 2022",
      "Magda - La Rondine - Chicago Summer Opera - 2019",
      "Susanna - Le Nozze di Figaro - Harrower Opera - 2019",
      "Sophie - Emmeline - Manhattan School of Music - 2019",
      "Clorinda - La Cenerentola - Manhattan School of Music - 2018",
      "Soeur Constance - Dialogues des Carmelites - Harrower Opera - 2017",
      "Belinda - Dido and Aeneas - Praeclara Performing Arts Co. - 2015",
    ],
  },
  {
    title: "Concert & Oratorio",
    items: [
      'Featured soloist - IMAO "An Evening of Arias" - Weill Recital Hall (Carnegie Hall début) - 2019',
      "Soprano soloist - Beethoven's Choral Fantasia - Manhattan School of Music - 2018",
      'Soloist - "Home for the Holidays" - Arkansas Symphony Orchestra - 2017',
      "Soprano soloist - Messiah - Arkansas Choral Society - 2017",
      "Soprano soloist - Messiah - Praeclara Performing Arts Co. - 2016",
    ],
  },
  {
    title: "Musical Theatre",
    items: [
      "Mabel - Pirates of Penzance - Praeclara Performing Arts Co. - 2017",
      "Zaneeta - The Music Man - Praeclara Performing Arts Co. - 2016",
    ],
  },
  {
    title: "Partial Roles & Covers",
    items: [
      "Lisette - La Rondine - Manhattan School of Music - 2019",
      "Zerbinetta - Ariadne auf Naxos - Manhattan School of Music - 2018",
      "Flora - The Turn of the Screw - Manhattan School of Music - 2018",
      "Lucia - Lucia di Lammermoor - Salzburg Voice Festival - 2017",
      "Nannetta - Falstaff - Salzburg Voice Festival - 2017",
      "Elvira - L'Italiana in Algeri - Harrower Summer Opera - 2017",
    ],
  },
  {
    title: "Competitions",
    items: [
      "Career Bridges Vocal Competition - Winner - 2019",
      "Joan T. Ades Vocal Competition - 2nd Place - 2019",
      "MONCA, Arkansas District - Winner - 2019",
      "Houston Saengerbund Competition - 3rd Place - 2019",
      "Classical Singer Vocal Competition - Winner, University Advanced - 2017",
      "University City Symphony Orchestra - Young Artist of the Year - 2017",
      "Cherokee Symphony Young Artists' Competition - Winner - 2017",
      "MONCA, Arkansas District - Winner, Audience Favorite - 2017",
      "Kristin Lewis Foundation - Audience Favorite - 2016",
      "MONCA, Arkansas District - Winner, Audience Favorite - 2016",
    ],
  },
  {
    title: "Education & Training",
    items: [
      "M.M. Classical Voice - Manhattan School of Music - 2019",
      "B.A. (Honors) English Linguistics - University of Arkansas at Little Rock - 2016",
      "B.A. (Honors) World Languages: French - University of Arkansas at Little Rock - 2016",
      "Chicago Summer Opera - Chicago, IL - 2019",
      "Harrower Summer Opera - Atlanta, GA - 2019",
      "Salzburg Voice Festival Young Artist Program - Salzburg & Vienna, Austria - 2017",
      "Harrower Summer Opera - Atlanta, GA - 2017",
      "Krisztina Laki Zommerkurs - Düsseldorf, Germany - 2016",
    ],
  },
  {
    title: "Special Skills",
    items: [
      "Languages: English, French, German, Latin",
      "Diction: French, German, Italian, English",
      "Dance: Ballet, Ballroom",
      "Other: IPA, accents and dialect training",
    ],
  },
  { title: "Teachers", items: ["Shirley Close", "Ruth Golden", "Diane Kesling"] },
  { title: "Coaches", items: ["Kanae Matsumoto", "Cory Battey", "Andrew Sun", "Kyung-Eun Na"] },
  {
    title: "Directors",
    items: ["Thaddeus Strassberger", "Jay Lessenger", "James Rodgers", "Corina Brenciu", "Laura Alley", "Carroll Freeman", "Dwight Coleman"],
  },
  { title: "Conductors", items: ["Daniel Wachs", "Gary Wedow", "Ken Merrill", "Phillip Mann", "Kent Skinner"] },
];

const reviews = [
  {
    source: "Opera News",
    entries: [
      {
        event: "July 2018 - La Cenerentola at Manhattan School of Music",
        paragraphs: ['"Kelly Singer (Clorinda)... displayed some nutty comic charm, as well as [an] attractive instrument."'],
      },
      {
        event: "July 2019 - Emmeline at Manhattan School of Music",
        paragraphs: ['"Kelly Singer\'s bright soprano revealed buried innocence in the jaded Sophie, Emmeline\'s only friend."'],
      },
    ],
  },
  {
    source: "Voce di Meche",
    entries: [
      {
        event: "March 2019 - Ades Vocal Competition at Manhattan School of Music",
        paragraphs: [
          '"...we heard the aptly named Kelly Singer who used her impressive artistry in two very different arias. She performed "Non, Monsieur mon mari" from Francis Poulenc\'s satirical operetta Les mamelles de Tirésias. Every gesture and facial expression seemed spontaneous but we are quite sure that she labored mightily to get every one just perfect. It was fine and funny and very French.',
          'The judges asked to hear Händel next. "Piangerò" from Giulio Cesare was a perfect contrast to the Poulenc and gave us an opportunity to appreciate Ms. Singer\'s coloratura in the vocal fireworks of the middle section. When the first theme reappeared we enjoyed the lavish embellishments."',
        ],
      },
      {
        event: "May 2019 - Career Bridges Gala at the Metropolitan Club",
        paragraphs: ['"The aptly named Kelly Singer gave a deliciously dramatic performance of "Non, monsieur mon mari" from Poulenc\'s comic opera Les Mamelles de Tirésias."'],
      },
      {
        event: 'October 2019 - "An Evening of Arias" at Weill Recital Hall (Carnegie début)',
        paragraphs: [
          '"Getting to the women singers, there was no faulting the gestures of the enchanting and aptly named soprano Kelly Singer, the only one on the program that we have heard many times before. Although we have enjoyed her Zerbinetta and her Clorinda, it is her performance of "Non monsieur mon mari", from the very funny Poulenc opera Les Mamelles de Tirésias, that we recall the best.',
          'That seems to be Ms. Singer\'s signature aria, the one which earned her awards from both the Ades Competition and from Career Bridges. Ms. Singer knows exactly how to get a song across with the organic gestures that were missing from the baritone\'s performance. To say that we love her voice and admire her stage presence would be an understatement."',
        ],
      },
    ],
  },
];

const gallerySections = [
  { title: "La Cenerentola", location: "New York, NY", year: "2018", files: ["Cenerentola1.JPG", "Cenerentola2.JPG", "Cenerentola3.JPG", "Cenerentola4.JPG", "Cenerentola5.JPG", "Cenerentola6.JPG", "Cenerentola7.JPG", "Cenerentola8.JPG"] },
  { title: "Emmeline", location: "New York, NY", year: "2019", files: ["Emmeline1.jpg", "Emmeline2.jpg", "Emmeline3.jpg"] },
  { title: "Joan T. Ades Vocal Competition", location: "New York, NY", year: "2019", files: ["Ades1.jpg", "Ades2.jpg", "Ades3.jpg", "Ades4.jpg"] },
  { title: "Arkansas Symphony Orchestra", location: "Little Rock, AR", year: "2018", files: ["AR1.jpg", "AR2.jpg", "AR3.jpg"] },
  { title: "Career Bridges Winners Gala", location: "New York, NY", year: "2019", files: ["CB1.jpg", "CB2.jpg", "CB3.jpg", "CB4.jpg"] },
  { title: "Dracula", location: "Little Rock, AR", year: "2016", files: ["Dracula1.jpg", "Dracula2.jpg"] },
  { title: "Pirates of Penzance", location: "Little Rock, AR", year: "2017", files: ["Pirates1.jpg", "Pirates2.jpg"] },
  { title: "La Rondine", location: "Chicago, IL", year: "2019", files: ["Rondine1.jpg", "Rondine2.jpg"] },
  { title: "Photoshoot (Margaret Ferrec)", location: "New York, NY", year: "2025", files: ["Margaret1.jpg", "Margaret2.jpg", "Margaret 3.jpg", "Margaret4.jpg", "Margaret 5.jpg", "Margaret 6.jpg"] },
  { title: "Photoshoot (Pierre Lidar)", location: "New York, NY", year: "2018", files: ["Pierre1.jpg", "Pierre2.jpg", "Pierre3.jpg", "Pierre4.jpg", "Pierre5.jpg", "Pierre6.jpg", "Pierre7.jpg", "Pierre8.jpg", "Pierre9.jpg", "Pierre10.jpg", "Pierre11.jpg", "Pierre12.JPG"] },
];

function App() {
  const [page, setPage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return navItems.some((item) => item.page === params.get("page")) ? params.get("page") : "home";
  });

  const navigate = (nextPage) => {
    setPage(nextPage);
    const url = nextPage === "home" ? window.location.pathname : `${window.location.pathname}?page=${nextPage}`;
    window.history.pushState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const content = useMemo(() => {
    if (page === "resume") return <ResumePage />;
    if (page === "gallery") return <GalleryPage />;
    if (page === "reviews") return <ReviewsPage />;
    return <HomePage />;
  }, [page]);

  return (
    <>
      <Navigation activePage={page} onNavigate={navigate} />
      {content}
      <Footer />
    </>
  );
}

function Navigation({ activePage, onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button className="navbar-brand brand-button" type="button" onClick={() => onNavigate("home")}>
          Kelly Singer Lançon
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#primaryNavigation" aria-controls="primaryNavigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="primaryNavigation">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.page}>
                <button className={`nav-link nav-button${activePage === item.page ? " active" : ""}`} type="button" aria-current={activePage === item.page ? "page" : undefined} onClick={() => onNavigate(item.page)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="pageTitle">
        <div className="hero-image">
          <img src={imageUrl("Margaret1.jpg")} alt="Kelly Singer Lançon smiling outdoors" />
          <div className="hero-title">
            <h1 id="pageTitle">Kelly<br />Singer<br />Lançon</h1>
            <p>American Soprano</p>
          </div>
        </div>

        <div className="bio">
          <div className="container">
            <p>Praised for her “bright soprano” (Opera News), “impressive artistry”, and “vocal fireworks” (Voce di Meche), Kelly Singer Lançon is being hailed as a promising young talent in opera. She has won the Metropolitan Opera National Council Auditions in the Arkansas District three times, placed second in the prestigious Joan T. Ades Vocal Competition, third in the Houston Saengerbund Awards, and was most recently named a 2020 Riverside Opera Vocal Competition Winner. Select featured solo performances include Beethoven's Choral Fantasia with the Manhattan School of Music Symphony Orchestra, Home for the Holidays with the Arkansas Symphony Orchestra, and Handel's Messiah with the Arkansas Choral Society.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageHero({ title, image, className = "" }) {
  return (
    <header className={`page-hero ${className}`}>
      <img src={imageUrl(image)} alt="Kelly Singer Lançon" />
      <h1>{title}</h1>
    </header>
  );
}

function ResumePage() {
  return (
    <main>
      <PageHero title="Resumé" image="Margaret 3.jpg" />
      <section className="card-content">
        <div className="container">
          {resumeSections.map((section) => (
            <article className="content-card" key={section.title}>
              <h2>{section.title}</h2>
              {section.items.map((item) => <p key={item}>{item}</p>)}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ReviewsPage() {
  return (
    <main>
      <PageHero title="Reviews" image="Margaret4.jpg" className="reviews-hero" />
      <section className="card-content">
        <div className="container">
          {reviews.map((review) => (
            <article className="content-card review-card" key={review.source}>
              <h2>{review.source}</h2>
              {review.entries.map((entry) => (
                <div className="review-entry" key={entry.event}>
                  <h3>{entry.event}</h3>
                  {entry.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function GalleryPage() {
  return (
    <main>
      <PageHero title="Gallery" image="Margaret2.jpg" className="gallery-hero" />
      <section className="gallery-content">
        <div className="container">
          <div className="gallery-grid">
            {gallerySections.map((section, sectionIndex) => (
              <GalleryCard section={section} index={sectionIndex} key={section.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function GalleryCard({ section, index }) {
  const carouselId = `galleryCarousel${index}`;

  return (
    <article className="gallery-card">
      <div id={carouselId} className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          {section.files.map((file, slideIndex) => (
            <button
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide-to={slideIndex}
              className={slideIndex === 0 ? "active" : ""}
              aria-current={slideIndex === 0 ? "true" : undefined}
              aria-label={`Slide ${slideIndex + 1}`}
              key={file}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {section.files.map((file, slideIndex) => (
            <div className={`carousel-item${slideIndex === 0 ? " active" : ""}`} key={file}>
              <img src={imageUrl(file)} alt={`${section.title} photo ${slideIndex + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="gallery-meta">
        <h2>{section.title}</h2>
        <p>{section.location}</p>
        <p>{section.year}</p>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="site-footer py-4 text-center">
      <a href="mailto:kelly@kellyisasinger">kelly@kellyisasinger</a>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
