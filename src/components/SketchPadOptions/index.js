//todo: implement slider to change resolution, maybe one to change size too

const SketchPadOptions = () => {
  return (
    <div>
      <input
        type="range"
        min="200"
        max="800"
        defaultValue={600}
        className="slider"
        id="size"
      />
      <input
        type="range"
        min="4"
        max="64"
        defaultValue={16}
        className="slider"
        id="resolution"
      />
    </div>
  );
};

export default SketchPadOptions;
