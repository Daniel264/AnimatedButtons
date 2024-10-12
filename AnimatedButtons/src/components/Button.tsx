interface ButtonProps {
    backgroundColor: string;
    color: string;
}

export const Button = ({ backgroundColor, color }: ButtonProps) => {
    return (
        <button
            className={`btn-shadow group relative flex h-[45px] w-fit items-center justify-center overflow-hidden rounded-xl px-3 ${backgroundColor} text-sm ${color} rounded-xl font-normal  leading-[24px]   transition-all md:h-[48px] xl:w-[154px] xl:text-[14px]`}
        >
            <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] rounded-xl bg-white transition-all duration-300 group-hover:h-[52px]" />
            <span className="z-[11] group-hover:text-black">Hover me</span>
        </button>
    );
};
