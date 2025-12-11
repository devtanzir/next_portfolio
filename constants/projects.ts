import ShopBD from "@/public/image/shop-bd.webp";
import StudyTube from "@/public/image/clean-youtube.webp";
import TimeZone from "@/public/image/timezone.webp";
import FoodApp from "@/public/image/food-app.webp";
import TaskNest from "@/public/image/task-nest.webp";

export const ProjectsData = [
  {
    id: "TNx1234567890", // unique id
    title: "TaskNest",
    slug: "tasknest",
    preview: "https://task-nest-tanzir-ibne-alis-projects.vercel.app/",
    type: "Project Management",
    thumbnail: TaskNest,
    links: [
      {
        id: "TN-link-1",
        title: "live preview",
        url: "https://task-nest-tanzir-ibne-alis-projects.vercel.app/",
      },
      {
        id: "TN-link-2",
        title: "frontend",
        url: "https://github.com/devtanzir/TaskNest--project-management-tool",
      },
    ],
    duration: "4 months",
    caseStudy: [
      {
        id: "TN-case-1",
        name: "Project Overview",
        content: `TaskNest is a modern project management tool designed to help individuals and teams easily organize, track, and manage their tasks. The app focuses on simplicity and productivity, allowing users to manage projects efficiently from a single dashboard.`,
        type: "section",
        sections: [
          {
            id: "TN-section-1",
            title: "Tech Stack",
            content: `Next.js 14, React 18, TypeScript, Tailwind CSS, Appwrite (Backend), React Hook Form, TanStack Query & Table, Recharts, Radix UI components, Sonner for notifications.`,
          },
          {
            id: "TN-section-2",
            title: "Objective",
            content: `Create a scalable, intuitive project management web application that allows users to create projects, assign tasks, track progress, and visualize data with charts, ensuring high performance and responsive design.`,
          },
        ],
      },
      {
        id: "TN-case-2",
        name: "Problem Statement",
        content: `Many existing project management tools are either too complex for small teams or lack essential features like task tracking, visual dashboards, and team collaboration. TaskNest aims to address these gaps by providing a balanced, user-friendly solution.`,
        type: "list",
        lists: [
          {
            id: "TN-prob-1",
            title:
              "Simplifying task and project management for individuals and teams.",
          },
          {
            id: "TN-prob-2",
            title: "Providing real-time updates and progress tracking.",
          },
          {
            id: "TN-prob-3",
            title:
              "Ensuring smooth, responsive, and fast user experience across devices.",
          },
        ],
        description: `The app focuses on reducing complexity while maintaining essential productivity features for effective project management.`,
      },
      {
        id: "TN-case-3",
        name: "Research & Planning",
        content: `Before building TaskNest, research was conducted on popular project management tools to identify strengths and weaknesses. Key considerations included usability, performance, and collaborative features.`,
        type: "section",
        sections: [
          {
            id: "TN-res-1",
            title: "Competitor Analysis",
            content: `Analyzed tools like Trello, Asana, and Notion for workflow and dashboard design inspiration.`,
          },
          {
            id: "TN-res-2",
            title: "User Research",
            content: `Identified common pain points such as overloaded interfaces, difficult navigation, and lack of quick task management features.`,
          },
          {
            id: "TN-res-3",
            title: "Technology Decisions",
            content: `Next.js and React for frontend performance, Appwrite for backend simplicity, Tailwind CSS for responsive styling, React Query for state management, and Recharts for data visualization.`,
          },
        ],
      },
      {
        id: "TN-case-4",
        name: "Project Setup",
        content: `Next.js project setup with TypeScript, Tailwind CSS for styling, and Appwrite for backend services including authentication, database, and storage.`,
        type: "paragraph",
      },
      {
        id: "TN-case-5",
        name: "UI/UX Design",
        content: `Designed with simplicity and usability in mind, focusing on easy navigation, clear dashboards, and responsive layouts.`,
        type: "section",
        sections: [
          {
            id: "TN-ux-1",
            title: "Dashboard",
            content: `Overview of all projects, tasks, and progress in a clean interface.`,
          },
          {
            id: "TN-ux-2",
            title: "Task Management",
            content: `Create, update, and assign tasks with drag-and-drop support using @hello-pangea/dnd.`,
          },
          {
            id: "TN-ux-3",
            title: "Data Visualization",
            content: `Charts for task progress, team performance, and deadlines using Recharts.`,
          },
        ],
      },
      {
        id: "TN-case-6",
        name: "Challenges & Problem Solving",
        content: `During development, key challenges included real-time state management, integrating Appwrite backend with React Query, and ensuring smooth drag-and-drop functionality across devices.`,
        type: "list",
        lists: [
          {
            id: "TN-ch-1",
            title:
              "Handling real-time task updates with Appwrite subscriptions.",
          },
          {
            id: "TN-ch-2",
            title: "Ensuring responsive drag-and-drop interactions for tasks.",
          },
          {
            id: "TN-ch-3",
            title:
              "Optimizing frontend performance while managing complex project states.",
          },
        ],
      },
      {
        id: "TN-case-7",
        name: "Responsive Design",
        content: `Tailwind CSS and mobile-first approach ensured smooth user experience across mobile, tablet, and desktop devices.`,
        type: "list",
        lists: [
          { id: "TN-resp-1", title: "Responsive dashboards and task boards." },
          {
            id: "TN-resp-2",
            title: "Mobile-friendly task management interactions.",
          },
        ],
      },
      {
        id: "TN-case-8",
        name: "SEO & Performance Optimization",
        content: `Next.js features like SSR and static generation were used to improve page load, SEO, and overall performance.`,
        type: "list",
        lists: [
          { id: "TN-opt-1", title: "Server-side rendering for SEO." },
          {
            id: "TN-opt-2",
            title: "Lazy-loading charts and components to improve performance.",
          },
        ],
      },
      {
        id: "TN-case-9",
        name: "Results & Outcomes",
        content: `TaskNest successfully provided a simple, efficient, and responsive project management experience.`,
        type: "list",
        lists: [
          {
            id: "TN-res-1",
            title: "Enhanced productivity with streamlined task tracking.",
          },
          {
            id: "TN-res-2",
            title:
              "Positive user feedback for dashboard clarity and usability.",
          },
          {
            id: "TN-res-3",
            title:
              "Smooth drag-and-drop and responsive design across all devices.",
          },
        ],
      },
      {
        id: "TN-case-10",
        name: "Reflection",
        content: `This project reinforced the importance of balancing simplicity with functionality. Learned best practices for integrating Appwrite backend with React Query, managing state, and designing user-friendly dashboards.`,
        type: "list",
        lists: [
          {
            id: "TN-ref-1",
            title:
              "Effective state management with React Query improved real-time updates.",
          },
          {
            id: "TN-ref-2",
            title:
              "Integration of Appwrite simplified backend logic while maintaining flexibility.",
          },
        ],
        description: `Future improvements could include automated notifications, deeper analytics, and team collaboration features.`,
      },
    ],
  },
  {
    id: "SGc2xIM9TVU2TIaVYUHt7IlhrpI2oyFngBeai2ujJSY=",
    title: "ShopBD",
    slug: "shop-bd",
    preview: "https://ecommerce-tanzir-ibne-alis-projects.vercel.app/",
    type: "Ecommerce",
    thumbnail: ShopBD,
    links: [
      {
        id: "C81Lvgl28vT9+DasD/gl3n+XWMOZCfJL2FN0pt4GHjg=",
        title: "live preview",
        url: "https://ecommerce-tanzir-ibne-alis-projects.vercel.app/",
      },
      {
        id: "U597EumHSPod/EYbs+xxMJPMXnG/PTO8K62+7zeqlAg=",
        title: "backend",
        url: "https://github.com/devtanzir/ecommerce-backend-strapi",
      },
      {
        id: "nDAqA7bZxg15o/qPe513kerttc5CqKsw763ocCXh7as=",
        title: "frontend",
        url: "https://github.com/devtanzir/ecommerce-frontend-strapi",
      },
    ],
    duration: "1 month",
    caseStudy: [
      {
        id: "Rnz2MpnrqBg2hFcx1dybWUW4MdN/cvBV8JtxUdb5d8A=",
        name: "Project Overview",
        content: `ShopBD is a modern e-commerce platform tailored for the local
             market in Bangladesh. It was developed for practice purpose like how to add payment get-way, user authentication, headless CMS in a project and handle it in a proper way. This case
             study explores the challenges, solutions, and technologies
             behind the development of the platform.`,
        type: "section",
        sections: [
          {
            id: "EChVSCy1SN4R5uogA4OwdqyQhxfNKO8HRAt5AWXuvwI=",
            title: "Tech Stack",
            content: `Next.js 14 (with app routing), TypeScript, Tailwind CSS, Redux, Strapi, Stripe, etc.`,
          },
          {
            id: "wIM3Pfy1RwIxpj1l6xYlPA5Gt9f1OmkAvQ0fRl14YHA=",
            title: "Objective",
            content: `Build a scalable and responsive e-commerce platform with secure payment integration with stripe, product management, and an admin dashboard by strapi.`,
          },
        ],
      },
      {
        id: "TdxqevqQwMQNKbPtuBi37ikIrIVTOURwiJU8DBM1G9w=",
        name: "Problem Statement",
        content: `The goal was to create an e-commerce platform specifically for
                Bangladeshi users, combining ease of use with scalability. Key
                challenges included`,
        type: "list",
        lists: [
          {
            id: "XlJJmRLKLmFzI3urV4dn73wH0dj4A95RJX9lpI50T3s=",
            title:
              "Ensuring a smooth browsing and shopping experience across devices.",
          },
          {
            id: "iskB/UrWJqUK0EhtvEkTfVftMimb7kP5sxU6GCgjUYU=",
            title: "Integrating a reliable and secure payment gateway.",
          },
          {
            id: "oHuJiMRSt6IY7AozHwdrl188OaT1sUXR8jW+qeu73fg=",
            title:
              "Building a responsive and performant UI for product listings and checkout flow.",
          },
        ],
        description: `The client needed a site that could handle a variety of
                products, provide clear navigation, and make purchasing as
                frictionless as possible.`,
      },
      {
        id: "cIgUE2bNJw0+z2tTnzsC33LmA5YL4aVXkayodFcW1Nw=",
        name: "Research & Planning",
        content: `Before starting the project, I conducted research on existing
                e-commerce platforms to understand what makes a good shopping
                experience. I focused on the following`,
        type: "section",
        sections: [
          {
            id: "Ml9SPyxg3MiPHTQnx7K1tFxLIUPkuqis9WsbXXIZdNg=",
            title: "Competitor Analysis",
            content: `Analyzing popular local and international e-commerce websites
                    for UX/UI inspiration.`,
          },
          {
            id: "9tFyEteARcGsT+kosHMLIV20binwcslS0H5JzKeJoRM=",
            title: "User Research",
            content: `Understanding pain points from users of similar platforms,
                    such as slow load times, complicated checkouts, or lack of
                    payment options.`,
          },
          {
            id: "bniUcYBv25oyOtIQ2GDMRkkGfRY+oOtx5HjyVgrgEIs=",
            title: "Technology Decisions",
            content: `I chose Next.js for its server-side rendering (SSR)
                    capabilities, which improve SEO and performance. TypeScript
                    was used to ensure scalability and reduce runtime errors. Strapi for simplicity of admin dashboard. Stripe for secure payments`,
          },
        ],
      },
      {
        id: "4KNmIvEIs99i3Np8l6s2K7xAdAob1PyFRV7VoBAupaw=",
        name: "Project Setup",
        content: `I set up the Next.js app with app routing, which allowed more flexibility in page management and better performance optimization. I also set up the Strapi headless CMS for managing product data.`,
        type: "paragraph",
      },
      {
        id: "3fpULGZaIz0Su9dDhHtCuiQKYH/nLIJwusm8391GodA=",
        name: "UI/UX Design",
        content: `I implemented the UI using Tailwind CSS for quick styling and responsiveness. For pre-built components, I used Flowbite to ensure consistency and ease of use across different projects.`,
        type: "section",
        sections: [
          {
            id: "pTdg9xw10FS4jMJx/EtwZU7nKAaq57GlLUunlXyAjgg=",
            title: "Homepage",
            content: `A clean hero section, featured products for
                    easy navigation.`,
          },
          {
            id: "CXCFK+XV8w4OVVxH3TYhwypen4pLQuZ5uOsUStQth68=",
            title: "Product Listing Page",
            content: `Product filters (price, category, brand), with lazy loading
                    for smooth performance.`,
          },
          {
            id: "fSA83U5g4wuTQsFwQ9CltV23h4iBDM6/YldvbYeamqQ=",
            title: "Product Details Page",
            content: `Detailed product descriptions.`,
          },
          {
            id: "9GL55vKO4IiDHonpwgzdKddboSf+GZzyse3NGyKtPiA=",
            title: "Cart and Checkout Flow",
            content: `User-friendly design with clear CTAs to increase conversion
                    rates.`,
          },
        ],
      },
      {
        id: "CHIvtWawGazQArtrbUBVQggpKDBE9kEjCFeJIaTP7MU=",
        name: "State Management",
        content: `For managing the cart, I used Redux state
                management library to simplify the logic. The cart state
                included`,
        type: "list",
        lists: [
          {
            id: "VLznial34vrt7bjrJirrH+ruSSiaZtnVf4c6aXKk7Cs=",
            title: "Product IDs and quantities.",
          },
          {
            id: "3rrgSPrS/0gA52vWXUlfpPiupUDh4nlwlGS7tPCak0I=",
            title: "Total price calculation.",
          },
          {
            id: "3rrgSPrS/W+O5Q8Dr2GRVo5McwJdBshYT1F1xjNvciha36rR10Q4==",
            title:
              "Handling of adding/removing items and applying discount codes.",
          },
        ],
      },
      {
        id: "ITVhvu+/Vikjs/wezjpe+k0jRyMTk4HBSEsFWVffMwQ=",
        name: "Payment Integration",
        content: `One of the critical features was the integration of Stripe to
                handle payments. I created a backend service to generate a
                PaymentIntent and return a clientSecret to securely manage
                payments on the front end.`,
        type: "paragraph",
      },
      {
        id: "26WAI0jF1a1MElm+4tQ9x/lcbMyPMSekAMmxdvIqPH8=",
        name: "Responsive Design",
        content: `The site was designed to be fully responsive, ensuring a smooth
                experience across mobile, tablet, and desktop devices. Using
                Tailwind CSS, I ensured`,
        type: "list",
        lists: [
          {
            id: "bVRV9Pwrzvn7FzR41Z/b39q622ot55heYYdRZDGcmrA=",
            title: "Responsive grids for product listings.",
          },
          {
            id: "YOF1ucz8+DDtMDBX2zbXyYEn4UADlqJNPCPE8m83glQ=",
            title:
              "Mobile-first approach for layout, especially in the checkout flow.",
          },
        ],
      },
      {
        id: "n6bRsamquxWMJH1JAX3dCy1pmPr1kVRdUGqgne38d/c=",
        name: "SEO & Performance Optimization",
        content: `To improve performance and SEO, I implemented server-side
                rendering and static generation for product pages using Next.js'
                features like getStaticProps and getServerSideProps. This
                enhanced`,
        type: "list",
        lists: [
          {
            id: "69cbKMc2SdRnFq3++sQTaaIQ7WdPHiOnWOUf/bQQB/8=",
            title: "Loading times for users with slow internet connections.",
          },
          {
            id: "BHeerZsjDo5SR7DEjCdJPxjah/+AuIlr77wxjPrvOPQ=",
            title:
              "SEO by ensuring that search engines could crawl the site effectively.",
          },
        ],
      },
      {
        id: "GKp/FOU0xdfTb6iO4D267v/WA1Hg40NkaXbT7AI1Sss=",
        name: "Results & Outcomes",
        type: "list",
        lists: [
          {
            id: "htecEr+eTWE5BP+0K9gIsI/W4vYizcgZZDfjkIlsfoM=",
            title: "Enhanced User Experience",
            content:
              "User engagement increased by 30% due to faster load times and an easy-to-navigate interface.",
          },
          {
            id: "fL3cBErNEJGivLrH7jU6VewcNEp0C07/dGYp0O0LPGg=",
            title: "Improved Conversion Rates",
            content:
              "The seamless checkout process using Stripe decreased cart abandonment by 25%.",
          },
          {
            id: "RrW7M7Uf18wt70/C45mK5WXaAL5Av9bK1wWuzwL0fjc=",
            title: "Mobile Optimization",
            content:
              "The responsive design improved mobile traffic by 40%, as users could easily shop on their phones without any usability issues.",
          },
        ],
      },
      {
        id: "rMWcZ6dPiMFsG+fd9EBqVZMP4ZXvc3zYUuRS9gdjDx0=",
        name: "Reflection",
        content: `The ShopBD project taught me the importance of balancing
                performance and user experience, especially in e-commerce
                platforms where fast, secure transactions are crucial. I also
                deepened my knowledge of payment integration through Stripe and
                refined my skills in managing state with Redux toolkit.`,
        type: "list",
        lists: [
          {
            id: "J49qdJGhgZAYSZcFe569f6juzCkEy5nZwiEd1+sIM00=",
            title:
              "Effective use of TypeScript reduced bugs and improved maintainability.",
          },
          {
            id: "yMo22X6nlTE3xZ3AkIMwmyG9op77GHSCULNEKnkeRzM=",
            title:
              "Integration of Stripe simplified payment handling and provided a secure solution.",
          },
        ],
        description: `Future improvements could include more automated testing for edge cases, especially in the checkout process.`,
      },
    ],
  },
  {
    id: "hrguQRlRC7cZ36dnN5u6znx/KVMbEFkVdUDo20sGbqA=",
    title: "StudyTube",
    slug: "study-tube",
    preview: "https://study-tube-tanzir-ibne-alis-projects.vercel.app/",
    type: "Video Player",
    thumbnail: StudyTube,
    links: [
      {
        id: "0mlJS7TAG2JgvlOBJg19MMpu8Af9WsThWzF6c01tARI=",
        title: "live preview",
        url: "https://study-tube-tanzir-ibne-alis-projects.vercel.app/",
      },
      {
        id: "zTB/zm0XLRCgDFTpG+6ZPRhjiCfbZbZ/D9w4P4AHwNM=",
        title: "frontend",
        url: "https://github.com/devtanzir/clean-youtube",
      },
    ],
    duration: "15 Days",
    caseStudy: [
      {
        id: "1SchlOcfIIg8dp8sKhGHYmJaCEM2yx64DzMZyYbVjNU=",
        name: "Project Overview",
        content: `Study Tube is an educational platform aimed at providing easy access to curated learning resources, tutorials, and course materials. The platform allows users to explore content from different subject areas, helping students . Built with a focus on a user-friendly interface and streamlined functionality, Study Tube is designed to make learning accessible and engaging and distract less for everyone.`,
        type: "section",
        sections: [
          {
            id: "NpN4fpGzdAFjPI1+2QjkPje0w26wR5hCzkkpwZvkt/Y=",
            title: "Tech Stack",
            content: `React.js, javaScript, Material UI, easypeasy, lottie, Prop-types, etc.`,
          },
        ],
      },
      {
        id: "8Lm3jjP1SVEyCFopCR9LhmTS3mbmacLAtBFRuh4G3Qk=",
        name: "Goals and Objectives",
        content: `The primary goal of Study Tube was to create distract less and intuitive platform that allows users to`,
        type: "list",
        lists: [
          {
            id: "aG+vH21fvq0+BnMBh08ChhXI2294VRdRW2OU95vCIKU=",
            title:
              "Discover and access high-quality educational content easily.",
          },
          {
            id: "SY4sv7TxrXi7yXnb+BBXiHI/H6OACpesTZ5W907iRDc=",
            title:
              "Provide a smooth and seamless experience on both desktop and mobile devices.",
          },
          {
            id: "hVmtBtahweMCTg1zHT2b/H+Q1Us3khfbMh8J5rfE9tE=",
            title:
              "Ensuring fast load times and efficient content delivery for better user engagement.",
          },
        ],
      },
      {
        id: "zzZM7L4aMj7EkTtXlffsejoUmvP/pR/t7HhDj+bAj4c=",
        name: "Challenges",
        content: `During the development of Study Tube, several key challenges were encountered`,
        type: "section",
        sections: [
          {
            id: "3FS7JN7aGPWGIntS0ULuWJ+0W/RsDoS9//S/xVoWiJo=",
            title: "Responsive Design",
            content: `Given the diverse devices users might use, creating a design that works seamlessly across mobile, tablet, and desktop platforms required careful planning and rigorous testing.`,
          },
          {
            id: "DQylf2sEiTRINxmA+du16cuJcrt0ojIw4LK7n3yRVLw=",
            title: "User Experience",
            content: `Balancing a clean, simple interface with functionality was a core focus. Overloading the user with too many features or cluttering the UI could have distracted from the primary goal—providing straightforward access to learning resources.`,
          },
        ],
      },
      {
        id: "ZLCYa+kfyU0FB3QMzLN0fSow6jh8RMqcJqC0WI9wB8c=",
        name: "Project Setup",
        content: `I set up the React.js. I also set up the Material UI for managing Project UI.`,
        type: "paragraph",
      },
      {
        id: "H+fI9pzvLcnOIKmhRI1gnlxskGgsODT1k+YKyYCAq8s=",
        name: "Solutions and Implementations",
        type: "section",
        sections: [
          {
            id: "PfkpEc4IPwoAAGtv5NUYk0c8AuioMRyjt7knHi52RDw=",
            title: "Efficient UI/UX Design",
            content: `Leveraging Tailwind CSS and React, the interface was designed to be both aesthetically pleasing and functional. The minimalist design approach ensures users can easily find content without feeling overwhelmed.`,
          },
          {
            id: "tpadPuSo0RYHm9yYLkP15y938xvC+hgZY3r6vXWsaAQ=",
            title: "Mobile-First Approach",
            content: `The website was designed with a mobile-first strategy in mind, ensuring optimal performance and usability on smartphones. This included a responsive grid layout, simplified navigation for smaller screens, and optimization for touch interactions.`,
          },
          {
            id: "1YsHP7DIRPNo5ji5TNx3IlF+BQOk8St2Aw1tXZHFhuc=",
            title: "Performance Optimizations",
            content: `By utilizing Next.js's server-side rendering and Vercel for fast content delivery, the platform was optimized for speed. Lazy loading was also used for assets such as images and videos to enhance the user experience.`,
          },
        ],
      },
      {
        id: "AC3Pb3863vZxldYE+yZ4VinEr9pH+/D2sHex6yrTM8U=",
        name: "State Management",
        content: `For managing the cart, I used Easypeasy state
                management library to simplify the logic. The Video state
                included`,
        type: "list",
        lists: [
          {
            id: "mdrzXukulQlqi+oXwR1NUbr96GrPTNqhvrYiss3LSZY=",
            title: "all type of video content.",
          },
        ],
      },
      {
        id: "qEesca/eklSTSSfdhQPLhzoCcnHYSgS63go0nKEWACU=",
        name: "Key Takeaways",
        content: `Study Tube showcases how modern web technologies can be leveraged to build a scalable, user-friendly educational platform. The project is a testament to the importance of responsive design, and performance optimization in delivering a seamless learning experience. Moving forward, there are plans to introduce more interactive features, such as quizzes, personalized course recommendations, Youtube channel, and user profiles, to enhance the platform's educational value.`,
        type: "paragraph",
      },
      {
        id: "mUUW/FHKXjlZUNTYFCmYvC6f/bJGevjOsRAaL5jO0D0=",
        name: "Responsive Design",
        content: `The site was designed to be fully responsive, ensuring a smooth
                experience across mobile, tablet, and desktop devices. Using
                Material UI, I ensured`,
        type: "list",
        lists: [
          {
            id: "AzoMXFfGgMd3BHT6Jb9Xlv2LtIEqlP4iUSOWwxIxWZo=",
            title: "Responsive grids for Playlist listings.",
          },
        ],
      },
      {
        id: "gAtaRCRrVHC5qeEDO9c9rd+4gMG1WJCNMrt/VwqJkbo=",
        name: "Performance Optimization",
        content: `To improve performance , I Call the Youtube api for one time and save all the data to a state`,
        type: "list",
        lists: [
          {
            id: "p9mTk0+vcUpzKub0zE6wmqKtCYBaL4ijQRsHDBMu92k=",
            title: "Loading times for users with slow internet connections.",
          },
        ],
      },
      {
        id: "HoJjy+7hEgvKyRxDDT3gfVrwtBYGyzPH5YM54LTnoi4=",
        name: "Results and Impact",
        type: "list",
        lists: [
          {
            id: "tZ4kTlOV8VUzzqsX6FSGh/VVtsP/bB+UZLa2no4t2Po=",
            title: "Faster Load Times",
            content:
              "Thanks to Vercel, the platform boasts lightning-fast load times, even with a large content library, leading to a better overall user experience.",
          },
          {
            id: "AWVZ4nGzuxEQjwtXoSkHLixGkvzWIbBCamtFnnLl0eQ=",
            title: "Scalability",
            content:
              "The project has been designed in a way that allows new features, such as user accounts and course tracking, to be easily integrated in the future.",
          },
          {
            id: "ENsk0GakUbGjCGr/T4H+2Mtw9MITRI+CbHjlYyAoBxw=",
            title: "Mobile Optimization",
            content:
              "The responsive design improved mobile traffic by 20%, as users could easily shop on their phones without any usability issues.",
          },
        ],
      },
      {
        id: "k4q95ys5qGY5/Z+kJmyqSV085VEee0cHF3QsVEbNt30=",
        name: "Future Plans",
        content: `The next phase of the Study Tube project will focus on`,
        type: "list",
        lists: [
          {
            id: "ANMSIcnG1epIamFjZqScnGaU0P/UcLTayBYO9yljzwo=",
            title:
              "Implementing quizzes and interactive modules to make learning more engaging.",
          },
          {
            id: "bDrPJJJisY4yLy4QM5Fnzyp+BXbUkTUmrWUAAl5yCdM=",
            title:
              "Expanding the library to cover more topics and bringing in expert-curated content to increase the platform’s credibility.",
          },
        ],
      },
    ],
  },
  {
    id: "okE1wR+8k1+D/XSbNPg0FD7mR/QyHqCQ0fooJn4BUOc=",
    title: "TrackZone",
    slug: "track-zone",
    preview: "https://track-zone-tanzir-ibne-alis-projects.vercel.app/",
    type: "Time Management",
    thumbnail: TimeZone,
    links: [
      {
        id: "IJPqE4U2yWbKjybOCHviZOKsA8MjieI7JW62nhzxNA0=",
        title: "live preview",
        url: "https://track-zone-tanzir-ibne-alis-projects.vercel.app/",
      },
      {
        id: "f4nPTfxOUtLn47NDEduxQS2/3vFYyvJD+SVq/rAs+B8=",
        title: "backend",
        url: "https://github.com/devtanzir/trackzone-backend",
      },
      {
        id: "JPoVf983uE7IGc3lnlCoVfA0odkm5IFjqv3Hh94VNkg=",
        title: "frontend",
        url: "https://github.com/devtanzir/TrackZone",
      },
    ],
    duration: "15 Days",
    caseStudy: [
      {
        id: "85zhi4yqcWBRAaisF6UY1HNNeDTkahtw0+pHDabAJ1Y=",
        name: "Project Overview",
        content: `Track Zone is a modern web application designed to help users keep track of key data points effectively. Created as a personal project, Track Zone utilizes responsive web technologies and a dynamic frontend to deliver a seamless experience. The app addresses common needs for efficient data tracking and user interaction, using interactive components, real-time data processing, and clear data visualizations.`,
        type: "section",
        sections: [
          {
            id: "9P6Mhxj9LTnp9HCZVOk789ikPG3KVIN0DIKVrXjwrSs=",
            title: "Tech Stack",
            content: `React, Vite, Express, MongoDB, Styled-Components, Axios, etc.`,
          },
        ],
      },
      {
        id: "WsecerBSr5OQnTK0qjlFKlEMuqpkCrvsgg6EAlHdpl0=",
        name: "Objectives",
        content: `The project aimed to`,
        type: "list",
        lists: [
          {
            id: "+HjfL3OMkDrRvoED89paZKok1l5NouV5ByMM48bEhPs=",
            title:
              "Develop an intuitive user interface that supports real-time data tracking.",
          },
          {
            id: "ncFOOHQr7z/IT49pN66HawMK6xUchVI77a9MhcVZcIM=",
            title:
              "Ensure smooth and fast interactions across various devices and browsers.",
          },
          {
            id: "crlztdhJbYmrPeuuZOQZrCc1owMze4d9LLwMfROYvp4=",
            title:
              "Create a robust backend that securely handles API requests and manages data storage.",
          },
          {
            id: "PKLuHtAa6Xt1Trp7mnRA1Gis3193X3oyWPpCTDWWW/o=",
            title:
              "Implement feedback mechanisms, such as notifications, to enhance the user experience.",
          },
        ],
      },
      {
        id: "Tm6B6MMKKJJTwFKyM8XlEgmDuCoAjQscI39gKMx20dE=",
        name: "Design & Development Approach",
        content: `The Track Zone project followed a modular development approach to support scalability and maintainability. Here’s a closer look at the frontend and backend`,
        type: "paragraph",
      },
      {
        id: "La6YFSm8ieVeGh1Le8KX2H0KcIfEpbQX0hDBjhjtTpA=",
        name: "Frontend",
        type: "section",
        sections: [
          {
            id: "GKtHb8irNPotU9hxJ2Q4L1vBjVOmTSDKRgEzpGAt6XU=",
            title: "Framework",
            content: `Built with React and Vite, allowing fast refreshes and optimal loading speeds.`,
          },
          {
            id: "m/0Awm0/AYdIhVBw33J0kAzvY+oAoXGkbMQ8JVAdcCc=",
            title: "UI/UX",
            content: `Styled-components facilitated custom-styled UI elements, which were designed to make data tracking and interaction straightforward and visually appealing.`,
          },
          {
            id: "G4tqVvJe3t5ZOIg1IaZXnT2GVewymMsTQ6bY1cndqLg=",
            title: "State Management",
            content: `Managed using React hooks, offering a lightweight yet powerful solution for handling user interactions and data flow.`,
          },
          {
            id: "9fUcT4d4+iGpx4r5PTGvuriJLxbMEGKjDizOPSKqPrk=",
            title: "Notifications",
            content: `Integrated react-toastify for real-time notifications, enhancing user experience by providing clear feedback on actions.`,
          },
          {
            id: "9fUcT4d4+d4PjMIL9RsWNaa3d8benr11ydvL5EXfN3DnbmAL02DM==",
            title: "API Integration",
            content: `Axios is used for seamless API requests, handling both data fetching and form submission efficiently.`,
          },
        ],
      },
      {
        id: "bQsyAHwnL8JxXXjsJReZ53yrY1b5hxHQi6XXzzSa+tQ=",
        name: "Backend",
        type: "section",
        sections: [
          {
            id: "U4hoiR6e0ekkT8s8zUDzMprdO/qV3MSjQiFKbJbqRyQ=",
            title: "Express & MongoDB",
            content: `The server is built using Express.js for handling API requests and MongoDB with Mongoose for data storage, ensuring secure and efficient database interactions.`,
          },
          {
            id: "M8HdEX0g1EEuYLVcjAe6OXQk1h8moDDVLtfNO1LCt3U=",
            title: "Security",
            content: `Cors middleware was used to handle cross-origin requests, while dotenv allowed for secure environment variable management.`,
          },
          {
            id: "eWYksqsY+ysd/hfMx08EWvhS66FoiIOR4GvFUSSwHhs=",
            title: "Scalability",
            content: `The backend is structured for easy expansion, with Mongoose schemas that can accommodate additional features and data as the project grows.`,
          },
        ],
      },
      {
        id: "IVKy0qv/HUxXUNlkb3nb35UeyDA8IpDdg0Q/jMrTLx8=",
        name: "Key Features",
        type: "section",
        sections: [
          {
            id: "vIPRvXA3xIxC+im4z50Pq4iih9bUX9dWAR/ule9+UWg=",
            title: "Real-time Data Tracking",
            content: `Users can add, edit, and remove data points dynamically, with immediate visual feedback.`,
          },
          {
            id: "gVSKzOa2so9piDOjiB10ukJdopKYtv6jBlIpdsu4wHw=",
            title: "Responsive Design",
            content: `Optimized for desktop and mobile, Track Zone offers a consistent experience across various devices.`,
          },
          {
            id: "Uq14fw4LoqcBerTJ1/EF8UWGkJW/pgoXPNPhOgM5Hps=",
            title: "Notifications",
            content: `Real-time feedback via toast notifications enhances interactivity and keeps users informed.`,
          },
          {
            id: "IOhIJmwGOZus6KSbQbGJQO2TUAsUtn2Dt9vorAai7bU=",
            title: "Fast Load Times",
            content: `Leveraging Vite’s quick refresh and lightweight bundling, the site is responsive and fast.`,
          },
        ],
      },
      {
        id: "k6hnCdcIg6TPaFmQUy4jEauCg6McDDQCsPEVdITxnXs=",
        name: "Challenges & Solutions",
        type: "section",
        sections: [
          {
            id: "QeD/Qv/DsW7MS00QZSVvutRp6MO/0u0H6/w6PwYbfvA=",
            title: "API Response Time",
            content: `Initial testing showed slight lags in API response times. By optimizing database queries and reducing payloads, the response time was improved significantly.`,
          },
          {
            id: "WB89k+LWJWtldu/J0vC6nsIAkU97ZeIIZJF+RTk7s4Q=",
            title: "Data Consistency",
            content: `Ensuring data integrity was a priority. Mongoose validations and custom error handling in Express were implemented to avoid invalid or incomplete data entries.`,
          },
          {
            id: "pkwNLH9hL1HmUCoyaOUZALR9ZwIywX6Dy8QDQ2K02Ww=",
            title: "Cross-Origin Requests",
            content: `During deployment, handling CORS became a challenge as the frontend and backend were hosted on separate domains. The issue was resolved by configuring the Express server with flexible CORS settings for development and production environments.`,
          },
        ],
      },
      {
        id: "EP93Cps1RMac4aGj8+M2LrQC8fx6zzIVeA01AHeaBSQ=",
        name: "Results & Impact",
        content: `Track Zone’s launch demonstrated the effectiveness of a streamlined tech stack and a user-focused design. Users reported`,
        type: "section",
        sections: [
          {
            id: "NH7ctvY9TB4sT/BphhfT6NHuW61IGtYHQxoRO3WnYbE=",
            title: "Improved Efficiency",
            content: `Real-time tracking features helped users manage and monitor their data more efficiently.`,
          },
          {
            id: "P6Ag/kmR7E0eACGpd3Mko4sXlfFhALVpUYAijOGPr8Y=",
            title: "Positive Feedback on UX",
            content: `The responsive design and clear notifications significantly enhanced user satisfaction.`,
          },
        ],
      },
      {
        id: "A/Pb2NY06OvZ/CSRnQa9TK2+vf6XHx/slG6efp5uTBI=",
        name: "Future Plans",
        content: `In future iterations, Track Zone may expand to include`,
        type: "section",
        sections: [
          {
            id: "SFVOiO477iNMHH61YGDvB+jQYp6iOexTKIwFZNA2hUs=",
            title: "User Authentication",
            content: `Adding secure login features.`,
          },
          {
            id: "V1ky2mj2Hbf7Zb4NJCPkDmWwBogtWJxKgxXwYdZ0Ft0=",
            title: "Advanced Data Analytics",
            content: `Integrating data visualization libraries to provide detailed insights.`,
          },
          {
            id: "+WK5vVqZK6vOSB+M54gN4+G/izvAbQcy4ZXcOSv20JI=",
            title: "Push Notifications",
            content: `Sending alerts to users even when they’re not on the site.`,
          },
        ],
      },
      {
        id: "KWmnrHw+SaHuntT5l0DVA0NDgJFKAZPFBoSPSIod+7k=",
        name: "Conclusion",
        content: `Track Zone illustrates the potential of combining responsive frontend technologies with a robust backend to create a seamless, interactive user experience. The project serves as a testament to modern web development’s capabilities in delivering fast, user-friendly applications that meet real-world needs.`,
        type: "paragraph",
      },
    ],
  },
  {
    id: "5uEvCxzG1efR/EmlhOqhbpRcKZJ/SADiGBUEQlp/IAk=",
    title: "Food App",
    slug: "food-app",
    preview: "https://food-app-gamma-two.vercel.app/",
    type: "Food Management",
    thumbnail: FoodApp,
    links: [
      {
        id: "IFvjbTzNrAKFAlY/H+M7MJAAEXRKE7KDv5WfX1wsDbE=",
        title: "live preview",
        url: "https://food-app-gamma-two.vercel.app/",
      },
      {
        id: "Z4rx3nFe18dmk6r5iEqzPZCr4STyS0rMQAr+gWG6NgQ=",
        title: "frontend",
        url: "https://github.com/devtanzir/food-app",
      },
    ],
    duration: "3 Days",
    caseStudy: [
      {
        id: "M1HpfCj5Rj8lVMuUogKgBHZVhBZWNVjiP82RwC+KwUE=",
        name: "Project Overview",
        content: `The Food App is a dynamic landing page designed to showcase a food delivery or restaurant service. The primary focus of the page is to attract users by providing an engaging, visually appealing introduction to the service, showcasing the menu, customer testimonials, and easy navigation for seamless user experience.`,
        type: "section",
        sections: [
          {
            id: "HBK9+skzmPw+Igc+BLsga70DP6EMW4U2LpkSJL73zBU=",
            title: "Tech Stack",
            content: `React, Vite, Bootstrap, React Router, etc.`,
          },
        ],
      },
      {
        id: "2BOBaO5AxZMJPLLEgj7LmwVLmD8VyHXzBOl+jFg6dss=",
        name: "Objectives",
        content: `The primary objectives for the Food App landing page were`,
        type: "section",
        sections: [
          {
            id: "CpYrFV+6tjIErrf0HDf86an2jm7mqzIzdCCijwPpwlA=",
            title: "User Engagement",
            content: `Create an eye-catching layout to attract and retain visitor interest.`,
          },
          {
            id: "qRNhjCMzFRgMBXve2Ui8aiZOo0+c3FhfFlMJwXID2Bk=",
            title: "Ease of Use",
            content: `Ensure easy navigation and quick access to key sections, such as the menu and contact information.`,
          },
          {
            id: "yXJ7tdEr+AVZpbPyBMmIe0Lwzn36KWMVcF4p3j/iYBM=",
            title: "Brand Identity",
            content: `Reflect a fresh and inviting brand identity, appealing to a wide audience.`,
          },
        ],
      },
      {
        id: "5UlHCbdlYHOwTMOfcgkShxgBXWaz3dVRY2WARnFr/bQ=",
        name: "Design Elements",
        type: "section",
        sections: [
          {
            id: "U4jp+RppxE+ycgoRkj2ZoyaJgHHYIq8MCNmYeIPmxyI=",
            title: "Responsive Design",
            content: `Using Bootstrap and React-Bootstrap, the page was crafted to look great across all devices, with careful attention to mobile-first design.`,
          },
          {
            id: "CNhWK2ydknE8EI7huQvvIW3BKchdIGwvprZ5eYqmycQ=",
            title: "Visual Hierarchy",
            content: `The layout emphasizes the most important information, with clear sections for the menu, testimonials, and call-to-action buttons to guide user interactions.`,
          },
          {
            id: "wlvTAMhJjWq9M37YE29DlhIl/HX3eXepHECDH08EutA=",
            title: "Brand Colors and Fonts",
            content: `A color scheme and font selection were used to align with the brand’s identity, creating an inviting and appetizing look.`,
          },
        ],
      },
      {
        id: "t0a8KH9fHWdvfiXnZRj/VLBrzbt4wz1K2VA+VlPm9VU=",
        name: "Development Choices",
        type: "section",
        sections: [
          {
            id: "NZefpA1XvEGrK72pqfiwbethamai+auz1LtpxglUmSo=",
            title: "Frontend with React and Vite",
            content: `React’s component-based structure allowed for modular design, while Vite provided fast development and optimized builds.`,
          },
          {
            id: "BS+S5Ud6TfrJGMUO7pkkJlz/qNPz7NAu1QhU/dEpLz8=",
            title: "Bootstrap and Icons",
            content: `Bootstrap components and Bootstrap Icons streamlined the styling process, reducing the need for custom CSS.`,
          },
          {
            id: "GWx1xNg6vu+pmjXuPm5VAXwBP3LBRCjSdxpkAepD5yA=",
            title: "Routing with React Router",
            content: `Although this is a single-page landing app, React Router sets the groundwork for potential navigation to different sections or future pages, enhancing scalability.`,
          },
        ],
      },
      {
        id: "qlTrd2s/g2VLv1uSFWABtyMlKDSumn5XTZhyWPfNfRY=",
        name: "Key Features",
        type: "section",
        sections: [
          {
            id: "mI9mFp6/XIpwFEABVA0AgmnR+t4NKOrZFIL/Q1Z+Ekw=",
            title: "Responsive Layout",
            content: `Optimized to work on various screen sizes, providing consistent functionality and design across devices.`,
          },
          {
            id: "sj5PtMybu3gNezUREGyxeuOM0ez3mXFJ6pC/4wFSnP8=",
            title: "Dynamic Menu Display",
            content: `The menu section is organized to be easy to browse and appealing to users, using Bootstrap components for a clean and organized look.`,
          },
          {
            id: "jln0KpdsSDyFtOWRWM9TGD/USlNJU2YhCTGl5aQcVmg=",
            title: "User Reviews",
            content: `Displaying customer testimonials builds trust and gives credibility to the service.`,
          },
          {
            id: "3pADeUN9EhDn9SncUDT4sVi/Xmv/Y4Zkfm9GE1uD5IE=",
            title: "Call-to-Action",
            content: `Buttons and links direct users to action points, such as ordering or learning more about the service, encouraging engagement.`,
          },
        ],
      },
      {
        id: "/TDvgPLeTcvQlKK0tJrGWHvwOlV9Jt/S7Nj86p18YCo=",
        name: "Challenges & Solutions",
        type: "section",
        sections: [
          {
            id: "KSLyBBY/5U4Tg6hgSmOI1wKujvo6svDIaR0juSxZuMg=",
            title: "Cross-Device Responsiveness",
            content: `Ensuring that all components adjusted correctly across device types was initially challenging. Bootstrap’s responsive grid system and media queries were used to achieve a consistent look.`,
          },
          {
            id: "TGl62wY5ZUSK0+jwqxX1eb9whzxM/4emb89xrV31tcs=",
            title: "Loading Speed",
            content: `Initial load times were a priority, especially for mobile. Vite’s optimized build process and lightweight asset management reduced load times significantly.`,
          },
          {
            id: "SUUNKzze4hzFHJJ+DIGXUXQlTZspBFg09UZYvDnQpU0=",
            title: "User Engagement",
            content: `To create a highly engaging experience, clear call-to-actions and an intuitive layout were tested and refined based on user feedback.`,
          },
        ],
      },
      {
        id: "SUUNKzze4hzFHJJ+grstHGARciTP6IASb75EURqBbjGzJDZoUqKfjASgQeA==",
        name: "Results & Impact",
        content: `The Food App landing page succeeded in creating a polished, professional, and inviting introduction to the food service. Users experienced`,
        type: "section",
        sections: [
          {
            id: "YsEyvjKuEfPeEeAbtoPxE7NOGSBNlIojDg0wdtbrypg=",
            title: "Higher Engagement",
            content: `Visitors interacted more with the menu and call-to-action buttons, spending longer on the site.`,
          },
          {
            id: "6/lay1MH7qFVQYrdkpU3ghDkWdv3ALb2AvOflHidVRA=",
            title: "Positive User Feedback",
            content: `Users noted the simplicity and appeal of the design, which helped foster trust and interest.`,
          },
        ],
      },
      {
        id: "+yTDbLfIP7v4FNKqqAnvyu0yBrdQAPEWw11FiRKWJKc=",
        name: "Future Plans",
        content: `To enhance the app further, future plans include`,
        type: "section",
        sections: [
          {
            id: "JUW39JPwnA7gTYDOShidM94tUWVXWKhe6pgdmjDKIzQ=",
            title: "Adding Authentication",
            content: `To allow users to create accounts and save orders.`,
          },
          {
            id: "j02325rAeTj/mXUj0UMABuoBQMvma8vckPiGgrG9+Kc=",
            title: "Order Integration",
            content: `Adding an ordering feature, making it possible for users to order food directly from the app.`,
          },
          {
            id: "bBVl/U+fScCrJuXOYqcgyQjMYt6VEIvAVfQxw4V00bE=",
            title: "Expanded Menu & Sections",
            content: `Adding more detailed sections for nutrition info, chef specials, and seasonal items.`,
          },
        ],
      },
      {
        id: "EMhCX8DQUuvj46+4uY8QhS7EvfLJMN6AL0bQfPE/ryQ=",
        name: "Conclusion",
        content: `The Food App landing page showcases how a responsive design, thoughtful layout, and optimized technology stack can create an effective user experience, encouraging engagement and delivering a compelling introduction to a food service. This project is a testament to the potential of modern web technologies in developing fast, responsive, and engaging landing pages.`,
        type: "paragraph",
      },
    ],
  },
];
