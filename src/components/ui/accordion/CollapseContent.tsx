const CollapseContent = ({ content }: { content: string }) => {
  return (
    <div>
      <p className="!text-base font-normal !text-[#666] pb-4 pt-2">{content}</p>
    </div>
  );
};

export default CollapseContent;
