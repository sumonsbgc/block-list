import CollapseTitle from "./CollapseTitle";
import CollapseContent from "./CollapseContent";

type AccordionProps = {
  title: string;
  isOpen: boolean;
  content: string;
  onToggle: () => void;
  lastIndex?: number;
  activeBeforeIndex?: number;
  index?: number;
};

const Accordion = ({
  title,
  isOpen,
  content,
  onToggle,
  lastIndex,
  activeBeforeIndex,
  index,
}: AccordionProps) => {
  return (
    <div
      className={`bg-white px-8 overflow-y-hidden ${isOpen && "py-4 my-3 rounded-xl"
        }`}
    >
      <CollapseTitle
        title={title}
        isOpen={isOpen}
        onClick={onToggle}
        lastIndex={lastIndex}
        activeBeforeIndex={activeBeforeIndex}
        index={index}
      />
      <div className={`accordion-content ${isOpen && "open py-4"}`}>
        <CollapseContent content={content} />
      </div>
    </div>
  );
};

export default Accordion;
