import { AboutMeType } from '@/consts/localDB';

type AboutCardProps = {
  data: AboutMeType;
} & React.HTMLAttributes<HTMLDivElement>;
export function AboutCard({ data }: AboutCardProps) {
  return (
    <div className='flex border mb-4 border-primary-200 pb-6 items-center lg:h-56 min-h-56 p-4 rounded-xl flex-wrap overflow-hidden shadow-lg'>
      <div className='flex items-center  lg:gap-8 md:gap-6 gap-2  h-full w-full lg:flex-row md:flex-row  flex-col'>
        {/* Icon */}
        <div>{data.icon}</div>

        {/* Content */}
        <div className='flex justify-start w-full'>
          <div className='flex flex-col gap-4 justify-between h-full'>
            <h5 className='text-primary-400 '>{data.title}</h5>

            <div className='flex gap-4 flex-wrap lg:h-[115px] md:h-[80px] items-center'>
              {data.description.map((description, index) => {
                return (
                  <div key={index}>
                    <p className='body-base font-bold'>{description.title}</p>

                    {description.description.map((desc, index) => (
                      <p className='body-base ml-2' key={index}>
                        {desc}
                      </p>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <></>
    </div>
  );
}
