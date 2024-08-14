import { Logo } from "../../../Atoms/Logo";
export interface ImageLocateProps {
  locate: string,
}
export function ImageLocate({ locate }: ImageLocateProps) {
  return (
    <div
      className='
        flex
      '
    >
      <div
        className='
          flex
          center
          h-3/6
          w-32
          sm:border-r-[1px]
          sm:border-solid
          border-white
          my-auto
          ml-4
        '
      >
        <a className="m-auto" href="/">
          <Logo className="w-28" />
        </a>
      </div>
      <p
        className='
          font-roboto
          text-sm
          leading-4
          w-9
          my-auto
          mx-2
          hidden sm:block
        '
      >
        {locate}
      </p>
    </div>
  )
}

