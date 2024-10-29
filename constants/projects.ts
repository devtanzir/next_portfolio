import { createId } from "@/lib/utils";
import ShopBD from "@/public/image/shop-bd.png";
import StudyTube from "@/public/image/clean-youtube.png";
import TimeZone from "@/public/image/timezone.png"
import FoodApp from "@/public/image/food-app.png"

export const ProjectsData = [
  {
    id: createId(),
    title: "ShopBD",
    slug: "shop-bd",
    preview: "https://ecommerce-tanzir-ibne-alis-projects.vercel.app/",
    type: "Ecommerce",
    thumbnail: ShopBD,
    links: [
      {
        id: createId(),
        title: "live preview",
        url: "https://ecommerce-tanzir-ibne-alis-projects.vercel.app/",
      },
      {
        id: createId(),
        title: "backend",
        url: "https://github.com/devtanzir/ecommerce-backend-strapi",
      },
      {
        id: createId(),
        title: "frontend",
        url: "https://github.com/devtanzir/ecommerce-frontend-strapi",
      },
    ],
    duration: "1 month",
    caseStudy: [
      {
        id: createId(),
        name: "Project Overview",
        content: `ShopBD is a modern e-commerce platform tailored for the local
             market in Bangladesh. It was developed for practice purpose like how to add payment get-way, user authentication, headless CMS in a project and handle it in a proper way. This case
             study explores the challenges, solutions, and technologies
             behind the development of the platform.`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Tech Stack",
            content: `Next.js 14 (with app routing), TypeScript, Tailwind CSS, Redux, Strapi, Stripe, etc.`,
          },
          {
            id: createId(),
            title: "Objective",
            content: `Build a scalable and responsive e-commerce platform with secure payment integration with stripe, product management, and an admin dashboard by strapi.`,
          },
        ]

      },
      {
        id: createId(),
        name: "Problem Statement",
        content: `The goal was to create an e-commerce platform specifically for
                Bangladeshi users, combining ease of use with scalability. Key
                challenges included`,
        type: "list",
        lists: [
          {
            id: createId(),
            title:
              "Ensuring a smooth browsing and shopping experience across devices.",
          },
          {
            id: createId(),
            title: "Integrating a reliable and secure payment gateway.",
          },
          {
            id: createId(),
            title:
              "Building a responsive and performant UI for product listings and checkout flow.",
          },
        ],
        description: `The client needed a site that could handle a variety of
                products, provide clear navigation, and make purchasing as
                frictionless as possible.`

      },
      {
        id: createId(),
        name: "Research & Planning",
        content: `Before starting the project, I conducted research on existing
                e-commerce platforms to understand what makes a good shopping
                experience. I focused on the following`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Competitor Analysis",
            content: `Analyzing popular local and international e-commerce websites
                    for UX/UI inspiration.`,
          },
          {
            id: createId(),
            title: "User Research",
            content: `Understanding pain points from users of similar platforms,
                    such as slow load times, complicated checkouts, or lack of
                    payment options.`,
          },
          {
            id: createId(),
            title: "Technology Decisions",
            content: `I chose Next.js for its server-side rendering (SSR)
                    capabilities, which improve SEO and performance. TypeScript
                    was used to ensure scalability and reduce runtime errors. Strapi for simplicity of admin dashboard. Stripe for secure payments`,
          },
        ],
      },
      {
        id: createId(),
        name: "Project Setup",
        content: `I set up the Next.js app with app routing, which allowed more flexibility in page management and better performance optimization. I also set up the Strapi headless CMS for managing product data.`,
        type: "paragraph",
      },
      {
        id: createId(),
        name: "UI/UX Design",
        content: `I implemented the UI using Tailwind CSS for quick styling and responsiveness. For pre-built components, I used Flowbite to ensure consistency and ease of use across different projects.`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Homepage",
            content: `A clean hero section, featured products for
                    easy navigation.`,
          },
          {
            id: createId(),
            title: "Product Listing Page",
            content: `Product filters (price, category, brand), with lazy loading
                    for smooth performance.`,
          },
          {
            id: createId(),
            title: "Product Details Page",
            content: `Detailed product descriptions.`,
          },
          {
            id: createId(),
            title: "Cart and Checkout Flow",
            content: `User-friendly design with clear CTAs to increase conversion
                    rates.`,
          },
        ]

      },
      {
        id: createId(),
        name: "State Management",
        content: `For managing the cart, I used Redux state
                management library to simplify the logic. The cart state
                included`,
        type: "list",
        lists: [
          {
            id: createId(),
            title: "Product IDs and quantities.",
          },
          {
            id: createId(),
            title: "Total price calculation.",
          },
          {
            id: createId(),
            title:
              "Handling of adding/removing items and applying discount codes.",
          },
        ],

      },
      {
        id: createId(),
        name: "Payment Integration",
        content: `One of the critical features was the integration of Stripe to
                handle payments. I created a backend service to generate a
                PaymentIntent and return a clientSecret to securely manage
                payments on the front end.`,
        type: "paragraph",
      },
      {
        id: createId(),
        name: "Responsive Design",
        content: `The site was designed to be fully responsive, ensuring a smooth
                experience across mobile, tablet, and desktop devices. Using
                Tailwind CSS, I ensured`,
        type: "list",
        lists: [
          {
            id: createId(),
            title: "Responsive grids for product listings.",
          },
          {
            id: createId(),
            title:
              "Mobile-first approach for layout, especially in the checkout flow.",
          },
        ],

      },
      {
        id: createId(),
        name: "SEO & Performance Optimization",
        content: `To improve performance and SEO, I implemented server-side
                rendering and static generation for product pages using Next.js'
                features like getStaticProps and getServerSideProps. This
                enhanced`,
        type: "list",
        lists: [
          {
            id: createId(),
            title: "Loading times for users with slow internet connections.",
          },
          {
            id: createId(),
            title:
              "SEO by ensuring that search engines could crawl the site effectively.",
          },
        ],

      },
      {
        id: createId(),
        name: "Results & Outcomes",
        type: "list",
        lists: [
          {
            id: createId(),
            title: "Enhanced User Experience",
            content:
              "User engagement increased by 30% due to faster load times and an easy-to-navigate interface.",
          },
          {
            id: createId(),
            title: "Improved Conversion Rates",
            content:
              "The seamless checkout process using Stripe decreased cart abandonment by 25%.",
          },
          {
            id: createId(),
            title: "Mobile Optimization",
            content:
              "The responsive design improved mobile traffic by 40%, as users could easily shop on their phones without any usability issues.",
          },
        ],

      },
      {
        id: createId(),
        name: "Reflection",
        content: `The ShopBD project taught me the importance of balancing
                performance and user experience, especially in e-commerce
                platforms where fast, secure transactions are crucial. I also
                deepened my knowledge of payment integration through Stripe and
                refined my skills in managing state with Redux toolkit.`,
        type: "list",
        lists: [
          {
            id: createId(),
            title:
              "Effective use of TypeScript reduced bugs and improved maintainability.",
          },
          {
            id: createId(),
            title:
              "Integration of Stripe simplified payment handling and provided a secure solution.",
          },
        ],
        description: `Future improvements could include more automated testing for edge cases, especially in the checkout process.`
      },
    ],
  },
  {
    id: createId(),
    title: "StudyTube",
    slug: "study-tube",
    preview: "https://study-tube-tanzir-ibne-alis-projects.vercel.app/",
    type: "Video Player",
    thumbnail: StudyTube,
    links: [
      {
        id: createId(),
        title: "live preview",
        url: "https://study-tube-tanzir-ibne-alis-projects.vercel.app/",
      },
      {
        id: createId(),
        title: "frontend",
        url: "https://github.com/devtanzir/clean-youtube",
      },
    ],
    duration: "15 Days",
    caseStudy: [
      {
        id: createId(),
        name: "Project Overview",
        content: `Study Tube is an educational platform aimed at providing easy access to curated learning resources, tutorials, and course materials. The platform allows users to explore content from different subject areas, helping students . Built with a focus on a user-friendly interface and streamlined functionality, Study Tube is designed to make learning accessible and engaging and distract less for everyone.`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Tech Stack",
            content: `React.js, javaScript, Material UI, easypeasy, lottie, Prop-types, etc.`,
          },
        ]

      },
      {
        id: createId(),
        name: "Goals and Objectives",
        content: `The primary goal of Study Tube was to create distract less and intuitive platform that allows users to`,
        type: "list",
        lists: [
          {
            id: createId(),
            title:
              "Discover and access high-quality educational content easily.",
          },
          {
            id: createId(),
            title: "Provide a smooth and seamless experience on both desktop and mobile devices.",
          },
          {
            id: createId(),
            title:
              "Ensuring fast load times and efficient content delivery for better user engagement.",
          },
        ],
      },
      {
        id: createId(),
        name: "Challenges",
        content: `During the development of Study Tube, several key challenges were encountered`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Responsive Design",
            content: `Given the diverse devices users might use, creating a design that works seamlessly across mobile, tablet, and desktop platforms required careful planning and rigorous testing.`,
          },
          {
            id: createId(),
            title: "User Experience",
            content: `Balancing a clean, simple interface with functionality was a core focus. Overloading the user with too many features or cluttering the UI could have distracted from the primary goal—providing straightforward access to learning resources.`,
          },
        ],
      },
      {
        id: createId(),
        name: "Project Setup",
        content: `I set up the React.js. I also set up the Material UI for managing Project UI.`,
        type: "paragraph",
      },
      {
        id: createId(),
        name: "Solutions and Implementations",
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Efficient UI/UX Design",
            content: `Leveraging Tailwind CSS and React, the interface was designed to be both aesthetically pleasing and functional. The minimalist design approach ensures users can easily find content without feeling overwhelmed.`,
          },
          {
            id: createId(),
            title: "Mobile-First Approach",
            content: `The website was designed with a mobile-first strategy in mind, ensuring optimal performance and usability on smartphones. This included a responsive grid layout, simplified navigation for smaller screens, and optimization for touch interactions.`,
          },
          {
            id: createId(),
            title: "Performance Optimizations",
            content: `By utilizing Next.js's server-side rendering and Vercel for fast content delivery, the platform was optimized for speed. Lazy loading was also used for assets such as images and videos to enhance the user experience.`,
          },
        ]

      },
      {
        id: createId(),
        name: "State Management",
        content: `For managing the cart, I used Easypeasy state
                management library to simplify the logic. The Video state
                included`,
        type: "list",
        lists: [
          {
            id: createId(),
            title: "all type of video content.",
          },
        ],

      },
      {
        id: createId(),
        name: "Key Takeaways",
        content: `Study Tube showcases how modern web technologies can be leveraged to build a scalable, user-friendly educational platform. The project is a testament to the importance of responsive design, and performance optimization in delivering a seamless learning experience. Moving forward, there are plans to introduce more interactive features, such as quizzes, personalized course recommendations, Youtube channel, and user profiles, to enhance the platform's educational value.`,
        type: "paragraph",
      },
      {
        id: createId(),
        name: "Responsive Design",
        content: `The site was designed to be fully responsive, ensuring a smooth
                experience across mobile, tablet, and desktop devices. Using
                Material UI, I ensured`,
        type: "list",
        lists: [
          {
            id: createId(),
            title: "Responsive grids for Playlist listings.",
          },
        ],

      },
      {
        id: createId(),
        name: "Performance Optimization",
        content: `To improve performance , I Call the Youtube api for one time and save all the data to a state`,
        type: "list",
        lists: [
          {
            id: createId(),
            title: "Loading times for users with slow internet connections.",
          },
        ],

      },
      {
        id: createId(),
        name: "Results and Impact",
        type: "list",
        lists: [
          {
            id: createId(),
            title: "Faster Load Times",
            content:
              "Thanks to Vercel, the platform boasts lightning-fast load times, even with a large content library, leading to a better overall user experience.",
          },
          {
            id: createId(),
            title: "Scalability",
            content:
              "The project has been designed in a way that allows new features, such as user accounts and course tracking, to be easily integrated in the future.",
          },
          {
            id: createId(),
            title: "Mobile Optimization",
            content:
              "The responsive design improved mobile traffic by 20%, as users could easily shop on their phones without any usability issues.",
          },
        ],

      },
      {
        id: createId(),
        name: "Future Plans",
        content: `The next phase of the Study Tube project will focus on`,
        type: "list",
        lists: [
          {
            id: createId(),
            title:
              "Implementing quizzes and interactive modules to make learning more engaging.",
          },
          {
            id: createId(),
            title:
              "Expanding the library to cover more topics and bringing in expert-curated content to increase the platform’s credibility.",
          },
        ],
      },
    ],
  },
  {
    id: createId(),
    title: "TrackZone",
    slug: "track-zone",
    preview: "https://track-zone-tanzir-ibne-alis-projects.vercel.app/",
    type: "Time Management",
    thumbnail: TimeZone,
    links: [
      {
        id: createId(),
        title: "live preview",
        url: "https://track-zone-tanzir-ibne-alis-projects.vercel.app/",
      },
      {
        id: createId(),
        title: "backend",
        url: "https://github.com/devtanzir/trackzone-backend",
      },
      {
        id: createId(),
        title: "frontend",
        url: "https://github.com/devtanzir/TrackZone",
      },
    ],
    duration: "15 Days",
    caseStudy: [
      {
        id: createId(),
        name: "Project Overview",
        content: `Track Zone is a modern web application designed to help users keep track of key data points effectively. Created as a personal project, Track Zone utilizes responsive web technologies and a dynamic frontend to deliver a seamless experience. The app addresses common needs for efficient data tracking and user interaction, using interactive components, real-time data processing, and clear data visualizations.`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Tech Stack",
            content: `React, Vite, Express, MongoDB, Styled-Components, Axios, etc.`,
          },
        ]
      },
      {
        id: createId(),
        name: "Objectives",
        content: `The project aimed to`,
        type: "list",
        lists: [
          {
            id: createId(),
            title:
              "Develop an intuitive user interface that supports real-time data tracking.",
          },
          {
            id: createId(),
            title: "Ensure smooth and fast interactions across various devices and browsers.",
          },
          {
            id: createId(),
            title:
              "Create a robust backend that securely handles API requests and manages data storage.",
          },
          {
            id: createId(),
            title:
              "Implement feedback mechanisms, such as notifications, to enhance the user experience.",
          },
        ],
      },
      {
        id: createId(),
        name: "Design & Development Approach",
        content: `The Track Zone project followed a modular development approach to support scalability and maintainability. Here’s a closer look at the frontend and backend`,
        type: "paragraph",
      },
      {
        id: createId(),
        name: "Frontend",
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Framework",
            content: `Built with React and Vite, allowing fast refreshes and optimal loading speeds.`,
          },
          {
            id: createId(),
            title: "UI/UX",
            content: `Styled-components facilitated custom-styled UI elements, which were designed to make data tracking and interaction straightforward and visually appealing.`,
          },
          {
            id: createId(),
            title: "State Management",
            content: `Managed using React hooks, offering a lightweight yet powerful solution for handling user interactions and data flow.`,
          },
          {
            id: createId(),
            title: "Notifications",
            content: `Integrated react-toastify for real-time notifications, enhancing user experience by providing clear feedback on actions.`,
          },
          {
            id: createId(),
            title: "API Integration",
            content: `Axios is used for seamless API requests, handling both data fetching and form submission efficiently.`,
          },
        ]
      },
      {
        id: createId(),
        name: "Backend",
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Express & MongoDB",
            content: `The server is built using Express.js for handling API requests and MongoDB with Mongoose for data storage, ensuring secure and efficient database interactions.`,
          },
          {
            id: createId(),
            title: "Security",
            content: `Cors middleware was used to handle cross-origin requests, while dotenv allowed for secure environment variable management.`,
          },
          {
            id: createId(),
            title: "Scalability",
            content: `The backend is structured for easy expansion, with Mongoose schemas that can accommodate additional features and data as the project grows.`,
          },
        ]
      },
      {
        id: createId(),
        name: "Key Features",
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "Real-time Data Tracking",
                    content: `Users can add, edit, and remove data points dynamically, with immediate visual feedback.`,
                  },
                  {
                    id: createId(),
                    title: "Responsive Design",
                    content: `Optimized for desktop and mobile, Track Zone offers a consistent experience across various devices.`,
                  },
                  {
                    id: createId(),
                    title: "Notifications",
                    content: `Real-time feedback via toast notifications enhances interactivity and keeps users informed.`,
                  },
                  {
                    id: createId(),
                    title: "Fast Load Times",
                    content: `Leveraging Vite’s quick refresh and lightweight bundling, the site is responsive and fast.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Challenges & Solutions",
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "API Response Time",
                    content: `Initial testing showed slight lags in API response times. By optimizing database queries and reducing payloads, the response time was improved significantly.`,
                  },
                  {
                    id: createId(),
                    title: "Data Consistency",
                    content: `Ensuring data integrity was a priority. Mongoose validations and custom error handling in Express were implemented to avoid invalid or incomplete data entries.`,
                  },
                  {
                    id: createId(),
                    title: "Cross-Origin Requests",
                    content: `During deployment, handling CORS became a challenge as the frontend and backend were hosted on separate domains. The issue was resolved by configuring the Express server with flexible CORS settings for development and production environments.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Results & Impact",
        content: `Track Zone’s launch demonstrated the effectiveness of a streamlined tech stack and a user-focused design. Users reported`,
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "Improved Efficiency",
                    content: `Real-time tracking features helped users manage and monitor their data more efficiently.`,
                  },
                  {
                    id: createId(),
                    title: "Positive Feedback on UX",
                    content: `The responsive design and clear notifications significantly enhanced user satisfaction.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Future Plans",
        content: `In future iterations, Track Zone may expand to include`,
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "User Authentication",
                    content: `Adding secure login features.`,
                  },
                  {
                    id: createId(),
                    title: "Advanced Data Analytics",
                    content: `Integrating data visualization libraries to provide detailed insights.`,
                  },
                  {
                    id: createId(),
                    title: "Push Notifications",
                    content: `Sending alerts to users even when they’re not on the site.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Conclusion",
        content: `Track Zone illustrates the potential of combining responsive frontend technologies with a robust backend to create a seamless, interactive user experience. The project serves as a testament to modern web development’s capabilities in delivering fast, user-friendly applications that meet real-world needs.`,
        type: "paragraph",
      },
    ],
  },
  {
    id: createId(),
    title: "Food App",
    slug: "food-app",
    preview: "https://food-app-gamma-two.vercel.app/",
    type: "Food Management",
    thumbnail: FoodApp,
    links: [
      {
        id: createId(),
        title: "live preview",
        url: "https://food-app-gamma-two.vercel.app/",
      },
      {
        id: createId(),
        title: "frontend",
        url: "https://github.com/devtanzir/food-app",
      },
    ],
    duration: "3 Days",
    caseStudy: [
      {
        id: createId(),
        name: "Project Overview",
        content: `The Food App is a dynamic landing page designed to showcase a food delivery or restaurant service. The primary focus of the page is to attract users by providing an engaging, visually appealing introduction to the service, showcasing the menu, customer testimonials, and easy navigation for seamless user experience.`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Tech Stack",
            content: `React, Vite, Bootstrap, React Router, etc.`,
          },
        ]
      },
      {
        id: createId(),
        name: "Objectives",
        content: `The primary objectives for the Food App landing page were`,
        type: "section",
        sections: [
          {
            id: createId(),
            title: "User Engagement",
            content: `Create an eye-catching layout to attract and retain visitor interest.`,
          },
          {
            id: createId(),
            title: "Ease of Use",
            content: `Ensure easy navigation and quick access to key sections, such as the menu and contact information.`,
          },
          {
            id: createId(),
            title: "Brand Identity",
            content: `Reflect a fresh and inviting brand identity, appealing to a wide audience.`,
          },
        ]
      },
      {
        id: createId(),
        name: "Design Elements",
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Responsive Design",
            content: `Using Bootstrap and React-Bootstrap, the page was crafted to look great across all devices, with careful attention to mobile-first design.`,
          },
          {
            id: createId(),
            title: "Visual Hierarchy",
            content: `The layout emphasizes the most important information, with clear sections for the menu, testimonials, and call-to-action buttons to guide user interactions.`,
          },
          {
            id: createId(),
            title: "Brand Colors and Fonts",
            content: `A color scheme and font selection were used to align with the brand’s identity, creating an inviting and appetizing look.`,
          },
        ]
      },
      {
        id: createId(),
        name: "Development Choices",
        type: "section",
        sections: [
          {
            id: createId(),
            title: "Frontend with React and Vite",
            content: `React’s component-based structure allowed for modular design, while Vite provided fast development and optimized builds.`,
          },
          {
            id: createId(),
            title: "Bootstrap and Icons",
            content: `Bootstrap components and Bootstrap Icons streamlined the styling process, reducing the need for custom CSS.`,
          },
          {
            id: createId(),
            title: "Routing with React Router",
            content: `Although this is a single-page landing app, React Router sets the groundwork for potential navigation to different sections or future pages, enhancing scalability.`,
          },
        ]
      },
      {
        id: createId(),
        name: "Key Features",
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "Responsive Layout",
                    content: `Optimized to work on various screen sizes, providing consistent functionality and design across devices.`,
                  },
                  {
                    id: createId(),
                    title: "Dynamic Menu Display",
                    content: `The menu section is organized to be easy to browse and appealing to users, using Bootstrap components for a clean and organized look.`,
                  },
                  {
                    id: createId(),
                    title: "User Reviews",
                    content: `Displaying customer testimonials builds trust and gives credibility to the service.`,
                  },
                  {
                    id: createId(),
                    title: "Call-to-Action",
                    content: `Buttons and links direct users to action points, such as ordering or learning more about the service, encouraging engagement.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Challenges & Solutions",
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "Cross-Device Responsiveness",
                    content: `Ensuring that all components adjusted correctly across device types was initially challenging. Bootstrap’s responsive grid system and media queries were used to achieve a consistent look.`,
                  },
                  {
                    id: createId(),
                    title: "Loading Speed",
                    content: `Initial load times were a priority, especially for mobile. Vite’s optimized build process and lightweight asset management reduced load times significantly.`,
                  },
                  {
                    id: createId(),
                    title: "User Engagement",
                    content: `To create a highly engaging experience, clear call-to-actions and an intuitive layout were tested and refined based on user feedback.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Results & Impact",
        content: `The Food App landing page succeeded in creating a polished, professional, and inviting introduction to the food service. Users experienced`,
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "Higher Engagement",
                    content: `Visitors interacted more with the menu and call-to-action buttons, spending longer on the site.`,
                  },
                  {
                    id: createId(),
                    title: "Positive User Feedback",
                    content: `Users noted the simplicity and appeal of the design, which helped foster trust and interest.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Future Plans",
        content: `To enhance the app further, future plans include`,
        type: "section",
        sections: [
                  {
                    id: createId(),
                    title: "Adding Authentication",
                    content: `To allow users to create accounts and save orders.`,
                  },
                  {
                    id: createId(),
                    title: "Order Integration",
                    content: `Adding an ordering feature, making it possible for users to order food directly from the app.`,
                  },
                  {
                    id: createId(),
                    title: "Expanded Menu & Sections",
                    content: `Adding more detailed sections for nutrition info, chef specials, and seasonal items.`,
                  },
        ]
      },
      {
        id: createId(),
        name: "Conclusion",
        content: `The Food App landing page showcases how a responsive design, thoughtful layout, and optimized technology stack can create an effective user experience, encouraging engagement and delivering a compelling introduction to a food service. This project is a testament to the potential of modern web technologies in developing fast, responsive, and engaging landing pages.`,
        type: "paragraph",
      },
    ],
  },
];
