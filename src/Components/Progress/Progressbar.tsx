type Props = {};

const Progressbar = (props: Props) => {
  return (
    <div className="bg-[#E1E1E1] w-full h-[3px] mt-1 rounded-[10px]">
      <div className="bg-[#1C24DB] h-full rounded-[10px]" style={{ width: '10%' }} />
    </div>
  );
};

export default Progressbar;
