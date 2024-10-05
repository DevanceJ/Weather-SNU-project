interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const InfoItem = ({ icon, title, value }: InfoItemProps) => (
  <div className="flex items-center space-x-3">
    {icon}
    <div>
      <p className="text-sm sm:text-base font-medium">{title}</p>
      <p className="text-lg sm:text-xl font-semibold">{value}</p>
    </div>
  </div>
);
