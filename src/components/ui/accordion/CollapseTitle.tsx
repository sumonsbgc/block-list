import { Title } from "@/components";

type CollapseProps = {
  className?: string;
  title: string;
  isOpen: boolean;
  onClick: () => void;
  activeBeforeIndex?: number;
  lastIndex?: number;
  index?: number;
};

const CollapseTitle = ({
  title,
  isOpen,
  onClick,
  className,
  activeBeforeIndex,
  lastIndex,
  index
}: CollapseProps) => {
  let border: string = 'border-b border-[#000]/10';

  if (isOpen) {
    border = 'border-none';
  }

  if (lastIndex === index) {
    border = 'border-none';
  }

  if (activeBeforeIndex === index) {
    border = 'border-none';
  }

  return (
    <div
      className={`flex gap-2 justify-between items-center py-5 cursor-pointer ${className} ${border}`}
      onClick={onClick}
    >
      <Title variant="h4" className="font-medium !text-lg" content={title} />
      <span
        className="flex-shrink-0 leading-relaxed text-white w-5 h-5 rounded-full flex items-center justify-center text-base font-medium"
        style={{ backgroundImage: 'linear-gradient(to bottom, #696EFF 0%, #80C0C9 100%)' }}
        dangerouslySetInnerHTML={{ __html: isOpen ? '&#8722;' : '&#43;' }}
      />
    </div>
  );
};

export default CollapseTitle;
