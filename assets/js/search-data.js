// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "peer-reviewed articles and dissertations, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Current and recent research projects, with funding sources and related publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Download the full CV as a PDF, or see the summary below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-courses",
          title: "courses",
          description: "Courses taught, with materials and resources as they become available.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Members of the Gilman lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-predicting-photosynthetic-pathway-from-anatomy-using-machine-learning-gilman-heyduk-maya-lastra-hancock-amp-amp-edwards-published-in-new-phytologist",
          title: '“Predicting photosynthetic pathway from anatomy using machine learning” (Gilman, Heyduk, Maya-Lastra, Hancock &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-convergent-evolution-of-desiccation-tolerance-in-grasses-marks-pas-schuster-gilman-amp-amp-vanburen-published-in-nature-plants",
          title: '“Convergent evolution of desiccation tolerance in grasses” (Marks, Pas, Schuster, Gilman &amp;amp;amp; VanBuren)...',
          description: "",
          section: "News",},{id: "news-i-accepted-a-position-to-join-the-biology-department-at-fairfield-university-next-fall-as-an-assistant-professor",
          title: 'I accepted a position to join the Biology Department at Fairfield University next...',
          description: "",
          section: "News",},{id: "news-the-plant-resilience-institue-at-michigan-state-awarded-a-seed-grant-to-me-and-vanburen-lab-phd-candidate-jenny-schuster-our-project-defining-transcriptional-cell-states-in-desiccation-tolerant-plants-with-spatial-rnaseq-will-leverage-a-new-10x-visium-machine-at-the-rtsf-genomics-core-to-integrate-spatial-rnaseq-into-our-single-cell-research-on-desiccation-tolerant-plants",
          title: 'The Plant Resilience Institue at Michigan State awarded a seed grant to me...',
          description: "",
          section: "News",},{id: "projects-gene-regulation-of-cam-amp-c4-photosynthesis",
          title: 'Gene regulation of CAM &amp;amp; C4 photosynthesis',
          description: "Single-nuclei sequencing of the regulatory architecture behind integrated C4+CAM photosynthesis in Portulaca.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_photosynthetic-omics/";
            },},{id: "projects-pelargonium-cam-genome-project",
          title: 'Pelargonium CAM genome project',
          description: "Investigating the genetic basis of CAM in southern African Pelargonium species.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_pelargonium/";
            },},{id: "projects-phylogenomics-of-portullugo-amp-beyond",
          title: 'Phylogenomics of Portullugo &amp;amp; beyond',
          description: "Methods for reconstructing evolutionary histories from phylogenomic and museum-specimen data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_phylogenomics/";
            },},{id: "projects-comparative-anatomy-physiology-amp-machine-learning",
          title: 'Comparative anatomy, physiology &amp;amp; machine learning',
          description: "Linking photosynthetic anatomy, physiology, and gene expression across vascular plants.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_comparative-biology/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/gilman-cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%67%69%6C%6D%61%6E@%66%61%69%72%66%69%65%6C%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/isgilman", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
