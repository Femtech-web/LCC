import Mock from "./mock";
import photo from "../assets/placeholders/photo.jpg";
import photo1 from "../assets/images/const-1.jpg";
import photo21 from "../assets/images/const-21.jpg";
import photo2 from "../assets/images/const-2.jpg";
import photo3 from "../assets/images/const-3.jpg";
import photo18 from "../assets/images/const-18.jpg";
import photo7 from "../assets/images/const-7.jpg";
import photo11 from "../assets/images/const-11.jpg";
import photo4 from "../assets/images/const-4.jpg";
import photo10 from "../assets/images/const-10.jpg";
import photo22 from "../assets/images/const-22.jpg";
import photo15 from "../assets/images/const-15.jpg";
import photo16 from "../assets/images/const-16.jpg";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";
import avatar4 from "../assets/images/avatar4.png";
import logotype from "../assets/placeholders/logotype.png";
import video2 from "../assets/videos/vid-2.mp4";
import video4 from "../assets/videos/vid-4.mp4";
import icon from "../assets/placeholders/icon.svg";

const database = {
  categories: [
    {
      id: "0",
      title: "Product",
    },
    {
      id: "1",
      title: "Project",
    },
    {
      id: "2",
      title: "Review",
    },
    {
      id: "3",
      title: "Article",
    },
  ],
  choose: {
    list: [
      {
        icon: "las la-building",
        text:
          "Our aim is to exceed our clients' expectations and deliver the highest quality construction projects.",
      },
      {
        icon: "las la-hard-hat",
        text:
          "Our team of experts includes architects, engineers, interior designers, project managers, electricians, HVAC technicians, and carpenters who work together to provide an exceptional service. ",
      },
      {
        icon: "las la-toolbox",
        text:
          "We take great pride in our work, ensuring that each project is completed to the highest standards of quality and craftsmanship.",
      },
    ],
  },
  facts: [
    {
      text:
        "Within the years, we have been able to build our standard with constant growth and modern civilization",
      title: "Believe in your business skills but never stop improving",
    },
    {
      text:
        "At LCC, we believe that excellent communication and attention to detail are the keys to delivering successful construction projects. ",
      title:
        "Communication and details are key",
    },
    {
      text:
        "We take great pride in our work, ensuring that each project is completed to the highest standards of quality and craftsmanship.",
      title:
        "We believe in quality and craftmanship",
    },
    {
      text:
        "We make use of new technologies and cutting edge tools to deliver projects faster and with high quality",
      title: "Embracing newer technologies and cutting edge tools",
    },
  ],
  facts2: [
    {
      icon: "las la-briefcase",
      lead: "Projects done",
      text:
        "Through our consistency and growth, we have been able to complete so many successful projects.",
      title: "417+",
    },
    {
      icon: "las la-envelope-open",
      lead: "Positive feedback",
      text:
        "We delight in satisfying our customers and we have been able to get some positive feedbacks",
      title: "87%",
    },
    {
      icon: "las la-certificate",
      lead: "commitment",
      text:
        "Committment is one of our key value which has made our customers have full trust in us",
      title: "99%",
    },
  ],
  fast_links: [
    {
      title: "Homepage",
      url: "/home",
    },
    {
      title: "About company",
      url: "/about-us",
    },
    {
      title: "Our services",
      url: "/services",
    },
    {
      title: "Become a partner",
      url: "/blog/post_3",
    },
    {
      title: "Contact us",
      url: "/contacts",
    },
  ],
  features: [
    {
      icon: icon,
      id: "post_0",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. ",
      title: "How to make your product the ferrari of business",
    },
    {
      icon: icon,
      id: "post_1",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent value without bricks-and-clicks niches. Globally leverage existing error-free models",
      title: "Believe in your business skills but never stop improving",
    },
    {
      icon: icon,
      id: "post_2",
      text:
        "Globally leverage existing error-free models and B2B products. Professionally productize interdependent",
      title: "Create a business your parents would be proud of",
    },
  ],
  features2: [
    {
      icon: "las la-bullseye",
      text:
        "We have a comprehensive range of competent workers and sophisticated tools and services  to meet all of our clients' needs.",
      title: "#1 Assurance",
    },
    {
      icon: "las la-business-time",
      text:
        " At LCC, we specialize in general contracting, renovation, interior design and execution, painting, electrical works, HVAC, architecture, and custom woodwork and cabinetry.",
      title: "#2 Dynamic",
    },
    {
      icon: "las la-file-invoice-dollar",
      text:
        "Our aim is to exceed our clients expectations and deliver the highest and best quality construction projects . ",
      title: "#3 Reliable",
    },
  ],
  header_bgs: {
    about: photo,
    about_video_poster: photo,
    blog: photo,
    contacts: photo,
    contacts_w: photo,
    portfolio: photo,
    services: photo,
    team: photo,
    team_w: photo,
    facts: photo,
    subscribe: photo,
    list: photo,
  },
  menu: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "/about-us",
    },
    {
      name: "Services",
      url: "/services",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
    },
    {
      children: [
        {
          name: "Grid Left Sidebar",
          url: "/blog-grid-left-sidebar",
        },
        {
          name: "List Left Sidebar",
          url: "/blog-list-left-sidebar",
        },
        {
          name: "Grid Right Sidebar",
          url: "/blog-grid-right-sidebar",
        },
        {
          name: "List Right Sidebar",
          url: "/blog-list-right-sidebar",
        },
        {
          name: "Grid No Sidebar",
          url: "blog-grid-without-sidebar",
        },
      ],
      name: "Forum",
      url: "/forum",
    },
    {
      name: "Contacts",
      url: "/contacts",
    },
  ],
  partners: [logotype, logotype, logotype, logotype, logotype, logotype],
  portfolio: [
    {
      cats: "Commercial-Buildings",
      clientid: "0",
      feedback:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources.",
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 0,
      img: "https://images.unsplash.com/photo-1565347878188-d5a035536f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      lead: "Commercial Building",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Modern sky-scraper",
    },
    {
      cats: "Residential-Homes",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 1,
      img: "https://images.unsplash.com/photo-1520608421741-68228b76b6df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      lead: "Residential Home",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Luxurious exquisite Building",
    },
    {
      cats: "Offices",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 2,
      img: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      lead: "Office",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Beautiful and large office design",
    },
    {
      cats: "Commercial-Buildings",
      clientid: "3",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 3,
      img: "https://images.unsplash.com/photo-1462180744199-87947354c7fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      lead: "Commercial Building",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "First grade professional layout office ",
    },
    {
      cats: "Residential-Homes",
      clientid: "1",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 4,
      img: "https://images.unsplash.com/photo-1521574873411-508db8dbe55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      lead: "Residential Building",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Effective house system for country side",
    },
    {
      cats: "Offices",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 5,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      lead: "Office",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Broad office paths and beautiful design",
    },
    {
      cats: "Commercial-Buildings",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 6,
      img: "https://images.unsplash.com/photo-1599398766399-07f7a828044b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      lead: "Commercial Building",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Complete project for a firm",
    },
    {
      cats: "Residential-Homes",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 7,
      img: "https://plus.unsplash.com/premium_photo-1661872799062-4db4b04b1431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
      lead: "Residential Home",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Beautiful fully furnished house",
    },
    {
      cats: "Offices",
      clientid: "0",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 8,
      img: "https://images.unsplash.com/photo-1564540574859-0dfb63985953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      lead: "office",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "An office, well spaced and enjoy the view",
    },
    {
      cats: "Commercial-Buildings",
      clientid: "2",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Dramatically provide access to customer directed platforms before professional portals. Objectively foster revolutionary human capital for error-free materials. Quickly envisioneer prospective alignments and distributed best practices. Quickly empower ethical users with 24/7 experiences. Interactively myocardinate go forward alignments whereas high standards in data.<br> Synergistically benchmark clicks-and-mortar collaboration and idea-sharing before stand-alone products. Rapidiously simplify inexpensive process improvements via go forward value. Collaboratively e-enable bricks-and-clicks markets without web-enabled meta-services. Dramatically re-engineer state of the art e-business after cooperative internal or organic sources. Energistically iterate corporate outsourcing for visionary results.",
      id: 9,
      img: "https://images.unsplash.com/photo-1567449303070-ed66e1d59843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      lead: "Commercial Building",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Future of construction in life",
    },
    {
      cats: "Residential-Homes",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 10,
      img: "https://images.unsplash.com/photo-1651375773856-5294e4c71a19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      lead: "Residential Home",
      memberid: 1,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "A House with a fine touch of nature",
    },
    {
      cats: "Offices",
      clientid: "0",
      feedback:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      full:
        "Rapidiously leverage other's inexpensive leadership whereas cross-media outside the box thinking. Competently e-enable global interfaces after interdependent outside the box thinking. Competently brand timely expertise rather than inexpensive internal or organic sources. Continually scale high-quality niches before high-payoff resources. Professionally drive turnkey infomediaries for high standards in initiatives.<br> Enthusiastically facilitate front-end convergence with client-centered opportunities. Dynamically evolve compelling applications rather than pandemic partnerships. Uniquely cultivate goal-oriented information without cross-platform channels. Energistically customize B2B sources via distinctive leadership. Professionally initiate client-centered metrics without client-focused interfaces.",
      id: 11,
      img: "https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80",
      lead: "Office",
      memberid: 2,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "Office for modern city and short conference setup",
    },
    {
      cats: "Commercial-Buildings",
      clientid: "3",
      feedback:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces.",
      full:
        "Phosfluorescently reconceptualize exceptional total linkage without holistic e-tailers. Objectively utilize functional e-tailers rather than economically sound infomediaries. Uniquely expedite user friendly communities and 24/365 leadership. Objectively enhance plug-and-play relationships vis-a-vis dynamic outside the box thinking.<br>Energistically cultivate reliable data without standardized mindshare. Holisticly incubate progressive process improvements with just in time niche markets. Collaboratively brand interactive quality vectors after virtual expertise. Globally harness progressive action items whereas revolutionary collaboration and idea-sharing. Quickly facilitate real-time data without client-focused communities.",
      id: 12,
      img: "https://images.unsplash.com/photo-1603779931001-a6b508e5da81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      lead: "Comercial Building",
      memberid: 0,
      stats: [
        {
          icon: "las la-users-cog",
          text: "Peoples at project",
          title: "17",
        },
        {
          icon: "las la-calendar-alt",
          text: "Days to completion",
          title: "141",
        },
        {
          icon: "las la-coffee",
          text: "Cups of coffee",
          title: "480",
        },
        {
          icon: "las la-comments",
          text: "Positive feedbacks",
          title: "700+",
        },
      ],
      text:
        "Dynamically provide access to cutting-edge infomediaries whereas 24/7 collaboration and idea-sharing. ",
      title: "skyscrappers for civilization and comfort",
    },
  ],
  posts: [
    {
      category_id: 1,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities.<p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_0",
      image: photo,
      posting_date: "Feb 14, 2020",
      quote:
        "Enthusiastically generate multidisciplinary benefits rather than bricks-and-clicks action items. ",
      short:
        "Flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mout and idea-sharing.",
      title: "How to make your product the ferrari of business",
      user_id: "2",
    },
    {
      category_id: 2,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_1",
      image: photo,
      posting_date: "Feb 07, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Treat yourself to a night re-living the golden age of the railway with a stay at The Old Railway Station in Petworth, West Sussex. Conveniently recaptiualize backward-compatible best",
      title: "Believe in your business skills but never stop improving",
      user_id: "1",
    },
    {
      category_id: 3,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_2",
      image: photo,
      posting_date: "Feb 12, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "The most important enjoy your lif thing is to enjoy your life - to be happy - it's enjoy your lif all that matters.",
      title: "Create a business your parents would be proud of",
      user_id: "2",
    },
    {
      category_id: 0,
      featured: true,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_3",
      image: photo,
      posting_date: "Feb 11, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "From the enclosure wall of the cemetery you can enjoy a distant view to the west into the Pustertal",
      title: "How to become our partner and start do business",
      user_id: "3",
    },
    {
      category_id: 1,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_4",
      image: photo,
      posting_date: "Feb 28, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Dramatically expedite cross-media potentialities for worldwide services. Quickly engineer multidisciplinary innovation with best-of-breed e-commerce. Compellingly productivate.",
      title: "We create opportunity for new markets & industries",
      user_id: "0",
    },
    {
      category_id: 2,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_5",
      image: photo,
      posting_date: "Feb 09, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "I carry my years without submitting to the regimen of time and its chronology of dates and seasons.",
      title: "Project start is time to celeprate",
      user_id: "1",
    },
    {
      category_id: 3,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_6",
      image: photo,
      posting_date: "Feb 08, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "The loss of a single species is a tragic event and yet we lose an estimated 10,000 species to extinction every year",
      title: "Construction is reason to developing",
      user_id: "2",
    },
    {
      category_id: 0,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_7",
      image: photo,
      posting_date: "Feb 07, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Objectively streamline magnetic leadership skills vis-a-vis an expanded array of paradigms appropriately incentivize adaptive.",
      title: "To afford luxury life always work hard",
      user_id: "3",
    },
    {
      category_id: 1,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_8",
      image: photo,
      posting_date: "Feb 06, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Happiness is the universal feeling we all aspire to experience more of, yet, we can be an angry, moody",
      title: "Start you working process with tools",
      user_id: "0",
    },
    {
      category_id: 2,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_9",
      image: photo,
      posting_date: "Feb 05, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "Treat yourself to a night relive laden age of the railway Petworth with stay at The Old Railway Station in West Sussex",
      title: "Create new way of manufacture",
      user_id: "1",
    },
    {
      category_id: 3,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_10",
      image: photo,
      posting_date: "Feb 04, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "If I have a chance to whisper the best advice to a baby and he’ll remember it for the rest of his life is this",
      title: "Absolute knowledge on the business line",
      user_id: "2",
    },
    {
      category_id: 0,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_11",
      image: photo,
      posting_date: "Feb 03, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
      title: "Master your tools for best results",
      user_id: "3",
    },
    {
      category_id: 1,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_12",
      image: photo,
      posting_date: "Feb 02, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
      title: "Making business with minimal efforts",
      user_id: "0",
    },
    {
      category_id: 2,
      full:
        "Dynamically enhance distributed scenarios rather than extensive metrics. Compellingly supply leveraged leadership and standardized web-readiness. Phosfluorescently predominate competitive platforms after unique potentialities. Seamlessly engineer optimal niches through turnkey communities. Objectively grow emerging alignments before sticky synergy. <p> Enthusiastically e-enable inexpensive expertise for low-risk high-yield e-commerce. Monotonectally facilitate cutting-edge communities vis-a-vis process-centric systems. Competently utilize granular infomediaries with team building e-commerce. Seamlessly enable market positioning action items through optimal collaboration and idea-sharing. Dramatically revolutionize cross functional opportunities before multifunctional interfaces.<p> Uniquely pontificate e-business materials rather than seamless benefits. Completely coordinate client-centric channels for 24/365 communities. Quickly facilitate covalent interfaces after prospective vortals. Monotonectally envisioneer competitive collaboration and idea-sharing and plug-and-play systems. Energistically syndicate leading-edge initiatives vis-a-vis wireless materials. Completely initiate unique benefits via corporate core competencies. Holisticly maximize highly efficient channels without world-class partnerships. <p>Phosfluorescently brand stand-alone deliverables via premier infrastructures. Enthusiastically visualize scalable applications via market positioning web services. Phosfluorescently redefine high standards in models before emerging leadership. Energistically morph user-centric mindshare with 24/7 niches. Uniquely strategize resource maximizing outsourcing without cross functional ROI. Globally productize process-centric solutions rather than focused sources. Monotonectally repurpose bleeding-edge ideas via extensible human capital. <p>Collaboratively orchestrate covalent platforms rather than just in time infrastructures. Collaboratively expedite plug-and-play web services without professional ideas. Synergistically provide access to open-source markets with covalent methodologies. Dynamically develop multimedia based meta-services vis-a-vis an expanded array of infrastructures. Professionally supply ubiquitous initiatives whereas cross-platform users. Phosfluorescently restore superior solutions with error-free customer service.",
      id: "post_13",
      image: photo,
      posting_date: "Feb 01, 2020",
      quote:
        "dolor dolores doloribus ducimus fuga iusto magni maiores minus nam numquam officiis provident quasi",
      short:
        "We have great creative team they always ready to helped you. voluptatem quiase voluptase aspernatur auted fugit",
      title: "Small business must evolve in big company",
      user_id: "1",
    },
  ],
  pricing: [
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F001-money.svg?alt=media&token=50fd58f2-52ba-406d-a741-16f8294baa49",
      price: "Free",
      services: {
        avaliable: 2,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "basic",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F003-earth-grid.svg?alt=media&token=1f7c3083-418c-4a8a-88bb-4a01416b9a38",
      price: "$17",
      services: {
        avaliable: 3,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "business",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F006-ladder-1.svg?alt=media&token=76a4cf83-b4f6-477b-9fb4-bea757d89831",
      price: "$47",
      services: {
        avaliable: 4,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "advanced",
    },
    {
      icon:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/icons%2F007-success-4.svg?alt=media&token=9d7b2683-90fa-41dd-ab84-2acce788c76d",
      price: "$77",
      services: {
        avaliable: 5,
        list: [
          "Support forum",
          "Free hosting",
          "40MB of storage space",
          "Social media integration",
          "10GB of storage space",
        ],
      },
      title: "elite",
    },
  ],
  process: [
    {
      text:
        "Every new project is worked from base where the space is carefully analysed from an interior architectural design. LCC utilizes innovative approach to provide customers with unique functional designs that meet there requirements.",
      title:
        "Conceptual/schematic Design",
    },
    {
      text:
        "Now you can bring your own unique style into your space with LCC custom furniture design tailored to yield beautiful solutions that combine functionality with the captured essence of you.",
      title: "Furniture and product Design",
    },
    {
      text:
        "LCC's project Execution integrates resources and services to meet business needs and to deliver PMO business that supports productivity and oush business forward. LCC Applies high quality management system for ensuring that all projects activities are effective.",
      title: "Execution",
    },
  ],
  reviews: [
    {
      author: "Marta Kaufman",
      id: 0,
      img: avatar1,
      status: "CEO of General Electrics",
      text:
        "Efficiently supply dynamic methodologies after equity invested alignments. Professionally fashion adaptive initiatives after enterprise-wide methodologies. Competently recaptiualize competitive best practices for client-focused technologies. ",
      title: "LCC help me to grow my business beyound country limits.",
    },
    {
      author: "Robert Tompson",
      id: 1,
      img: avatar2,
      status: "Director of Macrosoft",
      text:
        "Rapidiously transform end-to-end strategic theme areas through functional information. Enthusiastically engage pandemic systems rather than installed base manufactured products. Quickly promote market positioning bandwidth before transparent sources. ",
      title: "Extremely good service and amazing support. Highly recommend.",
    },
    {
      author: "Edvard Wright",
      id: 2,
      img: avatar3,
      status: "Manager of Global Store",
      text:
        "Compellingly content architect backward-compatible models and quality communities. Professionally drive wireless benefits whereas orthogonal internal sources. Completely negotiate an expanded array of metrics and extensible interfaces. ",
      title: "Their products professional and support is personal oriented",
    },
    {
      author: "Chriss Hemsworth",
      id: 3,
      img: avatar4,
      status: "Customer",
      text:
        'Rapidiously syndicate professional e-services without wireless "outside the box" thinking. Distinctively seize proactive leadership via B2B alignments. Progressively myocardinate long-term high-impact manufactured products.',
      title:
        "Pretty good company in our small town. Work with respect to our needs.",
    },
  ],
  services: [
    {
      full:
        "Our general contracting services cover a wide range of construction projects, including commercial, residential, and industrial projects. We take care of the entire construction process, including site management, construction planning, and execution. We have a proven track record of completing projects on time, within budget, and to the highest standards.",
      icon: "las la-handshake",
      id: 0,
      img: photo3,
      subtitle: "General Contracting",
      text:
        "Our general contracting services cover a wide range of construction projects, including commercial, residential, and industrial projects.",
      title: "General Contracting ",
    },
    {
      featured: "yes",
      full:
        "Our renovation services are designed to transform your home or office into a modern, functional, and aesthetically pleasing space. Whether you are looking to update your kitchen or bathroom, add an extension to your home, or renovate an entire commercial property, we have the experience and expertise to help.",
      icon: "las la-tools",
      id: 1,
      img: photo7,
      subtitle: "Renovations",
      text:
        "Our renovation services are designed to transform your home or office into a modern, functional, and aesthetically pleasing space.",
      title: "Renovation ",
    },
    {
      full:
        "Our interior design team works closely with our clients to create a customized design plan that reflects their style, preferences, and needs. We offer a wide range of interior design services, including space planning, furniture selection, color coordination, lighting design, and more.",
      icon: "las la-home",
      id: 2,
      img: photo15,
      subtitle: "Interior Design and Execution",
      text:
        "Our interior design team works closely with our clients to create a customized design plan that reflects their style, preferences, and needs.",
      title: "Interior Design and Execution",
    },
    {
      full:
        "Our painting services include both interior and exterior painting, using high-quality materials and techniques to ensure a flawless finish. We can also provide custom painting services, including murals, faux finishes, and more.",
      icon: "las la-paint-roller",
      id: 3,
      img: photo21,
      subtitle: "Painting",
      text:
        "Our painting services include both interior and exterior painting, using high-quality materials and techniques to ensure a flawless finish.",
      title: "Painting",
    },
    {
      full:
        "Our experienced electricians provide a wide range of electrical services, including installation, maintenance, and repair of electrical systems for homes and commercial buildings. We also offer lighting design services, helping our clients to create the perfect ambiance for their space.",
      icon: "las la-lightbulb",
      id: 4,
      img: photo2,
      subtitle: "Electrical Works",
      text:
        "Our experienced electricians provide a wide range of electrical services, including installation, maintenance, and repair of electrical systems for homes and commercial buildings.",
      title: "Electrical Works",
    },
    {
      featured: "yes",
      full:
        "Our HVAC services include installation, maintenance, and repair of heating, ventilation, and air conditioning systems for homes and commercial buildings. Our HVAC technicians are highly trained and experienced in all aspects of HVAC systems, ensuring that our clients' systems run efficiently and smoothly.",
      icon: "las la-radiation-alt",
      id: 5,
      img: photo22,
      subtitle: "HVAC",
      text:
        "Our HVAC services include installation, maintenance, and repair of heating, ventilation, and air conditioning systems for homes and commercial buildings.",
      title: "HVAC",
    },
    {
      full:
        "Our architecture services include architectural design, drafting, and planning. Our architects work closely with our clients to create customized plans that meet their specific needs and requirements.",
      icon: "las la-pencil-ruler",
      id: 6,
      img: photo16,
      subtitle: "Architecture",
      text:
        "Our architecture services include architectural design, drafting, and planning.",
      title: "Architecture",
    },
    {
      full:
        "Our skilled carpenters create custom cabinetry and woodwork, including built-in cabinets, closets, bookcases, and more. We work with our clients to create unique and functional designs that add value to their homes or commercial properties.",
      icon: "las la-hammer",
      id: 7,
      img: photo18,
      subtitle: "Custom Woodwork and Cabinetry ",
      text:
        "Our skilled carpenters create custom cabinetry and woodwork, including built-in cabinets, closets, bookcases, and more. ",
      title: "Custom Woodwork and Cabinetry",
    }
  ],
  team: [
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 0,
      img: photo1,
      job: "Designer",
      name: "Martin Tompson",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 1,
      img: photo2,
      job: "Developer",
      name: "Juliana Redford",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
    {
      about:
        "Professionally deploy revolutionary information rather than multimedia based channels. Continually leverage existing B2B value vis-a-vis magnetic best practices. Dynamically syndicate alternative e-services without leveraged methodologies. Intrinsicly envisioneer cutting-edge relationships for pandemic meta-services.",
      id: 2,
      img: photo3,
      job: "CEO, Director",
      name: "Robert Ferguson",
      skills: [
        "Front-End: 90",
        "Wordpress: 80",
        "React Native: 70",
        "UI / UX Design: 80",
      ],
      stats: [
        {
          icon: "las la-clock",
          text: "Hours per week",
          title: "40+",
        },
        {
          icon: "las la-briefcase",
          text: "Projects completed",
          title: "170",
        },
        {
          icon: "las la-user-check",
          text: "Satisfied clients",
          title: "74",
        },
        {
          icon: "las la-trophy",
          text: "Competition winned",
          title: "140",
        },
      ],
    },
  ],
  users: [
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 0,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr1.jpg?alt=media&token=295fff4a-6766-4a97-9e3b-6c0f4c704c62",
      name: "Marta Smith",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 1,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr2.jpg?alt=media&token=b7b35188-bfc7-409d-9ad8-78bc89b36abc",
      name: "Mark Roberts",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 2,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr3.jpg?alt=media&token=40783389-abdc-4a53-8ea6-ee691732c668",
      name: "Fred Johnson",
    },
    {
      about:
        "Efficiently visualize cutting-edge architectures vis-a-vis one-to-one collaboration and idea-sharing. Conveniently harness just in time niche markets after frictionless interfaces. Uniquely underwhelm frictionless imperatives and covalent users. Compellingly synthesize granular human capital before timely resources. ",
      id: 3,
      img:
        "https://firebasestorage.googleapis.com/v0/b/cctv-a7975.appspot.com/o/reviews%2Fr4.jpg?alt=media&token=f324453f-3080-41bf-80a4-94dd1e20e10f",
      name: "Ron Anderson",
    },
  ],
  video: {
    header: video2,
    about: video4,
  },
};

Mock.onGet("/api/data").reply((config) => {
  const response = database;
  return [200, response];
});
