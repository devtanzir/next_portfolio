import { createId } from "@/lib/utils";
import featureImage1 from "@/public/image/feature-blog.avif";
import featureImage2 from "@/public/image/feature-blog2.avif";
import allBlogImage from "@/public/image/form-validation.png";
import allBlogImage2 from "@/public/image/smooth-scroll.jpg";
import allBlogImage3 from "@/public/image/react-portals.webp";

export const featureBlog = [
  {
    id: createId(),
    title: "পাঁচটি গুরুত্বপূর্ণ অভ্যাস বা Habit যা একজন ওয়েব ডেভলপার বা প্রোগ্রামারের অবশ্যই থাকা উচিত ।",
    img: featureImage1,
    time: "5 min read",
    summary: `অভ্যাসের দাস মানুষ এই প্রবাদটি আমরা ছোটবেলা থেকেই শুনে এসেছি । একটি ভালো অভ্যাস আপনার জীবনকে দেবে স্বর্গীয় অনুভূতি আর একটি খারাপ অভ্যাস আপনার জীবনকে দিবে নরকের যন্ত্রনা । তাই আজকের এই আর্টিকেলে আমি আপনার সাথে এমন পাঁচটি অভ্যাস বা Habit এর কথা বলবো যা একজন ওয়েব ডেভলপার বা প্রোগ্রামারের অবশ্যই থাকা উচিত। **`,
    link: "/",
  },
  {
    id: createId(),
    title:
      "Dynamic Programming কি?",
    img: featureImage2,
    time: "2 min read",
    summary: `যখন একটা recursive function এ same input এর জন্য বারবার ফাংশন কল করা হয় মানে already আমি একবার ফাংশন কল করে ans পেয়ে গেছি তবুও same function আমি বারবার কল করে চলেছি সেই কেস গুলোতে ডাইনামিক প্রোগ্রামিং ব্যাবহার করে সেটিকে অপটিমাইজ করা যায়।`,
    link: "/",
  },
];
export const allBlog = [
  {
    id: createId(),
    title:
      "Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling",
    img: allBlogImage,
    date: "January 07, 2023",
    link: "/",
  },
  {
    id: createId(),
    title:
      "Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers",
    img: allBlogImage2,
    date: "February 15, 2023",
    link: "/",
  },
  {
    id: createId(),
    title:
      "Creating An Efficient Modal Component In React Using Hooks And Portals",
    img: allBlogImage3,
    date: "March 22, 2023",
    link: "/",
  },
  
];
