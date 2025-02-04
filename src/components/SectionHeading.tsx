// components/SectionHeading.tsx
interface SectionHeadingProps {
    title: string;
    emphasizedText: string;
  }
  
  const SectionHeading = ({ title, emphasizedText }: SectionHeadingProps) => {
    return (
      <div className="section-heading relative z-[2] mt-0 mb-20 text-center">
        <div className="line-dec w-[100px] h-[2px] bg-[#7453fc] mx-auto mb-[30px]"></div>
        <h2 className="mt-[10px] leading-[36px] text-[30px] font-bold capitalize text-white">
          {title} <em className="text-[#7453fc] not-italic">{emphasizedText}</em>
        </h2>
      </div>
    );
  };
  
  export default SectionHeading;