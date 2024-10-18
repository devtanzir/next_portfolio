import { useRef } from "react";
import LiIcon from "./li-icon";
import { motion } from "framer-motion";

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details: React.FC<DetailsProps> = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
          {type}
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm text-dark dark:text-light">
          {info}
        </p>
      </motion.div>
    </li>
  );
};
export default Details;
