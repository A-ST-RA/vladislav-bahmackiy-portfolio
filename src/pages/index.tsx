import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["cyrillic"] });

export default function Home() {
return (
  <div className="relative overflow-hidden min-h-dvh bg-main-background">
    <Image alt="Владислав Бахмацкий" className="w-[100px] md:w-[514px] right-[24px] top-[16px] rounded-full absolute md:top-[50%] md:translate-y-[-50%] md:right-[-257px]" src="/png/me.jpg" width={514} height={514} />
    <main className={`selection:bg-yellow-500 absolute z-10 min-h-dvh flex justify-center gap-y-8 md:gap-y-16 px-6 md:px-[100px] py-4 flex-col ${inter.className}`}>
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <h2 className="animate-fadeIn leading-tight text-2xl md:text-h2 text-secondary">Привет!</h2>
        <h1 className="animate-fadeIn leading-tight flex gap-y-2 md:gap-y-4 flex-col text-secondary text-h1-mobile font-medium md:text-h1">
          Меня зовут Владислав.
          <div className="animate-fadeIn text-white delay-100">
            Я веб разработчик.
          </div>
        </h1>
      </div>
      <p className="animate-fadeIn text-white max-w-[70%] text-2xl md:text-h2 leading-tight">
        Я создаю <span className="text-accent bg-[#9C69BF]">сайты</span> для вашего бизнеса,&nbsp;
        <span className="text-secondary">
          а так же занимаюсь повышением конверсиии
          вашего сайта
        </span>
      </p>
      <div className="animate-fadeIn flex flex-col text-secondary gap-y-4 text-2xl md:text-h2 leading-tight">
        <div>
          Свяжитесь со мной через <Link className="text-white ease-in-out duration-200 hover:text-secondary" href="https://t.me/a_st_ra">telegram.</Link>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-16">
          <div className="animate-fadeIn">
            Читайте мой <Link className="text-white ease-in-out duration-200 hover:text-secondary" href="https://t.me/vladislav_bahm_it">блог.</Link>
          </div>
          <div className="animate-fadeIn">
            Cмотрите видео на <Link className="text-white ease-in-out duration-200 hover:text-secondary" href="https://www.youtube.com/channel/UCLYH4k94xBPwLBHqguow6_Q">youtube.</Link>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
}
