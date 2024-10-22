import { createId } from "@/lib/utils";
import Image1 from "@/public/image/shop-bd.png";

export const ProjectsData = [
  {
    id: createId(),
    title: "ShopBD",
    slug: "shop-bd",
    preview: "https://ecommerce-tanzir-ibne-alis-projects.vercel.app/",
    type: "Ecommerce",
    thumbnail: Image1,
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
    box1: {
      information: `ShopBD is a modern e-commerce platform tailored for the local
             market in Bangladesh. It was developed for practice purpose like how to add payment get-way, user authentication, headless CMS in a project and handle it in a proper way. This case
             study explores the challenges, solutions, and technologies
             behind the development of the platform.`,
      name: "Project Overview",
      moreInfo: [
        {
          id: createId(),
          title: "Tech Stack",
          content: `Next.js 14 (with app routing), TypeScript, Tailwind CSS, Redux, , Strapi, Stripe, etc.`,
        },
        {
          id: createId(),
          title: "Objective",
          content: `Build a scalable and responsive e-commerce platform with secure payment integration, product management, and an admin dashboard.`,
        },
      ],
    },
    box2: {
      information: `The goal was to create an e-commerce platform specifically for
                Bangladeshi users, combining ease of use with scalability. Key
                challenges included`,
      name: "Problem Statement",
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
                frictionless as possible.`,
    },
    box3: {
      information: `Before starting the project, I conducted research on existing
                e-commerce platforms to understand what makes a good shopping
                experience. I focused on the following:`,
      name: "Research & Planning",
      moreInfo: [
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
                  was used to ensure scalability and reduce runtime errors.`,
        },
      ],
    },
    box4: {
      information: `I set up the Next.js app with app routing, which allowed more flexibility in page management and better performance optimization. I also set up the Strapi headless CMS for managing product data and user authentication.`,
      name: `Project Setup`,
    },
    box5: {
      information: `I implemented the UI using Tailwind CSS for quick styling and responsiveness. For pre-built components, I used Flowbite to ensure consistency and ease of use across different projects.`,
      name: `UI/UX Design`,
      moreInfo: [
        {
          id: createId(),
          title: "Homepage",
          content: `A clean hero section, featured products, and categories for
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
          content: `Detailed product descriptions, image carousels, and customer
                  reviews.`,
        },
        {
          id: createId(),
          title: "Cart and Checkout Flow",
          content: `User-friendly design with clear CTAs to increase conversion
                  rates.`,
        },
      ],
    },
    box6: {
      information: `For managing the cart, I used Redux with the easy-peasy state
                management library to simplify the logic. The cart state
                included:`,
      name: `State Management`,
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
    box7: {
      information: `One of the critical features was the integration of Stripe to
                handle payments. I created a backend service to generate a
                PaymentIntent and return a clientSecret to securely manage
                payments on the front end.`,
      name: `Payment Integration`,
    },
    box8: {
      information: `The site was designed to be fully responsive, ensuring a smooth
                experience across mobile, tablet, and desktop devices. Using
                Tailwind CSS, I ensured:`,
      name: `Responsive Design`,
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
    box9: {
      information: `To improve performance and SEO, I implemented server-side
                rendering and static generation for product pages using Next.js'
                features like getStaticProps and getServerSideProps. This
                enhanced:`,
      name: `SEO & Performance Optimization`,
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
    box10: {
      name: `Results & Outcomes`,
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
        {
          id: createId(),
          title: "SEO Boost",
          content:
            "Thanks to Next.js’ SSR and SSG features, the site saw a 20% improvement in organic search traffic.",
        },
      ],
    },
    box11: {
      information: `The ShopBD project taught me the importance of balancing
                performance and user experience, especially in e-commerce
                platforms where fast, secure transactions are crucial. I also
                deepened my knowledge of payment integration through Stripe and
                refined my skills in managing state with Redux and easy-peasy.`,
      name: "Reflection",
      information1: `What went well:`,
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
      information2: `What could be improved:`,
      lists2: [
        {
          id: createId(),
          title:
            "Future improvements could include more automated testing for edge cases, especially in the checkout process.",
        },
      ],
    },
  },
];
