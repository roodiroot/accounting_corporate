interface FeaturesContainerProps extends React.HTMLAttributes<HTMLDivElement> {}
const FeaturesContainer: React.FC<FeaturesContainerProps> = ({ ...props }) => {
  return (
    <div
      className="aspect-[1/1] overflow-hidden w-full max-w-[360px] mx-auto md:mx-0 md:odd:ml-auto lg:mx-auto"
      {...props}
    />
  );
};

export default FeaturesContainer;
