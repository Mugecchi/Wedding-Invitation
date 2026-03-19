import ornament from "@/assets/ornament.png";

const GoldSeparator = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center py-4 ${className}`}>
    <img src={ornament} alt="" className="w-48 opacity-70" />
  </div>
);

export default GoldSeparator;
