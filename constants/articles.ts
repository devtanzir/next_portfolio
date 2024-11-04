import { createId } from "@/lib/utils";
import featureImage1 from "@/public/image/feature-blog.avif";
import featureImage2 from "@/public/image/feature-blog2.avif";
import allBlogImage from "@/public/image/react-19.jpg";
import allBlogImage2 from "@/public/image/user-interface.png";
import allBlogImage3 from "@/public/image/five-important.png";

export const featureBlog = [
  {
    id: createId(),
    title: "পাঁচটি গুরুত্বপূর্ণ অভ্যাস বা Habit যা একজন ওয়েব ডেভলপার বা প্রোগ্রামারের অবশ্যই থাকা উচিত ।",
    img: featureImage1,
    time: "5 min read",
    summary: `অভ্যাসের দাস মানুষ এই প্রবাদটি আমরা ছোটবেলা থেকেই শুনে এসেছি । একটি ভালো অভ্যাস আপনার জীবনকে দেবে স্বর্গীয় অনুভূতি আর একটি খারাপ অভ্যাস আপনার জীবনকে দিবে নরকের যন্ত্রনা । তাই আজকের এই আর্টিকেলে আমি আপনার সাথে এমন পাঁচটি অভ্যাস বা Habit এর কথা বলবো যা একজন ওয়েব ডেভলপার বা প্রোগ্রামারের অবশ্যই থাকা উচিত। **`,
    link: "https://stacklearner.com/habit",
  },
  {
    id: createId(),
    title:
      "Dynamic Programming কি?",
    img: featureImage2,
    time: "2 min read",
    summary: `যখন একটা recursive function এ same input এর জন্য বারবার ফাংশন কল করা হয় মানে already আমি একবার ফাংশন কল করে ans পেয়ে গেছি তবুও same function আমি বারবার কল করে চলেছি সেই কেস গুলোতে ডাইনামিক প্রোগ্রামিং ব্যাবহার করে সেটিকে অপটিমাইজ করা যায়।`,
    link: "https://stacklearner.com/dynamic-programming-intro",
  },
];
export const allBlog = [
  {
    id: createId(),
    title:
      "Leveraging Actions in React 19 for Enhanced Form Handling",
    img: allBlogImage,
    date: "August 10, 2024",
    link: "https://www.greatfrontend.com/blog/leveraging-actions-in-react-19-for-enhance-form-handling",
  },
  {
    id: createId(),
    title:
      "User Interface Components at Scale",
    img: allBlogImage2,
    date: "Dec 23, 2023",
    link: "https://www.greatfrontend.com/blog/web-apps-at-scale-ui-components",
  },
  {
    id: createId(),
    title:
      "5 Most Important User Interface Questions to Master for Front End Interviews",
    img: allBlogImage3,
    date: "Dec 19, 2023",
    link: "https://www.greatfrontend.com/blog/most-important-user-interface-questions-front-end-interviews",
  },
  
];
