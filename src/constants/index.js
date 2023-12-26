import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    pricewise,
    sass,
    snapgram,
    summiz,
    threads,
    typescript,
    xcode,
    swiftlogo,
    objc,
    companyPlaceholder,
    shop4Me,
    crabby,
    TradeScan,
    megamind,
    vistabac,
    brazen
} from "../assets/icons";

export const skills = [
    {
        imageUrl: xcode,
        name: "xcode",
        type: "Frontend",
    },
    {
        imageUrl: swiftlogo,
        name: "Swift",
        type: "Frontend",
    },
    {
        imageUrl: objc,
        name: "objc",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "iOS Developer",
        company_name: "Fusioni Technologies Pvt. Ltd",
        icon: companyPlaceholder,
        iconBg: "#accbe1",
        date: "Jul 2022 - March 2023",
        points: [
            "Developing and maintaining iOS applications using Swift and other related technologies.",
        ],
    },
    {
        title: "iOS Developer",
        company_name: "Xicom technologies Pvt. Ltd",
        icon: companyPlaceholder,
        iconBg: "#fbc3bc",
        date: "Jan 2020 - Oct 2021",
        points: [
            "Developing and maintaining iOS applications using Swift, Objective-C and other related technologies.",
            "Collaborating with Backend teams including designers, project managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "iOS Developer",
        company_name: "Quadrish Innovation Pvt. Ltd",
        icon: companyPlaceholder,
        iconBg: "#b7e4c7",
        date: "Jan 2018 - Dec 2019",
        points: [
            "Developing iOS applications using Swift.",
            "Implementing autolayout design and ensuring all iphones compatibility.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sanjeev00786',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sanjeev-mehta-30489b124/',
    }
];

export const projects = [
    {
        iconUrl: TradeScan,
        theme: 'btn-back-red',
        name: 'Trade Scan',
        description: 'Developed an iOS application that provides OEM Level OBD Diagnostics, patterned component failure & live market vehicle pricing data.',
        link: 'https://apps.apple.com/us/app/trade-scan/id1538291541',
    },
    {
        iconUrl: shop4Me,
        theme: 'btn-back-blue',
        name: 'Shop4Me',
        description: 'Built an iOS application that effortlessly discover, compare, and order from top suppliers in a few clicks.',
        link: 'https://apps.apple.com/us/app/shop4me-supplying-businesses/id1462807284?platform=iphone',
    },
    {
        iconUrl: crabby,
        theme: 'btn-back-red',
        name: 'Crabby',
        description: 'Developed an iOS application where user can book the taxi. User-friendly interface, efficient booking, and reliable tracking.',
        link: 'https://apps.apple.com/us/app/crabby/id1580010851',
    },
    {
        iconUrl: megamind,
        theme: 'btn-back-green',
        name: 'Megamind Abacus',
        description: 'Crafted an iOS application to introduce the ancient Abacus tool to young minds aged 4 to 13. Harnessing the flexibility of young brains, this app facilitates mental calculations, allowing children to visualize and master the Abacus.',
        link: 'https://apps.apple.com/us/app/megamind-abacus/id1483967581?platform=iphone',
    },
    {
        iconUrl: vistabac,
        theme: 'btn-back-blue',
        name: 'VistaBAC',
        description: 'Crafted an iOS application advanced BAC monitoring app. With real-time alcohol tracking via BACtrack, Bluetooth connectivity, GPS location, and secure photo verification, it is a game-changer for responsible drinking.',
        link: 'https://apps.apple.com/us/app/vistabac/id1392893783?platform=iphone',
    },
    {
        iconUrl: brazen,
        theme: 'btn-back-green',
        name: 'Brazen Client',
        description: 'As an iOS developer, I pioneered the BRAZEN CAM Mobile Video Monitor—an innovative baby monitoring app that goes beyond boundaries. Offering real-time access with advanced GPS, video, two-way talking, emergency alerts.',
        link: 'https://apps.apple.com/ca/app/brazen-client/id1474158130',
    }
];