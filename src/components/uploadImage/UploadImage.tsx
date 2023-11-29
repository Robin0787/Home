import { IoCloudUploadOutline } from "react-icons/io5";
import CircleLoader from "../loaders/circleLoader/CircleLoader";

const UploadImage = ({ handleImageChange, loading, image }) => {
  return (
    <div className="flex items-center justify-center w-full relative">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-[120px] lg:h-[150px] 2xl:h-[170px] border-2 border-[#808080] border-dashed hover:border-gray-300 rounded-lg cursor-pointer bg-[#ffffff20] hover:bg-[#ffffff40] duration-500 group"
      >
        {loading ? (
          <CircleLoader loader={true} height="50px" width="50px" />
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="text-primary group-hover:text-white duration-300 mb-2">
              <IoCloudUploadOutline size={40} />
            </div>
            {image ? (
              <p className="mb-2 text-sm text-primary group-hover:text-white duration-300">
                <span className="font-semibold ">{image}</span>
              </p>
            ) : (
              <>
                <p className="mb-2 text-sm text-primary group-hover:text-white duration-300">
                  <span className="font-semibold ">Upload your logo here.</span>
                </p>
                <p className="text-xs text-primary group-hover:text-white duration-300">
                  PNG, JPG, Or WEBP
                </p>
              </>
            )}
          </div>
        )}
        <input
          id="dropzone-file"
          type="file"
          accept={[".png", ".jpg", ".webp"]}
          className="hidden"
          onChange={(e) => {
            handleImageChange(e.target?.files[0]);
          }}
        />
      </label>
    </div>
  );
};

export default UploadImage;
