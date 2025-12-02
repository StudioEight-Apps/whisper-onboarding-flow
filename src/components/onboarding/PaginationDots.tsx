interface PaginationDotsProps {
  total: number;
  current: number;
  isDark?: boolean;
}

export const PaginationDots = ({ total, current, isDark = false }: PaginationDotsProps) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full transition-all duration-300 ${
            index === current
              ? isDark 
                ? 'bg-primary-foreground w-6' 
                : 'bg-foreground w-6'
              : isDark
                ? 'bg-primary-foreground/30'
                : 'bg-foreground/30'
          }`}
        />
      ))}
    </div>
  );
};
