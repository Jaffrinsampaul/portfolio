import CustomImage from "../CustomImage";

const CustomIconButton = ({ iconDts, onClick }: any) => {
  return (
    <div role="button" onClick={onClick}>
      <CustomImage
        imageBehaviour={{
          ...iconDts,
        }}
      />
    </div>
  );
};

export default CustomIconButton;
