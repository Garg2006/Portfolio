const MobileCard = ({
  heading,
  description,
  projectBuilt,
  bgImg,
  href,
  overlay,
}) => {
  return (
    <div className="w-80 h-[440px] rounded-2xl overflow-hidden mb-10">
      <a href={href} target="_blank">
        <div className="w-full h-full relative">
          <img src={bgImg} className="absolute w-full h-full" />
          {overlay && (
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
          )}
          <div className="relative p-10 text-white">
            <h1 className="text-2xl uppercase">{heading}</h1>
            <div className="leading-relaxed space-y-2">
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
              <p className="font-mono">✨ Built With</p>
              <div>
                {projectBuilt?.map((stack) => (
                  <div className="not-last:border-b-3 border-[#9DDCFF] border-dotted ">
                    <h3 className="capitalize text-lg py-2">{stack}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MobileCard;
