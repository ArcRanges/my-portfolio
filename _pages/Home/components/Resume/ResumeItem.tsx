import React from "react";
import Heading from "../../../../components/Heading";
import ListItem from "../../../../components/ListItem";
import Paragraph from "../../../../components/Paragraph";

interface ResumeItemProps {
  title: string;
  subtitle?: string;
  description: string[] | string;
}
export default function ResumeItem({
  title,
  subtitle,
  description,
}: ResumeItemProps) {
  return (
    <div className="mt-3">
      {subtitle && (
        <Heading type="h6" className="text-sm ">
          {subtitle}
        </Heading>
      )}
      <Heading type="h4" className="text-2xl ">
        {title}
      </Heading>
      <div className="mt-3">
        {Array.isArray(description) ? (
          <ul className="list-disc">
            {description.map((desc: string) => (
              <ListItem className="ml-4">{desc}</ListItem>
            ))}
          </ul>
        ) : (
          <Paragraph>{description}</Paragraph>
        )}
      </div>
    </div>
  );
}
