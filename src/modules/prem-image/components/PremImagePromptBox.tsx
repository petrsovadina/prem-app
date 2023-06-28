import PrimaryButton from "shared/components/PrimaryButton";
import { PremImageResponse } from "../types";

type PromptProps = Pick<PremImageResponse, "prompt" | "setPrompt">;

const PremImagePromptBox = ({ prompt, setPrompt }: PromptProps) => {
  return (
    <div className="md:m-[50px] flex max-lg:flex-wrap gap-10 m-[25px] prem-img-promptbox">
      <div className="flex lg:w-1/2 w-full flex-col">
        <span className="bg-darkcharcoal py-2 px-[14px] min-w-[129px] w-fit rounded-tl rounded-tr">
          Prompt
        </span>
        <textarea
          className="h-[134px]"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        ></textarea>
      </div>
      <div className="flex lg:w-1/2 w-full flex-col">
        <div className="flex">
          <span className="bg-darkcharcoal py-2 px-[14px] w-fit rounded-tl rounded-tr">
            Negative Prompt
          </span>
          <span className="ml-auto">Optional</span>
        </div>
        <textarea className="h-[80px]"></textarea>
        <div className="mt-3">
          <PrimaryButton className="!px-12 !py-2 !text-sm">Generate Image</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default PremImagePromptBox;