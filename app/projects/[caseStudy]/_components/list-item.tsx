import React from "react";
import { ProjectInfo } from "./information";
import { Des, MiniTitle } from "@/components/ui/case-study";
interface ListProps {
  data: ProjectInfo[];
}
const ListItem: React.FC<ListProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-2">
      {data.map((item, index) => (
        <li key={item.id} className="font-bold text-dark dark:text-light">
          {index + 1}. {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;

export const ListDiv: React.FC<ListProps> = ({ data }) => {
  return (
    <>
      {data.map((item: ProjectInfo) => (
        <div key={item.id} className="mb-3">
          <MiniTitle>{item.title}:</MiniTitle>
          <Des>{item.content}</Des>
        </div>
      ))}
    </>
  );
};
